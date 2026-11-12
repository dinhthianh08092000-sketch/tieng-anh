/* Chấm phát âm theo từng âm (GOP) từ đầu ra CTC của mô hình nhận âm vị.
   Biết trước câu mẫu -> chuỗi âm chuẩn (CMUdict) -> căn từng âm vào đoạn tiếng (Viterbi)
   -> so xác suất âm đúng với âm khác mạnh nhất trong đoạn đó. */

/* Âm chấp nhận được cho từng âm CMU, theo 2 bộ ký hiệu: espeak (392 âm) và TIMIT (39 âm) */
const ESP = {
  AA:['ɑː','ɑ','a','ɑːɹ'], AE:['æ','a'], AH0:['ə','ɐ','ɪ','ᵻ','ʌ'], AH:['ʌ','ə','ɐ'], AO:['ɔː','ɔ','ɑː','ɑ','ɔːɹ'],
  AW:['aʊ'], AY:['aɪ','aɪɚ'], EH:['ɛ','e','ɛɹ'], ER0:['ɚ','ɜː','ə'], ER:['ɜː','ɚ','ɜ'], EY:['eɪ','e'],
  IH:['ɪ','ᵻ','i','ɪɹ'], IY:['iː','i','iə'], OW:['oʊ','o','əʊ'], OY:['ɔɪ'], UH:['ʊ','ʊɹ'], UW:['uː','u'],
  B:['b'], CH:['tʃ'], D:['d','ɾ'], DH:['ð'], F:['f'], G:['ɡ','g'], HH:['h'], JH:['dʒ'], K:['k'], L:['l','əl'],
  M:['m'], N:['n'], NG:['ŋ'], P:['p'], R:['ɹ','ɚ','r','ɑːɹ','ɔːɹ','ɛɹ','ɪɹ','ʊɹ'], S:['s'], SH:['ʃ'],
  T:['t','ɾ','ʔ'], TH:['θ'], V:['v'], W:['w'], Y:['j'], Z:['z'], ZH:['ʒ']
};
const TIM = {
  AA:['ɑ'], AE:['æ'], AH0:['ə','ɪ'], AH:['ə'], AO:['ɑ'], AW:['aʊ'], AY:['aɪ'], EH:['ɛ'], ER0:['ɝ','ə'], ER:['ɝ'], EY:['eɪ'],
  IH:['ɪ','i'], IY:['i'], OW:['oʊ'], OY:['ɔɪ'], UH:['ʊ'], UW:['u'], B:['b'], CH:['ʧ'], D:['d','ɾ'], DH:['ð'], F:['f'], G:['g'],
  HH:['h'], JH:['ʤ'], K:['k'], L:['l'], M:['m'], N:['n'], NG:['ŋ'], P:['p'], R:['ɹ','ɝ'], S:['s'], SH:['ʃ'], T:['t','ɾ'], TH:['θ'],
  V:['v'], W:['w'], Y:['j'], Z:['z'], ZH:['ʃ']
};
/* Ký hiệu hiển thị cho người học (IPA kiểu Mỹ) */
export const SHOW = {AA:'ɑː',AE:'æ',AH0:'ə',AH:'ʌ',AO:'ɔː',AW:'aʊ',AY:'aɪ',EH:'e',ER0:'ɚ',ER:'ɝː',EY:'eɪ',IH:'ɪ',IY:'iː',OW:'oʊ',OY:'ɔɪ',UH:'ʊ',UW:'uː',
  B:'b',CH:'tʃ',D:'d',DH:'ð',F:'f',G:'ɡ',HH:'h',JH:'dʒ',K:'k',L:'l',M:'m',N:'n',NG:'ŋ',P:'p',R:'r',S:'s',SH:'ʃ',T:'t',TH:'θ',V:'v',W:'w',Y:'j',Z:'z',ZH:'ʒ'};

export const phKey = a => { const b = a.replace(/[0-9]/g, ''); return (b === 'AH' || b === 'ER') && /0$/.test(a) ? b + '0' : b; };

export function makeScorer(vocab, kind){
  const id2t = []; Object.entries(vocab).forEach(([t, i]) => id2t[i] = t);
  const V = id2t.length;
  const blank = kind === 'timit' ? vocab['[PAD]'] : vocab['<pad>'];
  const skip = new Set([blank, vocab['<s>'], vocab['</s>'], vocab['<unk>'], vocab['[UNK]'], vocab['|'], vocab[' ']].filter(x => x != null));
  const TAB = kind === 'timit' ? TIM : ESP;
  const setOf = k => (TAB[k] || []).map(t => vocab[t]).filter(x => x != null);
  const VOW = /^(AA|AE|AH|AO|AW|AY|EH|ER|EY|IH|IY|OW|OY|UH|UW)/;
  /* Cách đọc tự nhiên của người bản xứ không tính là lỗi:
     từ chức năng đọc lướt (to → tə, do → də, you → jə), "t" giữa hai nguyên âm đọc nhẹ thành "d" (sweetie, water),
     nguyên âm yếu bị nuốt (every → evri) */
  const WEAK = new Set(['a','an','the','to','do','you','your','for','of','at','and','can','from','some','was','were','her','him','them','as','or','but','that','are','am','is','he','she','we','me','be','been','has','have','had','would','could','should','does']);
  const extra = (target, i) => {
    const p = target[i], a = target[i-1], b = target[i+1], x = [];
    const wd = p.w.toLowerCase().replace(/[^a-z]/g, '');
    if (VOW.test(p.k) && WEAK.has(wd)) x.push('ə', 'ɐ', 'ɪ', 'ʊ', 'ɚ', 'æ', 'ɛ');
    /* Nguyên âm không nhấn được đọc lướt (excuse → ex/ix, family → fam'ly) */
    if (VOW.test(p.k) && p.s === '0') x.push('ə', 'ɐ', 'ɪ', 'ᵻ', 'e', 'ɛ');
    /* Biến thể Mỹ rất gần nhau: want /wʌnt/, up /ɑp/, look /lʌk/, our → "ar" */
    if (p.k === 'AA') x.push('ʌ');
    if (p.k === 'AH') x.push('ɑː', 'ɑ');
    if (p.k === 'UH') x.push('ʌ');
    if (p.k === 'AW' && wd === 'our') x.push('ɑː', 'ɑ', 'ɑːɹ');
    if (p.k === 'S' && (!b || b.wi !== p.wi)) x.push('z');
    if (p.k === 'T' && a && b && VOW.test(a.k) && (VOW.test(b.k) || b.k === 'ER0')) x.push('d');
    /* Nối âm với "you/your": meet you → mee-chu, did you → di-ju, miss you → mi-shu */
    const ys = b && b.k === 'Y' && b.wi !== p.wi, yp = p.k === 'Y' && a && a.wi !== p.wi;
    if (ys && (p.k === 'T' || p.k === 'D')) x.push('tʃ', 'dʒ');
    if (ys && (p.k === 'S' || p.k === 'Z')) x.push('ʃ', 'ʒ');
    if (yp && (a.k === 'T' || a.k === 'D')) x.push('tʃ', 'dʒ', 'ʃ', 'ʒ');
    if (yp && (a.k === 'S' || a.k === 'Z')) x.push('ʃ', 'ʒ');
    if (VOW.test(p.k) && /^(you|your)$/i.test(p.w)) x.push('oʊ', 'i', 'iː');
    if (p.k === 'ER0') x.push('ɹ');
    if (p.k === 'OW') x.push('oː');
    if (p.k === 'UH') x.push('ɚ', 'u');
    return x.map(t => vocab[t]).filter(v => v != null);
  };

  /* logits: Float32Array T*V ; target: [{w, wi, k}] (k = khóa âm CMU) */
  function score(logits, T, target){
    // log-softmax
    const lp = new Float32Array(T * V);
    for (let t = 0; t < T; t++){ let m = -1e9; for (let v = 0; v < V; v++) m = Math.max(m, logits[t*V+v]); let s = 0; for (let v = 0; v < V; v++) s += Math.exp(logits[t*V+v] - m); const z = m + Math.log(s); for (let v = 0; v < V; v++) lp[t*V+v] = logits[t*V+v] - z; }
    const sets = target.map((p, i) => [...new Set([...setOf(p.k), ...extra(target, i)])]);
    const em = (t, s) => { let m = -1e9; for (const v of sets[s]) m = Math.max(m, lp[t*V+v]); if (!sets[s].length) return -5; let a = 0; for (const v of sets[s]) a += Math.exp(lp[t*V+v] - m); return m + Math.log(a); };
    // CTC Viterbi: trạng thái 2i = khoảng trống trước âm i, 2i+1 = âm i, 2N = khoảng trống cuối
    const N = target.length, S = 2*N + 1, NEG = -1e18;
    let prev = new Float64Array(S).fill(NEG); const bp = new Int32Array(T * S);
    prev[0] = lp[blank]; if (N) prev[1] = em(0, 0);
    for (let t = 1; t < T; t++){
      const cur = new Float64Array(S).fill(NEG);
      for (let s = 0; s < S; s++){
        let best = prev[s], arg = s;
        if (s > 0 && prev[s-1] > best){ best = prev[s-1]; arg = s-1; }
        if (s > 1 && s % 2 === 1 && prev[s-2] > best){ best = prev[s-2]; arg = s-2; }
        if (best <= NEG) continue;
        cur[s] = best + (s % 2 ? em(t, (s-1)/2) : lp[t*V+blank]); bp[t*S+s] = arg;
      }
      prev = cur;
    }
    let s = N && prev[S-2] > prev[S-1] ? S-2 : S-1; const path = new Int32Array(T);
    for (let t = T-1; t >= 0; t--){ path[t] = s; s = bp[t*S+s]; }
    // Đoạn của mỗi âm: từ khung đầu tiên của âm đó đến trước khung đầu tiên của âm sau
    const first = new Array(N).fill(-1);
    for (let t = 0; t < T; t++) if (path[t] % 2 === 1){ const i = (path[t]-1)/2; if (first[i] < 0) first[i] = t; }
    for (let i = N-1; i >= 0; i--) if (first[i] < 0) first[i] = i < N-1 ? first[i+1] : T-1;
    return target.map((p, i) => {
      const a = Math.max(0, first[i] - 1), b = i < N-1 ? Math.max(first[i+1], first[i] + 1) : T;
      let pt = 0, po = 0, ov = -1;
      for (let t = a; t < b; t++){
        pt = Math.max(pt, Math.exp(em(t, i)));
        for (let v = 0; v < V; v++){ if (skip.has(v) || sets[i].includes(v)) continue; const q = Math.exp(lp[t*V+v]); if (q > po){ po = q; ov = v; } }
      }
      // âm của từ bên cạnh không tính là "âm khác" (ranh giới đoạn hay lẫn)
      const nb = [i-1, i+1].filter(j => target[j]).flatMap(j => sets[j]);
      if (nb.includes(ov)) po *= .3;
      const g = pt / (pt + po + 1e-6);
      return Object.assign({}, p, {pt, po, g, heard:ov >= 0 ? id2t[ov] : '', frames:b - a});
    });
  }
  /* Giải mã tham lam: máy nghe ra chuỗi âm gì */
  function greedy(logits, T){
    const out = []; let last = -1;
    for (let t = 0; t < T; t++){ let m = -1e9, a = 0; for (let v = 0; v < V; v++) if (logits[t*V+v] > m){ m = logits[t*V+v]; a = v; } if (a !== last && !skip.has(a)) out.push(id2t[a]); else if (a !== last && (id2t[a] === '|' || id2t[a] === ' ')) out.push(' '); last = a; }
    return out.join(' ').replace(/\s+/g, ' ').trim();
  }
  return {score, greedy};
}
/* Âm máy nghe được (ký hiệu espeak) -> âm CMU gần nhất, để nói "bạn đọc /θ/ thành /t/" */
export const REV = {};
Object.entries(ESP).forEach(([k, ts]) => ts.forEach(t => { if (!(t in REV)) REV[t] = k.replace(/0$/, ''); }));
Object.assign(REV, {'oː':'OW', 'ɜ':'ER', 'ɑ':'AA', 'ɔ':'AO', 'r':'R', 'x':'HH', 'β':'B', 'ɣ':'G', 'ɲ':'N', 'ʎ':'L', 'ç':'HH', 'y':'IY', 'ø':'ER', 'ɯ':'UW', 'ɨ':'IH'});
