/* Tiếng Anh Nhà Mình - bản demo 12 (bộ chấm phát âm trong máy, đồ thị ghi nhớ) */
'use strict';
/* ============ Biểu tượng ============ */
const P = {
 home:'<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>',
 path:'<circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M8 19h6a4 4 0 0 0 0-8h-4a4 4 0 0 1 0-8h6"/>',
 review:'<path d="M4 12a8 8 0 0 1 14-5.3L20 9M20 4v5h-5M20 12a8 8 0 0 1-14 5.3L4 15M4 20v-5h5"/>',
 chart:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
 book:'<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 21V5"/>',
 play:'<path d="M7 4v16l13-8z" fill="currentColor" stroke="none"/>',
 pause:'<rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor" stroke="none"/><rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor" stroke="none"/>',
 turtle:'<path d="M4 15c0-4 3.5-7 8-7s8 3 8 7z"/><path d="M20 15h2M6 15l-1 3M18 15l1 3M9 9l1 6M15 9l-1 6"/>',
 mic:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
 rec:'<circle cx="12" cy="12" r="6" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="9"/>',
 pen:'<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>',
 users:'<circle cx="8" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M2 20c0-3.5 2.7-6 6-6s6 2.5 6 6M14 20c.3-2.8 1.8-4.5 3.5-4.5S21 17 21.5 20"/>',
 swap:'<path d="M4 8h13l-3-3M20 16H7l3 3"/>',
 eye:'<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
 star:'<path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"/>',
 head:'<path d="M3 14v-2a9 9 0 0 1 18 0v2"/><rect x="3" y="14" width="5" height="7" rx="2"/><rect x="16" y="14" width="5" height="7" rx="2"/>',
 next:'<path d="M5 12h14M13 6l6 6-6 6"/>',
 x:'<path d="M6 6l12 12M18 6L6 18"/>',
 check:'<path d="M4 12l5 5L20 6"/>',
 lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
 sun:'<circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
 font:'<path d="M4 20l6-16 6 16M6.5 14h7M17 20l2.5-7 2.5 7M18 18h3"/>',
 down:'<path d="M12 4v12M6 10l6 6 6-6M4 20h16"/>',
 up:'<path d="M12 20V8M6 14l6-6 6 6M4 4h16"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',
 chev:'<path d="M6 9l6 6 6-6"/>',
 vi:'<text x="12" y="16.5" text-anchor="middle" font-size="11" font-weight="800" fill="currentColor" stroke="none" font-family="sans-serif">Vi</text><rect x="2.5" y="4.5" width="19" height="15" rx="4"/>',
 ear:'<path d="M7 9a5 5 0 0 1 10 0c0 3-3 4-3 7a3 3 0 0 1-6 0"/><path d="M10 9a2 2 0 0 1 4 0"/>',
 repeat:'<path d="M4 12a8 8 0 0 1 14-5.3L20 9M20 4v5h-5M20 12a8 8 0 0 1-14 5.3L4 15M4 20v-5h5"/>',
 skip:'<path d="M5 5l9 7-9 7zM18 5v14"/>',
 cal:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
 trash:'<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
 search:'<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5"/>',
 edit:'<path d="M4 20h4L19 9l-4-4L4 16z"/>',
 stop:'<rect x="6" y="6" width="12" height="12" rx="2.5" fill="currentColor" stroke="none"/>'
};
const ico = n => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n]}</svg>`;
const ib = (n, tip, cls = '', attrs = '') => `<button class="ibtn ${cls}" aria-label="${tip}" data-tip="${tip}" ${attrs}>${ico(n)}</button>`;

/* ============ Dữ liệu & trạng thái ============ */
const D = window.APP_DATA;
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const DAY = 864e5, MIN = 6e4;
const KEY = 'tanm-v2';
const avg = a => a.length ? Math.round(a.reduce((x, y) => x + y, 0) / a.length) : null;
function defState(){ return {xp:0, streak:{n:0,best:0,last:null,days:{}}, life:{}, ipa:{}, cards:{}, star:{}, miss:{}, gram:{}, voc:{}, saved:[], diary:[], spoken:{}, did:{}, weak:{},
  set:{font:'M', theme:'', name:'Tiếng Anh Nhà Mình', sub:'Hành trình của mình', slots:{sang:'06:00', chieu:'15:00', toi:'21:00'}, mic:'auto', calDone:false}}; }
let S; try{ const raw = JSON.parse(localStorage.getItem(KEY)) || {}; S = Object.assign(defState(), raw); S.set = Object.assign(defState().set, raw.set || {}); }catch{ S = defState(); }
function save(){ try{ localStorage.setItem(KEY, JSON.stringify(S)); }catch{} }

/* Bài học nói về chính bạn: bản trên mạng dùng tên "Mai", nghề y tá, nơi làm bệnh viện.
   Bạn nhập tên, nghề của mình ở Cài đặt; app thay vào chữ trong bài (chỉ lưu trong máy, không gửi đi đâu). */
const noMark = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D');
function personalize(){
  const me = S.set.me; if (!me) return;
  const art = w => /^[aeiou]/i.test(w) ? 'an' : 'a';
  const enR = [], viR = [];
  if (me.name){ enR.push([/\bMai\b/g, noMark(me.name)]); viR.push([/\bMai\b/g, me.name]); }
  if (me.job){ enR.push([/\b(a|an) nurse\b/g, art(me.job) + ' ' + me.job], [/\bnurse\b/g, me.job]); }
  const lc = x => x[0].toLowerCase() + x.slice(1);
  if (me.jobVi) viR.push([/y tá/g, lc(me.jobVi)]);
  if (me.place){ enR.push([/\b(a|an) hospital\b/g, art(me.place) + ' ' + me.place], [/\bhospital\b/g, me.place]); }
  if (me.placeVi) viR.push([/bệnh viện/g, lc(me.placeVi)]);
  const E = t => enR.reduce((s, [a, b]) => s.replace(a, b), t), V = t => viR.reduce((s, [a, b]) => s.replace(a, b), t);
  /* Câu đã đổi chữ thì bỏ file giọng mẫu (vẫn đọc "Mai", "nurse"), đọc bằng giọng máy cho khớp chữ trên màn hình */
  const P = (o, f, af) => { const n = E(o[f]); if (n !== o[f]){ o[f] = n; o[af] = null; o.pz = 1; } };
  D.life.forEach(w => { w.weekDiary = E(w.weekDiary); w.talk = V(w.talk); w.days.forEach(d => {
    d.cards.forEach(c => { P(c, 'en', 'a'); c.vi = V(c.vi); });
    d.patterns.forEach(p => { p.frame = E(p.frame); p.fills.forEach(f => { f.w = E(f.w); P(f, 'en', 'a'); }); });
    d.dialogue.forEach(l => { P(l, 'en', 'a'); l.vi = V(l.vi); });
    d.ask.forEach(a => { a.q = E(a.q); P(a, 'ans', 'aa'); });
    d.today = E(d.today); d.diary.frame = E(d.diary.frame); d.diary.hints = d.diary.hints.map(E);
  }); });
  (D.ipaExtra || []).forEach(x => x.items.forEach(i => i.w = E(i.w)));
}
if (D.public) personalize();
const meForm = () => { const m = S.set.me || {}; return `<p class="sm muted">Bài học sẽ dùng tên và nghề của bạn. Câu có thông tin của bạn được đọc bằng giọng máy cho khớp chữ (bật Giọng tự nhiên ở Cài đặt để nghe hay hơn). Chỉ lưu trong máy này.</p>
  <div class="field"><label for="mn">Tên của bạn</label><input type="text" id="mn" placeholder="Ví dụ: Hoa" value="${esc(m.name || '')}"></div>
  <div class="row" style="flex-wrap:nowrap"><div class="field" style="flex:1"><label for="mj">Nghề (tiếng Anh)</label><input type="text" id="mj" placeholder="teacher" value="${esc(m.job || '')}"></div><div class="field" style="flex:1"><label for="mjv">Nghề (tiếng Việt)</label><input type="text" id="mjv" placeholder="giáo viên" value="${esc(m.jobVi || '')}"></div></div>
  <div class="row" style="flex-wrap:nowrap"><div class="field" style="flex:1"><label for="mp">Nơi làm (tiếng Anh)</label><input type="text" id="mp" placeholder="school" value="${esc(m.place || '')}"></div><div class="field" style="flex:1"><label for="mpv">Nơi làm (tiếng Việt)</label><input type="text" id="mpv" placeholder="trường học" value="${esc(m.placeVi || '')}"></div></div>
  <button class="btn block" id="msave">${ico('check')} Lưu và áp dụng</button>`; };
function bindMe(root){
  const btn = root.querySelector('#msave');
  btn.onclick = async () => {
    const g = id => root.querySelector(id).value.trim(), lc = x => x ? x[0].toLowerCase() + x.slice(1) : x;
    const me = {name:g('#mn'), job:g('#mj').toLowerCase(), jobVi:lc(g('#mjv')), place:g('#mp').toLowerCase(), placeVi:lc(g('#mpv'))};
    /* Kiểm tra chính tả nghề và nơi làm bằng từ điển trong app */
    if (!btn.dataset.sure){
      const bad = await meTypos(me);
      if (bad.length){
        btn.dataset.sure = 1; root.querySelector('#mwarn')?.remove();
        btn.insertAdjacentHTML('beforebegin', `<div class="note sm" id="mwarn">${bad.map(([w, f, k]) => `<p>Không có từ <b>"${esc(w)}"</b> trong từ điển.${k ? ` Có phải <b>${esc(k)}</b>? <button class="btn ghost" data-fx="${f}|${esc(w)}|${esc(k)}">Sửa thành ${esc(k)}</button>` : ''}</p>`).join('')}<p class="muted">Nếu bạn chắc chắn đã viết đúng, bấm Lưu lần nữa.</p></div>`);
        root.querySelectorAll('[data-fx]').forEach(b => b.onclick = () => { const [f, w, k] = b.dataset.fx.split('|'), inp = root.querySelector(f); inp.value = inp.value.replace(w, k); b.closest('p').remove(); });
        return;
      }
    }
    S.set.me = me; S.set.meOk = true; save(); location.reload();
  };
}
function ymd(t = Date.now()){ const d = new Date(t); return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); }
function dayStart(t = Date.now()){ const d = new Date(t); d.setHours(0,0,0,0); return +d; }
const shuffle = a => a.map(x => [Math.random(), x]).sort((p, q) => p[0] - q[0]).map(x => x[1]);

/* Đời sống: mỗi tuần 7 ngày (T2-T6 bài mới, T7 ôn + kiểm tra, CN nói tự do + nhật ký tuần) */
const WEEKS = D.life;
const SCHED = [];
WEEKS.forEach(w => {
  w.days.forEach((d, i) => { Object.assign(d, {w:w.w, wt:w.title, grammar:w.grammar}); SCHED.push({key:d.id, kind:'day', d, w, dn:i+1}); });
  SCHED.push({key:`w${w.w}t7`, kind:'t7', w, dn:6, topic:'Ôn cả tuần và kiểm tra'});
  SCHED.push({key:`w${w.w}cn`, kind:'cn', w, dn:7, topic:'Nói tự do và nhật ký tuần'});
});
SCHED.forEach(x => { if (x.kind === 'day') x.topic = x.d.topic; });
const lifeDone = k => { const r = S.life[k]; return r && r.am != null && r.pm != null && (!k.endsWith('t7') || r.pm >= 85); };
const nextSched = () => SCHED.find(x => !lifeDone(x.key));

/* Phát âm: chặng 1 nguyên âm, chặng 2 phụ âm (theo cặp), chặng 3-5 nâng cao */
const IPAL = [];
for (let i = 0; i < D.ipa.length; i += 2) IPAL.push({id:'p' + (i/2 + 1), kind:'sound', stage:i < 20 ? 1 : 2, sounds:D.ipa.slice(i, i + 2)});
(D.ipaExtra || []).forEach(x => IPAL.push(Object.assign({kind:'extra'}, x)));
IPAL.forEach((l, k) => l.n = k + 1);
const STAGE_NAMES = {1:'Nguyên âm', 2:'Phụ âm', 3:'Âm cuối và cụm phụ âm', 4:'Trọng âm', 5:'Nối âm và ngữ điệu'};
const ipaTitle = l => l.kind === 'sound' ? '/' + l.sounds.map(s => s.sym).join('/  /') + '/' : l.title;
const nextIpa = () => IPAL.find(l => S.ipa[l.id] == null);

/* Thẻ câu */
const CARDS = {};
WEEKS.forEach(w => w.days.forEach(d => d.cards.forEach(c => CARDS[c.id] = Object.assign(c, {day:d.id, src:'Đời sống · Tuần ' + w.w}))));
const indexSaved = () => S.saved.forEach(c => { if (c.id && !CARDS[c.id]) CARDS[c.id] = c; });
indexSaved();

const STAGES = [['Hạt giống','s1',0],['Nảy mầm','s2',300],['Cây non','s3',1200],['Ra lá','s4',3000],['Ra hoa','s5',6000],['Kết trái','s6',12000],['Cây lớn','s7',25000]];
const stageOf = xp => STAGES.reduce((i, s, k) => xp >= s[2] ? k : i, 0);

/* ============ Chuỗi ngày (luật chặt), XP, việc đã làm hôm nay ============ */
function checkStreak(){ const st = S.streak; if (st.last && (dayStart() - dayStart(new Date(st.last + 'T00:00'))) / DAY > 1){ st.n = 0; save(); } }
function water(){
  const st = S.streak, t = ymd(); if (st.last === t) return;
  st.n = st.last === ymd(Date.now() - DAY) ? st.n + 1 : 1; st.best = Math.max(st.best, st.n); st.last = t; st.days[t] = 1; save();
  toast('Đã tưới cây hôm nay! Chuỗi ' + st.n + ' ngày');
}
function addXP(n){ const b = stageOf(S.xp); S.xp += n; save(); hdr(); const a = stageOf(S.xp); if (a > b) setTimeout(() => celebrate(a), 500); }
function spoke(){ const t = ymd(); S.spoken[t] = (S.spoken[t] || 0) + 1; addXP(1); }
function did(k){ const t = ymd(); (S.did[t] ||= {})[k] = true; save(); }
const didToday = k => !!(S.did[ymd()] || {})[k];
function hdr(){
  $('#hdrStreak').textContent = S.streak.n; $('#hdrXp').textContent = S.xp;
  $('#appName').textContent = S.set.name || 'Tiếng Anh Nhà Mình'; $('#appSub').textContent = (S.set.sub || '').toUpperCase();
  document.title = S.set.name || 'Tiếng Anh Nhà Mình';
}

/* ============ Âm thanh ============ */
const player = new Audio();
let segStop = null;
/* Câu bạn tự thêm chưa có file mp3: đọc bằng giọng tiếng Anh có sẵn trong máy */
const TTS = window.speechSynthesis;
let enVoice = null;
function pickVoice(){ const vs = TTS?.getVoices() || [], en = vs.filter(v => /^en[-_]US/i.test(v.lang)); enVoice = en.find(v => /natural|online|jenny|aria|google/i.test(v.name)) || en[0] || vs.find(v => /^en/i.test(v.lang)) || null; }
if (TTS){ pickVoice(); TTS.onvoiceschanged = pickVoice; }
function tts(text, rate = 1){
  return new Promise(res => {
    try{ player.pause(); }catch{}
    if (!TTS || !text){ res(false); return; }
    TTS.cancel(); const u = new SpeechSynthesisUtterance(text); u.lang = 'en-US'; if (enVoice) u.voice = enVoice; u.rate = .9 * rate;
    const t = setTimeout(() => res(false), 4000 + text.length * 250);
    u.onend = () => { clearTimeout(t); res(true); }; u.onerror = () => { clearTimeout(t); res(false); };
    TTS.speak(u);
  });
}
function hush(){ try{ player.pause(); }catch{} try{ TTS?.cancel(); }catch{} }
function play(src, rate = 1, t0 = null, t1 = null){
  return new Promise(res => {
    hush();
    if (segStop){ player.removeEventListener('timeupdate', segStop); segStop = null; }
    if (!src){ res(false); return; }
    const go = () => {
      player.playbackRate = rate; player.preservesPitch = true;
      if (t0 != null) player.currentTime = t0;
      if (t1 != null){ segStop = () => { if (player.currentTime >= t1){ player.pause(); player.removeEventListener('timeupdate', segStop); segStop = null; res(true); } }; player.addEventListener('timeupdate', segStop); }
      player.onended = () => res(true); player.onerror = () => res(false);
      player.play().catch(() => res(false));
    };
    if (player.src !== new URL(src, location.href).href){ player.src = src; player.onloadedmetadata = () => { player.onloadedmetadata = null; go(); }; player.onerror = () => res(false); player.load(); }
    else go();
  });
}
/* Một câu có thể là file mp3 riêng (a) hoặc một đoạn trong file gốc (url, t0, t1) */
function playItem(it, rate = 1){
  if (!it) return Promise.resolve(false);
  if (it.url) return play(it.url, rate, it.t0, it.t1);
  if (!it.a) return voiceUrl(it.nk || 'p:' + it.en).then(u => u ? play(u, rate) : tts(it.en, rate), () => tts(it.en, rate));
  const a = Array.isArray(it.a) ? it.a[Math.floor(Math.random() * it.a.length)] : it.a;
  return play(a, rate);
}
const wait = ms => new Promise(r => setTimeout(r, ms));

/* ============ Giải mã âm thanh về 16 kHz cho bộ nhận giọng ============ */
async function decode16k(blob){
  const buf = await blob.arrayBuffer();
  const Ctx = window.AudioContext || window.webkitAudioContext; const ctx = new Ctx();
  let ab; try{ ab = await ctx.decodeAudioData(buf); } finally { ctx.close(); }
  const off = new OfflineAudioContext(1, Math.max(1, Math.ceil(ab.duration * 16000)), 16000);
  const src = off.createBufferSource(); src.buffer = ab; src.connect(off.destination); src.start();
  const r = await off.startRendering();
  return {pcm:r.getChannelData(0), dur:ab.duration};
}
function aiReady(){ return window.AI ? Promise.resolve(window.AI) : new Promise((res, rej) => { const t = setTimeout(() => rej(new Error('Không tải được bộ nhận giọng. Kiểm tra mạng (chỉ cần mạng ở lần đầu).')), 30000); window.addEventListener('ai-ready', () => { clearTimeout(t); res(window.AI); }, {once:true}); }); }

/* ============ Micro: Google (Chrome) hoặc bộ nhận giọng trong máy ============ */
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
let REC = null, lastClip = null;
const micMode = () => S.set.mic === 'auto' ? (S.set.micAuto || (SR ? 'google' : 'local')) : S.set.mic;
/* Google (Chrome): nghe liên tục đến khi bạn bấm dừng. Android hay tự ngắt khi bạn ngập ngừng: app tự nối lại. */
/* Chrome trên Android trả kết quả "cộng dồn": I / I'm / I'm at / I'm at work... Nối hết vào sẽ thành câu lặp.
   Đoạn sau lặp lại phần đầu của đoạn trước (từ 60% số từ trở lên) thì chỉ giữ đoạn đầy đủ hơn. */
const wz = t => t.split(/\s+/).flatMap(norm);
function mergeSegs(segs){
  const out = [];
  segs.forEach(x => {
    if (!x?.t) return;
    const p = out[out.length - 1];
    if (p){
      const a = wz(p.t), b = wz(x.t), n = Math.min(a.length, b.length);
      let same = 0; for (let k = 0; k < n; k++) if (a[k] === b[k]) same++;
      if (n && same >= Math.max(1, Math.ceil(n * .6))){ if (b.length >= a.length) out[out.length - 1] = x; return; }
    }
    out.push(x);
  });
  return out;
}
function listenGoogle(onPartial, onVoice){
  return new Promise(res => {
    let done = false, err = null, r = null, live = '', voiced = false; const segs = [], t0 = Date.now();
    REC = {stop:() => { done = true; try{ r?.stop(); }catch{} }};
    const all = () => mergeSegs(segs).map(x => x.t).join(' ');
    const start = () => {
      r = new SR(); r.lang = 'en-US'; r.interimResults = true; r.maxAlternatives = 5; r.continuous = true;
      let base = segs.length;
      r.onresult = e => {
        live = '';
        for (let i = e.resultIndex; i < e.results.length; i++){
          const x = e.results[i];
          if (x.isFinal){ const alts = []; for (let k = 0; k < x.length; k++) alts.push(x[k].transcript.trim()); segs[base + i] = {t:alts[0], alts}; }
          else live += x[0].transcript;
        }
        if (!voiced){ voiced = true; onVoice?.(); }
        onPartial?.(mergeSegs([...segs, {t:live.trim()}]).map(x => x.t).join(' ').trim());
      };
      r.onerror = e => { if (!['no-speech', 'aborted'].includes(e.error)) err = e.error; if (['not-allowed', 'audio-capture', 'network', 'service-not-allowed', 'language-not-supported'].includes(e.error)) done = true; };
      r.onend = () => {
        if (live.trim()){ segs.push({t:live.trim(), alts:[live.trim()]}); live = ''; }
        for (let i = segs.length - 1; i >= 0; i--) if (!segs[i]) segs.splice(i, 1);
        if (!done && Date.now() - t0 < 90000){ try{ start(); return; }catch{} }
        REC = null;
        const ms = mergeSegs(segs), text = ms.map(x => x.t).join(' ').trim(), alts = [];
        ms.forEach((x, i) => x.alts.slice(1).forEach(a => alts.push(ms.map((y, j) => j === i ? a : y.t).join(' '))));
        res({text, alts, err:text ? null : err});
      };
      try{ r.start(); }catch{ REC = null; res({text:all(), alts:[], err:'busy'}); }
    };
    start();
  });
}
/* Ghi âm đến khi bạn bấm dừng (tối đa maxMs), trả về file âm thanh */
async function recordClip({maxMs = 90000, onLevel, onVoice} = {}){
  const stream = await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true, noiseSuppression:true}});
  const mr = new MediaRecorder(stream); const parts = [];
  const Ctx = window.AudioContext || window.webkitAudioContext; const ctx = new Ctx();
  const an = ctx.createAnalyser(); an.fftSize = 1024; ctx.createMediaStreamSource(stream).connect(an);
  const data = new Float32Array(an.fftSize); let voiced = false;
  return new Promise(res => {
    let stopped = false;
    const stop = () => { if (stopped) return; stopped = true; try{ mr.stop(); }catch{} };
    REC = {stop};
    mr.ondataavailable = e => parts.push(e.data);
    mr.onstop = () => { stream.getTracks().forEach(t => t.stop()); ctx.close(); REC = null; res(new Blob(parts, {type:mr.mimeType || 'audio/webm'})); };
    mr.start();
    const t0 = Date.now();
    const tick = () => {
      if (stopped) return;
      an.getFloatTimeDomainData(data); let s = 0; for (const v of data) s += v*v; const rms = Math.sqrt(s / data.length);
      onLevel?.(rms);
      if (!voiced && rms > .03){ voiced = true; onVoice?.(); }
      if (Date.now() - t0 > maxMs) return stop();
      requestAnimationFrame(tick);
    };
    tick();
  });
}
/* Trong máy: Whisper base.en (chính xác hơn bản tiny trước đây) */
async function listenLocal(onPartial, onVoice){
  let blob;
  try{ blob = await recordClip({onVoice}); }catch{ return {text:'', err:'not-allowed'}; }
  lastClip = URL.createObjectURL(blob);
  onPartial?.('Đang nhận dạng giọng nói...');
  try{
    const AI = await aiReady(); const {pcm} = await decode16k(blob);
    const r = await AI.asr(pcm, {model:'Xenova/whisper-base.en', onProg:p => { if (p.status === 'progress' && p.file?.endsWith('.onnx')) onPartial?.(`Tải bộ nhận giọng lần đầu: ${Math.round(p.progress || 0)}%`); }});
    return {text:(r.text || '').replace(/\[[^\]]*\]|\([^)]*\)/g, '').trim(), alts:[], err:null};
  }catch(e){ return {text:'', err:'local', msg:e.message}; }
}
async function listen(onPartial, onVoice){
  hush();
  if (micMode() === 'google' && SR){
    const r = await listenGoogle(onPartial, onVoice);
    if (['network','service-not-allowed','language-not-supported'].includes(r.err) && S.set.mic === 'auto'){
      S.set.micAuto = 'local'; save(); onPartial?.('Chuyển sang bộ nhận giọng trong máy, nói lại nhé...');
      return listenLocal(onPartial, onVoice);
    }
    return r;
  }
  return listenLocal(onPartial, onVoice);
}
const stopListen = () => { try{ REC?.stop(); }catch{} };
const MICERR = {'not-allowed':'Chưa cho phép micro. Bấm biểu tượng ổ khóa cạnh thanh địa chỉ để cho phép.', 'no-speech':'Chưa nghe thấy gì. Nói to và gần micro hơn nhé.', network:'Micro cần mạng.', 'audio-capture':'Không tìm thấy micro.', local:'Bộ nhận giọng trong máy chưa chạy được. Kiểm tra mạng ở lần đầu.', busy:'Micro đang bận, thử lại.'};

/* ============ Chấm điểm ============ */
const EXP = {"i'm":"i am","you're":"you are","we're":"we are","they're":"they are","it's":"it is","that's":"that is","what's":"what is","let's":"let us","don't":"do not","can't":"can not","cannot":"can not","isn't":"is not","i'd":"i would","name's":"name is","how's":"how is","he's":"he is","she's":"she is","there's":"there is","here's":"here is","okay":"ok","mr":"mister","ms":"miss"};
const NUM = {one:'1',two:'2',three:'3',four:'4',five:'5',six:'6',seven:'7',eight:'8',nine:'9',ten:'10'};
/* Máy nghe ra chữ đồng âm (two/too/to, four/for, write/right...) hay cách viết khác (sweety/sweetie) thì vẫn tính đúng */
const SAME = {};
[['to','too','two','2'],['for','four','4'],['one','won','1'],['eight','ate','8'],['right','write'],['there','their'],['here','hear'],['no','know'],['see','sea'],['by','buy','bye'],['sun','son'],['meet','meat'],['week','weak'],['wear','where'],['flower','flour'],['whole','hole'],['hi','high'],['new','knew'],['sweetie','sweety'],['mom','mum','mam','mama','mommy'],['pajamas','pyjamas'],['okay','ok'],['grey','gray'],['color','colour'],['t','tea','tee'],['bye-bye','byebye','bye']].forEach(g => g.forEach(w => SAME[w] = g[0]));
function norm(w){ let x = w.toLowerCase().replace(/[’‘]/g,"'").replace(/[^a-z0-9']/g,''); if (!x) return []; if (EXP[x]) return EXP[x].split(' ').map(y => SAME[y] || y); if (NUM[x]) x = NUM[x]; x = x.replace(/'/g,''); return [SAME[x] || x]; }
function scoreText(target, said){
  const disp = target.replace(/-/g,' - ').split(/\s+/).filter(w => w && w !== '-');
  const tt = []; disp.forEach((w, i) => norm(w).forEach(n => tt.push({n, i})));
  const ss = (said || '').replace(/-/g,' ').split(/\s+/).flatMap(norm);
  const m = tt.length, n = ss.length;
  const L = Array.from({length:m+1}, () => new Array(n+1).fill(0));
  for (let i = m-1; i >= 0; i--) for (let j = n-1; j >= 0; j--) L[i][j] = tt[i].n === ss[j] ? L[i+1][j+1]+1 : Math.max(L[i+1][j], L[i][j+1]);
  const ok = new Array(m).fill(false); let i = 0, j = 0;
  while (i < m && j < n){ if (tt[i].n === ss[j]){ ok[i] = true; i++; j++; } else if (L[i+1][j] >= L[i][j+1]) i++; else j++; }
  const matched = ok.filter(Boolean).length, extra = Math.max(0, n - matched - 1);
  return {score:m ? Math.max(0, Math.round(100*matched/m) - extra*4) : 0, words:disp.map((w, k) => ({w, ok:tt.every((t, x) => t.i !== k || ok[x])}))};
}
function bestScore(target, res){ let b = scoreText(target, res.text); (res.alts || []).forEach(a => { const s = scoreText(target, a); if (s.score > b.score) b = s; }); return b; }
const TIPS = [[/th/,'θ / ð','Đặt đầu lưỡi giữa hai hàm răng rồi thổi hơi.'],[/sh/,'ʃ','Chu môi ra trước, đẩy hơi "sh" dày.'],[/ch/,'tʃ','Chu môi, bật mạnh "t" nối "sh".'],[/^j|ge$/,'dʒ','Như "ch" nhưng rung cổ họng.'],[/^r|[^aeiou]r/,'r','Cong lưỡi, không chạm vòm miệng, môi hơi tròn.'],[/(s|es)$/,'s / z','Giữ tiếng xì hoặc tiếng "zz" ở cuối từ.'],[/(t|te)$/,'t','Chặn lưỡi sau răng trên, bật nhẹ ở cuối.'],[/(d|ed)$/,'d','Chặn lưỡi rồi bật nhẹ có rung ở cuối.'],[/(k|ck|ke)$/,'k','Chặn cuống lưỡi, bật nhẹ ở cuối.'],[/(l|le)$/,'l','Đầu lưỡi chạm sau răng trên và giữ lại.'],[/v/,'v','Răng trên chạm môi dưới, rung.']];
function tipsFor(words){ return words.map(w => { const lw = w.toLowerCase().replace(/[^a-z]/g,''); const t = TIPS.find(([re]) => re.test(lw)); return t ? {w:w.replace(/[^A-Za-z']/g,''), s:t[1], t:t[2]} : null; }).filter(Boolean).slice(0, 3); }
function noteWeak(words){ tipsFor(words).forEach(t => S.weak[t.s] = (S.weak[t.s] || 0) + 1); save(); }
/* ============ Lịch ôn + bậc thang phản xạ ============ */
const TMR = () => dayStart() + DAY + 3*3600e3;   // sáng mai
function learn(id){ if (!S.cards[id]) S.cards[id] = {i:0, e:2.5, r:0, l:0, lv:2, d:TMR(), ok4:[], t0:Date.now(), lt:Date.now()}; }
/* Đọc 3 lần chưa đạt: hẹn câu này sáng mai (không đổi khoảng cách, phần đó do review() làm) */
function soonCard(id){ if (!id || !CARDS[id]) return false; learn(id); const c = S.cards[id]; c.d = Math.min(c.d, TMR()); save(); return true; }
function review(id, score, fast){
  learn(id); const c = S.cards[id], now = Date.now(); c.lt = now;
  /* Chưa đạt: không quay về đầu. Khoảng cách rút còn một nửa (ít nhất 1 ngày), hẹn ôn lại từ sáng mai */
  if (score < 85){ c.l = (c.l || 0) + 1; c.e = Math.max(1.3, c.e - .15); c.lv = Math.max(2, c.lv - 1); c.i = c.i >= 2 ? Math.round(c.i / 2) : 1; c.d = dayStart() + c.i*DAY + 3*3600e3; }
  else {
    if (c.lv < 4 && fast) c.lv++;
    if (c.lv === 4 && fast){ const t = ymd(); if (!c.ok4.includes(t)) c.ok4.push(t); }
    const ni = c.r === 0 ? 1 : c.r === 1 ? 3 : Math.round(Math.max(1, c.i) * c.e * (fast ? 1.15 : 1));
    c.i = ni; c.r++; c.d = dayStart() + ni*DAY + 3*3600e3;
  }
  save();
}
const isKnown = id => (S.cards[id]?.ok4 || []).length >= 2;
/* Đồ thị lãng quên: sau mỗi lần ôn, độ nhớ giảm dần theo thời gian, R = 0,9^(t / khoảng cách).
   Lịch đặt để bạn ôn đúng lúc độ nhớ còn khoảng 90%: 1 ngày → 3 ngày → ~7 → ~18 → ~45 ngày...
   Mỗi lần nhớ được, khoảng cách dài ra (trí nhớ bền hơn). Chưa đạt thì khoảng cách rút còn một nửa, hẹn từ ngày mai. */
const lastT = c => c.lt || (c.d - (c.i ? c.i * DAY : DAY));
const recall = (c, now = Date.now()) => Math.pow(.9, Math.max(0, now - lastT(c)) / Math.max(10 * MIN, c.d - lastT(c)));
const MEMS = [['mới', 'Chưa học'], ['mới học', 'Mới học, trí nhớ ngắn hạn'], ['củng cố', 'Đang củng cố (khoảng cách 1-3 ngày)'], ['ổn định', 'Đang ổn định (khoảng cách 4-21 ngày)'], ['nhớ lâu', 'Nhớ lâu (khoảng cách trên 3 tuần)']];
const memK = c => !c ? 0 : !c.r || c.i < 1 ? 1 : c.i <= 3 ? 2 : c.i <= 21 ? 3 : 4;
const dur = ms => ms >= DAY ? Math.round(ms / DAY) + ' ngày' : ms >= 3600e3 ? Math.round(ms / 3600e3) + ' giờ' : Math.max(1, Math.round(ms / MIN)) + ' phút';
function memInfo(id, now = Date.now()){
  const c = S.cards[id]; if (!c) return {k:0, tag:'mới', line:'Chưa học'};
  const k = memK(c), R = Math.round(recall(c, now) * 100), dn = Math.round((dayStart(now) - dayStart(c.t0 || lastT(c))) / DAY) + 1;
  const nx = c.d <= now ? (now - c.d >= DAY ? `quá hạn ${dur(now - c.d)}` : 'đến hạn ôn') : `ôn lại sau ${dur(c.d - now)}`;
  return {k, R, dn, tag:MEMS[k][0], line:`${MEMS[k][1]} · học được ${dn} ngày · đã ôn ${c.r} lần · còn nhớ ~${R}% · ${nx}`};
}
/* Câu đến hạn: câu nhớ yếu nhất (độ nhớ thấp nhất trên đồ thị) lên trước */
const due = () => Object.keys(S.cards).filter(id => CARDS[id] && S.cards[id].d <= Date.now()).sort((a, b) => recall(S.cards[a]) - recall(S.cards[b]));
/* Thẻ cũ chưa ghi ngày bắt đầu học: lấy ngày học bài Đời sống, ngày thêm vào sổ, hoặc ước tính */
function fixCardDates(){
  const t0 = {};
  SCHED.forEach(x => { const at = S.life[x.key]?.at; if (x.kind === 'day' && at) x.d.cards.forEach(c => t0[c.id] = +new Date(at + 'T08:00')); });
  S.saved.forEach(c => { if (c.at) t0[c.id] = c.at; });
  Object.entries(S.cards).forEach(([id, c]) => { if (!c.t0) c.t0 = Math.min(t0[id] || lastT(c), lastT(c)); });
}
const forgotten = () => Object.keys(S.cards).filter(id => CARDS[id] && (S.cards[id].l || 0) >= 2);

/* ============ Tiện ích giao diện ============ */
function toast(t){ const d = document.createElement('div'); d.className = 'toast'; d.textContent = t; document.body.appendChild(d); setTimeout(() => d.remove(), 2800); }
let tipEl = null, tipT = null;
document.addEventListener('pointerdown', e => { const b = e.target.closest('[data-tip]'); if (!b) return; clearTimeout(tipT); tipT = setTimeout(() => { tipEl?.remove(); tipEl = document.createElement('div'); tipEl.className = 'tip'; tipEl.textContent = b.dataset.tip; document.body.appendChild(tipEl); const r = b.getBoundingClientRect(); tipEl.style.left = Math.max(8, Math.min(innerWidth - tipEl.offsetWidth - 8, r.left + r.width/2 - tipEl.offsetWidth/2)) + 'px'; tipEl.style.top = Math.max(8, r.top - tipEl.offsetHeight - 8) + 'px'; }, 450); });
['pointerup','pointercancel','scroll'].forEach(ev => document.addEventListener(ev, () => { clearTimeout(tipT); setTimeout(() => { tipEl?.remove(); tipEl = null; }, 900); }, true));
document.addEventListener('click', e => { const m = e.target.closest('[data-mine]'); if (m && lastClip) play(lastClip); });
function applySet(){ const r = document.documentElement; r.dataset.font = S.set.font || 'M'; if (S.set.theme) r.dataset.theme = S.set.theme; else delete r.dataset.theme; }
const sec = html => { const d = document.createElement('section'); d.className = 'card'; d.innerHTML = html; return d; };
/* Khung xổ ra: chỉ hiện tiêu đề, bấm mới mở. Cùng "name" thì mở cái này tự đóng cái kia. App nhớ khung nào bạn đang mở. */
const OPENG = {};
document.addEventListener('toggle', e => { const d = e.target; if (d.dataset?.g) OPENG[d.dataset.g] = d.open; }, true);
function fold(id, {title, sub = '', badge = '', icon = '', open = false, name = '', body = '', cls = ''}){
  const o = OPENG[id] ?? open;
  return `<details class="fold ${cls}" data-g="${id}" ${name ? `name="${name}"` : ''} ${o ? 'open' : ''}><summary>${icon ? `<span class="fi">${icon}</span>` : ''}<span class="ft"><b>${title}</b>${sub ? `<span class="xs muted">${sub}</span>` : ''}</span>${badge !== '' ? `<span class="n">${badge}</span>` : ''}<span class="chev">${ico('chev')}</span></summary><div class="fb">${body}</div></details>`;
}
const foldEl = (id, o) => { const t = document.createElement('div'); t.innerHTML = fold(id, o); return t.firstElementChild; };
/* Một dòng bài học trong khung: vòng trạng thái, tên bài, điểm */
function lrow(k, {n = '', t, s = '', st = '', right = '', icon = ''}){
  return `<button class="lrow ${st}" data-k="${k}"><span class="d">${st.includes('done') ? ico('check') : st.includes('lock') ? ico('lock') : icon ? ico(icon) : n}</span><span class="ft"><b>${t}</b>${s ? `<span class="xs muted">${s}</span>` : ''}</span>${right}</button>`;
}
const pctTag = n => n != null ? `<span class="n">${n}%</span>` : '';

/* ============ Khung giờ ============ */
const SLOTS = [['sang','Buổi sáng','sun'],['chieu','Buổi chiều','head'],['toi','Buổi tối','star']];
const minsOf = hm => { const [h, m] = (hm || '0:0').split(':').map(Number); return h*60 + m; };
function curSlot(){ const n = new Date(), m = n.getHours()*60 + n.getMinutes(); const s = S.set.slots; if (m >= minsOf(s.toi)) return 'toi'; if (m >= minsOf(s.chieu)) return 'chieu'; if (m >= minsOf(s.sang)) return 'sang'; return 'toi'; }
function slotTasks(k){
  const L = nextSched(), I = nextIpa(), N = noteItems(), nN = N.nw.length + N.lf.length, dn = due().length;
  const W0 = L?.w, gw = W0?.gram && (S.gram[W0.w] == null || didToday('gram')) ? W0 : null, vw = W0?.vocab && S.gram[W0.w] != null && (S.voc[W0.w] == null ? !didToday('gram') : didToday('voc')) ? W0 : null;
  const lifeAmLabel = L && (L.kind === 't7' ? 'Ôn cả 40 câu của tuần' : L.kind === 'cn' ? 'Nói tự do 4/3/2' : `${L.d.topic}: nghe, mẫu câu, 8 câu mới`);
  const lifePmLabel = L && (L.kind === 't7' ? 'Kiểm tra tuần (cần 85%)' : L.kind === 'cn' ? 'Nhật ký tuần + nghe lại cả tuần' : `${L.d.topic}: hỏi đáp, đọc to, chép, kiểm tra, nhật ký`);
  const tag = L ? `Tuần ${L.w.w} · Ngày ${L.dn}/7` : '';
  if (k === 'sang') return [
    I && {key:'ipa', img:'lips', t:'Phát âm', s:`${STAGE_NAMES[I.stage]} · ${ipaTitle(I)} · ~5 phút`, go:() => openIpa(I)},
    gw && {key:'gram', img:'book', t:'Ngữ pháp · Tuần ' + gw.w, s:gw.gram.title + ' · ~8 phút', go:() => openGram(gw)},
    L && (S.life[L.key]?.am != null && !didToday('lifeAm')
      ? {key:'lifeAm', img:'speech', t:'Đời sống · ' + tag, s:'Làm nốt phần tối của hôm trước: ' + lifePmLabel, go:() => openLifePart(L, 'pm', 'lifeAm')}
      : {key:'lifeAm', img:'speech', t:'Đời sống · ' + tag, s:lifeAmLabel + ' · ~20 phút', go:() => openLifePart(L, 'am')})
  ].filter(Boolean).map(x => Object.assign(x, {slot:k}));
  if (k === 'chieu') return [
    vw && {key:'voc', img:'leaf', t:'Từ vựng · Tuần ' + vw.w, s:`${vw.vocab.length} từ: phiên âm, nghĩa, câu ví dụ · ~10 phút`, go:() => openVocab(vw)},
    {key:'note', img:'star', t:'Sổ câu · nghe, đọc, viết, nói', s:nN ? `${N.nw.length} câu mới của bạn + ${N.lf.length} câu Đời sống hôm nay · ~${Math.max(5, Math.round(nN * 1.2))} phút` : 'Thêm câu hay vào Sổ câu để luyện', empty:!nN, go:() => nN ? openNote() : (TAB = 'docs', NOTE.tab = 'saved', render())},
    {key:'review', img:'book', t:'Ôn câu đến hạn', s:dn ? `${dn} câu · ~5 phút` : 'Chưa có câu đến hạn', empty:!dn, go:() => dn ? openReview(due(), 'Ôn câu đến hạn') : toast('Chưa có câu nào đến hạn ôn.')}
  ].filter(Boolean).map(x => Object.assign(x, {slot:k}));
  return [L && {key:'lifePm', img:'speech', t:'Đời sống · ' + tag, s:lifePmLabel + ' · ~15 phút', go:() => openLifePart(L, 'pm')}].filter(Boolean).map(x => Object.assign(x, {slot:k}));
}
/* Nút "Học tiếp": lấy việc chưa làm của các buổi đã đến giờ; hết thì gợi ý học trước buổi sau */
let FLOW = false;
function flowNext(){
  const ci = SLOTS.findIndex(s => s[0] === curSlot());
  for (let i = 0; i < SLOTS.length; i++){
    const t = slotTasks(SLOTS[i][0]).find(x => !x.empty && !didToday(x.key));
    if (t) return Object.assign(t, {early:i > ci});
  }
  return null;
}
function startFlow(){ const n = flowNext(); if (!n){ FLOW = false; render(); toast('Hôm nay đã học đủ. Giỏi lắm!'); return; } FLOW = true; n.go(); }
/* Nhắc học bằng Lịch Google: tạo sự kiện lặp lại mỗi ngày */
function calUrl(k){
  const [h, m] = S.set.slots[k].split(':'); const d = new Date(); d.setHours(+h, +m, 0, 0); if (d < new Date()) d.setDate(d.getDate() + 1);
  const f = t => { const x = new Date(t); return x.getFullYear() + String(x.getMonth()+1).padStart(2,'0') + String(x.getDate()).padStart(2,'0') + 'T' + String(x.getHours()).padStart(2,'0') + String(x.getMinutes()).padStart(2,'0') + '00'; };
  const name = SLOTS.find(s => s[0] === k)[1];
  const p = new URLSearchParams({action:'TEMPLATE', text:`Học tiếng Anh: ${name}`, dates:`${f(d)}/${f(+d + 20*MIN)}`, ctz:Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Ho_Chi_Minh', recur:'RRULE:FREQ=DAILY', details:'Mở app Tiếng Anh Nhà Mình và học phần ' + name.toLowerCase() + '.'});
  return 'https://calendar.google.com/calendar/render?' + p.toString();
}
function calButtons(){ return `<div class="row">${SLOTS.map(([k, n]) => `<a class="btn ghost" href="${calUrl(k)}" target="_blank" rel="noopener" data-cal="${k}">${ico('cal')} ${n} ${S.set.slots[k]}</a>`).join('')}</div>`; }
document.addEventListener('click', e => { if (e.target.closest('[data-cal]')){ S.set.calDone = true; save(); } });

/* ============ Điều hướng ============ */
const TABS = [['today','home','Hôm nay'],['path','path','Lộ trình'],['rev','review','Ôn tập'],['prog','chart','Tiến độ'],['docs','book','Sổ của tôi']];
let TAB = 'today', PATHTAB = 'life';
$('#nav').innerHTML = TABS.map(([k, i, t]) => `<button data-k="${k}" aria-label="${t}" data-tip="${t}">${ico(i)}</button>`).join('');
$('#nav').onclick = e => { const b = e.target.closest('button'); if (b){ TAB = b.dataset.k; render(); scrollTo(0, 0); } };
function render(){
  checkStreak(); hdr();
  document.querySelectorAll('#nav button').forEach(b => b.setAttribute('aria-current', b.dataset.k === TAB ? 'page' : 'false'));
  const v = $('#view'); v.innerHTML = ''; VIEWS[TAB](v);
}
const VIEWS = {};

/* ============ HÔM NAY ============ */
VIEWS.today = v => {
  if (S.set.pron == null){
    const n = sec(`<div class="row" style="flex-wrap:nowrap"><img src="img/mic.png" alt="" width="30"><span class="sm" style="flex:1"><b>Có bộ chấm phát âm mới, chuẩn hơn</b>: chấm từng âm ngay trong máy, không cần Chrome. Lần đầu tải 242 MB.</span></div><div class="row"><button class="btn sun" id="pnow">Bật trong Cài đặt</button><button class="btn ghost" id="plater">Để sau</button></div>`);
    n.querySelector('#pnow').onclick = () => { NOTE.tab = 'set'; OPENG['st-pron'] = true; TAB = 'docs'; render(); setTimeout(() => { const f = document.querySelector('[data-g="st-pron"]'); if (f){ f.open = true; f.scrollIntoView({block:'center'}); } }, 50); };
    n.querySelector('#plater').onclick = () => { S.set.pron = 'off'; save(); render(); };
    v.appendChild(n);
  }
  const st = stageOf(S.xp), cur = STAGES[st], nx = STAGES[st + 1];
  const pct = nx ? Math.round((S.xp - cur[2]) / (nx[2] - cur[2]) * 100) : 100;
  const cs = curSlot(), fn = flowNext();
  const g = document.createElement('button'); g.className = 'go-card' + (fn ? '' : ' done');
  const slotName = k => SLOTS.find(s => s[0] === k)[1].toLowerCase();
  g.innerHTML = fn
    ? `<span style="flex:1;min-width:0"><span class="eyebrow">${fn.early ? `Xong ${slotName(cs)} rồi · học trước ${slotName(fn.slot)}` : `Học tiếp · ${slotName(fn.slot)}`}</span><span class="gt">${esc(fn.t)}</span><span class="sm">${esc(fn.s)}</span></span><span class="bigplay">${ico('play')}</span>`
    : `<span style="flex:1"><span class="gt">Hôm nay đã học đủ!</span><span class="sm">Muốn luyện thêm thì chọn Ôn nhanh hoặc Nghe rảnh tay bên dưới.</span></span><img src="img/trophy.png" alt="" width="56">`;
  if (fn) g.onclick = startFlow;
  v.appendChild(g);
  if (D.public && !S.set.me){ const m = sec(`<div class="row"><img src="img/star.png" alt="" width="30"><b style="flex:1">Bước đầu tiên: cho app biết bạn là ai</b></div>${meForm()}`); bindMe(m); v.appendChild(m); }
  const q = document.createElement('div'); q.className = 'quick';
  q.innerHTML = `<button id="qq"><img src="img/book.png" alt=""><b>Ôn nhanh</b><span class="xs muted">3 phút, ${due().length} câu đến hạn</span></button><button id="qh"><img src="img/headphone.png" alt=""><b>Nghe rảnh tay</b><span class="xs muted">Khi nấu ăn, dọn nhà</span></button>`;
  q.querySelector('#qq').onclick = quickReview; q.querySelector('#qh').onclick = () => handsFree();
  const nm = missList().length, mb = document.createElement('button'); mb.className = 'wide'; mb.innerHTML = `<img src="img/trophy.png" alt=""><span style="flex:1;min-width:0"><b>Ôn câu sai (${nm})</b><br><span class="xs muted">${nm ? 'Câu nói chưa đạt, chọn, xếp, viết sai' : 'Chưa có câu làm sai'}</span></span>`; mb.onclick = openMiss; q.appendChild(mb);
  v.appendChild(q);
  if (needBackup()){ const b = sec(`<div class="row"><img src="img/drop.png" alt="" width="30"><div style="flex:1"><b>Sao lưu tuần này</b><br><span class="sm muted">Lưu tiến độ ra file. Trên điện thoại chọn Google Drive để cất.</span></div>${ib('down','Sao lưu','main','id="bkt"')}</div>`); b.querySelector('#bkt').onclick = doBackup; v.appendChild(b); }
  const Lx = nextSched(), recent = SCHED.filter(x => x.kind !== 'cn' && S.life[x.key]).flatMap(x => ['am','pm'].map(p => S.life[x.key][p]).filter(n => n != null)).slice(-4);
  if (Lx?.kind === 'day' && recent.length >= 4 && recent.every(n => n >= 95) && !S.set['skipNo' + Lx.w.w]){
    const b = sec(`<div class="row"><img src="img/star.png" alt="" width="30"><div style="flex:1"><b>Bạn đang học rất tốt</b><br><span class="sm muted">4 phần gần nhất đều trên 95%. Làm bài kiểm tra để nhảy qua tuần ${Lx.w.w}?</span></div></div><div class="row"><button class="btn sun" id="sk">${ico('next')} Kiểm tra (cần 85%)</button><button class="btn ghost" id="skn">Không</button></div>`);
    b.querySelector('#sk').onclick = () => skipTest(Lx.w); b.querySelector('#skn').onclick = () => { S.set['skipNo' + Lx.w.w] = 1; save(); render(); };
    v.appendChild(b);
  }
  const hero = document.createElement('section'); hero.className = 'hero';
  hero.innerHTML = `<div style="display:flex;flex-direction:column;gap:8px;min-width:0"><span class="eyebrow" style="color:inherit;opacity:.75">${new Date().toLocaleDateString('vi-VN', {weekday:'long', day:'numeric', month:'numeric'})}</span>
    <h2>${cur[0]}</h2><p class="sm muted">${nx ? `Còn ${nx[2] - S.xp} XP để ${nx[0]}` : 'Cây đã lớn!'}</p><div class="bar"><i style="width:${pct}%"></i></div></div><img class="tree" src="img/${cur[1]}.png" alt="${cur[0]}">`;
  v.appendChild(hero);
  const t = ymd(), dn = ['T2','T3','T4','T5','T6','T7','CN'], mon = dayStart() - ((new Date().getDay() + 6) % 7) * DAY;
  v.appendChild(sec(`<div class="row"><img src="img/fire.png" alt="" width="34"><div><b style="font-size:1.6em">${S.streak.n}</b> <span class="b">ngày liên tiếp</span><p class="xs muted">Kỷ lục ${S.streak.best} ngày · lỡ 1 ngày là về 0</p></div></div>
    <div class="week">${dn.map((d, i) => { const k = ymd(mon + i*DAY); return `<span>${d}<i class="${S.streak.days[k] ? 'on' : ''} ${k === t ? 'today' : ''}">${S.streak.days[k] ? '<img src="img/drop.png" alt="">' : ''}</i></span>`; }).join('')}</div>`));
  SLOTS.forEach(([k, name, icon]) => {
    const tasks = slotTasks(k), nd = tasks.filter(x => didToday(x.key)).length, all = tasks.length && nd === tasks.length;
    const box = foldEl('slot' + k, {title:`${S.set.slots[k]} · ${name}`, sub:esc(tasks.map(x => x.t.split(' · ')[0]).join(' · ')), icon:all ? ico('check') : ico(icon), badge:`${nd}/${tasks.length}`, open:false, name:'slots', cls:k === cs ? 'now' : '',
      body:tasks.map((x, i) => `<button class="trow ${didToday(x.key) ? 'done' : ''}" data-i="${i}"><img src="img/${x.img}.png" alt=""><span><b>${esc(x.t)}</b><br><span class="sm muted">${esc(x.s)}</span></span><span class="go">${ico(didToday(x.key) ? 'check' : 'play')}</span></button>`).join('')});
    box.querySelectorAll('.trow').forEach(b => b.onclick = () => tasks[+b.dataset.i].go());
    v.appendChild(box);
  });
  if (!S.set.calDone) v.appendChild(foldEl('calf', {title:'Nhắc học bằng Lịch Google', sub:'Chạm để cài 3 lời nhắc mỗi ngày', icon:ico('cal'), body:`<p class="sm muted">Bấm từng nút, rồi bấm Lưu trong Lịch Google. Mỗi ngày điện thoại sẽ nhắc bạn đúng giờ.</p>${calButtons()}`}));
  const L = nextSched(), sp = S.spoken[t] || 0;
  const today = L?.kind === 'day' ? L.d : null;
  v.appendChild(sec(`<div class="row spread"><span class="row"><img src="img/mic.png" alt="" width="28"><b>Đã nói to ${sp} lần</b></span><span class="xs muted">mục tiêu 80</span></div><div class="bar"><i style="width:${Math.min(100, sp/80*100)}%"></i></div>
    ${today ? `<div class="note sm row" style="flex-wrap:nowrap"><span style="flex:1"><b>Câu nói với con:</b> "${esc(today.today)}"</span>${ib('play','Nghe','', `data-a="${today.todayA}"`)}</div>` : ''}`));
  v.querySelector('[data-a]')?.addEventListener('click', e => play(e.currentTarget.dataset.a));
};

/* ============ Khung bài học ============ */
let LS = null;
function openPanel(){ const el = $('#lesson'); el.hidden = false; document.body.style.overflow = 'hidden'; el.scrollTop = 0; return el; }
function closeLesson(){ stopListen(); hush(); HF.tok++; $('#lesson').hidden = true; document.body.style.overflow = ''; LS = null; render(); }
/* Thoát giữa chừng thì lần sau mở lại đúng bước đang học (trong 2 ngày) */
function openLesson(title, steps, onFinish, didKey){
  LS = {title, steps, i:0, onFinish, score:[], didKey, sk:CUR_SK, lv:CUR_SK ? LEVEL : 2};
  if (!CUR_SK) LEVEL = 2; CUR_SK = null;
  const r = S.resume;
  if (r && r.title === title && r.i > 0 && r.i < steps.length && r.day >= ymd(Date.now() - 2*DAY)){ Object.assign(LS, {i:r.i, score:r.score || [], rp:r.rp, low:r.low}); toast(`Học tiếp từ bước ${r.i + 1}/${steps.length}`); }
  openPanel(); drawStep();
}
function drawStep(){
  const el = $('#lesson'), s = LS.steps[LS.i];
  if (LS.i > 0){ S.resume = {title:LS.title, i:LS.i, score:LS.score, rp:LS.rp, low:LS.low, day:ymd()}; save(); }
  el.innerHTML = `<div class="wrap"><div class="lhead">${ib('x','Thoát','','id="lx"')}<div class="bar"><i style="width:${Math.round(LS.i/LS.steps.length*100)}%"></i></div><span class="xs b muted">${LS.i+1}/${LS.steps.length}</span></div>
    <div class="stepname"><span class="ic">${ico(s.icon)}</span><div><span class="eyebrow">${esc(LS.title)}${LS.sk ? ' · Mức ' + LVN[LS.lv] : ''}</span><h3>${esc(s.name)}</h3></div></div><div id="sbody" style="display:flex;flex-direction:column;gap:14px"></div></div>`;
  $('#lx').onclick = () => { FLOW = false; closeLesson(); }; el.scrollTop = 0;
  s.run($('#sbody'), score => { if (score != null) LS.score.push(score); LS.i++; LS.i >= LS.steps.length ? finish() : drawStep(); });
}
function finish(){
  const sc = avg(LS.score) ?? 100;
  const r = LS.onFinish(sc) || {};
  const fs = r.score ?? sc; let newStar = false;
  if (LS.sk && fs >= 85 && r.pass !== false && LS.lv > (S.star[LS.sk] || 0)){ S.star[LS.sk] = LS.lv; newStar = true; save(); }
  if (LS.didKey) did(LS.didKey);
  delete S.resume; save();
  addXP(20); water();
  const wasFlow = FLOW, nx = FLOW ? flowNext() : null, more = nx && !nx.early;
  if (!more) FLOW = false;
  $('#lesson').innerHTML = `<div class="wrap"><div class="big-ok"><img class="grow" src="img/${r.pass === false ? 'drop' : 'trophy'}.png" alt=""><h2>${r.pass === false ? 'Gần đạt rồi!' : 'Hoàn thành!'}</h2>
    <div class="ring" style="--p:${r.score ?? sc};--c:${(r.score ?? sc) >= 85 ? 'var(--good)' : 'var(--sun)'};width:96px;height:96px"><b style="width:78px;height:78px">${r.score ?? sc}</b></div>
    <p class="muted">${esc(r.msg || '')}</p>${LS.sk ? `<p class="stx big">${stars(S.star[LS.sk] || 0)}</p><p class="xs muted">Mức ${LVN[LS.lv]}${newStar ? ' · có sao mới!' : fs >= 85 ? '' : ' · cần 85% để nhận sao'}</p>` : ''}<p class="sm">+20 XP · ${STAGES[stageOf(S.xp)][0]}</p></div>
    <div class="fin-acts">${more ? `<button class="btn block sun" id="fnext">${ico('play')} Bài tiếp: ${esc(nx.t)}</button><button class="btn block ghost" id="fin">Nghỉ ở đây</button>`
      : `${wasFlow ?`<p class="note sm">Xong buổi này rồi! ${nx ? `Buổi tiếp theo lúc ${S.set.slots[nx.slot]}.` : 'Hôm nay đã học đủ.'}</p>` : ''}<button class="btn block" id="fin">${ico('check')}</button>`}</div></div>`;
  $('#fin').onclick = () => { FLOW = false; closeLesson(); };
  if (more) $('#fnext').onclick = () => { closeLesson(); startFlow(); };
}

/* Khối nghe - nói - chấm dùng chung */
function speakBlock(el, item, {mode = 'full', timer = 0, showVi = true, rates = [1], onDone, label}){
  timer = tmr(timer);
  item.en.split(/\s+/).forEach(w => { if (/[a-z]/i.test(w)) dictChunk(w); });
  const id = 'k' + Math.random().toString(36).slice(2, 7);
  const textHTML = mode === 'full' ? `<p class="en">${esc(item.en)}</p>` : mode === 'mask' ? `<p class="en">${item.en.split(' ').map((w, i) => i === 0 ? esc(w) : `<span class="mask">${esc(w)}</span>`).join(' ')}</p>` : `<p class="en muted" style="font-size:1.1em">${esc(label || 'Nói câu tiếng Anh')}</p>`;
  const hasAudio = !!(item.a || item.url || (TTS && item.en));
  el.innerHTML = `${label && mode !== 'none' ? `<p class="xs b muted">${esc(label)}</p>` : ''}${textHTML}${item.ipa && mode !== 'none' ? `<p class="ipa-l">${esc(item.ipa)}</p>` : ''}${showVi && item.vi ? `<p class="vi">${esc(item.vi)}</p>` : ''}
    ${timer ? `<div class="timer"><i id="${id}t"></i></div>` : ''}
    <div class="row" style="justify-content:center;gap:14px">${mode !== 'none' && hasAudio ? ib('play','Nghe mẫu','',`id="${id}p"`) + ib('turtle','Nghe chậm','',`id="${id}s"`) : ''}${ib('mic','Nói','main',`id="${id}m"`)}${ib('skip','Bỏ qua','',`id="${id}n"`)}</div>
    <p class="sm muted" id="${id}h" style="text-align:center"></p><div id="${id}r" style="display:flex;flex-direction:column;gap:10px"></div>`;
  const q = s => el.querySelector('#' + id + s);
  if (q('p')){ q('p').onclick = () => playItem(item, rates[0] || 1); q('s').onclick = () => playItem(item, .75); }
  const t0 = Date.now();
  if (timer){ const bar = q('t'); requestAnimationFrame(() => requestAnimationFrame(() => { bar.style.transitionDuration = timer + 's'; bar.style.width = '0%'; })); }
  /* Đọc tối đa 3 lần. 3 lần chưa đạt 85 thì sang câu khác: câu đã học hẹn ôn ngày mai theo lịch ghi nhớ, câu khác vào Câu làm sai. */
  let done = false, tries = 0, best = null;
  const finishWith = (r, heard, fast) => {
    if (done) return; done = true;
    if (r){ tries++; if (!best || r.score > best.score) best = r; }
    const fail = r && r.score < 85, last = fail && tries >= 3;
    if (r && !fail) fixMiss(sayKey(item));
    const isCard = !!(item.id && CARDS[item.id]);
    if (last){ if (!soonCard(item.id)) saveSay(item); }
    q('r').innerHTML = (mode === 'none' ? `<p class="en">${esc(item.en)}</p>` : '') + (r ? scoreHTML(r, heard) : '')
      + (fail && !last ? `<p class="xs b muted">Lần ${tries}/3 · cần 85 điểm. Nghe mẫu rồi đọc lại nhé.</p><div class="row" style="flex-wrap:nowrap"><button class="btn sun" id="${id}a" style="flex:1">${ico('mic')} Đọc lại (còn ${3 - tries} lần)</button></div><button class="btn ghost block" id="${id}o">${ico('check')} Máy nghe nhầm, mình đọc đúng rồi</button>` : '')
      + (last ? `<div class="note sm"><b>Gần được rồi!</b> ${isCard ? 'Câu này được hẹn ôn lại sớm hơn theo lịch ghi nhớ (sớm nhất là ngày mai).' : 'Câu này đã lưu vào <b>Ôn tập › Câu làm sai</b> để luyện lại hôm khác.'} Mình sang câu khác nhé.</div>` : '')
      + `<button class="btn block ${fail && !last ? 'ghost' : ''}" id="${id}x">${ico('next')}${fail && !last ? ' Sang câu khác' : ''}</button>`;
    q('x').onclick = () => { if (fail && !last && !soonCard(item.id)) saveSay(item); onDone(r ? (best || r).score : null, fast); };
    q('o')?.addEventListener('click', () => { S.selfOk = (S.selfOk || 0) + 1; save(); onDone(85, fast); });
    q('a')?.addEventListener('click', () => { done = false; q('r').innerHTML = ''; q('m').click(); });
    if (r && r.score < 85) noteWeakPh(r);
    if (hasAudio && (mode === 'none' || (r && r.score < 85))) playItem(item);
  };
  q('n').onclick = () => finishWith(null, '', false);
  let tVoice = 0;
  q('m').onclick = async () => {
    if (REC){ stopListen(); q('h').textContent = 'Đang chấm...'; return; }
    const m = q('m'), ts = Date.now(); tVoice = 0; m.classList.add('live'); m.innerHTML = ico('stop'); m.dataset.tip = 'Dừng';
    const hint = () => `<span class="rec-dot"></span> Đang ghi âm ${Math.round((Date.now() - ts) / 1000)}s · đọc xong thì <b>bấm nút đỏ để dừng</b>`;
    let heard = ''; q('h').innerHTML = hint();
    const tick = setInterval(() => { if (!heard) q('h').innerHTML = hint(); }, 1000);
    if (pronOn()){
      hush(); let blob;
      try{ blob = await recordClip({onVoice:() => { tVoice ||= Date.now(); }}); }
      catch{ clearInterval(tick); m.classList.remove('live'); m.innerHTML = ico('mic'); m.dataset.tip = 'Nói'; q('h').textContent = MICERR['not-allowed']; return; }
      clearInterval(tick); m.classList.remove('live'); m.innerHTML = ico('mic'); m.dataset.tip = 'Nói';
      lastClip = URL.createObjectURL(blob);
      q('h').textContent = 'Đang chấm từng âm...';
      let r = null;
      try{ const {pcm} = await decode16k(blob); r = await pronScore(item.en, pcm, n => q('h').textContent = `Tải bộ chấm lần đầu: ${n}% (nên dùng wifi)`); }
      catch(e){ console.warn(e); q('h').textContent = 'Bộ chấm chưa chạy được (lần đầu cần mạng để tải). Bấm micro thử lại.'; return; }
      if (!r || r.silent){ q('h').textContent = MICERR['no-speech']; return; }
      spoke(); q('h').textContent = '';
      done = false; finishWith(r, r.heard, !timer || ((tVoice || Date.now()) - t0) / 1000 <= timer + 1);
      return;
    }
    const res = await listen(t => { heard = t; q('h').innerHTML = '<span class="heard">' + esc(t) + '</span><br><span class="xs">Bấm nút đỏ khi đọc xong</span>'; }, () => { tVoice ||= Date.now(); });
    clearInterval(tick); m.classList.remove('live'); m.innerHTML = ico('mic'); m.dataset.tip = 'Nói';
    if (!res.text){ q('h').textContent = res.msg || MICERR[res.err] || MICERR['no-speech']; return; }
    q('h').textContent = 'Đang chấm từng âm...';
    spoke();
    const r = await teacherScore(item.en, res); q('h').textContent = '';
    done = false; finishWith(r, r.heard, !timer || ((tVoice || Date.now()) - t0) / 1000 <= timer + 1);
  };
  if (mode !== 'none' && hasAudio && rates.length) (async () => { for (const r of rates){ if (!el.isConnected || done) return; await playItem(item, r); await wait(400); } })();
}
function speakSeq(items, opts){
  return (el, next) => {
    let i = 0; const tot = [];
    const one = () => {
      if (i >= items.length){ next(avg(tot)); return; }
      const it = items[i], o = typeof opts === 'function' ? opts(it, i) : opts;
      el.innerHTML = `<p class="xs b muted">${i+1}/${items.length}</p><div style="display:flex;flex-direction:column;gap:14px"></div>`;
      speakBlock(el.lastChild, it, Object.assign({}, o, {onDone:(sc, fast) => { if (sc != null){ tot.push(sc); o.after?.(it, sc, fast); } i++; one(); }}));
    };
    one();
  };
}
function dialogueStep(el, lines, next){
  let showTx = false, showVi = false, pass = 0, playing = false;
  const draw = (cur = -1) => {
    el.innerHTML = `<p class="sm muted">${pass === 0 ? 'Lần 1: chỉ nghe, chưa xem chữ.' : 'Lần 2: nghe và xem chữ. Chạm vào câu để nghe lại.'}</p>` + lines.map((l, i) => `<div class="bub ${i === cur ? 'now' : ''}" data-i="${i}"><span class="who ${l.s === 'B' ? 'B' : ''}">${l.s}</span><div class="tx">${showTx ? `<b>${esc(l.en)}</b>${showVi ? `<br><span class="sm muted">${esc(l.vi)}</span>` : ''}` : '<span class="muted">• • •</span>'}</div></div>`).join('') +
      `<div class="row" style="justify-content:center">${ib('play','Phát cả đoạn','main','id="dp"')}${ib('eye','Hiện chữ', showTx ? 'on' : '','id="de"')}${ib('vi','Hiện nghĩa', showVi ? 'on' : '','id="dv"')}</div><button class="btn block" id="dn">${ico('next')}</button>`;
    $('#dp').onclick = runPlay; $('#de').onclick = () => { showTx = !showTx; draw(); }; $('#dv').onclick = () => { showVi = !showVi; showTx = true; draw(); };
    el.querySelectorAll('.bub').forEach(b => b.onclick = () => playItem(lines[+b.dataset.i]));
    $('#dn').onclick = () => { playing = false; hush(); next(null); };
  };
  const runPlay = async () => { if (playing) return; playing = true; for (let i = 0; i < lines.length && playing; i++){ if (!el.isConnected) return; draw(i); await playItem(lines[i]); await wait(350); } playing = false; if (pass === 0){ pass = 1; showTx = true; } if (el.isConnected) draw(); };
  draw(); runPlay();
}
function dictStep(cards, fromVi = () => false){
  return (el, next) => {
    let i = 0; const tot = [];
    const one = () => {
      if (i >= cards.length){ next(avg(tot)); return; }
      const c = cards[i], fv = fromVi(c);
      el.innerHTML = `<p class="xs b muted">${i+1}/${cards.length} · ${fv ? (c.word ? 'Nhìn nghĩa, viết từ tiếng Anh' : 'Nhìn nghĩa, viết câu tiếng Anh') : 'Nghe và chép lại'}</p>${fv ? `<p class="vi">${esc(c.vi)}</p>` : ''}<div class="row" style="justify-content:center">${ib('play', fv ? 'Gợi ý: nghe câu' : 'Nghe', fv ? '' : 'main','id="cp"')}${ib('turtle','Nghe chậm','','id="cs"')}</div>${dictHint(c)}
        <input type="text" id="ci" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${fv ? 'Viết câu tiếng Anh...' : 'Gõ câu bạn nghe được...'}"><button class="btn block" id="cc">${ico('check')}</button><div id="cr" style="display:flex;flex-direction:column;gap:10px"></div>`;
      $('#cp').onclick = () => playItem(c); $('#cs').onclick = () => playItem(c, .75); if (!fv) playItem(c);
      $('#chint')?.addEventListener('click', e => { e.currentTarget.outerHTML = `<p class="hint">${esc(hintOf(c.en))}</p>`; });
      $('#ci').onkeydown = e => { if (e.key === 'Enter') $('#cc')?.click(); };
      $('#cc').onclick = () => {
        const r = scoreText(c.en, $('#ci').value); tot.push(r.score); $('#cc').remove(); $('#ci').readOnly = true;
        if (r.score < 85 && c.id && S.cards[c.id]) review(c.id, 0, false);
        missMark(c, r.score >= 85);
        $('#cr').innerHTML = `<div class="words">${r.words.map(w => `<span class="w ${w.ok ? 'ok' : 'bad'}">${esc(w.w)}</span>`).join('')}</div>${fv ? '' : `<p class="vi">${esc(c.vi)}</p>`}<button class="btn block" id="cn">${ico('next')}</button>`; if (fv) playItem(c);
        $('#cn').onclick = () => { i++; one(); };
      };
    };
    one();
  };
}
/* Bài kiểm tra từ một nhóm câu */
function quizStep(cards, patterns, n = 5){
  return (el, next) => {
    const cs = shuffle(cards), pool = Object.values(CARDS).filter(c => c.vi && !c.word);
    const qs = [];
    const kinds = n >= 10 ? ['listen','listen','listen','say','say','say','say','dict','dict','order'] : ['listen','listen','fill','order','say'];
    let ci = 0;
    kinds.forEach(k => {
      if (k === 'fill' && patterns?.length){ const p = patterns[0], f = p.fills[0]; const opts = shuffle([...new Set(patterns.flatMap(x => x.fills.map(y => y.w)))]).slice(0, 3); if (!opts.includes(f.w)) opts[0] = f.w; qs.push({k, p, ans:f.w, opts:shuffle(opts), item:f}); return; }
      const c = cs[ci++ % cs.length];
      if (k === 'listen') qs.push({k, c, opts:shuffle([c, ...shuffle(pool.filter(x => x.vi !== c.vi)).slice(0, 2)])}); else qs.push({k: k === 'fill' ? 'order' : k, c});
    });
    let i = 0, ok = 0;
    const done = good => { if (good) ok++; i++; i >= qs.length ? next(Math.round(ok / qs.length * 100)) : one(); };
    const nextBtn = good => { el.insertAdjacentHTML('beforeend', `<button class="btn block" id="qn">${ico('next')}</button>`); $('#qn').onclick = () => done(good); };
    const one = () => {
      const q = qs[i];
      el.innerHTML = `<p class="xs b muted">Câu ${i+1}/${qs.length}</p>`;
      if (q.k === 'listen'){
        el.insertAdjacentHTML('beforeend', `<div class="row" style="justify-content:center">${ib('play','Nghe','main','id="qp"')}</div><p class="sm muted">Câu vừa nghe nghĩa là gì?</p>` + q.opts.map((o, k) => `<button class="opt" data-k="${k}">${esc(o.vi)}</button>`).join(''));
        $('#qp').onclick = () => playItem(q.c); playItem(q.c);
        el.querySelectorAll('.opt').forEach(b => b.onclick = () => { const g = q.opts[+b.dataset.k] === q.c; missMark(q.c, g); el.querySelectorAll('.opt').forEach(x => { x.disabled = true; if (q.opts[+x.dataset.k] === q.c) x.classList.add('ok'); }); if (!g) b.classList.add('bad'); nextBtn(g); });
      } else if (q.k === 'fill'){
        el.insertAdjacentHTML('beforeend', `<p class="en">${esc(q.p.frame.replace('___', '_____'))}</p><p class="sm muted">Chọn từ để điền</p>` + q.opts.map(o => `<button class="opt" data-w="${esc(o)}">${esc(o)}</button>`).join(''));
        el.querySelectorAll('.opt').forEach(b => b.onclick = () => { const g = b.dataset.w === q.ans; el.querySelectorAll('.opt').forEach(x => { x.disabled = true; if (x.dataset.w === q.ans) x.classList.add('ok'); }); if (!g) b.classList.add('bad'); playItem(q.item); nextBtn(g); });
      } else if (q.k === 'order'){
        const words = q.c.en.split(' '), sh = shuffle(words.map((w, k) => ({w, k}))); let built = [];
        const draw = () => {
          el.innerHTML = `<p class="xs b muted">Câu ${i+1}/${qs.length} · Xếp thành câu</p><p class="vi">${esc(q.c.vi)}</p><p class="en" style="min-height:1.4em">${esc(built.map(x => x.w).join(' '))}</p><div class="tiles">${sh.map((x, k) => `<button class="tile ${built.includes(x) ? 'used' : ''}" data-k="${k}">${esc(x.w)}</button>`).join('')}</div><button class="btn ghost" id="qr">${ico('repeat')}</button>`;
          el.querySelectorAll('.tile').forEach(b => b.onclick = () => { const x = sh[+b.dataset.k]; if (built.includes(x)) return; built.push(x); if (built.length === words.length){ const g = built.map(y => y.w).join(' ') === q.c.en; missMark(q.c, g); draw(); el.insertAdjacentHTML('beforeend', `<div class="note">${g ? 'Đúng rồi!' : 'Câu đúng: <b>' + esc(q.c.en) + '</b>'}</div>`); playItem(q.c); nextBtn(g); } else draw(); });
          $('#qr').onclick = () => { built = []; draw(); };
        };
        draw();
      } else if (q.k === 'dict'){
        const box = document.createElement('div'); el.appendChild(box);
        dictStep([q.c])(box, sc => done(sc >= 85));
      } else {
        const box = document.createElement('div'); box.style.cssText = 'display:flex;flex-direction:column;gap:12px'; el.appendChild(box);
        speakBlock(box, q.c, {mode:'none', showVi:true, rates:[], timer:5, label:'Nhìn nghĩa, nói tiếng Anh', onDone:sc => done(sc != null && sc >= 85)});
      }
    };
    one();
  };
}

/* ============ ĐỜI SỐNG ============ */
/* dk: tên việc được đánh dấu xong hôm nay (làm nốt phần tối hôm trước vào buổi sáng thì tính là việc buổi sáng) */
function openLifePart(x, part, dk){ withLevel(x.key + ':' + part, () => openLifePart0(x, part, dk)); }
function openLifePart0(x, part, dk){
  if (x.kind === 'day') return part === 'am' ? lifeAm(x) : lifePm(x, dk);
  if (x.kind === 't7') return part === 'am' ? t7Review(x) : t7Test(x, dk);
  return part === 'am' ? cnTalk(x) : cnDiary(x, dk);
}
/* Câu nói dưới 60% trong bài sáng: hôm sau gặp lại trong phần khởi động và mục ôn */
const weakCards = () => Object.keys(S.cards).filter(id => CARDS[id]?.a && (S.cards[id].l || 0) > 0 && !isKnown(id)).sort((a, b) => S.cards[a].d - S.cards[b].d).map(id => CARDS[id]);
const markLife = (x, part, sc) => { S.life[x.key] = Object.assign(S.life[x.key] || {}, {[part]:sc, at:ymd()}); save(); };
const asLines = d => d.dialogue.map(l => Object.assign({}, l, {s:l.v === 'm' ? 'B' : 'A'}));
function lifeAm(x){
  const d = x.d, prev = SCHED[SCHED.indexOf(x) - 1];
  const weak = weakCards().filter(c => c.day !== d.id).slice(0, 3);
  const warm = [...weak, ...(prev?.kind === 'day' ? prev.d.cards : d.cards).filter(c => !weak.includes(c))].slice(0, 5);
  const low = (it, sc) => { LS.low ||= {}; if (it.id) LS.low[it.id] = Math.min(LS.low[it.id] ?? 100, sc); };
  openLesson(`Tuần ${d.w} · Ngày ${x.dn}/7 · ${d.topic}`, [
    {icon:'repeat', name:'Khởi động miệng', run:speakSeq(warm, {mode:'full', showVi:false, rates:[1.1]})},
    {icon:'head', name:'Nghe hội thoại', run:(el, next) => dialogueStep(el, asLines(d), next)},
    {icon:'swap', name:'Mẫu câu: thay từ và nói', run:speakSeq(d.patterns.flatMap(p => p.fills.map(f => ({en:f.en, a:f.a, frame:p.frame, w:f.w}))), it => ({mode:'none', showVi:false, rates:[], label:it.frame.replace('___', '[ ' + it.w + ' ]')}))},
    {icon:'mic', name:'8 câu mới: nghe, nói 3 lần', run:speakSeq(d.cards.flatMap(c => [
      Object.assign({}, c, {o:{mode:'full', rates:[.85, 1, 1.15], label:'Nghe 3 tốc độ, rồi nói', after:low}}),
      Object.assign({}, c, {o:{mode:'mask', rates:[], label:'Chữ đã ẩn bớt', after:low}}),
      Object.assign({}, c, {o:{mode:'none', rates:[], timer:5, label:'Nhìn nghĩa, nói tiếng Anh (5 giây)', after:low}})]), it => it.o)}
  ], sc => {
    markLife(x, 'am', sc);
    let nWeak = 0;
    d.cards.forEach(c => { learn(c.id); if ((LS.low?.[c.id] ?? 100) < 60){ const k = S.cards[c.id]; k.l = (k.l || 0) + 1; k.lv = 2; k.d = dayStart() + DAY + 5*3600e3; nWeak++; } });
    save();
    return {msg:(nWeak ? `${nWeak} câu dưới 60% sẽ được lặp lại vào ngày mai. ` : '') + 'Tối nay học tiếp phần hỏi đáp, đọc to, chép chính tả và nhật ký.'};
  }, 'lifeAm');
}
function lifePm(x, dk){
  const d = x.d;
  openLesson(`Tuần ${d.w} · Ngày ${x.dn}/7 · ${d.topic}`, [
    {icon:'ear', name:'Hỏi nhanh đáp nhanh (5 giây)', run:speakSeq(d.ask.map(a => ({en:a.ans, a:a.aa, q:a.q, qa:a.qa})), it => ({mode:'none', showVi:false, rates:[], timer:5, label:`Câu hỏi: "${it.q}"`}))},
    {icon:'book', name:'Đọc to đoạn văn', run:speakSeq([{en:d.dialogue.map(l => l.en).join(' ')}], {mode:'full', showVi:false, rates:[]})},
    {icon:'pen', name:'Chép chính tả', run:dictStep(shuffle(d.cards).slice(0, 3))},
    {icon:'check', name:'Kiểm tra nhỏ', run:quizStep(d.cards, d.patterns, 5)},
    {icon:'pen', name:'Nhật ký tối', run:diaryStep(d.diary.frame, d.diary.hints, d.id)}
  ], sc => { markLife(x, 'pm', sc); d.cards.forEach(c => learn(c.id)); return {pass:sc >= 85, msg:sc >= 85 ? 'Xong ngày ' + x.dn + '/7. Câu hôm nay đã vào lịch ôn.' : 'Xong bài. Câu chưa nhớ sẽ được ôn lại.'}; }, dk || 'lifePm');
}
function t7Review(x){
  const cards = x.w.days.flatMap(d => d.cards); cards.forEach(c => learn(c.id));
  openReview(cards.map(c => c.id), `Tuần ${x.w.w} · Ngày 6/7 · Ôn cả tuần`, sc => markLife(x, 'am', sc), 'lifeAm');
}
function t7Test(x, dk){
  const cards = x.w.days.flatMap(d => d.cards);
  openLesson(`Tuần ${x.w.w} · Kiểm tra tuần`, [{icon:'check', name:'10 câu · cần đạt 85%', run:quizStep(cards, x.w.days[0].patterns, 10)}],
    sc => { markLife(x, 'pm', sc); return {pass:sc >= 85, score:sc, msg:sc >= 85 ? 'Đạt! Tuần sau đã mở.' : 'Chưa đạt 85%. Ôn lại cả tuần (phần sáng) rồi làm lại bài kiểm tra nhé.'}; }, dk || 'lifePm');
}
/* Nhảy cóc: làm bài kiểm tra cả tuần, đạt 85% thì tuần đó coi như xong */
function skipTest(w){
  const cards = w.days.flatMap(d => d.cards);
  openLesson(`Nhảy cóc tuần ${w.w}`, [{icon:'check', name:'10 câu của cả tuần · cần đạt 85%', run:quizStep(cards, w.days[0].patterns, 10)}], sc => {
    if (sc < 85) return {pass:false, score:sc, msg:'Chưa đạt 85%. Học tiếp từng ngày như bình thường nhé.'};
    SCHED.filter(x => x.w === w).forEach(x => { const r = S.life[x.key] || {}; S.life[x.key] = {am:r.am ?? sc, pm:Math.max(r.pm ?? 0, sc)}; });
    cards.forEach(c => learn(c.id)); save();
    return {pass:true, score:sc, msg:`Đạt! Tuần ${w.w} đã xong, các câu của tuần đã vào lịch ôn.`};
  }, 'skip');
}
function cnTalk(x){
  const rounds = [60, 45, 30];
  openLesson(`Tuần ${x.w.w} · Ngày 7/7 · Nói tự do 4/3/2`, rounds.map((sec, k) => ({icon:'mic', name:`Lần ${k+1}: nói trong ${sec} giây`, run:(el, next) => {
    el.innerHTML = `<div class="note"><b>Chủ đề:</b> ${esc(x.w.talk || 'Kể về tuần của bạn.')}</div><p class="sm muted">${k === 0 ? 'Nói thoải mái bằng các câu đã học trong tuần.' : 'Nói lại cùng nội dung, nhanh và trôi hơn lần trước.'}</p>
      <div class="timer"><i id="tt"></i></div><div class="row" style="justify-content:center">${ib('mic','Bắt đầu nói','main','id="tm"')}${ib('skip','Bỏ qua','','id="tk"')}</div><p class="sm" id="th"></p><div id="tr"></div>`;
    $('#tk').onclick = () => { stopListen(); next(null); };
    $('#tm').onclick = async () => {
      if (REC){ stopListen(); return; } $('#tm').classList.add('live');
      const bar = $('#tt'); bar.style.transitionDuration = sec + 's'; requestAnimationFrame(() => bar.style.width = '0%');
      let text = '';
      if (micMode() === 'google' && SR){
        const r = new SR(); r.lang = 'en-US'; r.continuous = true; r.interimResults = true; REC = {stop:() => r.stop()};
        r.onresult = e => { text = [...e.results].map(x => x[0].transcript).join(' '); $('#th').innerHTML = '<span class="heard">' + esc(text) + '</span>'; };
        await new Promise(res => { r.onend = res; r.start(); setTimeout(() => r.stop(), sec * 1000); });
      } else {
        const blob = await recordClip({maxMs:sec * 1000}).catch(() => null);
        $('#th').textContent = 'Đang nhận dạng...';
        if (blob){ try{ const AI = await aiReady(); const {pcm} = await decode16k(blob); text = (await AI.asr(pcm, {model:'Xenova/whisper-tiny.en'})).text || ''; }catch{} }
      }
      REC = null; $('#tm').classList.remove('live');
      const words = text.trim() ? text.trim().split(/\s+/).length : 0;
      if (words) for (let n = 0; n < Math.max(1, Math.round(words / 6)); n++) spoke();
      $('#th').innerHTML = `<span class="heard">${esc(text || '...')}</span>`;
      $('#tr').innerHTML = `<div class="note"><b>${words} từ</b> trong ${sec} giây${words ? ` · khoảng ${Math.round(words / sec * 60)} từ/phút` : ''}</div><button class="btn block" id="tn">${ico('next')}</button>`;
      $('#tn').onclick = () => next(words ? 100 : null);
    };
  }})), sc => { markLife(x, 'am', 100); return {msg:'Nói lại nhiều lần với thời gian ngắn dần giúp bạn nói trôi chảy hơn.'}; }, 'lifeAm');
}
function cnDiary(x, dk){
  const lines = x.w.days.flatMap(d => asLines(d));
  openLesson(`Tuần ${x.w.w} · Ngày 7/7 · Nhật ký tuần`, [
    {icon:'head', name:'Nghe lại hội thoại cả tuần', run:(el, next) => dialogueStep(el, lines, next)},
    {icon:'pen', name:'Nhật ký tuần', run:diaryStep(x.w.weekDiary || 'This week, I ___.', [...new Set(x.w.days.flatMap(d => d.diary.hints))].slice(0, 10), x.key)}
  ], sc => { markLife(x, 'pm', 100); return {msg:'Hoàn thành tuần ' + x.w.w + '!'}; }, dk || 'lifePm');
}
function diaryStep(frame, hints, src){
  return (el, next) => {
    el.innerHTML = `<div class="note"><b>Khung câu:</b> ${esc(frame)}</div><div class="tiles">${hints.map(h => `<button class="tile" data-h="${esc(h)}">${esc(h)}</button>`).join('')}</div>
      <textarea id="dt" rows="4">${esc(frame)}</textarea><p class="xs muted">Chạm gợi ý để điền vào chỗ ___ tiếp theo.</p><button class="btn block" id="ds">${ico('check')} Lưu và đọc to 3 lần</button>`;
    el.querySelectorAll('[data-h]').forEach(b => b.onclick = () => { const t = $('#dt'); t.value = t.value.includes('___') ? t.value.replace('___', b.dataset.h) : t.value + ' ' + b.dataset.h; });
    $('#ds').onclick = () => {
      const text = $('#dt').value.replace(/_{3,}/g, '').replace(/\s+/g, ' ').trim(); if (!text) return;
      S.diary.unshift({date:ymd(), src, text}); save(); addXP(5 * Math.max(1, text.split(/[.!?]/).filter(s => s.trim()).length));
      speakSeq([1, 2, 3].map(() => ({en:text})), {mode:'full', showVi:false, rates:[], label:'Đọc to nhật ký'})(el, next);
    };
  };
}

/* ============ SỔ CÂU: thêm câu, tự dịch, luyện buổi chiều ============ */
const MYSRC = 'Câu mình thêm', NOTE_BATCH = 10;
const newNotes = () => S.saved.filter(c => CARDS[c.id] && !S.cards[c.id]);
/* Câu Đời sống của hôm nay: bài đã học sáng nay, chưa học thì bài app đang gợi ý */
function lifeTodayCards(){ const t = ymd(); const x = SCHED.find(y => y.kind === 'day' && S.life[y.key]?.at === t) || [nextSched()].find(y => y?.kind === 'day'); return x ? x.d.cards : []; }
function noteItems(){ const nw = newNotes().slice(0, NOTE_BATCH); return {nw, lf:lifeTodayCards().slice(0, Math.max(6, 12 - nw.length))}; }
async function addNotes(ta, st, btn){
  const items = [], same = (a, b) => a.toLowerCase() === b.toLowerCase();
  ta.value.split(/\n+/).forEach(l => {
    const [e, ...r] = l.split('='); const en = e.replace(/^\s*(\d+[.)]|[-•*+])\s*/, '').replace(/\s+/g, ' ').trim(), vi = r.join('=').trim();
    if (!/[a-z]/i.test(en) || S.saved.some(c => same(c.en, en)) || items.some(c => same(c.en, en))) return;
    const word = en.split(' ').length <= 3 && !/[.?!,]/.test(en);
    items.push(Object.assign({id:'my-' + Date.now().toString(36) + items.length, en, vi, src:MYSRC, at:Date.now()}, word ? {word:true} : {}));
  });
  if (!items.length){ toast(ta.value.trim() ? 'Các câu này đã có trong sổ.' : 'Gõ câu tiếng Anh trước nhé.'); return; }
  items.forEach(c => { S.saved.push(c); CARDS[c.id] = c; }); save(); ta.value = '';
  OPENG['sv-' + MYSRC] = true;
  await lookupWords(items.filter(c => c.word), st);
  await translateNotes(items.filter(c => !c.vi || (c.ex && !c.exVi)), st, btn);
  render(); toast(`Đã thêm ${items.length} câu vào sổ`);
  makeVoices(items);
}
async function translateNotes(cs, st, btn){
  if (!cs.length) return;
  const show = (t, p) => { if (st) st.innerHTML = `<p class="sm b">${esc(t)}</p>${p != null ? `<div class="prog"><i style="width:${p}%"></i></div>` : ''}`; };
  if (btn) btn.disabled = true;
  try{
    show('Đang chuẩn bị bộ dịch...', 5);
    const AI = await aiReady();
    /* Từ đơn: dịch định nghĩa ngắn của từ điển (máy dịch một từ lẻ rất kém), ghi kèm loại từ */
    const jobs = cs.flatMap(c => [!c.vi && [c, 'vi', c.word && c.def ? c.def : c.en], c.ex && !c.exVi && [c, 'exVi', c.ex]]).filter(Boolean);
    const vi = await AI.translate(jobs.map(j => j[2]), {onProg:p => { if (p.status === 'progress' && p.file?.endsWith('.onnx')) show('Tải bộ dịch lần đầu, nên dùng wifi...', Math.round(p.progress || 0)); }, onEach:(n, all) => show(`Đang dịch ${n}/${all} câu...`, Math.round(n / all * 100))});
    vi.forEach((t, k) => { const [c, f] = jobs[k]; let x = t.replace(/[♪♫*]/g, '').replace(/^\s*-\s*/, '').replace(/\s+/g, ' ').trim(); if (!/\p{L}{2}/u.test(x) || /_/.test(x) || /(\b\S+\b)(\s+\1\b){2,}/iu.test(x) || x.length > 6 * jobs[k][2].length + 20) x = ''; c[f] = x; if (x) c[f === 'vi' ? 'mt' : 'exMt'] = true; }); save();
  }catch{ toast('Chưa dịch được (lần đầu cần mạng). Chạm vào câu để tự ghi nghĩa nhé.'); }
  if (btn) btn.disabled = false;
}
/* Nghe (chưa xem chữ), chọn nghĩa đúng */
function listenPick(cards, pool0){
  return (el, next) => {
    let i = 0, ok = 0; const pool = (pool0 || Object.values(CARDS).filter(c => !c.word)).filter(c => c.vi);
    const one = () => {
      if (i >= cards.length){ next(Math.round(ok / cards.length * 100)); return; }
      const c = cards[i], opts = shuffle([c, ...shuffle(pool.filter(x => x.vi !== c.vi)).slice(0, 2)]);
      el.innerHTML = `<p class="xs b muted">${i+1}/${cards.length} · Chưa xem chữ</p><div class="row" style="justify-content:center">${ib('play','Nghe','main','id="lp"')}${ib('turtle','Nghe chậm','','id="lw"')}</div><p class="sm muted">Câu vừa nghe nghĩa là gì?</p>` + opts.map((o, k) => `<button class="opt" data-k="${k}">${esc(o.vi)}</button>`).join('');
      $('#lp').onclick = () => playItem(c); $('#lw').onclick = () => playItem(c, .75); playItem(c);
      el.querySelectorAll('.opt').forEach(b => b.onclick = () => {
        const g = opts[+b.dataset.k] === c; if (g) ok++; missMark(c, g);
        el.querySelectorAll('.opt').forEach(x => { x.disabled = true; if (opts[+x.dataset.k] === c) x.classList.add('ok'); }); if (!g) b.classList.add('bad');
        el.insertAdjacentHTML('beforeend', `<p class="en">${esc(c.en)}${c.ipa ? ` <span class="ipa-s">${esc(c.ipa)}</span>` : ''}</p><button class="btn block" id="ln">${ico('next')}</button>`); $('#ln').onclick = () => { i++; one(); };
      });
    };
    one();
  };
}
/* Bài buổi chiều: câu mới của bạn + câu Đời sống hôm nay, đủ 4 kỹ năng */
function openNote(){
  const {nw, lf} = noteItems(), items = [...nw, ...lf];
  if (!items.length){ toast('Chưa có câu để luyện. Thêm câu vào Sổ câu nhé.'); return; }
  const withVi = items.filter(c => c.vi), sp = (it, sc, fast) => { (LS.ns ||= {})[it.id] = [sc, fast]; };
  const steps = [];
  if (withVi.length >= 2) steps.push({icon:'ear', name:'Nghe: chọn nghĩa đúng', run:listenPick(shuffle(withVi))});
  steps.push({icon:'book', name:'Đọc: đọc to từng câu', run:speakSeq(items, {mode:'full', showVi:true, rates:[1], label:'Nghe mẫu rồi đọc to'})});
  steps.push({icon:'pen', name:'Viết: nghe chép, nhìn nghĩa viết', run:dictStep(shuffle(items), c => !!c.vi && !nw.includes(c))});
  steps.push({icon:'mic', name:'Nói: nhìn nghĩa, nói tiếng Anh', run:speakSeq(shuffle(items), it => it.vi
    ? {mode:'none', showVi:true, rates:[], timer:6, label:'Nhìn nghĩa, nói tiếng Anh (6 giây)', after:sp}
    : {mode:'mask', showVi:false, rates:[], label:'Chữ đã ẩn bớt, nói cả câu', after:sp})});
  openLesson('Sổ câu · nghe, đọc, viết, nói', steps, sc => {
    items.forEach(c => { learn(c.id); const r = LS.ns?.[c.id]; if (r) review(c.id, r[0], r[1]); });
    save();
    return {pass:sc >= 85, msg:(nw.length ? `${nw.length} câu mới đã vào lịch ôn, sẽ gặp lại sau 1, 3, 7 ngày... ` : '') + 'Câu nói chưa tốt sẽ gặp lại sớm trong mục Ôn câu đến hạn.'};
  }, 'note');
}

/* ============ MỨC DỄ / VỪA / KHÓ VÀ SAO ============ */
/* Bài làm lần đầu: mức Dễ. Bài đã có sao: chọn mức để làm lại, qua 85% thì nhận sao của mức đó. */
let LEVEL = 2, CUR_SK = null;
const LVN = ['', 'Dễ', 'Vừa', 'Khó'];
const LVD = ['', 'Có gợi ý chữ cái đầu và nghĩa, nói trong 5 giây', 'Bấm mới hiện gợi ý, nói trong 5 giây', 'Không gợi ý, tự gõ đáp án, nói trong 3 giây'];
const stars = n => '★'.repeat(n) + (n < 3 ? `<i class="s0">${'★'.repeat(3 - n)}</i>` : '');
const stHTML = n => n ? `<span class="n st">${stars(n)}</span>` : '';
const starTag = sk => stHTML(S.star[sk] || 0);
const tmr = t => t && LEVEL === 3 ? Math.min(t, 3) : t;
function withLevel(sk, fn){
  const got = S.star[sk] || 0;
  if (!got){ LEVEL = 1; CUR_SK = sk; fn(); return; }
  const def = Math.min(3, got + 1), box = document.createElement('div'); box.className = 'lesson'; box.style.zIndex = 40;
  box.innerHTML = `<div class="wrap"><div class="lhead">${ib('x','Đóng','','id="lvx"')}<h2 style="flex:1">Chọn mức</h2></div><p class="sm muted">Bạn đã đạt <span class="stx">${stars(got)}</span> ở bài này. Làm lại ở mức khó hơn để lấy thêm sao.</p>
    ${[1, 2, 3].map(n => `<button class="opt lvopt ${n === def ? 'on' : ''}" data-lv="${n}"><b>${LVN[n]} <span class="stx">${stars(n)}</span></b><br><span class="xs muted">${LVD[n]}</span></button>`).join('')}</div>`;
  document.body.appendChild(box);
  box.querySelector('#lvx').onclick = () => box.remove();
  box.querySelectorAll('[data-lv]').forEach(b => b.onclick = () => { box.remove(); LEVEL = +b.dataset.lv; CUR_SK = sk; fn(); });
}
/* "Better late" -> "B_____ l___" */
const hintOf = en => en.split(' ').map(w => { const f = w.search(/[A-Za-z]/); return w.replace(/[A-Za-z]/g, (ch, i) => i === f ? ch : '_'); }).join(' ');
const dictHint = c => LEVEL === 1 ? `<p class="hint">${esc(hintOf(c.en))}</p>` : LEVEL === 2 ? `<button class="btn ghost" id="chint">${ico('eye')} Gợi ý chữ cái đầu</button>` : '';

/* ============ SỔ LỖI SAI ============ */
/* Câu chọn sai nghĩa, xếp sai, viết sai, ngữ pháp sai. Làm đúng thì rời sổ. */
function miss(key, data){ const m = S.miss[key]; S.miss[key] = Object.assign({}, data, {n:(m?.n || 0) + 1, at:Date.now()}); save(); }
function fixMiss(key){ if (S.miss[key]){ delete S.miss[key]; save(); } }
const missMark = (c, good) => { if (!c?.id || !CARDS[c.id]) return; good ? fixMiss('c:' + c.id) : miss('c:' + c.id, {t:'card', id:c.id}); };
const gramQ0 = m => WEEKS.find(w => w.w === m.w)?.gram?.qs[m.i];
const missList = () => Object.entries(S.miss).filter(([, m]) => m.t === 'gram' ? gramQ0(m) : m.t === 'say' ? m.en : CARDS[m.id]).sort((a, b) => a[1].at - b[1].at);
/* Câu nói chưa đạt sau 3 lần: lưu để ôn (câu có thẻ thì theo thẻ, câu khác thì lưu nguyên câu) */
const sayKey = it => 'say:' + (it.id && CARDS[it.id] ? it.id : it.en);
function saveSay(it){ if (!it?.en) return; miss(sayKey(it), {t:'say', en:it.en, vi:it.vi || '', a:it.a || null, nk:it.nk || null, id:it.id && CARDS[it.id] ? it.id : null}); }
function openMiss(){
  const list = missList().slice(0, 15);
  if (!list.length){ toast('Chưa có câu làm sai. Giỏi lắm!'); return; }
  openLesson('Ôn câu sai', [{icon:'repeat', name:`${list.length} câu`, run:(el, next) => {
    let i = 0, ok = 0;
    const one = () => {
      if (i >= list.length){ next(Math.round(ok / list.length * 100)); return; }
      const [key, m] = list[i];
      el.innerHTML = `<p class="xs b muted">${i+1}/${list.length} · đã sai ${m.n} lần</p>`;
      const box = document.createElement('div'); box.style.cssText = 'display:flex;flex-direction:column;gap:12px'; el.appendChild(box);
      if (m.t === 'gram') gramQ(box, gramQ0(m), g => { if (g){ ok++; fixMiss(key); } else miss(key, m); i++; one(); });
      else if (m.t === 'say') speakBlock(box, {en:m.en, vi:m.vi, a:m.a, nk:m.nk, id:m.id}, {mode:'full', showVi:true, rates:[1], label:'Câu nói chưa đạt: nghe rồi đọc lại', onDone:sc => { if (sc >= 85){ ok++; fixMiss(key); } i++; one(); }});
      else dictStep([CARDS[m.id]], () => !!CARDS[m.id].vi)(box, sc => { if (sc >= 85) ok++; i++; one(); });
    };
    one();
  }}], () => ({msg:'Câu làm đúng đã rời Sổ lỗi sai. Câu còn sai sẽ gặp lại lần sau.'}), 'miss');
}

/* ============ NGỮ PHÁP (mỗi tuần một bài, gắn với câu Đời sống của tuần) ============ */
const CARD_EN = {};
Object.values(CARDS).forEach(c => { if (c.en && !CARD_EN[c.en]) CARD_EN[c.en] = c; });
const itemFor = en => CARD_EN[en] || {en};
/* Một câu điền chỗ trống. q = [câu có ___, đáp án, [lựa chọn], nghĩa, câu đầy đủ?] */
function gramQ(el, q, done){
  const [sent, ans, opts, vi, full0, a0] = q, full = full0 || sent.replace('___', ans).replace(/\s*\(.*?\)\s*$/, ''), it = a0 ? {en:full, a:a0} : itemFor(full);
  el.insertAdjacentHTML('beforeend', `<p class="en">${esc(sent).replace('___', '<span class="blank">_____</span>')}</p>${!vi ? '' : LEVEL === 1 ? `<p class="vi">${esc(vi)}</p>` : LEVEL === 2 ? `<button class="btn ghost" data-gv="1">${ico('vi')} Xem nghĩa</button>` : ''}
    ${LEVEL === 3 ? `<input type="text" data-ga="1" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Gõ từ còn thiếu..."><button class="btn block" data-gok="1">${ico('check')}</button>` : shuffle(opts).map(o => `<button class="opt" data-o="${esc(o)}">${esc(o)}</button>`).join('')}<div class="gres" style="display:flex;flex-direction:column;gap:10px"></div>`);
  el.querySelector('[data-gv]')?.addEventListener('click', e => { e.currentTarget.outerHTML = `<p class="vi">${esc(vi)}</p>`; });
  const res = good => { const r = el.querySelector('.gres'); r.innerHTML = `<div class="note">${good ? 'Đúng rồi!' : 'Đáp án: <b>' + esc(ans) + '</b>'}<br>${esc(full)}</div><button class="btn block">${ico('next')}</button>`; playItem(it); r.querySelector('button').onclick = () => done(good); };
  if (LEVEL === 3){
    const inp = el.querySelector('[data-ga]'), okb = el.querySelector('[data-gok]');
    const go = () => { const v = inp.value.trim(); if (!v) return; okb.remove(); inp.readOnly = true; const n = s => s.toLowerCase().replace(/[’‘]/g, "'").replace(/\s+/g, ' '); res(n(v) === n(ans)); };
    okb.onclick = go; inp.onkeydown = e => { if (e.key === 'Enter') go(); }; inp.focus();
  } else el.querySelectorAll('[data-o]').forEach(b => b.onclick = () => { const g = b.dataset.o === ans; el.querySelectorAll('[data-o]').forEach(x => { x.disabled = true; if (x.dataset.o === ans) x.classList.add('ok'); }); if (!g) b.classList.add('bad'); res(g); });
}
/* list: [{q, key, data}] — câu sai vào Sổ lỗi sai */
function gramQuiz(list){
  return (el, next) => {
    let i = 0, ok = 0;
    const one = () => {
      if (i >= list.length){ next(Math.round(ok / list.length * 100)); return; }
      const x = list[i]; el.innerHTML = `<p class="xs b muted">Câu ${i+1}/${list.length}</p>`;
      gramQ(el, x.q, g => { if (g){ ok++; fixMiss(x.key); } else miss(x.key, x.data); i++; one(); });
    };
    one();
  };
}
function slidesStep(slides){
  return (el, next) => {
    let k = 0;
    const one = () => {
      const [h, t, en, vi] = slides[k], it = itemFor(en);
      el.innerHTML = `<p class="xs b muted">Phần ${k+1}/${slides.length}</p><h3>${esc(h)}</h3><div class="note">${esc(t)}</div><div class="li"><span class="t"><b>${esc(en)}</b><br><span class="sm muted">${esc(vi)}</span></span>${ib('play','Nghe','','data-sp="1"')}</div><button class="btn block" data-sn="1">${ico('next')}</button>`;
      el.querySelector('[data-sp]').onclick = () => playItem(it); playItem(it);
      el.querySelector('[data-sn]').onclick = () => { k++; k >= slides.length ? next(null) : one(); };
    };
    one();
  };
}
function openGram(w){
  const g = w.gram; if (!g) return;
  withLevel('g:' + w.w, () => openLesson(`Ngữ pháp · Tuần ${w.w} · ${g.title}`, [
    {icon:'book', name:`Lý thuyết (${g.slides.length} phần)`, run:slidesStep(g.slides)},
    {icon:'check', name:`Bài tập (${g.qs.length} câu)`, run:gramQuiz(g.qs.map((q, i) => ({q, key:`g:${w.w}:${i}`, data:{t:'gram', w:w.w, i}})))},
    {icon:'mic', name:'Nói câu ví dụ', run:speakSeq(g.slides.map(s => Object.assign({}, itemFor(s[2]), {vi:s[3]})), {mode:'full', showVi:true, rates:[1]})}
  ], sc => { S.gram[w.w] = Math.max(S.gram[w.w] ?? 0, sc); save(); return {pass:sc >= 85, msg:sc >= 85 ? 'Câu làm sai (nếu có) đã vào Sổ lỗi sai để ôn lại.' : 'Chưa đạt 85%. Câu sai đã vào Sổ lỗi sai, ôn rồi làm lại bài nhé.'}; }, 'gram'));
}

/* ============ TỪ VỰNG: từ, phiên âm, nghĩa, câu ví dụ ============ */
const VOC = [];
WEEKS.forEach(w => (w.vocab || []).forEach((v, k) => { const [en, ipa, vi, ex, a] = v, c = CARD_EN[ex]; const o = {id:`v${w.w}-${k}`, en, ipa, vi, ex, a, exVi:c?.vi || '', exA:c?.a, w:w.w, src:'Từ vựng · Tuần ' + w.w, word:true}; VOC.push(o); CARDS[o.id] = o; }));
const exItem = v => ({en:v.ex, vi:v.exVi, a:v.exA, nk:v.exk});
const fillBlank = v => v.ex.replace(new RegExp('\\b' + v.en.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'), '___');
function wordCards(vs){
  return (el, next) => {
    let k = 0;
    const one = () => {
      const v = vs[k];
      el.innerHTML = `<p class="xs b muted">${k+1}/${vs.length}</p><div class="wcard"><p class="word">${esc(v.en)}</p>${v.ipa ? `<p class="ipa-l">${esc(v.ipa)}</p>` : ''}<div class="row" style="justify-content:center">${ib('play','Nghe từ','main','data-wp="1"')}${ib('turtle','Nghe chậm','','data-ws="1"')}</div><p class="vi">${esc(v.vi)}</p></div>
        ${v.ex ? `<div class="li"><span class="t"><b>${esc(v.ex)}</b><br><span class="sm muted">${esc(v.exVi || '')}</span></span>${ib('play','Nghe câu ví dụ','','data-we="1"')}</div>` : ''}`;
      recordCompare(el, {en:v.en});
      el.insertAdjacentHTML('beforeend', `<button class="btn block" data-wn="1">${ico('next')}</button>`);
      el.querySelector('[data-wp]').onclick = () => playItem(v); el.querySelector('[data-ws]').onclick = () => playItem(v, .7);
      el.querySelector('[data-we]')?.addEventListener('click', () => playItem(exItem(v)));
      (async () => { await playItem(v); await wait(350); if (el.isConnected && vs[k] === v && v.ex) playItem(exItem(v)); })();
      el.querySelector('[data-wn]').onclick = () => { k++; k >= vs.length ? next(null) : one(); };
    };
    one();
  };
}
function openVocab(w){
  const vs = VOC.filter(v => v.w === w.w); if (!vs.length) return;
  withLevel('v:' + w.w, () => openLesson(`Từ vựng · Tuần ${w.w}`, [
    {icon:'book', name:`Thẻ từ (${vs.length} từ)`, run:wordCards(vs)},
    {icon:'ear', name:'Nghe từ, chọn nghĩa', run:listenPick(shuffle(vs), vs)},
    {icon:'pen', name:'Nhìn nghĩa, viết từ', run:dictStep(shuffle(vs), () => true)},
    {icon:'swap', name:'Điền từ vào câu', run:gramQuiz(shuffle(vs).map(v => ({q:[fillBlank(v), v.en, [v.en, ...shuffle(vs.filter(x => x !== v)).slice(0, 2).map(x => x.en)], v.exVi, v.ex], key:'c:' + v.id, data:{t:'card', id:v.id}})))},
    {icon:'mic', name:'Nói câu ví dụ', run:speakSeq(vs.map(exItem), {mode:'mask', showVi:true, rates:[1]})}
  ], sc => { vs.forEach(v => learn(v.id)); S.voc[w.w] = Math.max(S.voc[w.w] ?? 0, sc); save(); return {pass:sc >= 85, msg:`${vs.length} từ đã vào lịch ôn. Tra lại bất cứ lúc nào ở Lộ trình › Từ vựng.`}; }, 'voc'));
}
/* Tra từ: từ của từng tuần + từ bạn thêm vào Sổ câu */
let VQ = '';
/* Ô Ngữ pháp: mỗi tuần một bài (bài giảng ngắn + câu luyện), mở theo tuần Đời sống */
function gramPanel(v){
  const curW = nextSched()?.w.w ?? 99, ws = WEEKS.filter(w => w.gram);
  const rows = ws.map(w => ({lock:w.w > curW, go:() => openGram(w)}));
  const s = sec(`<h3>Ngữ pháp theo tuần</h3><p class="sm muted">Mỗi bài: vài trang giảng ngắn rồi luyện câu. Bài mở cùng tuần Đời sống. Bấm Học tiếp ở Hôm nay, app tự xếp bài vào buổi sáng.</p>`
    + ws.map((w, k) => lrow(k, {n:w.w, t:esc(w.gram.title), s:`Tuần ${w.w} · ${esc(w.title)}`, st:(S.gram[w.w] >= 85 ? 'done' : w.w > curW ? 'lock' : S.gram[w.w] != null ? 'half' : '') + (w.w === curW && !(S.gram[w.w] >= 85) ? ' next' : ''), right:pctTag(S.gram[w.w]) + starTag('g:' + w.w)})).join('')
    + `<p class="xs muted">Tuần ${WEEKS.length + 1}-12: đang soạn.</p>`);
  s.querySelectorAll('.lrow').forEach(b => b.onclick = () => { const x = rows[+b.dataset.k]; x.lock ? toast('Bài này mở khi bạn học tới tuần đó.') : x.go(); });
  v.appendChild(s);
}
/* Ô Từ vựng: tra từ điển ở trên, dưới là bộ từ từng tuần (bấm để học) và từ bạn thêm */
let DQ = '';
function dictPanel(v){
  const s = sec(`<h3>Tra từ điển</h3><div class="search">${ico('search')}<input type="text" id="dq" placeholder="Gõ từ tiếng Anh, ví dụ: tired" value="${esc(DQ)}" autocapitalize="off" spellcheck="false"></div><div id="dr"></div>`);
  v.appendChild(s);
  let tok = 0;
  const look = async () => {
    const w = DQ.trim().toLowerCase(), my = ++tok, box = s.querySelector('#dr');
    if (!/^[a-z][a-z' -]*$/.test(w)){ box.innerHTML = w ? '<p class="xs muted">Gõ chữ tiếng Anh nhé.</p>' : ''; return; }
    const it = {en:w, word:true}; await lookupWords([it]); if (my !== tok) return;
    if (!it.vi && !it.ipa){ box.innerHTML = '<p class="sm muted">Không thấy từ này trong từ điển. Kiểm tra lại chính tả nhé.</p>'; return; }
    const had = S.saved.some(c => c.en.toLowerCase() === w);
    box.innerHTML = `<div class="dcard"><p class="en">${esc(w)} <span class="ipa-s">${esc(it.ipa || '')}</span></p><p class="sm">${esc(it.vi || '')}</p>${it.ex ? `<p class="sm"><b>${esc(it.ex)}</b><br><span class="muted">${esc(it.exVi || '')}</span></p>` : ''}<div class="row">${ib('play','Nghe','','id="dp"')}${it.ex ? ib('book','Nghe câu ví dụ','','id="dpe"') : ''}<button class="btn ${had ? 'ghost' : 'sun'}" id="dadd" ${had ? 'disabled' : ''}>${ico('plus')} ${had ? 'Đã có trong sổ' : 'Thêm vào Sổ câu'}</button></div></div>`;
    box.querySelector('#dp').onclick = () => tts(w);
    box.querySelector('#dpe')?.addEventListener('click', () => tts(it.ex));
    box.querySelector('#dadd').onclick = () => { const c = Object.assign({id:'my-' + Date.now().toString(36), src:MYSRC, at:Date.now()}, it); S.saved.push(c); CARDS[c.id] = c; save(); makeVoices([c]); toast('Đã thêm vào Sổ câu, sẽ vào lịch ôn sau khi luyện.'); look(); };
  };
  let t = 0; s.querySelector('#dq').oninput = e => { DQ = e.target.value; clearTimeout(t); t = setTimeout(look, 350); };
  if (DQ) look();
}
function vocabPanel(v){
  dictPanel(v);
  const s = sec(`<h3>Bộ từ theo tuần</h3><div class="search">${ico('search')}<input type="text" id="vq" placeholder="Tìm trong các bộ từ..." value="${esc(VQ)}"></div><p class="xs muted">Bấm "Học bộ từ" để luyện cả tuần. Chạm một từ để xem nghĩa, câu ví dụ và nghe.</p><div id="vl" style="display:flex;flex-direction:column;gap:8px"></div>`);
  v.appendChild(s);
  const curW = nextSched()?.w.w;
  const draw = () => {
    const q = VQ.toLowerCase(), m = x => !q || (x.en + ' ' + x.vi).toLowerCase().includes(q), groups = [];
    WEEKS.forEach(w => { const xs = VOC.filter(x => x.w === w.w && m(x)); if (xs.length) groups.push([`Tuần ${w.w} · ${w.title}`, xs, 'vw' + w.w]); });
    const mine = S.saved.filter(c => c.word && m(c)); if (mine.length) groups.push(['Từ bạn thêm', mine, 'vmine']);
    s.querySelector('#vl').innerHTML = groups.length ? groups.map(([t, xs, g]) => `<details class="grp" data-g="${g}" ${q || (OPENG[g] ?? g === 'vw' + curW) ? 'open' : ''}><summary><span>${esc(t)}</span><span class="n">${/^vw\d/.test(g) ? pctTag(S.voc[+g.slice(2)]) + starTag('v:' + g.slice(2)) : ''}${xs.length}</span></summary>${/^vw\d/.test(g) ? `<button class="btn ${+g.slice(2) > (curW ?? 99) ? 'ghost' : 'sun'} block" data-vw="${g.slice(2)}">${ico('play')} Học bộ từ tuần ${g.slice(2)}</button>` : ''}${xs.map(x => `<div class="line"><button data-o="${esc(x.id)}"><span class="tx">${esc(x.en)} <span class="ipa-s">${esc(x.ipa || '')}</span></span><span class="lv">${!S.cards[x.id] ? 'mới' : isKnown(x.id) ? 'thuộc' : 'mức ' + S.cards[x.id].lv}</span></button><div class="more" hidden data-m="${esc(x.id)}"><span class="sm">${esc(x.vi)}</span>${x.ex ? `<div class="li"><span class="t"><b>${esc(x.ex)}</b><br><span class="sm muted">${esc(x.exVi || '')}</span></span>${ib('play','Nghe câu ví dụ','',`data-pe="${esc(x.id)}"`)}</div>` : ''}<div class="row">${ib('play','Nghe từ','',`data-p="${esc(x.id)}"`)}${ib('mic','Luyện từ này','',`data-r="${esc(x.id)}"`)}</div></div></div>`).join('')}</details>`).join('') : '<p class="sm muted">Không có từ khớp.</p>';
    s.querySelectorAll('[data-o]').forEach(b => b.onclick = () => { const e = s.querySelector(`[data-m="${CSS.escape(b.dataset.o)}"]`); e.hidden = !e.hidden; });
    s.querySelectorAll('[data-p]').forEach(b => b.onclick = () => playItem(CARDS[b.dataset.p]));
    s.querySelectorAll('[data-pe]').forEach(b => b.onclick = () => playItem(exItem(CARDS[b.dataset.pe])));
    s.querySelectorAll('[data-r]').forEach(b => b.onclick = () => openReview([b.dataset.r], 'Luyện từ'));
    s.querySelectorAll('[data-vw]').forEach(b => b.onclick = () => { const w = WEEKS.find(x => x.w === +b.dataset.vw); w.w > (curW ?? 99) ? toast('Bộ từ này mở khi bạn học tới tuần đó.') : openVocab(w); });
  };
  s.querySelector('#vq').oninput = e => { VQ = e.target.value; draw(); };
  draw();
}
/* Từ bạn tự thêm: tra phiên âm và câu ví dụ ở từ điển miễn phí (chỉ gửi đi chữ của từ đó) */

/* ============ TỪ ĐIỂN ANH-VIỆT TRONG APP ============ */
/* Nghĩa + ví dụ: Free Vietnamese Dictionary Project (Hồ Ngọc Đức, GPL). Phiên âm Mỹ: CMU Pronouncing Dictionary (BSD).
   Chia file theo 2 chữ cái đầu (dict/ex.json), chỉ tải phần cần, tải rồi thì dùng được khi mất mạng. */
const DICT = {};
function dictChunk(w){
  const c = w.toLowerCase().replace(/[^a-z]/g, '').slice(0, 2).padEnd(2, '_');
  if (!DICT[c]) DICT[c] = fetch('dict/' + c + '.json').then(r => r.ok ? r.json() : {}).catch(() => { delete DICT[c]; return {}; });
  return DICT[c];
}
async function dictGet(w){ w = String(w).toLowerCase().trim().replace(/[’‘]/g, "'"); if (!w) return null; return (await dictChunk(w))[w] || null; }
/* Dạng gốc của từ: socks -> sock, cried -> cry, running -> run */
function baseForms(w){
  const f = [w];
  if (/ies$/.test(w)) f.push(w.slice(0, -3) + 'y');
  if (/es$/.test(w)) f.push(w.slice(0, -2));
  if (/s$/.test(w)) f.push(w.slice(0, -1));
  if (/ied$/.test(w)) f.push(w.slice(0, -3) + 'y');
  if (/ed$/.test(w)) f.push(w.slice(0, -2), w.slice(0, -1));
  if (/ing$/.test(w)) f.push(w.slice(0, -3), w.slice(0, -3) + 'e');
  if (/(.)\1(ed|ing)$/.test(w)) f.push(w.replace(/(.)\1(ed|ing)$/, '$1'));
  return [...new Set(f)];
}
async function dictFind(w){ for (const f of baseForms(w.toLowerCase())){ const x = await dictGet(f); if (x && (x.m || x.e)) return {w:f, x}; } return null; }

/* ARPAbet (CMU) -> IPA kiểu Mỹ, có dấu trọng âm */
const ARPA = {AA:'ɑː',AE:'æ',AH:'ʌ',AO:'ɔː',AW:'aʊ',AY:'aɪ',EH:'e',ER:'ɝ',EY:'eɪ',IH:'ɪ',IY:'iː',OW:'oʊ',OY:'ɔɪ',UH:'ʊ',UW:'uː',B:'b',CH:'tʃ',D:'d',DH:'ð',F:'f',G:'ɡ',HH:'h',JH:'dʒ',K:'k',L:'l',M:'m',N:'n',NG:'ŋ',P:'p',R:'r',S:'s',SH:'ʃ',T:'t',TH:'θ',V:'v',W:'w',Y:'j',Z:'z',ZH:'ʒ'};
const isVowel = a => /^[AEIOU]/.test(a);
const phIPA = a => { const b = a.replace(/\d/g, ''); if (b === 'AH' && a.endsWith('0')) return 'ə'; if (b === 'ER' && a.endsWith('0')) return 'ɚ'; return ARPA[b] || b.toLowerCase(); };
const phList = p => (p || '').split(' ').filter(Boolean);
function arpaIPA(p){
  const ph = phList(p), nv = ph.filter(isVowel).length, out = ph.map(phIPA);
  if (nv > 1) for (let i = ph.length - 1; i >= 0; i--){
    const m = ph[i].match(/[12]$/); if (!m || !isVowel(ph[i])) continue;
    let j = i; const c1 = ph[i-1], c2 = ph[i-2];
    if (c1 && !isVowel(c1)){ j = i - 1; if (c2 && !isVowel(c2) && (c2 === 'S' || ['R','L','W','Y'].includes(c1))) j = i - 2; if (ph[j-1] === 'S' && j === i - 2 && !isVowel(ph[j-1])) j--; }
    out[j] = (m[0] === '1' ? 'ˈ' : 'ˌ') + out[j];
  }
  return '/' + out.join('') + '/';
}
/* Tra một từ hoặc cụm từ cho Sổ câu: phiên âm Mỹ, nghĩa người soạn, câu ví dụ có bản dịch */
async function lookupWords(cs, st){
  for (const c of cs){
    if (st) st.innerHTML = `<p class="sm b">Đang tra từ điển: ${esc(c.en)}...</p>`;
    const ws = c.en.toLowerCase().split(/\s+/);
    const hit = await dictFind(c.en);
    if (ws.length === 1 || hit){
      if (hit){
        const {x} = hit;
        if (!c.vi && x.m) c.vi = x.m.slice(0, 2).map(([pos, ms]) => (pos ? `(${pos}) ` : '') + ms.slice(0, 3).join('; ')).join(' · ');
        const ex = (x.e || []).find(e => e[0].split(' ').length >= 3) || (x.e || [])[0];
        if (ex && !c.ex){ c.ex = ex[0][0].toUpperCase() + ex[0].slice(1); c.exVi = ex[1]; }
        const p = x.p || (await dictGet(c.en))?.p;
        c.ipa = p ? arpaIPA(p) : (x.u || '').replace(/:/g, 'ː').replace(/'/g, 'ˈ');
        c.dict = true;
      }
    }
    if (ws.length > 1){
      /* Cụm từ: ghép phiên âm từng từ; tìm nghĩa trong ví dụ của các từ trong cụm (vd "to keep in touch with") */
      if (!c.ipa){ const ps = []; for (const w of ws){ const y = await dictGet(w); if (!y?.p){ ps.length = 0; break; } ps.push(arpaIPA(y.p).slice(1, -1)); } if (ps.length) c.ipa = '/' + ps.join(' ') + '/'; }
      if (!c.vi){
        /* Ví dụ đúng là cụm này (vd "to keep in touch with") thì dùng nghĩa của nó; còn không thì lấy nghĩa động từ chính (vd wake up -> wake) */
        const re = new RegExp('\\b' + ws.join('\\s+') + '\\b', 'i'), exact = new RegExp('^(to\\s+)?' + ws.join('\\s+') + '(\\s+(with|to|for|on|in|at|of|sb|somebody|someone|something|sth))?$', 'i');
        let found = null;
        for (const w of ws){ const y = (await dictFind(w))?.x; const e = (y?.e || []).find(e => re.test(e[0])); if (e && (!found || (exact.test(e[0]) && !exact.test(found[0])))) found = e; if (found && exact.test(found[0])) break; }
        if (found && exact.test(found[0])) c.vi = found[1];
        else { const y = (await dictFind(ws[0]))?.x, m = (y?.m || []).find(m => /động từ/.test(m[0])) || y?.m?.[0]; if (m) c.vi = (m[0] ? `(${m[0]}) ` : '') + m[1].slice(0, 3).join('; '); }
        if (found && !c.ex){ c.ex = found[0][0].toUpperCase() + found[0].slice(1); c.exVi = found[1]; }
        if (c.vi) c.dict = true;
      }
    }
  }
  save();
}

/* ============ GIỌNG ĐỌC TỰ NHIÊN (Kokoro, chạy trong máy) ============ */
/* Câu bạn tự thêm được đọc bằng giọng tự nhiên, lưu lại trong máy để lần sau phát ngay, không cần mạng. */
const VDB = {
  db:null,
  open(){ return this.db || (this.db = new Promise((res, rej) => { const r = indexedDB.open('tanm-voice', 1); r.onupgradeneeded = () => r.result.createObjectStore('v'); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); })); },
  async put(k, v){ const db = await this.open(); return new Promise(res => { const t = db.transaction('v', 'readwrite'); t.objectStore('v').put(v, k); t.oncomplete = res; t.onerror = res; }); },
  async get(k){ const db = await this.open(); return new Promise(res => { const q = db.transaction('v').objectStore('v').get(k); q.onsuccess = () => res(q.result); q.onerror = () => res(null); }); }
};
const VURL = {};
async function voiceUrl(k){ if (VURL[k]) return VURL[k]; const b = await VDB.get(k); if (!b) return null; return VURL[k] = URL.createObjectURL(b); }
let KOK = null, VQUEUE = Promise.resolve();
const kokoro = () => KOK || (KOK = import('./tts.js').then(m => m.default).catch(e => { KOK = null; throw e; }));
/* Câu bài học đã thay tên, nghề của bạn: tạo giọng tự nhiên (lưu theo nội dung câu) */
function makePzVoices(){
  if (!S.set.neural || !D.public) return;
  const set = new Set();
  D.life.forEach(w => w.days.forEach(d => { d.cards.forEach(c => c.pz && set.add(c.en)); d.patterns.forEach(p => p.fills.forEach(f => f.pz && set.add(f.en))); d.dialogue.forEach(l => l.pz && set.add(l.en)); d.ask.forEach(a => a.pz && set.add(a.ans)); }));
  if (!set.size) return;
  VQUEUE = VQUEUE.then(async () => { try{ const K = await kokoro(); for (const t of set){ const k = 'p:' + t; if (await VDB.get(k)) continue; await VDB.put(k, await K.speak(t)); } }catch(e){ console.warn('Kokoro', e); } });
}
/* Nghề, nơi làm bạn nhập: từ nào không có trong từ điển thì gợi ý từ gần giống nhất */
function editDist(a, b){ const d = [...Array(b.length + 1).keys()]; for (let i = 1; i <= a.length; i++){ let p = d[0]; d[0] = i; for (let j = 1; j <= b.length; j++){ const t = d[j]; d[j] = Math.min(d[j] + 1, d[j-1] + 1, p + (a[i-1] === b[j-1] ? 0 : 1)); p = t; } } return d[b.length]; }
async function meTypos(me){
  const out = [];
  for (const [f, v] of [['#mj', me.job], ['#mp', me.place]]) for (const w of (v || '').split(/\s+/).filter(x => /^[a-z]+$/.test(x))){
    if (await dictGet(w)) continue;
    const ch = await dictChunk(w); let best = null, bd = 3;
    Object.keys(ch).forEach(k => { if (!/^[a-z]+$/.test(k) || Math.abs(k.length - w.length) > 2 || !ch[k].p) return; const e = editDist(w, k); if (e < bd || (e === bd && best && k.startsWith(w) && !best.startsWith(w))){ bd = e; best = k; } });
    out.push([w, f, best]);
  }
  return out;
}
/* Tạo giọng cho các câu chưa có (chạy nền, lần lượt từng câu) */
function makeVoices(list, onMsg){
  if (!S.set.neural) return VQUEUE;
  const jobs = list.flatMap(c => [[c, 'en', 'nk'], [c, 'ex', 'exk']]).filter(([c, f, k]) => c[f] && !c[k]);
  if (!jobs.length) return VQUEUE;
  VQUEUE = VQUEUE.then(async () => {
    try{
      const K = await kokoro();
      for (let i = 0; i < jobs.length; i++){
        const [c, f, k] = jobs[i];
        if (c[k]) continue;
        onMsg?.(`Đang tạo giọng đọc ${i + 1}/${jobs.length}...`);
        const blob = await K.speak(c[f], {onProg:p => { if (p.status === 'progress' && p.file?.endsWith('.onnx')) onMsg?.(`Tải giọng đọc tự nhiên lần đầu: ${Math.round(p.progress || 0)}%`); }});
        const key = 'n:' + c.id + ':' + f; await VDB.put(key, blob); c[k] = key; save();
      }
      onMsg?.('');
    }catch(e){ onMsg?.(''); console.warn('Kokoro', e); }
  });
  return VQUEUE;
}
const allNotes = () => S.saved.filter(c => String(c.id).startsWith('my-'));

/* ============ CHẤM CHỮA THEO TỪNG ÂM (như giáo viên) ============ */
/* So câu máy nghe được với câu mẫu: từng từ, rồi từng âm (theo phiên âm chuẩn CMU). */
const PH_TIP = {
  P:'Mím hai môi rồi bật hơi mạnh (để tờ giấy trước miệng sẽ thấy giấy rung). Cuối từ vẫn khép môi rõ.',
  B:'Mím hai môi, rung cổ họng, bật nhẹ.',
  T:'Đầu lưỡi chạm lợi ngay sau răng trên, bật hơi, không rung cổ. Cuối từ phải bật nhẹ /t/, không nuốt mất.',
  D:'Đầu lưỡi chạm lợi sau răng trên, rung cổ họng. Cuối từ đọc rõ /d/, không đọc thành /t/.',
  K:'Cuống lưỡi chạm vòm mềm rồi bật hơi. Cuối từ phải bật nhẹ /k/.',
  G:'Như /k/ nhưng rung cổ họng.',
  CH:'Chu môi, đầu lưỡi chạm lợi rồi bật ra "ch" có hơi gió. Không giống "ch" tiếng Việt.',
  JH:'Như /tʃ/ nhưng rung cổ họng, môi hơi chu.',
  F:'Răng trên chạm nhẹ môi dưới, thổi hơi, không rung.',
  V:'Răng trên chạm môi dưới và rung cổ họng. Không đọc thành /b/ hay /w/.',
  TH:'Đặt đầu lưỡi giữa hai hàm răng, thổi hơi ra, không rung. Không đọc thành /t/ hay /s/.',
  DH:'Đặt đầu lưỡi giữa hai hàm răng và rung cổ họng. Không đọc thành /d/ hay /z/.',
  S:'Đầu lưỡi gần lợi trên, xì hơi mạnh "sss". Cuối từ phải giữ tiếng xì.',
  Z:'Như /s/ nhưng rung cổ họng "zzz".',
  SH:'Chu tròn môi ra trước, lưỡi lùi vào trong, thổi "sh" dày hơn /s/.',
  ZH:'Như /ʃ/ nhưng rung cổ họng.',
  HH:'Đẩy hơi nhẹ từ cổ họng như thở ra.',
  M:'Mím môi, ngân qua mũi.',
  N:'Đầu lưỡi chạm lợi trên, ngân qua mũi. Cuối từ giữ lưỡi ở lợi, không chuyển thành /ŋ/.',
  NG:'Cuống lưỡi chạm vòm mềm, ngân qua mũi, không bật /ɡ/ ra.',
  L:'Đầu lưỡi chạm lợi sau răng trên. Cuối từ (như "school") vẫn giữ lưỡi chạm lên, không bỏ.',
  R:'Cong đầu lưỡi lên, không chạm vòm miệng, môi hơi tròn. Không rung lưỡi như "r" tiếng Việt.',
  W:'Chu tròn môi rồi mở nhanh.',
  Y:'Nâng lưỡi cao như đọc "i" rồi lướt nhanh sang nguyên âm sau.',
  IY:'"i" dài, kéo môi sang hai bên như đang cười.',
  IH:'"i" ngắn, miệng thả lỏng, hơi giống "ê" và rất gọn.',
  EH:'"e" ngắn, miệng mở vừa.',
  AE:'Mở miệng rộng, hạ hàm, âm nằm giữa "a" và "e".',
  AA:'"a" dài, mở rộng miệng, lưỡi hạ thấp.',
  AO:'"o" dài, môi tròn.',
  AH:'Âm "â"/"ơ" ngắn, miệng mở vừa, không tròn môi.',
  UH:'"u" ngắn, môi hơi tròn, thả lỏng.',
  UW:'"u" dài, chu môi tròn.',
  ER:'Âm "ơ" kèm cong lưỡi như /r/.',
  EY:'Đọc "ê" rồi lướt sang "i" (gần "ây").',
  AY:'Đọc "a" rồi lướt sang "i" (gần "ai").',
  OW:'Đọc "ô" rồi lướt sang "u", tròn môi (gần "âu").',
  AW:'Đọc "a" rồi lướt sang "u" (gần "ao").',
  OY:'Đọc "o" rồi lướt sang "i" (gần "oi").'
};
const PAIR_TIP = {
  'TH>T':'Người Việt hay đọc /θ/ thành /t/. Đưa đầu lưỡi ra giữa hai hàm răng.', 'TH>S':'Đừng xì /s/: đầu lưỡi phải ra giữa hai hàm răng.', 'TH>F':'Đừng dùng môi: đầu lưỡi ra giữa hai hàm răng.',
  'DH>D':'Người Việt hay đọc /ð/ thành /d/. Đưa lưỡi ra giữa răng và rung cổ.', 'DH>Z':'Đưa lưỡi ra giữa răng, đừng xì /z/.',
  'R>L':'Bạn đọc /r/ thành /l/: đầu lưỡi không được chạm vòm miệng.', 'L>R':'Bạn đọc /l/ thành /r/: đầu lưỡi phải chạm lợi trên.', 'L>N':'Bạn đọc /l/ thành /n/: đẩy hơi qua hai bên lưỡi, không qua mũi.', 'N>L':'Bạn đọc /n/ thành /l/: âm /n/ ngân qua mũi.',
  'SH>S':'Bạn đọc /ʃ/ thành /s/: chu tròn môi và lùi lưỡi vào.', 'S>SH':'Bạn đọc /s/ thành /ʃ/: kéo môi dẹt, đầu lưỡi ra trước.',
  'V>B':'Bạn đọc /v/ thành /b/: răng trên chạm môi dưới, không mím hai môi.', 'V>W':'Bạn đọc /v/ thành /w/: răng trên phải chạm môi dưới.', 'V>F':'Âm /v/ phải rung cổ họng.',
  'Z>S':'Âm /z/ phải rung cổ họng, đặc biệt ở cuối từ (đuôi -s sau âm hữu thanh).', 'D>T':'Âm /d/ phải rung cổ họng.', 'T>D':'Âm /t/ không rung cổ, bật hơi gọn.', 'G>K':'Âm /ɡ/ phải rung cổ họng.', 'B>P':'Âm /b/ phải rung cổ họng.', 'P>B':'Âm /p/ bật hơi mạnh, không rung cổ.',
  'CH>SH':'Âm /tʃ/ phải chặn lưỡi rồi mới bật ra, không thổi liền như /ʃ/.', 'JH>Z':'Âm /dʒ/ phải chặn lưỡi rồi bật ra.', 'JH>Y':'Âm /dʒ/ phải chặn lưỡi rồi bật ra, không đọc như "d" miền Nam.',
  'N>NG':'Cuối từ là /n/ (đầu lưỡi chạm lợi), không phải /ŋ/.', 'NG>N':'Cuối từ là /ŋ/ (cuống lưỡi chạm vòm mềm).',
  'IY>IH':'Âm /iː/ là "i" dài: kéo dài và kéo môi sang hai bên.', 'IH>IY':'Âm /ɪ/ là "i" ngắn: đọc gọn, miệng thả lỏng.', 'AE>EH':'Âm /æ/ mở miệng rộng hơn /e/.', 'EH>AE':'Âm /e/ mở miệng vừa thôi, không rộng như /æ/.',
  'UW>UH':'Âm /uː/ là "u" dài, chu môi.', 'UH>UW':'Âm /ʊ/ là "u" ngắn, thả lỏng.', 'AA>AH':'Âm /ɑː/ mở miệng rộng và dài hơn.', 'AH>AA':'Âm /ʌ/ ngắn, mở miệng vừa.',
  'EY>EH':'Âm /eɪ/ phải lướt sang "i" ở cuối.', 'OW>AO':'Âm /oʊ/ phải lướt sang "u" ở cuối.', 'AY>AA':'Âm /aɪ/ phải lướt sang "i" ở cuối.'
};
/* [chữ đúng, chữ đọc sai, âm đúng, âm đọc thành] */
const SPELL_ERR = [['th','t','TH','T'],['th','d','DH','D'],['th','s','TH','S'],['th','f','TH','F'],['th','z','DH','Z'],['v','b','V','B'],['v','w','V','W'],['sh','s','SH','S'],['ch','sh','CH','SH'],['r','l','R','L'],['l','r','L','R'],['l','n','L','N'],['z','s','Z','S'],['j','z','JH','Z']];
const NUMW = {'1':'one','2':'two','3':'three','4':'four','5':'five','6':'six','7':'seven','8':'eight','9':'nine','10':'ten'};
const PH_CACHE = {};
async function phonesOf(tok){
  if (tok in PH_CACHE) return PH_CACHE[tok];
  const w = NUMW[tok] || tok; let p = (await dictGet(w))?.p;
  if (!p) for (const f of baseForms(w).slice(1)){ const q = (await dictGet(f))?.p; if (q){ p = q + (/s$/.test(w) ? (/[ptkf]$/i.test(f) || /(P|T|K|F|TH)\d?$/.test(q) ? ' S' : ' Z') : ''); break; } }
  return PH_CACHE[tok] = p ? phList(p).map(x => x.replace(/\d/g, '')) : null;
}
/* So khớp có chi phí (Levenshtein), trả về danh sách cặp [i|null, j|null] */
function align(a, b, eq, subCost = () => 1){
  const m = a.length, n = b.length, C = Array.from({length:m + 1}, (_, i) => [i, ...new Array(n).fill(0)]);
  for (let j = 1; j <= n; j++) C[0][j] = j;
  for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) C[i][j] = Math.min(C[i-1][j] + 1, C[i][j-1] + 1, C[i-1][j-1] + (eq(a[i-1], b[j-1]) ? 0 : subCost(a[i-1], b[j-1])));
  const ops = []; let i = m, j = n;
  while (i > 0 || j > 0){
    if (i > 0 && j > 0 && C[i][j] === C[i-1][j-1] + (eq(a[i-1], b[j-1]) ? 0 : subCost(a[i-1], b[j-1]))){ ops.push([i-1, j-1]); i--; j--; }
    else if (i > 0 && C[i][j] === C[i-1][j] + 1){ ops.push([i-1, null]); i--; }
    else { ops.push([null, j-1]); j--; }
  }
  return ops.reverse();
}
async function gradeOnce(target, said){
  const disp = target.replace(/-/g, ' - ').split(/\s+/).filter(w => w && w !== '-');
  const T = []; disp.forEach((w, i) => norm(w).forEach(n => T.push({n, i})));
  const Sd = (said || '').replace(/-/g, ' ').split(/\s+/).flatMap(norm);
  const wops = align(T.map(t => t.n), Sd, (x, y) => x === y, (x, y) => x[0] === y[0] ? 0.9 : 1.1);
  const W = disp.map(w => ({w, ok:0, tot:0, errs:[], said:[]})), errs = [], extra = [];
  for (const [ti, sj] of wops){
    if (ti == null){ extra.push(Sd[sj]); continue; }
    const t = T[ti], ww = W[t.i], tp = await phonesOf(t.n), n = tp ? tp.length : 1;
    ww.tot += n;
    if (sj == null){ ww.missing = true; errs.push({k:'miss', w:disp[t.i]}); continue; }
    const s = Sd[sj]; ww.said.push(s);
    if (s === t.n){ ww.ok += n; continue; }
    const sp = await phonesOf(s);
    if (tp && !sp){
      /* Từ máy nghe ra không có trong từ điển (vd "tink"): so theo chữ viết với các lỗi quen thuộc của người Việt */
      const hit = SPELL_ERR.find(([a, b]) => t.n.includes(a) && [t.n.replace(a, b), t.n.replace(new RegExp(a, 'g'), b)].includes(s));
      if (hit){
        const at = tp.indexOf(hit[2]);
        if (at >= 0){ ww.ok += n - 1; ww.errs.push(at); ww.tp = tp; errs.push({k:'sub', exp:hit[2], got:hit[3], fin:at === tp.length - 1, w:disp[t.i], ipa:tp, at}); continue; }
      }
    }
    if (!tp || !sp){ ww.unk = true; errs.push({k:'word', w:disp[t.i], s}); continue; }
    const pops = align(tp, sp, (x, y) => x === y, (x, y) => isVowel(x) === isVowel(y) ? 1 : 1.6);
    pops.forEach(([a, b]) => {
      if (a != null && b != null && tp[a] === sp[b]){ ww.ok++; return; }
      const fin = a != null && tp.slice(a + 1).every(x => !isVowel(x)) && !isVowel(tp[a]);
      const e = {k:a == null ? 'ins' : b == null ? 'del' : 'sub', exp:tp[a], got:sp[b], fin, w:disp[t.i], ipa:tp, at:a};
      if (a != null){ ww.errs.push(a); }
      if (a == null && ww.errs.length > 2) return;
      errs.push(e);
    });
    ww.tp = tp; ww.sp = sp;
  }
  const tot = W.reduce((x, w) => x + w.tot, 0), ok = W.reduce((x, w) => x + Math.min(w.ok, w.tot), 0);
  const acc = tot ? Math.round(100 * ok / tot) : 0, comp = Math.round(100 * W.filter(w => !w.missing).length / Math.max(1, W.length));
  /* Điểm như giáo viên: 40% đúng âm + 60% số từ đọc hoàn toàn đúng; còn lỗi nào thì chưa đạt (tối đa 84) */
  const wok = Math.round(100 * W.filter(w => !w.missing && w.tot && w.ok >= w.tot).length / Math.max(1, W.length));
  let score = Math.max(0, Math.round(acc * .4 + wok * .6) - Math.max(0, extra.length - 1) * 3);
  if (errs.some(e => e.k !== 'ins') || extra.length > 1) score = Math.min(score, 84);
  return {score, acc, comp, extra, errs, words:W.map(w => Object.assign(w, {ok2:w.tot && w.ok >= w.tot && !w.missing, st:w.missing ? 'bad' : w.tot && w.ok >= w.tot ? 'ok' : w.ok > 0 ? 'part' : 'bad'})).map(w => Object.assign(w, {ok:w.st === 'ok'}))};
}
async function teacherScore(target, res){
  const cands = [...new Set([res.text, ...(res.alts || [])].filter(Boolean))].slice(0, 6);
  let best = null;
  for (const said of cands){ const r = await gradeOnce(target, said); if (!best || r.score > best.score) best = Object.assign(r, {heard:said}); }
  return best;
}
/* ============ BỘ CHẤM PHÁT ÂM TRONG MÁY ============ */
/* Nghe giọng bạn và so từng âm với câu mẫu (không đoán chữ như Chrome, nên không tự sửa giúp bạn).
   Mô hình ~242 MB tải một lần, chạy bằng card đồ họa nếu có. Xem pron.js, gop.js. */
let PRON = null;
const pronMod = () => PRON || (PRON = import('./pron.js').catch(e => { PRON = null; throw e; }));
const pronOn = () => S.set.pron === 'on';
const pronProg = cb => p => { if (p.status === 'progress' && /\.onnx/.test(p.file || '')) cb?.(Math.round(p.progress || 0)); };
async function pronTarget(en, M){
  const disp = en.replace(/-/g, ' - ').split(/\s+/).filter(w => w && w !== '-');
  const tg = [], W = [];
  for (let i = 0; i < disp.length; i++){
    const raw = disp[i].toLowerCase().replace(/[’‘]/g, "'").replace(/[^a-z0-9']/g, '').replace(/^'+|'+$/g, '');
    const w = NUMW[raw] || raw; let p = w ? (await dictGet(w))?.p : null;
    if (!p && w) for (const f of baseForms(w).slice(1)){ const q = (await dictGet(f))?.p; if (q){ p = q + (/s$/.test(w) ? (/(P|T|K|F|TH)\d?$/.test(q) ? ' S' : ' Z') : ''); break; } }
    const ks = p ? phList(p).map(M.phKey) : [];
    W.push({w:disp[i], tot:ks.length, ok:0, errs:[], tp:ks, said:[], unk:!ks.length});
    const st = p ? phList(p).map(a => (a.match(/\d$/) || [''])[0]) : [];
    ks.forEach((k, j) => tg.push({w:raw, wi:i, j, k, s:st[j]}));
  }
  return {tg, W};
}
/* Đo tốc độ: chấm một câu mẫu giọng Mỹ (phải gần 100 điểm) */
async function pronTest(){
  const pst = t => { const e = document.querySelector('#pronst'); if (e) e.innerHTML = t; };
  const c = D.life[0].days[0].cards.find(x => x.a && !x.pz) || D.life[0].days[0].cards[0];
  pst('Đang đo tốc độ...');
  try{
    const a = Array.isArray(c.a) ? c.a[0] : c.a, buf = await (await fetch(a)).blob(), {pcm} = await decode16k(buf);
    await pronScore(c.en, pcm.slice(0, 16000));   // lần chạy đầu để khởi động
    const t0 = performance.now(), r = await pronScore(c.en, pcm), dt = (performance.now() - t0) / 1000, M = await pronMod(), dev = await M.device();
    pst(`Chấm câu "${esc(c.en)}" (giọng mẫu) mất <b>${dt.toFixed(1)} giây</b>, được ${r?.score ?? 0} điểm. Chạy bằng ${dev === 'webgpu' ? 'card đồ họa (nhanh)' : 'CPU (máy không hỗ trợ card đồ họa nên chậm hơn)'}.${dt > 6 ? ' Máy hơi chậm: mỗi câu phải chờ vài giây.' : ''}`);
  }catch(e){ console.warn(e); pst('Chưa đo được: ' + esc(e.message || '')); }
}
/* Trả về kết quả cùng dạng với cách chấm cũ (để dùng chung phần chữa lỗi của giáo viên) */
async function pronScore(en, pcm, onProg){
  const M = await pronMod(), {tg, W} = await pronTarget(en, M);
  if (!tg.length) return null;
  const out = await M.run(pcm, tg, pronProg(onProg));
  if (!out.heard.replace(/\s/g, '')) return {silent:true};
  const errs = [];
  out.ph.forEach(p => {
    const ww = W[p.wi], kk = p.k;
    /* Nguyên âm không nhấn bị nuốt khi nói nhanh (usually → "juːʒli") là cách nói tự nhiên, không tính lỗi */
    if (p.g >= .35 || (p.s === '0' && isVowel(kk) && !(p.po > .25))){ ww.ok++; return; }
    ww.errs.push(p.j);
    const got = M.REV[p.heard], fin = !isVowel(kk) && ww.tp.slice(p.j + 1).every(x => !isVowel(x));
    errs.push(p.po > .25 && got && got !== kk.replace(/0$/, '') ? {k:'sub', exp:kk, got, fin, w:ww.w, ipa:ww.tp, at:p.j} : {k:'del', exp:kk, fin, w:ww.w, ipa:ww.tp, at:p.j});
  });
  /* Cả từ không nghe thấy âm nào đúng: thiếu từ */
  W.forEach(ww => { if (ww.tot >= 2 && ww.ok === 0 && errs.filter(e => e.w === ww.w).every(e => e.k === 'del')){ ww.missing = true; for (let i = errs.length - 1; i >= 0; i--) if (errs[i].w === ww.w) errs.splice(i, 1); errs.push({k:'miss', w:ww.w}); } });
  const G = W.filter(w => w.tot), tot = G.reduce((x, w) => x + w.tot, 0), ok = G.reduce((x, w) => x + w.ok, 0);
  const acc = tot ? Math.round(100 * ok / tot) : 0, comp = Math.round(100 * G.filter(w => !w.missing).length / Math.max(1, G.length));
  const wok = Math.round(100 * G.filter(w => !w.missing && w.ok >= w.tot).length / Math.max(1, G.length));
  let score = Math.round(acc * .4 + wok * .6);
  if (errs.length) score = Math.min(score, 84);
  const words = W.map(w => Object.assign(w, {st:!w.tot ? 'ok' : w.missing ? 'bad' : w.ok >= w.tot ? 'ok' : w.ok > 0 ? 'part' : 'bad'})).map(w => Object.assign(w, {ok:w.st === 'ok'}));
  return {score, acc, comp, extra:[], errs, words, heard:'/' + out.heard.replace(/ /g, '') + '/', device:out.device, pron:true};
}
const ipaSpan = (tp, bad = []) => '/' + tp.map((x, i) => bad.includes(i) ? `<b class="phbad">${phIPA(x)}</b>` : phIPA(x)).join('') + '/';
/* Lời chữa của "giáo viên": lỗi quan trọng trước (thiếu từ, âm cuối, âm khó), tối đa 4 ý */
function teacherNotes(r){
  const out = [], seen = new Set();
  const add = (key, html) => { if (seen.has(key) || out.length >= 4) return; seen.add(key); out.push(html); };
  const pr = e => e.k === 'miss' ? 0 : e.k === 'del' && e.fin ? 1 : e.k === 'sub' ? 2 : e.k === 'del' ? 3 : e.k === 'word' ? 4 : 5;
  [...r.errs].sort((a, b) => pr(a) - pr(b)).forEach(e => {
    if (e.k === 'miss') return add('m' + e.w, `<b>Thiếu từ "${esc(e.w)}".</b> Đọc đủ từng từ trong câu, kể cả từ nhỏ.`);
    if (e.k === 'word') return add('w' + e.w, `<b>"${esc(e.w)}"</b> máy nghe thành "${esc(e.s)}". Nghe mẫu chậm rồi đọc lại từ này.`);
    if (e.k === 'ins') return;
    const ex = e.exp.replace(/\d/g, ''), ip = phIPA(e.exp), ww = r.words.find(w => w.w === e.w);
    const word = `<b>${esc(e.w.replace(/[^A-Za-z'-]/g, ''))}</b> ${ww?.tp ? ipaSpan(ww.tp, ww.errs) : ''}`;
    if (e.k === 'del') return add('d' + ex + e.fin, `${word}: <b>bạn bỏ mất âm /${ip}/${e.fin ? ' ở cuối từ' : ''}.</b> ${e.fin ? 'Người Việt hay nuốt âm cuối. ' : ''}${PH_TIP[ex] || ''}`);
    if (!e.got) return add('u' + ex, `${word}: <b>âm /${ip}/ chưa chuẩn.</b> ${PH_TIP[ex] || ''}`);
    const key = ex + '>' + e.got;
    add('s' + key, `${word}: <b>âm /${ip}/ bạn đọc thành /${phIPA(e.got)}/.</b> ${PAIR_TIP[key] || PH_TIP[ex] || ''}`);
  });
  if (r.extra.length > 1) add('x', `<b>Có thêm từ không có trong câu:</b> ${esc(r.extra.join(', '))}. Đọc đúng theo câu mẫu.`);
  const more = r.errs.filter(e => e.k !== 'ins').length - out.length;
  if (more > 0) out.push(`<span class="xs muted">Còn ${more} lỗi nhỏ khác, sửa các lỗi trên trước.</span>`);
  return out;
}
function noteWeakPh(r){ r.errs.forEach(e => { if (e.exp){ const k = phIPA(e.exp).replace('ː', ''); S.weak[k] = (S.weak[k] || 0) + 1; } }); save(); }
function scoreHTML(r, heard){
  const c = r.score >= 85 ? 'var(--good)' : r.score >= 60 ? 'var(--sun)' : 'var(--bad)', notes = teacherNotes(r);
  return `<div class="score"><div class="ring" style="--p:${r.score};--c:${c}"><b>${r.score}</b></div><div class="sm"><span class="muted">Máy nghe:</span> <span class="heard">${esc(heard || '...')}</span><br><span class="xs muted">Đúng âm ${r.acc}% · Đủ từ ${r.comp}%</span></div>${lastClip && (micMode() === 'local' || r.pron) ? ib('ear','Nghe lại giọng mình','','data-mine="1"') : ''}</div>
  <div class="words">${r.words.map(w => `<span class="w ${w.st}">${esc(w.w)}</span>`).join('')}</div>
  ${notes.length ? `<div class="teach">${notes.map(n => `<p class="sm">${n}</p>`).join('')}</div>` : r.score >= 85 ? '<p class="sm" style="color:var(--good)"><b>Phát âm đúng các âm trong câu. Tốt lắm!</b></p>' : ''}`;
}

/* ============ ÔN (bậc thang phản xạ) ============ */
function openReview(ids, title, onDone, didKey, maxMs = 0){
  ids = ids.filter(id => CARDS[id]);
  if (!ids.length){ toast('Không có câu nào để ôn.'); return; }
  openLesson(title, [{icon:'repeat', name:maxMs ? `Tối đa ${Math.round(maxMs / MIN)} phút` : `${ids.length} câu`, run:(el, next) => {
    let i = 0; const tot = [], t0 = Date.now();
    const one = () => {
      if (i >= ids.length || (maxMs && i > 0 && Date.now() - t0 > maxMs)){ next(avg(tot)); return; }
      learn(ids[i]); const c = CARDS[ids[i]], st = S.cards[ids[i]], hard = st.lv >= 3;
      const mi = memInfo(ids[i]);
      el.innerHTML = `<p class="xs b muted">${i+1}/${ids.length} · ${esc(MEMS[mi.k][0])} · học được ${mi.dn} ngày · còn nhớ ~${mi.R}% ${isKnown(ids[i]) ? '· đã thuộc' : ''}</p><div style="display:flex;flex-direction:column;gap:14px"></div>`;
      speakBlock(el.lastChild, c, {mode:'none', showVi:true, rates:[], timer:hard ? 3 : 5, label:hard ? 'Phản xạ: nói trong 3 giây' : 'Nhìn nghĩa, nói tiếng Anh', onDone:(sc, fast) => { if (sc != null){ tot.push(sc); review(ids[i], sc, fast); (LS.rv ||= {})[ids[i]] = sc; } i++; one(); }});
    };
    one();
  }}], sc => { onDone?.(sc); const ok = Object.values(LS.rv || {}).filter(x => x >= 85).length, n = Object.keys(LS.rv || {}).length; return {msg:(n ? `Bạn nhớ tốt ${ok}/${n} câu. ` : '') + 'Câu nhớ tốt được giãn lịch xa hơn. Câu chưa vững được hẹn ôn sớm hơn (sớm nhất là ngày mai).'}; }, didKey || 'review');
}

/* Ôn nhanh 3 phút: câu đến hạn trước, thiếu thì lấy câu yếu nhất */
function quickReview(){
  const learned = Object.keys(S.cards).filter(id => CARDS[id]);
  if (!learned.length){ toast('Học bài Đời sống đầu tiên rồi mới có câu để ôn nhé.'); return; }
  const d = due(), rest = learned.filter(id => !d.includes(id)).sort((a, b) => S.cards[a].lv - S.cards[b].lv || S.cards[a].d - S.cards[b].d);
  openReview([...d, ...rest].slice(0, 20), 'Ôn nhanh 3 phút', null, 'quick', 3*MIN);
}

/* ============ NGHE RẢNH TAY ============ */
/* Phát liên tục: câu tiếng Anh → khoảng lặng để nói theo → câu đó lần nữa. Tắt màn hình vẫn nghe được. */
const HF = {tok:0};
function hfList(mode){
  if (mode === 'dlg'){
    const L = nextSched(), w = L ? L.w : WEEKS[WEEKS.length - 1];
    return w.days.filter(d => S.life[d.id]?.am != null || (L?.kind === 'day' && d === L.d)).flatMap(d => d.dialogue);
  }
  const ids = Object.keys(S.cards).filter(id => CARDS[id]);
  const d = due(), today = ids.filter(id => S.cards[id].r === 0);
  return [...new Set([...d, ...today, ...shuffle(ids)])].slice(0, 60).map(id => CARDS[id]);
}
function handsFree(mode = 'cards'){
  let list = hfList(mode);
  if (!list.length){ if (mode === 'cards'){ list = hfList('dlg'); mode = 'dlg'; } if (!list.length){ toast('Chưa có câu để nghe. Học bài đầu tiên trước nhé.'); return; } }
  const el = openPanel(); let i = 0, playing = false, rate = 1, showVi = true;
  const ms = navigator.mediaSession;
  const draw = (phase = '') => {
    const it = list[i];
    el.innerHTML = `<div class="wrap"><div class="lhead">${ib('x','Đóng','','id="hx"')}<h2 style="flex:1">Nghe rảnh tay</h2></div>
      <div class="seg">${[['cards','Câu đã học'],['dlg','Hội thoại tuần này']].map(([k, t]) => `<button aria-pressed="${mode === k}" data-m="${k}">${t}</button>`).join('')}</div>
      <div class="hf"><p class="xs b muted">${i + 1}/${list.length}</p><p class="en">${esc(it.en)}</p>${showVi ? `<p class="vi">${esc(it.vi)}</p>` : ''}<p class="say">${phase}</p>
      <div class="row" style="justify-content:center;gap:14px">${ib('skip','Câu trước','','id="hp" style="transform:scaleX(-1)"')}${ib(playing ? 'pause' : 'play', playing ? 'Dừng' : 'Phát', 'main', 'id="hg"')}${ib('skip','Câu sau','','id="hn"')}</div>
      <div class="row" style="justify-content:center">${ib('turtle','Chậm hơn', rate < 1 ? 'on' : '','id="hs"')}${ib('vi','Hiện nghĩa', showVi ? 'on' : '','id="hv"')}</div>
      <p class="xs muted">Nghe câu, nói theo trong khoảng lặng, rồi nghe lại. Bạn có thể tắt màn hình, dùng nút trên màn hình khóa để dừng hoặc chuyển câu.</p></div></div>`;
    $('#hx').onclick = () => { stop(); closeLesson(); };
    $('#hg').onclick = () => playing ? stop() : start();
    $('#hn').onclick = () => jump(1); $('#hp').onclick = () => jump(-1);
    $('#hs').onclick = () => { rate = rate < 1 ? 1 : .8; draw(phase); };
    $('#hv').onclick = () => { showVi = !showVi; draw(phase); };
    el.querySelectorAll('[data-m]').forEach(b => b.onclick = () => { if (b.dataset.m === mode) return; stop(); handsFree(b.dataset.m); });
    if (ms && window.MediaMetadata) ms.metadata = new MediaMetadata({title:it.en, artist:it.vi || '', album:'Nghe rảnh tay', artwork:[{src:'img/s2.png', sizes:'256x256', type:'image/png'}]});
  };
  const stop = () => { playing = false; HF.tok++; hush(); if (ms) ms.playbackState = 'paused'; if (el.isConnected && !el.hidden) draw(); };
  const jump = d => { const was = playing; stop(); i = (i + d + list.length) % list.length; draw(); if (was) start(); };
  const start = async () => {
    const tok = ++HF.tok; playing = true; if (ms) ms.playbackState = 'playing';
    while (tok === HF.tok){
      const it = list[i];
      draw('Nghe...'); await playItem(it, rate); if (tok !== HF.tok) return;
      draw('Nói theo...'); await wait(1200 + it.en.split(' ').length * 450); if (tok !== HF.tok) return;
      draw('Nghe lại...'); await playItem(it, rate); if (tok !== HF.tok) return;
      await wait(900); if (tok !== HF.tok) return;
      i = (i + 1) % list.length;
      if (i === 0) addXP(5);
    }
  };
  if (ms){ try{ ms.setActionHandler('play', start); ms.setActionHandler('pause', stop); ms.setActionHandler('nexttrack', () => jump(1)); ms.setActionHandler('previoustrack', () => jump(-1)); }catch{} }
  draw(); start();
}

/* ============ SAO LƯU ============ */
/* Trên điện thoại: mở bảng chia sẻ để chọn Google Drive. Trên máy tính: tải file về. */
async function doBackup(){
  const name = 'tieng-anh-sao-luu-' + ymd() + '.json';
  const file = new File([JSON.stringify(S)], name, {type:'application/json'});
  const mark = () => { S.set.lastBackup = Date.now(); save(); render(); toast('Đã sao lưu'); };
  if (navigator.canShare?.({files:[file]}) && /Android|iPhone|iPad/i.test(navigator.userAgent)){
    try{ await navigator.share({files:[file], title:'Sao lưu tiếng Anh'}); mark(); }catch{}
    return;
  }
  const a = document.createElement('a'); a.href = URL.createObjectURL(file); a.download = name; a.click(); mark();
}
const needBackup = () => (S.xp >= 60) && (!S.set.lastBackup || Date.now() - S.set.lastBackup > 7*DAY);

/* ============ PHÁT ÂM ============ */
function recordCompare(el, item){
  const box = document.createElement('div'); box.className = 'row'; box.style.justifyContent = 'center';
  box.innerHTML = `${ib('rec','Ghi âm giọng mình','','data-r="1"')}${ib('ear','Nghe giọng mình','','data-p="1" disabled')}${ib('play','Nghe mẫu','','data-m="1"')}<span class="xs muted" style="flex-basis:100%;text-align:center">Ghi âm rồi so với giọng mẫu</span>`;
  let url = null;
  box.querySelector('[data-r]').onclick = async e => { const b = e.currentTarget, note = box.querySelector('.xs'); if (REC){ stopListen(); return; } hush(); b.classList.add('live'); b.innerHTML = ico('stop'); note.innerHTML = '<span class="rec-dot"></span> Đang ghi âm · bấm nút đỏ để dừng'; try{ const blob = await recordClip(); url = URL.createObjectURL(blob); box.querySelector('[data-p]').disabled = false; play(url); }catch{ toast(MICERR['not-allowed']); } b.classList.remove('live'); b.innerHTML = ico('rec'); note.textContent = 'Ghi âm rồi so với giọng mẫu'; };
  box.querySelector('[data-p]').onclick = () => url && play(url);
  box.querySelector('[data-m]').onclick = () => playItem(item);
  el.appendChild(box);
}
function openIpa(L){ withLevel('ipa:' + L.id, () => openIpa0(L)); }
function openIpa0(L){
  const steps = [];
  if (L.kind === 'sound') L.sounds.forEach(s => {
    steps.push({icon:'ear', name:`/${s.sym}/ · nghe và xem cách đọc`, run:(el, next) => {
      el.innerHTML = `<div class="row"><span class="ipa">/${esc(s.sym)}/</span><b>${esc(s.name)}</b></div><div class="note">${esc(s.tip)}</div>
        <div class="tiles">${s.words.map((w, k) => `<button class="tile" data-k="${k}">${esc(w.w)}</button>`).join('')}</div>`;
      el.querySelectorAll('.tile').forEach(b => b.onclick = () => play(s.words[+b.dataset.k].a));
      recordCompare(el, s.words[0]);
      el.insertAdjacentHTML('beforeend', `<button class="btn block" id="in">${ico('next')}</button>`);
      (async () => { for (const w of s.words){ if (!el.isConnected) return; await play(w.a); await wait(450); } })();
      $('#in').onclick = () => next(null);
    }});
    steps.push({icon:'mic', name:`/${s.sym}/ · đọc từng từ`, run:speakSeq(s.words.map(w => ({en:w.w, a:w.a})), {mode:'full', showVi:false, rates:[1]})});
    steps.push({icon:'ear', name:`Nghe phân biệt: ${s.pair.map(p => p.w).join(' / ')}`, run:(el, next) => {
      let k = 0, ok = 0; const N = 6;
      const one = () => {
        if (k >= N){ next(Math.round(ok / N * 100)); return; }
        const t = s.pair[Math.random() < .5 ? 0 : 1], src = t.a[Math.floor(Math.random() * t.a.length)];
        el.innerHTML = `<p class="xs b muted">${k+1}/${N} · Mỗi lần một giọng khác nhau</p><div class="row" style="justify-content:center">${ib('play','Nghe','main','id="pp"')}</div>` + s.pair.map((p, j) => `<button class="opt" data-j="${j}"><b>${esc(p.w)}</b></button>`).join('');
        $('#pp').onclick = () => play(src); play(src);
        el.querySelectorAll('.opt').forEach(b => b.onclick = () => { const g = s.pair[+b.dataset.j] === t; if (g) ok++; else S.weak['/' + s.sym + '/'] = (S.weak['/' + s.sym + '/'] || 0) + 1; el.querySelectorAll('.opt').forEach(x => { x.disabled = true; if (s.pair[+x.dataset.j] === t) x.classList.add('ok'); }); if (!g) b.classList.add('bad'); el.insertAdjacentHTML('beforeend', `<button class="btn block" id="pn">${ico('next')}</button>`); $('#pn').onclick = () => { k++; one(); }; });
      };
      one();
    }});
  });
  else {
    steps.push({icon:'ear', name:'Nghe và xem quy tắc', run:(el, next) => {
      el.innerHTML = `<h3>${esc(L.title)}</h3><div class="note">${esc(L.tip)}</div><div class="tiles">${L.items.map((w, k) => `<button class="tile" data-k="${k}">${esc(w.w)}</button>`).join('')}</div>`;
      el.querySelectorAll('.tile').forEach(b => b.onclick = () => play(L.items[+b.dataset.k].a));
      recordCompare(el, L.items[0]);
      el.insertAdjacentHTML('beforeend', `<button class="btn block" id="in">${ico('next')}</button>`);
      (async () => { for (const w of L.items){ if (!el.isConnected) return; await play(w.a); await wait(450); } })();
      $('#in').onclick = () => next(null);
    }});
    steps.push({icon:'mic', name:'Đọc theo và chấm điểm', run:speakSeq(L.items.map(w => ({en:w.w.replace(/\b([A-Z]{2,})([a-z]*)/g, (m, a, b) => a.toLowerCase() + b), show:w.w, a:w.a})), {mode:'full', showVi:false, rates:[1]})});
  }
  openLesson(`Phát âm · ${STAGE_NAMES[L.stage]} · Bài ${L.n}/${IPAL.length}`, steps, sc => { S.ipa[L.id] = sc; save(); return {pass:sc >= 85, msg:sc >= 85 ? 'Âm đã luyện sẽ được nhắc lại nếu bạn đọc sai ở bài khác.' : 'Xong bài. Bài này nằm trong mục Ôn tập để làm lại.'}; }, 'ipa');
}

/* ============ LỘ TRÌNH ============ */
VIEWS.path = v => {
  const seg = document.createElement('div'); seg.className = 'seg';
  seg.innerHTML = [['life','Đời sống'],['gram','Ngữ pháp'],['voc','Từ vựng'],['ipa','Phát âm']].map(([k, t]) => `<button aria-pressed="${PATHTAB === k}" data-k="${k}">${t}</button>`).join('');
  seg.onclick = e => { const b = e.target.closest('button'); if (b){ PATHTAB = b.dataset.k; render(); } };
  v.appendChild(seg);
  const DN = ['T2','T3','T4','T5','T6','T7','CN'];
  const bindRows = (el, rows) => el.querySelectorAll('.lrow').forEach(b => b.onclick = () => { const x = rows[+b.dataset.k]; x.lock ? toast(x.soon ? 'Phần này đang được soạn.' : 'Qua kiểm tra tuần trước (hoặc Nhảy cóc) để mở tuần này.') : x.go(); });
  if (PATHTAB === 'voc'){ vocabPanel(v); return; }
  if (PATHTAB === 'gram'){ gramPanel(v); return; }
  if (PATHTAB === 'life'){
    const nx = nextSched(), curW = nx ? nx.w.w : 99;
    WEEKS.forEach(w => {
      const days = SCHED.filter(x => x.w === w), nDone = days.filter(x => lifeDone(x.key)).length, lock = w.w > curW;
      const ex = [];   // Ngữ pháp, Từ vựng nằm ở ô riêng
      const rows = [...ex.map(e => ({lock, go:e.go})), ...days.map(x => ({x, lock, go:() => openLifePart(x, lifeDone(x.key) ? ((S.star[x.key + ':am'] || 0) <= (S.star[x.key + ':pm'] || 0) ? 'am' : 'pm') : S.life[x.key]?.am != null ? 'pm' : 'am')}))];
      const body = ex.map((e, k) => lrow(k, {t:e.t, icon:e.icon, st:e.sc >= 85 ? 'done' : lock ? 'lock' : e.sc != null ? 'half' : '', right:pctTag(e.sc) + starTag(e.sk)})).join('') + days.map((x, k0) => { const k = k0 + ex.length, r = S.life[x.key], half = r && !lifeDone(x.key), sc = r ? Math.min(...['am','pm'].map(p => r[p]).filter(n => n != null)) : null;
        return lrow(k, {n:DN[x.dn-1], t:esc(x.topic), s:half ? 'Xong buổi sáng, còn buổi tối' : x === nx ? 'Bài tiếp theo' : '', st:(lifeDone(x.key) ? 'done' : lock ? 'lock' : half ? 'half' : '') + (x === nx ? ' next' : ''), right:pctTag(isFinite(sc) ? sc : null) + stHTML(Math.min(S.star[x.key + ':am'] || 0, S.star[x.key + ':pm'] || 0))}); }).join('')
        + (w.w === curW ? `<button class="btn ghost block" data-skip="1">${ico('next')} Nhảy cóc tuần này (cần 85%)</button>` : '');
      const f = foldEl('w' + w.w, {title:`Tuần ${w.w} · ${esc(w.title)}`, sub:lock ? 'Mở khi qua kiểm tra tuần trước' : `${nDone}/7 ngày xong`, icon:lock ? ico('lock') : nDone === 7 ? ico('check') : w.w, badge:'', open:w.w === curW, name:'lifew', cls:w.w === curW ? 'now' : '', body});
      bindRows(f, rows); f.querySelector('[data-skip]')?.addEventListener('click', () => skipTest(w));
      v.appendChild(f);
    });
    v.appendChild(foldEl('wsoon', {title:`Tuần ${WEEKS.length + 1}-12`, sub:'Đang soạn, sẽ thêm vào app', icon:ico('lock'), name:'lifew', body:'<p class="sm muted">Mỗi lần soạn xong một tháng, các tuần mới sẽ hiện ở đây.</p>'}));
  } else {
    const nx = nextIpa();
    [1,2,3,4,5].forEach(st => {
      const ls = IPAL.filter(l => l.stage === st), nDone = ls.filter(l => S.ipa[l.id] != null).length, rows = ls.map(l => ({go:() => openIpa(l)}));
      const body = ls.map((l, k) => lrow(k, {n:l.n, t:esc(ipaTitle(l)), s:l.kind === 'sound' ? esc(l.sounds.map(s => s.name).join(' · ')) : '', st:(S.ipa[l.id] != null ? 'done' : '') + (l === nx ? ' next' : ''), right:pctTag(S.ipa[l.id]) + starTag('ipa:' + l.id)})).join('');
      const cur = nx && nx.stage === st;
      const f = foldEl('ipa' + st, {title:`Chặng ${st} · ${STAGE_NAMES[st]}`, sub:`${nDone}/${ls.length} bài xong`, icon:nDone === ls.length ? ico('check') : st, open:cur, name:'ipas', cls:cur ? 'now' : '', body});
      bindRows(f, rows); v.appendChild(f);
    });
  }
};
/* ============ ÔN TẬP ============ */
VIEWS.rev = v => {
  const dueIds = due(), forg = forgotten();
  const weakIpa = IPAL.filter(l => S.ipa[l.id] != null && S.ipa[l.id] < 85);
  const weakLife = SCHED.filter(x => S.life[x.key] && ['am','pm'].some(p => S.life[x.key][p] != null && S.life[x.key][p] < 85));
  const weakSounds = Object.entries(S.weak).sort((a, b) => b[1] - a[1]).slice(0, 6);
  v.appendChild(sec(`<h3>Ôn tập</h3><p class="sm muted">App tự gom những gì cần ôn theo lịch và theo lỗi của bạn.</p>`));
  const block = (img, title, count, sub, btn) => { const s = sec(`<div class="row"><img src="img/${img}.png" alt="" width="32"><div style="flex:1"><b>${title}</b><br><span class="sm muted">${sub}</span></div><span class="chip">${count}</span>${count ? ib('play','Bắt đầu','main','data-go="1"') : ''}</div>`); if (count) s.querySelector('[data-go]').onclick = btn; v.appendChild(s); return s; };
  block('book', 'Đến hạn hôm nay', dueIds.length, 'Câu nhớ yếu nhất lên trước', () => openReview(dueIds, 'Ôn câu đến hạn'));
  v.appendChild(memPanel(dueIds));
  block('drop', 'Câu hay quên', forg.length, 'Đã nói sai từ 2 lần', () => openReview(forg, 'Ôn câu hay quên'));
  block('trophy', 'Câu làm sai', missList().length, 'Nói 3 lần chưa đạt, chọn, xếp, viết, ngữ pháp sai', openMiss);
  const ws = block('lips', 'Âm hay đọc sai', weakSounds.length, weakSounds.length ? weakSounds.map(([s, n]) => `/${s.replace(/\//g,'')}/ ×${n}`).join(' · ') : 'Chưa có', () => { const l = IPAL.find(l => l.kind === 'sound' && l.sounds.some(s => weakSounds.some(([w]) => w.replace(/\//g,'').includes(s.sym)))) || IPAL.find(l => l.stage === 3); openIpa(l); });
  const list = [...weakLife.map(x => ({t:`Đời sống · Tuần ${x.w.w} · ${x.topic}`, sc:Math.min(...['am','pm'].map(p => S.life[x.key][p] ?? 100)), go:() => openLifePart(x, (S.life[x.key].am ?? 0) < 85 ? 'am' : 'pm')})),
    ...weakIpa.map(l => ({t:'Phát âm · ' + ipaTitle(l), sc:S.ipa[l.id], go:() => openIpa(l)})),
    ...WEEKS.filter(w => S.gram[w.w] < 85).map(w => ({t:'Ngữ pháp · Tuần ' + w.w, sc:S.gram[w.w], go:() => openGram(w)})),
    ...WEEKS.filter(w => S.voc[w.w] < 85).map(w => ({t:'Từ vựng · Tuần ' + w.w, sc:S.voc[w.w], go:() => openVocab(w)}))];
  const s = foldEl('rev85', {title:'Bài chưa đạt 85%', sub:'Chạm để xem và làm lại', icon:'<img src="img/trophy.png" alt="">', badge:list.length,
    body:list.length ? list.map((x, k) => lrow(k, {t:esc(x.t), icon:'repeat', right:pctTag(x.sc)})).join('') : '<p class="sm muted">Chưa có bài nào dưới 85%.</p>'});
  s.querySelectorAll('.lrow').forEach(b => b.onclick = () => list[+b.dataset.k].go());
  v.appendChild(s);
};

/* Bảng ghi nhớ: câu đến hạn xếp theo độ nhớ, lịch ôn 7 ngày tới, số câu ở từng giai đoạn */
function memPanel(dueIds){
  const now = Date.now(), ids = Object.keys(S.cards).filter(id => CARDS[id]);
  const row = id => { const m = memInfo(id, now), c = CARDS[id]; return `<div class="memr"><div class="memb"><i style="height:${m.R ?? 0}%" class="${m.R < 70 ? 'lo' : m.R < 85 ? 'mid' : ''}"></i></div><div><b>${esc(c.en)}</b> <span class="lv m${m.k}">${esc(m.tag)}</span><br><span class="xs muted">${esc(m.line)}</span></div></div>`; };
  const days = [...Array(7)].map((_, k) => { const a = dayStart(now) + k * DAY, b = a + DAY; return ids.filter(id => { const d = S.cards[id].d; return k === 0 ? d > now && d < b : d >= a && d < b; }).length; });
  const dn = ['Hôm nay', 'Mai', ...[2, 3, 4, 5, 6].map(k => { const d = new Date(now + k * DAY); return ['CN','T2','T3','T4','T5','T6','T7'][d.getDay()]; })];
  const st = [1, 2, 3, 4].map(k => ids.filter(id => memK(S.cards[id]) === k));
  const body = `<p class="sm muted">Mỗi lần ôn, trí nhớ bền hơn nên lần ôn sau cách xa hơn: 1 ngày → 3 ngày → khoảng 1 tuần → 2-3 tuần → 1,5 tháng. App nhắc đúng lúc độ nhớ còn khoảng 90%. Đọc 3 lần chưa đạt thì không sao: khoảng cách đến lần ôn sau rút còn một nửa (sớm nhất là ngày mai), không phải học lại từ đầu.</p>
    ${dueIds.length ? `<p class="sm b">Đến hạn bây giờ (nhớ yếu nhất ở trên)</p>${dueIds.slice(0, 60).map(row).join('')}${dueIds.length > 60 ? `<p class="xs muted">... và ${dueIds.length - 60} câu nữa</p>` : ''}` : '<p class="sm b">Chưa có câu đến hạn. Câu đang nhớ tốt, chưa cần ôn.</p>'}
    <p class="sm b" style="margin-top:10px">Lịch ôn 7 ngày tới</p><div class="memdays">${days.map((n, k) => `<span><b>${n}</b><i class="xs muted">${dn[k]}</i></span>`).join('')}</div>
    <p class="sm b" style="margin-top:10px">Câu ở từng giai đoạn</p>${st.map((xs, k) => `<details class="grp" data-g="mem${k}"><summary><span>${esc(MEMS[k + 1][1])}</span><span class="n">${xs.length}</span></summary>${xs.sort((a, b) => recall(S.cards[a]) - recall(S.cards[b])).slice(0, 80).map(row).join('') || '<p class="xs muted">Chưa có câu.</p>'}</details>`).join('')}`;
  return foldEl('memc', {title:'Đồ thị ghi nhớ', sub:`${ids.length} câu đang nhớ · ${dueIds.length} câu đến hạn`, icon:'<img src="img/book.png" alt="">', body});
}

/* ============ TIẾN ĐỘ ============ */
VIEWS.prog = v => {
  const st = stageOf(S.xp);
  v.appendChild(sec(`<div class="row spread"><h3>Cây của bạn</h3><span class="chip"><img src="img/leaf.png" alt="">${S.xp} XP</span></div><div class="stages">${STAGES.map((s, k) => `<span class="${k <= st ? 'on' : ''}"><img src="img/${s[1]}.png" alt="">${s[0]}</span>`).join('')}</div><p class="xs muted">Bản chính: lên giai đoạn cần đủ XP và qua bài kiểm tra mốc 85%.</p>`));
  const spoken = Object.values(S.spoken).reduce((a, b) => a + b, 0), learned = Object.keys(S.cards).length, known = Object.keys(S.cards).filter(isKnown).length;
  v.appendChild(sec(`<h3>Số liệu</h3><div class="stats">
    <div class="stat"><b>${S.streak.n}</b><span class="xs muted">ngày liên tiếp</span></div><div class="stat"><b>${S.streak.best}</b><span class="xs muted">kỷ lục</span></div><div class="stat"><b>${spoken}</b><span class="xs muted">lần nói to</span></div>
    <div class="stat"><b>${learned}</b><span class="xs muted">câu đã học</span></div><div class="stat"><b>${known}</b><span class="xs muted">câu phản xạ</span></div><div class="stat"><b>${Object.keys(S.ipa).length}/${IPAL.length}</b><span class="xs muted">bài phát âm</span></div></div>`));
  const lv = [1, 2, 3, 4].map(n => Object.values(S.cards).filter(c => c.lv === n).length);
  v.appendChild(foldEl('ladder', {title:'Bậc thang phản xạ', sub:`${Object.keys(S.cards).filter(isKnown).length} câu đã thuộc`, icon:'<img src="img/speech.png" alt="">', body:`${['Nghe hiểu','Nói theo','Nhìn nghĩa, nói ra','Phản xạ dưới 3 giây'].map((t, k) => `<div class="row spread sm"><span>${k+1}. ${t}</span><b>${lv[k]}</b></div><div class="bar"><i style="width:${learned ? lv[k] / learned * 100 : 0}%"></i></div>`).join('')}<p class="xs muted">Câu "đã thuộc" khi đạt mức 4 vào 2 ngày khác nhau.</p>`}));
};

/* ============ SỔ CỦA TÔI: Sổ câu hay, Nhật ký, Cài đặt ============ */
let NOTE = {tab:'saved', q:'', f:'all'};
VIEWS.docs = v => {
  const seg = document.createElement('div'); seg.className = 'seg';
  seg.innerHTML = [['saved','Sổ câu'],['diary','Nhật ký'],['set','Cài đặt']].map(([k, t]) => `<button aria-pressed="${NOTE.tab === k}" data-k="${k}">${t}</button>`).join('');
  seg.onclick = e => { const b = e.target.closest('button'); if (b){ NOTE.tab = b.dataset.k; render(); } };
  v.appendChild(seg);
  ({saved:savedView, diary:diaryView, set:settingsView})[NOTE.tab](v);
};
/* Sổ câu: bạn ghi câu hay (mỗi dòng một câu), app tự dịch sang tiếng Việt.
   Câu mới được luyện nghe, đọc, viết, nói ở buổi chiều rồi vào lịch ôn giãn cách. */
function savedView(v){
  const nw = newNotes();
  const add = sec(`<div class="row"><img src="img/star.png" alt="" width="28"><b style="flex:1">Thêm câu vào sổ</b></div>
    <textarea id="na" rows="3" placeholder="Mỗi dòng một câu tiếng Anh.&#10;Gõ một từ thì app tự tra phiên âm.&#10;Muốn tự ghi nghĩa: câu = nghĩa"></textarea>
    <button class="btn block" id="nadd">${ico('plus')} Thêm và tự dịch</button><div id="nst"></div>
    ${nw.length ? `<div class="note sm row" style="flex-wrap:nowrap"><span style="flex:1"><b>${nw.length} câu mới</b> chờ luyện. Không giới hạn số câu mỗi ngày: mỗi lượt luyện ${NOTE_BATCH} câu (nghe, đọc, viết, nói), xong lượt này bấm luyện tiếp. Sau đó câu vào lịch ôn theo đồ thị lãng quên.</span>${ib('play','Luyện ngay','main','id="ngo"')}</div>` : ''}`);
  v.appendChild(add);
  add.querySelector('#nadd').onclick = () => addNotes(add.querySelector('#na'), add.querySelector('#nst'), add.querySelector('#nadd'));
  add.querySelector('#ngo')?.addEventListener('click', openNote);
  if (S.set.neural == null && S.saved.length){
    const nv = document.createElement('div'); nv.className = 'note sm';
    nv.innerHTML = `<b>Bật giọng đọc tự nhiên cho câu bạn tự thêm?</b> Giọng gần như người thật, chạy ngay trong máy. Lần đầu tải khoảng 92 MB (nên dùng wifi), sau đó không cần mạng.<div class="row" style="margin-top:8px"><button class="btn sun" data-nv="1">${ico('check')} Bật</button><button class="btn ghost" data-nv="0">Để sau</button></div>`;
    nv.querySelectorAll('[data-nv]').forEach(b => b.onclick = () => { S.set.neural = b.dataset.nv === '1'; save(); if (S.set.neural){ const st = add.querySelector('#nst'); makeVoices(allNotes(), t => st.innerHTML = t ? `<p class="sm b">${esc(t)}</p>` : ''); } nv.remove(); });
    add.appendChild(nv);
  }
  const s = sec(`<div class="search">${ico('search')}<input type="text" id="sq" placeholder="Tìm câu hoặc nghĩa..." value="${esc(NOTE.q)}"></div><div class="chips">${[['all','Tất cả'],['new','Chưa luyện'],['weak','Đang yếu'],['known','Đã thuộc']].map(([k, t]) => `<button aria-pressed="${NOTE.f === k}" data-f="${k}">${t}</button>`).join('')}</div><div id="sl" style="display:flex;flex-direction:column;gap:8px"></div>`);
  v.appendChild(s);
  const pass = c => NOTE.f === 'all' || (NOTE.f === 'new' ? !S.cards[c.id] : NOTE.f === 'known' ? isKnown(c.id) : !isKnown(c.id) && (S.cards[c.id]?.l || 0) > 0);
  const draw = () => {
    const q = NOTE.q.toLowerCase();
    const list = S.saved.filter(c => (!q || (c.en + ' ' + c.vi).toLowerCase().includes(q)) && pass(c));
    const groups = {[MYSRC]:[]}; [...list].reverse().forEach(c => (groups[c.src] ||= []).push(c));
    if (!groups[MYSRC].length) delete groups[MYSRC];
    s.querySelector('#sl').innerHTML = list.length ? Object.entries(groups).map(([g, cs]) => `<details class="grp" data-g="sv-${esc(g)}" ${q || NOTE.f !== 'all' || (OPENG['sv-' + g] ?? g === MYSRC) ? 'open' : ''}><summary><span>${esc(g)}</span><span class="n">${cs.length}</span></summary>${cs.map(c => `<div class="line"><button data-o="${esc(c.id)}"><span class="tx">${esc(c.en)}${c.ipa ? ` <span class="ipa-s">${esc(c.ipa)}</span>` : ''}</span>${c.mt ? '<span class="lv mt">máy dịch</span>' : ''}<span class="lv m${memK(S.cards[c.id])}">${esc(memInfo(c.id).tag)}</span></button><div class="more" hidden data-m="${esc(c.id)}"><p class="xs muted">${esc(memInfo(c.id).line)}</p><input type="text" data-vi="${esc(c.id)}" value="${esc(c.vi)}" placeholder="Nghĩa tiếng Việt (chạm để sửa)">${c.ex ? `<div class="li"><span class="t"><b>${esc(c.ex)}</b><br><span class="sm muted">${esc(c.exVi || '')}</span></span>${ib('play','Nghe câu ví dụ','',`data-pe="${esc(c.id)}"`)}</div>` : ''}<div class="row">${ib('play','Nghe','',`data-p="${esc(c.id)}"`)}${ib('mic','Luyện câu này','',`data-r="${esc(c.id)}"`)}${c.vi ? '' : ib('vi','Dịch tự động','',`data-t="${esc(c.id)}"`)}${ib('trash','Bỏ khỏi sổ','',`data-x="${esc(c.id)}"`)}</div></div></div>`).join('')}</details>`).join('') : `<p class="sm muted">${S.saved.length ? 'Không có câu khớp.' : 'Sổ còn trống. Gõ câu hay bạn gặp vào ô phía trên nhé.'}</p>`;
    const find = id => S.saved.find(x => x.id === id);
    s.querySelectorAll('[data-o]').forEach(b => b.onclick = () => { const m = s.querySelector(`[data-m="${CSS.escape(b.dataset.o)}"]`); m.hidden = !m.hidden; });
    s.querySelectorAll('[data-vi]').forEach(i => i.onchange = () => { find(i.dataset.vi).vi = i.value.trim(); save(); });
    s.querySelectorAll('[data-p]').forEach(b => b.onclick = () => playItem(find(b.dataset.p)));
    s.querySelectorAll('[data-pe]').forEach(b => b.onclick = () => playItem(exItem(find(b.dataset.pe))));
    s.querySelectorAll('[data-r]').forEach(b => b.onclick = () => openReview([b.dataset.r], 'Luyện câu'));
    s.querySelectorAll('[data-t]').forEach(b => b.onclick = async () => { b.disabled = true; toast('Đang dịch...'); await translateNotes([find(b.dataset.t)]); draw(); s.querySelector(`[data-m="${CSS.escape(b.dataset.t)}"]`).hidden = false; });
    s.querySelectorAll('[data-x]').forEach(b => b.onclick = () => { const id = b.dataset.x; if (!b.dataset.sure){ b.dataset.sure = 1; b.classList.add('on'); toast('Bấm lần nữa để bỏ câu này'); return; } S.saved = S.saved.filter(x => x.id !== id); delete S.cards[id]; delete CARDS[id]; save(); draw(); });
  };
  s.querySelector('#sq').oninput = e => { NOTE.q = e.target.value; draw(); };
  s.querySelectorAll('[data-f]').forEach(b => b.onclick = () => { NOTE.f = b.dataset.f; render(); });
  draw();
}
function diaryView(v){
  const days = new Set(S.diary.map(x => x.date)), now = new Date(), y = now.getFullYear(), m = now.getMonth();
  const first = (new Date(y, m, 1).getDay() + 6) % 7, nd = new Date(y, m + 1, 0).getDate();
  v.appendChild(sec(`<div class="row spread"><h3>Tháng ${m + 1}/${y}</h3><span class="chip">${[...days].filter(d => d.startsWith(`${y}-${String(m+1).padStart(2,'0')}`)).length} ngày</span></div>
    <div class="cal">${['T2','T3','T4','T5','T6','T7','CN'].map(d => `<span class="h">${d}</span>`).join('')}${'<span></span>'.repeat(first)}${Array.from({length:nd}, (_, i) => { const k = `${y}-${String(m+1).padStart(2,'0')}-${String(i+1).padStart(2,'0')}`; return `<span class="${days.has(k) ? 'on' : ''}">${i+1}</span>`; }).join('')}</div>`));
  const months = {}; S.diary.forEach(x => (months[x.date.slice(0, 7)] ||= []).push(x));
  const s = sec(Object.keys(months).length ? Object.entries(months).map(([mo, xs]) => `<details class="grp" ${mo === Object.keys(months)[0] ? 'open' : ''}><summary><span>Tháng ${+mo.slice(5)}/${mo.slice(0, 4)}</span><span class="n">${xs.length}</span></summary>${xs.map((x, k) => `<div class="line"><button data-d="${mo}-${k}"><span class="xs muted">${x.date.slice(8)}/${x.date.slice(5, 7)}</span><span class="tx">${esc(x.text)}</span></button><div class="more" hidden data-dm="${mo}-${k}"><p>${esc(x.text)}</p></div></div>`).join('')}</details>`).join('') : '<p class="sm muted">Nhật ký tối sẽ hiện ở đây.</p>');
  s.querySelectorAll('[data-d]').forEach(b => b.onclick = () => { const m2 = s.querySelector(`[data-dm="${b.dataset.d}"]`); m2.hidden = !m2.hidden; });
  v.appendChild(s);
}
function settingsView(v){
  const bk = S.set.lastBackup ? new Date(S.set.lastBackup).toLocaleDateString('vi-VN') : 'chưa có';
  const s = document.createElement('div'); s.style.cssText = 'display:flex;flex-direction:column;gap:12px';
  s.innerHTML = (D.public ? fold('st-me', {title:'Tên và nghề của bạn trong bài', sub:S.set.me ? esc([S.set.me.name, S.set.me.jobVi].filter(Boolean).join(' · ')) : 'Chưa nhập', icon:ico('users'), name:'set', body:meForm()}) : '')
    + fold('st-name', {title:'Tên app', sub:esc(S.set.name), icon:ico('edit'), name:'set', body:`<div class="field"><label for="sn">Tên app</label><input type="text" id="sn" value="${esc(S.set.name)}"></div>
      <div class="field"><label for="ss">Dòng phụ</label><input type="text" id="ss" value="${esc(S.set.sub)}"></div>`})
    + fold('st-time', {title:'Khung giờ và nhắc học', sub:SLOTS.map(([k]) => S.set.slots[k]).join(' · '), icon:ico('cal'), name:'set', body:`${SLOTS.map(([k, n]) => `<div class="row spread"><span>${n}</span><input type="time" data-slot="${k}" value="${S.set.slots[k]}"></div>`).join('')}
      <p class="sm muted">Nhắc học bằng Lịch Google: bấm từng nút rồi bấm Lưu.</p>${calButtons()}`})
    + fold('st-voice', {title:'Giọng đọc câu tự thêm', sub:S.set.neural ? 'Giọng tự nhiên (trong máy)' : 'Giọng có sẵn của máy', icon:ico('head'), name:'set', body:`<p class="sm muted">Giọng tự nhiên chạy ngay trong máy, miễn phí. Lần đầu tải khoảng 92 MB (nên dùng wifi). Câu đã tạo giọng được lưu lại, phát ngay cả khi mất mạng.</p><div class="row"><button class="btn ${S.set.neural ? 'ghost' : 'sun'}" id="nvt">${S.set.neural ? 'Tắt giọng tự nhiên' : 'Bật giọng tự nhiên'}</button></div><p class="sm b" id="nvs"></p>`})
    + fold('st-pron', {title:'Bộ chấm phát âm', sub:pronOn() ? 'Đang dùng bộ chấm trong máy' : 'Đang dùng cách chấm cũ (qua chữ máy nghe)', icon:ico('mic'), name:'set', body:`<p class="sm muted">Bộ chấm trong máy nghe giọng bạn và so <b>từng âm</b> với câu mẫu, không đoán chữ như Chrome nên không tự sửa giúp bạn. Miễn phí, không cần tài khoản. Lần đầu tải khoảng 242 MB (nên dùng wifi), sau đó chấm được cả khi mất mạng.</p><div class="row"><button class="btn ${pronOn() ? 'ghost' : 'sun'}" id="pron1">${pronOn() ? 'Tắt bộ chấm trong máy' : 'Tải và bật'}</button>${pronOn() ? '<button class="btn ghost" id="pron2">Đo tốc độ trên máy này</button>' : ''}</div><p class="sm b" id="pronst"></p><p class="xs muted">Phần nói tự do và nhật ký vẫn dùng micro ở mục dưới, vì không có câu mẫu để so.</p>`})
    + fold('st-mic', {title:'Micro', sub:micMode() === 'google' ? 'Đang dùng micro của Chrome' : 'Đang dùng bộ nhận giọng trong máy', icon:ico('mic'), name:'set', body:`<select id="mic"><option value="auto">Tự động</option><option value="google">Micro của Chrome (nhanh, cần mạng)</option><option value="local">Bộ nhận giọng trong máy (chạy không cần mạng)</option></select>`})
    + fold('st-look', {title:'Cỡ chữ và giao diện', sub:`Chữ ${S.set.font} · ${({'':'theo máy',light:'sáng',dark:'tối'})[S.set.theme || '']}`, icon:ico('font'), name:'set', body:`<div class="row spread"><span class="row">${ico('font')} Cỡ chữ</span><div class="seg" style="box-shadow:none">${['S','M','L'].map(f => `<button aria-pressed="${S.set.font === f}" data-f="${f}">${f}</button>`).join('')}</div></div>
      <div class="row spread"><span class="row">${ico('sun')} Giao diện</span><div class="seg" style="box-shadow:none">${[['','Máy'],['light','Sáng'],['dark','Tối']].map(([k, t]) => `<button aria-pressed="${(S.set.theme || '') === k}" data-t="${k}">${t}</button>`).join('')}</div></div>`})
    + fold('st-bk', {title:'Sao lưu và khôi phục', sub:'Lần cuối: ' + bk, icon:ico('down'), name:'set', body:`<div class="row">${ib('down','Sao lưu','','id="bk"')}${ib('up','Khôi phục','','id="rs"')}<span class="sm muted" style="flex:1">Lưu tiến độ ra file hoặc nạp lại từ file</span><input type="file" id="rf" accept=".json" hidden></div>`});
  v.appendChild(s);
  if (D.public) bindMe(s);
  $('#nvt').onclick = () => { S.set.neural = !S.set.neural; save(); if (S.set.neural){ makeVoices(allNotes(), t => { const e = $('#nvs'); if (e) e.textContent = t; }); makePzVoices(); } render(); };
  const pst = t => { const e = $('#pronst'); if (e) e.innerHTML = t; };
  $('#pron1').onclick = async () => {
    if (pronOn()){ S.set.pron = 'off'; save(); render(); return; }
    $('#pron1').disabled = true; pst('Đang tải bộ chấm...');
    try{ const M = await pronMod(); await M.load(pronProg(n => pst(`Đang tải bộ chấm: ${n}% (nên dùng wifi)`))); S.set.pron = 'on'; save(); render(); toast('Đã bật bộ chấm trong máy'); pronTest(); }
    catch(e){ console.warn(e); pst('Chưa tải được. Kiểm tra mạng rồi thử lại.'); $('#pron1').disabled = false; }
  };
  $('#pron2')?.addEventListener('click', pronTest);
  $('#mic').value = S.set.mic;
  $('#mic').onchange = e => { S.set.mic = e.target.value; delete S.set.micAuto; save(); render(); };
  $('#sn').onchange = e => { S.set.name = e.target.value.trim() || 'Tiếng Anh Nhà Mình'; save(); hdr(); };
  $('#ss').onchange = e => { S.set.sub = e.target.value.trim(); save(); hdr(); };
  s.querySelectorAll('[data-slot]').forEach(i => i.onchange = () => { S.set.slots[i.dataset.slot] = i.value; S.set.calDone = false; save(); render(); });
  s.querySelectorAll('[data-f]').forEach(b => b.onclick = () => { S.set.font = b.dataset.f; save(); applySet(); render(); });
  s.querySelectorAll('[data-t]').forEach(b => b.onclick = () => { S.set.theme = b.dataset.t; save(); applySet(); render(); });
  $('#bk').onclick = doBackup;
  $('#rs').onclick = () => $('#rf').click();
  $('#rf').onchange = async e => { try{ const x = JSON.parse(await e.target.files[0].text()); S = Object.assign(defState(), x); S.set = Object.assign(defState().set, x.set || {}); save(); indexSaved(); applySet(); render(); toast('Đã khôi phục tiến độ'); }catch{ toast('File không đúng, thử file khác.'); } };
}

function celebrate(k){
  const box = document.createElement('div'); box.className = 'lesson'; box.style.zIndex = 50;
  box.innerHTML = `<div class="wrap"><div class="big-ok"><img class="grow" src="img/${STAGES[k][1]}.png" alt="" style="width:160px"><h1>${STAGES[k][0]}!</h1><p class="muted">Cây của bạn đã lớn thêm một giai đoạn.</p></div><button class="btn block">${ico('check')}</button></div>`;
  box.querySelector('button').onclick = () => box.remove(); document.body.appendChild(box);
}

fixCardDates(); applySet(); render();
setTimeout(() => { if (S.set.neural){ makeVoices(allNotes()); makePzVoices(); } }, 4000);
setTimeout(async () => { if (!D.public || !S.set.me || S.set.meOk) return; const bad = await meTypos(S.set.me); if (bad.length) toast(`"${bad[0][0]}" có thể viết sai${bad[0][2] ? ` (có phải "${bad[0][2]}"?)` : ''}. Sửa ở Sổ của tôi › Cài đặt.`); else { S.set.meOk = true; save(); } }, 2500);
setInterval(() => { if ($('#lesson').hidden && TAB === 'today') render(); }, 60000);
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('sw.js').catch(() => {});
