/* Tiếng Anh Nhà Mình - bản demo 4 */
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
 edit:'<path d="M4 20h4L19 9l-4-4L4 16z"/>'
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
function defState(){ return {xp:0, streak:{n:0,best:0,last:null,days:{}}, life:{}, ipa:{}, alex:{}, alexUser:[], cards:{}, saved:[], diary:[], spoken:{}, did:{}, weak:{},
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
  if (me.jobVi) viR.push([/y tá/g, me.jobVi]);
  if (me.place){ enR.push([/\b(a|an) hospital\b/g, art(me.place) + ' ' + me.place], [/\bhospital\b/g, me.place]); }
  if (me.placeVi) viR.push([/bệnh viện/g, me.placeVi]);
  const E = t => enR.reduce((s, [a, b]) => s.replace(a, b), t), V = t => viR.reduce((s, [a, b]) => s.replace(a, b), t);
  D.life.forEach(w => { w.weekDiary = E(w.weekDiary); w.talk = V(w.talk); w.days.forEach(d => {
    d.cards.forEach(c => { c.en = E(c.en); c.vi = V(c.vi); });
    d.patterns.forEach(p => { p.frame = E(p.frame); p.fills.forEach(f => { f.w = E(f.w); f.en = E(f.en); }); });
    d.dialogue.forEach(l => { l.en = E(l.en); l.vi = V(l.vi); });
    d.ask.forEach(a => { a.q = E(a.q); a.ans = E(a.ans); });
    d.today = E(d.today); d.diary.frame = E(d.diary.frame); d.diary.hints = d.diary.hints.map(E);
  }); });
  (D.ipaExtra || []).forEach(x => x.items.forEach(i => i.w = E(i.w)));
}
if (D.public) personalize();
const meForm = () => { const m = S.set.me || {}; return `<p class="sm muted">Bài học sẽ dùng tên và nghề của bạn. Giọng mẫu vẫn đọc "Mai", "nurse"; bạn cứ nói thông tin của mình, app chấm theo chữ của bạn. Chỉ lưu trong máy này.</p>
  <div class="field"><label for="mn">Tên của bạn</label><input type="text" id="mn" placeholder="Ví dụ: Hoa" value="${esc(m.name || '')}"></div>
  <div class="row" style="flex-wrap:nowrap"><div class="field" style="flex:1"><label for="mj">Nghề (tiếng Anh)</label><input type="text" id="mj" placeholder="teacher" value="${esc(m.job || '')}"></div><div class="field" style="flex:1"><label for="mjv">Nghề (tiếng Việt)</label><input type="text" id="mjv" placeholder="giáo viên" value="${esc(m.jobVi || '')}"></div></div>
  <div class="row" style="flex-wrap:nowrap"><div class="field" style="flex:1"><label for="mp">Nơi làm (tiếng Anh)</label><input type="text" id="mp" placeholder="school" value="${esc(m.place || '')}"></div><div class="field" style="flex:1"><label for="mpv">Nơi làm (tiếng Việt)</label><input type="text" id="mpv" placeholder="trường học" value="${esc(m.placeVi || '')}"></div></div>
  <button class="btn block" id="msave">${ico('check')} Lưu và áp dụng</button>`; };
function bindMe(root){
  root.querySelector('#msave').onclick = () => {
    const g = id => root.querySelector(id).value.trim();
    S.set.me = {name:g('#mn'), job:g('#mj').toLowerCase(), jobVi:g('#mjv'), place:g('#mp').toLowerCase(), placeVi:g('#mpv')};
    save(); location.reload();
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

/* Alex: bài mẫu + bài bạn tự thêm */
const ALEX_CD = ['Tên và chức vụ','Miêu tả người','Quần áo','Thời gian','Ngày tháng','Nghề nghiệp','Thể thao','Vị trí','Gia đình','Giải trí','Giá cả','Nhà hàng','Tám chuyện','Kỳ nghỉ','Cuộc sống căn hộ','Phim ảnh','Thời tiết','Mua sắm','Dùng điện thoại','Mô tả đồ vật','Chỉ đường','Những người ta quen','Địa danh, địa điểm','Sức khỏe'];
const SAMPLE = D.alex.flatMap(c => c.lessons.map(l => Object.assign(l, {cd:c.cd, sample:true, title:l.title + ' (bài mẫu)'})));
const alexAll = () => [...SAMPLE, ...S.alexUser].sort((a, b) => a.cd - b.cd || (a.created || 0) - (b.created || 0));
const nextAlex = () => alexAll().find(l => !(S.alex[l.id] >= 85));

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
function play(src, rate = 1, t0 = null, t1 = null){
  return new Promise(res => {
    try{ player.pause(); }catch{}
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
  const a = Array.isArray(it.a) ? it.a[Math.floor(Math.random() * it.a.length)] : it.a;
  return play(a, rate);
}
const wait = ms => new Promise(r => setTimeout(r, ms));

/* ============ Lưu file âm thanh trong máy (IndexedDB) ============ */
const IDB = {
  db: null,
  open(){ return this.db || (this.db = new Promise((res, rej) => { const r = indexedDB.open('tanm-audio', 1); r.onupgradeneeded = () => r.result.createObjectStore('f'); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); })); },
  async put(k, v){ const db = await this.open(); return new Promise((res, rej) => { const t = db.transaction('f', 'readwrite'); t.objectStore('f').put(v, k); t.oncomplete = res; t.onerror = () => rej(t.error); }); },
  async get(k){ const db = await this.open(); return new Promise((res, rej) => { const q = db.transaction('f').objectStore('f').get(k); q.onsuccess = () => res(q.result); q.onerror = () => rej(q.error); }); },
  async del(k){ const db = await this.open(); return new Promise(res => { const t = db.transaction('f', 'readwrite'); t.objectStore('f').delete(k); t.oncomplete = res; }); }
};
const blobUrls = {};
async function lessonUrl(L){ if (!L.blob) return null; if (!blobUrls[L.blob]){ const b = await IDB.get(L.blob); if (!b) return null; blobUrls[L.blob] = URL.createObjectURL(b); } return blobUrls[L.blob]; }

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
function listenGoogle(onPartial){
  return new Promise(res => {
    const r = new SR(); REC = {stop:() => { try{ r.stop(); }catch{} }};
    r.lang = 'en-US'; r.interimResults = true; r.maxAlternatives = 3; r.continuous = false;
    let fin = '', alts = [], err = null;
    r.onresult = e => { let t = ''; alts = []; for (let i = 0; i < e.results.length; i++){ t += e.results[i][0].transcript; if (e.results[i].isFinal) for (let k = 0; k < e.results[i].length; k++) alts.push(e.results[i][k].transcript); } fin = t; onPartial?.(t); };
    r.onerror = e => { err = e.error; };
    r.onend = () => { REC = null; res({text:fin.trim(), alts, err}); };
    try{ r.start(); }catch{ REC = null; res({text:'', err:'busy'}); }
    setTimeout(() => { try{ r.stop(); }catch{} }, 10000);
  });
}
/* Ghi âm đến khi bạn ngừng nói (hoặc bấm lại), trả về file âm thanh */
async function recordClip({maxMs = 9000, onLevel} = {}){
  const stream = await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true, noiseSuppression:true}});
  const mr = new MediaRecorder(stream); const parts = [];
  const Ctx = window.AudioContext || window.webkitAudioContext; const ctx = new Ctx();
  const an = ctx.createAnalyser(); an.fftSize = 1024; ctx.createMediaStreamSource(stream).connect(an);
  const data = new Float32Array(an.fftSize); let started = false, quietSince = 0;
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
      if (rms > .03){ started = true; quietSince = 0; } else if (started){ quietSince ||= Date.now(); if (Date.now() - quietSince > 1300) return stop(); }
      if (Date.now() - t0 > maxMs) return stop();
      requestAnimationFrame(tick);
    };
    tick();
  });
}
async function listenLocal(onPartial){
  let blob;
  try{ blob = await recordClip(); }catch{ return {text:'', err:'not-allowed'}; }
  lastClip = URL.createObjectURL(blob);
  onPartial?.('Đang nhận dạng giọng nói...');
  try{
    const AI = await aiReady(); const {pcm} = await decode16k(blob);
    const r = await AI.asr(pcm, {model:'Xenova/whisper-tiny.en', onProg:p => { if (p.status === 'progress' && p.file?.endsWith('.onnx')) onPartial?.(`Tải bộ nhận giọng lần đầu: ${Math.round(p.progress || 0)}%`); }});
    return {text:(r.text || '').trim(), alts:[], err:null};
  }catch(e){ return {text:'', err:'local', msg:e.message}; }
}
async function listen(onPartial){
  try{ player.pause(); }catch{}
  if (micMode() === 'google' && SR){
    const r = await listenGoogle(onPartial);
    if (['network','service-not-allowed','language-not-supported'].includes(r.err) && S.set.mic === 'auto'){
      S.set.micAuto = 'local'; save(); onPartial?.('Chuyển sang bộ nhận giọng trong máy, nói lại nhé...');
      return listenLocal(onPartial);
    }
    return r;
  }
  return listenLocal(onPartial);
}
const stopListen = () => { try{ REC?.stop(); }catch{} };
const MICERR = {'not-allowed':'Chưa cho phép micro. Bấm biểu tượng ổ khóa cạnh thanh địa chỉ để cho phép.', 'no-speech':'Chưa nghe thấy gì. Nói to và gần micro hơn nhé.', network:'Micro cần mạng.', 'audio-capture':'Không tìm thấy micro.', local:'Bộ nhận giọng trong máy chưa chạy được. Kiểm tra mạng ở lần đầu.', busy:'Micro đang bận, thử lại.'};

/* ============ Chấm điểm ============ */
const EXP = {"i'm":"i am","you're":"you are","we're":"we are","they're":"they are","it's":"it is","that's":"that is","what's":"what is","let's":"let us","don't":"do not","can't":"can not","cannot":"can not","isn't":"is not","i'd":"i would","name's":"name is","how's":"how is","he's":"he is","she's":"she is","there's":"there is","here's":"here is","okay":"ok","mr":"mister","ms":"miss"};
const NUM = {one:'1',two:'2',three:'3',four:'4',five:'5',six:'6',seven:'7',eight:'8',nine:'9',ten:'10'};
function norm(w){ let x = w.toLowerCase().replace(/[’‘]/g,"'").replace(/[^a-z0-9']/g,''); if (!x) return []; if (EXP[x]) return EXP[x].split(' '); if (NUM[x]) return [NUM[x]]; return [x.replace(/'/g,'')]; }
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
function scoreHTML(r, heard){
  const c = r.score >= 85 ? 'var(--good)' : r.score >= 60 ? 'var(--sun)' : 'var(--bad)';
  const bad = r.words.filter(w => !w.ok).map(w => w.w);
  return `<div class="score"><div class="ring" style="--p:${r.score};--c:${c}"><b>${r.score}</b></div><div class="sm"><span class="muted">Máy nghe:</span> <span class="heard">${esc(heard || '...')}</span></div>${lastClip && micMode() === 'local' ? ib('ear','Nghe lại giọng mình','','data-mine="1"') : ''}</div>
  <div class="words">${r.words.map(w => `<span class="w ${w.ok ? 'ok' : 'bad'}">${esc(w.w)}</span>`).join('')}</div>
  ${bad.length ? tipsFor(bad).map(t => `<div class="note sm"><b>${esc(t.w)} · /${esc(t.s)}/</b> ${esc(t.t)}</div>`).join('') : ''}`;
}

/* ============ Lịch ôn + bậc thang phản xạ ============ */
function learn(id){ if (!S.cards[id]) S.cards[id] = {i:0, e:2.5, r:0, l:0, lv:2, d:Date.now() + 10*MIN, ok4:[]}; }
function review(id, score, fast){
  learn(id); const c = S.cards[id], now = Date.now();
  if (score < 85){ c.r = 0; c.i = 0; c.l = (c.l || 0) + 1; c.e = Math.max(1.3, c.e - .2); c.lv = Math.max(2, c.lv - 1); c.d = now + 10*MIN; }
  else {
    if (c.lv < 4 && fast) c.lv++;
    if (c.lv === 4 && fast){ const t = ymd(); if (!c.ok4.includes(t)) c.ok4.push(t); }
    const ni = c.r === 0 ? 1 : c.r === 1 ? 3 : Math.round(Math.max(1, c.i) * c.e * (fast ? 1.15 : 1));
    c.i = ni; c.r++; c.d = dayStart() + ni*DAY + 3*3600e3;
  }
  save();
}
const isKnown = id => (S.cards[id]?.ok4 || []).length >= 2;
const due = () => Object.keys(S.cards).filter(id => CARDS[id] && S.cards[id].d <= Date.now()).sort((a, b) => S.cards[a].d - S.cards[b].d).slice(0, 40);
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
  const L = nextSched(), I = nextIpa(), A = nextAlex(), dn = due().length;
  const lifeAmLabel = L && (L.kind === 't7' ? 'Ôn cả 40 câu của tuần' : L.kind === 'cn' ? 'Nói tự do 4/3/2' : `${L.d.topic}: nghe, mẫu câu, 8 câu mới`);
  const lifePmLabel = L && (L.kind === 't7' ? 'Kiểm tra tuần (cần 85%)' : L.kind === 'cn' ? 'Nhật ký tuần + nghe lại cả tuần' : `${L.d.topic}: hỏi đáp, đọc to, chép, kiểm tra, nhật ký`);
  const tag = L ? `Tuần ${L.w.w} · Ngày ${L.dn}/7` : '';
  if (k === 'sang') return [
    I && {key:'ipa', img:'lips', t:'Phát âm', s:`${STAGE_NAMES[I.stage]} · ${ipaTitle(I)} · ~5 phút`, go:() => openIpa(I)},
    L && (S.life[L.key]?.am != null && !didToday('lifeAm')
      ? {key:'lifeAm', img:'speech', t:'Đời sống · ' + tag, s:'Làm nốt phần tối của hôm trước: ' + lifePmLabel, go:() => openLifePart(L, 'pm', 'lifeAm')}
      : {key:'lifeAm', img:'speech', t:'Đời sống · ' + tag, s:lifeAmLabel + ' · ~20 phút', go:() => openLifePart(L, 'am')})
  ].filter(Boolean).map(x => Object.assign(x, {slot:k}));
  if (k === 'chieu') return [
    {key:'alex', img:'headphone', t:'Khóa Alex', s:A ? `CĐ${A.cd} · ${A.title} · ~12 phút` : 'Thêm file âm thanh bài học', empty:!A, go:() => A ? openAlex(A) : openAlexHub()},
    {key:'review', img:'book', t:'Ôn câu đến hạn', s:dn ? `${dn} câu · ~5 phút` : 'Chưa có câu đến hạn', empty:!dn, go:() => dn ? openReview(due(), 'Ôn câu đến hạn') : toast('Chưa có câu nào đến hạn ôn.')}
  ].map(x => Object.assign(x, {slot:k}));
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
function closeLesson(){ stopListen(); try{ player.pause(); }catch{} HF.tok++; $('#lesson').hidden = true; document.body.style.overflow = ''; LS = null; render(); }
/* Thoát giữa chừng thì lần sau mở lại đúng bước đang học (trong 2 ngày) */
function openLesson(title, steps, onFinish, didKey){
  LS = {title, steps, i:0, onFinish, score:[], didKey};
  const r = S.resume;
  if (r && r.title === title && r.i > 0 && r.i < steps.length && r.day >= ymd(Date.now() - 2*DAY)){ Object.assign(LS, {i:r.i, score:r.score || [], rp:r.rp, low:r.low}); toast(`Học tiếp từ bước ${r.i + 1}/${steps.length}`); }
  openPanel(); drawStep();
}
function drawStep(){
  const el = $('#lesson'), s = LS.steps[LS.i];
  if (LS.i > 0){ S.resume = {title:LS.title, i:LS.i, score:LS.score, rp:LS.rp, low:LS.low, day:ymd()}; save(); }
  el.innerHTML = `<div class="wrap"><div class="lhead">${ib('x','Thoát','','id="lx"')}<div class="bar"><i style="width:${Math.round(LS.i/LS.steps.length*100)}%"></i></div><span class="xs b muted">${LS.i+1}/${LS.steps.length}</span></div>
    <div class="stepname"><span class="ic">${ico(s.icon)}</span><div><span class="eyebrow">${esc(LS.title)}</span><h3>${esc(s.name)}</h3></div></div><div id="sbody" style="display:flex;flex-direction:column;gap:14px"></div></div>`;
  $('#lx').onclick = () => { FLOW = false; closeLesson(); }; el.scrollTop = 0;
  s.run($('#sbody'), score => { if (score != null) LS.score.push(score); LS.i++; LS.i >= LS.steps.length ? finish() : drawStep(); });
}
function finish(){
  const sc = avg(LS.score) ?? 100;
  const r = LS.onFinish(sc) || {};
  if (LS.didKey) did(LS.didKey);
  delete S.resume; save();
  addXP(20); water();
  const wasFlow = FLOW, nx = FLOW ? flowNext() : null, more = nx && !nx.early;
  if (!more) FLOW = false;
  $('#lesson').innerHTML = `<div class="wrap"><div class="big-ok"><img class="grow" src="img/${r.pass === false ? 'drop' : 'trophy'}.png" alt=""><h2>${r.pass === false ? 'Gần đạt rồi!' : 'Hoàn thành!'}</h2>
    <div class="ring" style="--p:${r.score ?? sc};--c:${(r.score ?? sc) >= 85 ? 'var(--good)' : 'var(--sun)'};width:96px;height:96px"><b style="width:78px;height:78px">${r.score ?? sc}</b></div>
    <p class="muted">${esc(r.msg || '')}</p><p class="sm">+20 XP · ${STAGES[stageOf(S.xp)][0]}</p></div>
    <div class="fin-acts">${more ? `<button class="btn block sun" id="fnext">${ico('play')} Bài tiếp: ${esc(nx.t)}</button><button class="btn block ghost" id="fin">Nghỉ ở đây</button>`
      : `${wasFlow ?`<p class="note sm">Xong buổi này rồi! ${nx ? `Buổi tiếp theo lúc ${S.set.slots[nx.slot]}.` : 'Hôm nay đã học đủ.'}</p>` : ''}<button class="btn block" id="fin">${ico('check')}</button>`}</div></div>`;
  $('#fin').onclick = () => { FLOW = false; closeLesson(); };
  if (more) $('#fnext').onclick = () => { closeLesson(); startFlow(); };
}

/* Khối nghe - nói - chấm dùng chung */
function speakBlock(el, item, {mode = 'full', timer = 0, showVi = true, rates = [1], onDone, label}){
  const id = 'k' + Math.random().toString(36).slice(2, 7);
  const textHTML = mode === 'full' ? `<p class="en">${esc(item.en)}</p>` : mode === 'mask' ? `<p class="en">${item.en.split(' ').map((w, i) => i === 0 ? esc(w) : `<span class="mask">${esc(w)}</span>`).join(' ')}</p>` : `<p class="en muted" style="font-size:1.1em">${esc(label || 'Nói câu tiếng Anh')}</p>`;
  const hasAudio = !!(item.a || item.url);
  el.innerHTML = `${label && mode !== 'none' ? `<p class="xs b muted">${esc(label)}</p>` : ''}${textHTML}${showVi && item.vi ? `<p class="vi">${esc(item.vi)}</p>` : ''}
    ${timer ? `<div class="timer"><i id="${id}t"></i></div>` : ''}
    <div class="row" style="justify-content:center;gap:14px">${mode !== 'none' && hasAudio ? ib('play','Nghe mẫu','',`id="${id}p"`) + ib('turtle','Nghe chậm','',`id="${id}s"`) : ''}${ib('mic','Nói','main',`id="${id}m"`)}${ib('skip','Bỏ qua','',`id="${id}n"`)}</div>
    <p class="sm muted" id="${id}h" style="text-align:center"></p><div id="${id}r" style="display:flex;flex-direction:column;gap:10px"></div>`;
  const q = s => el.querySelector('#' + id + s);
  if (q('p')){ q('p').onclick = () => playItem(item, rates[0] || 1); q('s').onclick = () => playItem(item, .75); }
  const t0 = Date.now();
  if (timer){ const bar = q('t'); requestAnimationFrame(() => requestAnimationFrame(() => { bar.style.transitionDuration = timer + 's'; bar.style.width = '0%'; })); }
  let done = false;
  const finishWith = (r, heard, fast) => {
    if (done) return; done = true;
    q('r').innerHTML = (mode === 'none' ? `<p class="en">${esc(item.en)}</p>` : '') + (r ? scoreHTML(r, heard) : '') + `<button class="btn block" id="${id}x">${ico('next')}</button>`;
    q('x').onclick = () => onDone(r ? r.score : null, fast);
    if (r && r.score < 85) noteWeak(r.words.filter(w => !w.ok).map(w => w.w));
    if (hasAudio && (mode === 'none' || (r && r.score < 85))) playItem(item);
  };
  q('n').onclick = () => finishWith(null, '', false);
  q('m').onclick = async () => {
    if (REC){ stopListen(); return; }
    const m = q('m'); m.classList.add('live'); q('h').textContent = 'Đang nghe... nói xong thì dừng lại';
    const res = await listen(t => q('h').innerHTML = '<span class="heard">' + esc(t) + '</span>');
    m.classList.remove('live');
    if (!res.text){ q('h').textContent = res.msg || MICERR[res.err] || MICERR['no-speech']; return; }
    q('h').textContent = '';
    spoke();
    done = false; finishWith(bestScore(item.en, res), res.text, !timer || (Date.now() - t0) / 1000 <= timer + 2);
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
    $('#dn').onclick = () => { playing = false; try{ player.pause(); }catch{} next(null); };
  };
  const runPlay = async () => { if (playing) return; playing = true; for (let i = 0; i < lines.length && playing; i++){ if (!el.isConnected) return; draw(i); await playItem(lines[i]); await wait(350); } playing = false; if (pass === 0){ pass = 1; showTx = true; } if (el.isConnected) draw(); };
  draw(); runPlay();
}
function dictStep(cards){
  return (el, next) => {
    let i = 0; const tot = [];
    const one = () => {
      if (i >= cards.length){ next(avg(tot)); return; }
      const c = cards[i];
      el.innerHTML = `<p class="xs b muted">${i+1}/${cards.length}</p><div class="row" style="justify-content:center">${ib('play','Nghe','main','id="cp"')}${ib('turtle','Nghe chậm','','id="cs"')}</div>
        <input type="text" id="ci" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Gõ câu bạn nghe được..."><button class="btn block" id="cc">${ico('check')}</button><div id="cr" style="display:flex;flex-direction:column;gap:10px"></div>`;
      $('#cp').onclick = () => playItem(c); $('#cs').onclick = () => playItem(c, .75); playItem(c);
      $('#ci').onkeydown = e => { if (e.key === 'Enter') $('#cc')?.click(); };
      $('#cc').onclick = () => {
        const r = scoreText(c.en, $('#ci').value); tot.push(r.score); $('#cc').remove(); $('#ci').readOnly = true;
        if (r.score < 85 && c.id && S.cards[c.id]) review(c.id, 0, false);
        $('#cr').innerHTML = `<div class="words">${r.words.map(w => `<span class="w ${w.ok ? 'ok' : 'bad'}">${esc(w.w)}</span>`).join('')}</div><p class="vi">${esc(c.vi)}</p><button class="btn block" id="cn">${ico('next')}</button>`;
        $('#cn').onclick = () => { i++; one(); };
      };
    };
    one();
  };
}
/* Bài kiểm tra từ một nhóm câu */
function quizStep(cards, patterns, n = 5){
  return (el, next) => {
    const cs = shuffle(cards), pool = Object.values(CARDS).filter(c => c.vi);
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
        el.querySelectorAll('.opt').forEach(b => b.onclick = () => { const g = q.opts[+b.dataset.k] === q.c; el.querySelectorAll('.opt').forEach(x => { x.disabled = true; if (q.opts[+x.dataset.k] === q.c) x.classList.add('ok'); }); if (!g) b.classList.add('bad'); nextBtn(g); });
      } else if (q.k === 'fill'){
        el.insertAdjacentHTML('beforeend', `<p class="en">${esc(q.p.frame.replace('___', '_____'))}</p><p class="sm muted">Chọn từ để điền</p>` + q.opts.map(o => `<button class="opt" data-w="${esc(o)}">${esc(o)}</button>`).join(''));
        el.querySelectorAll('.opt').forEach(b => b.onclick = () => { const g = b.dataset.w === q.ans; el.querySelectorAll('.opt').forEach(x => { x.disabled = true; if (x.dataset.w === q.ans) x.classList.add('ok'); }); if (!g) b.classList.add('bad'); playItem(q.item); nextBtn(g); });
      } else if (q.k === 'order'){
        const words = q.c.en.split(' '), sh = shuffle(words.map((w, k) => ({w, k}))); let built = [];
        const draw = () => {
          el.innerHTML = `<p class="xs b muted">Câu ${i+1}/${qs.length} · Xếp thành câu</p><p class="vi">${esc(q.c.vi)}</p><p class="en" style="min-height:1.4em">${esc(built.map(x => x.w).join(' '))}</p><div class="tiles">${sh.map((x, k) => `<button class="tile ${built.includes(x) ? 'used' : ''}" data-k="${k}">${esc(x.w)}</button>`).join('')}</div><button class="btn ghost" id="qr">${ico('repeat')}</button>`;
          el.querySelectorAll('.tile').forEach(b => b.onclick = () => { const x = sh[+b.dataset.k]; if (built.includes(x)) return; built.push(x); if (built.length === words.length){ const g = built.map(y => y.w).join(' ') === q.c.en; draw(); el.insertAdjacentHTML('beforeend', `<div class="note">${g ? 'Đúng rồi!' : 'Câu đúng: <b>' + esc(q.c.en) + '</b>'}</div>`); playItem(q.c); nextBtn(g); } else draw(); });
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
function openLifePart(x, part, dk){
  if (x.kind === 'day') return part === 'am' ? lifeAm(x) : lifePm(x, dk);
  if (x.kind === 't7') return part === 'am' ? t7Review(x) : t7Test(x, dk);
  return part === 'am' ? cnTalk(x) : cnDiary(x, dk);
}
/* Câu nói dưới 60% trong bài sáng: hôm sau gặp lại trong phần khởi động và mục ôn */
const weakCards = () => Object.keys(S.cards).filter(id => CARDS[id]?.a && (S.cards[id].l || 0) > 0 && !isKnown(id)).sort((a, b) => S.cards[a].d - S.cards[b].d).map(id => CARDS[id]);
const markLife = (x, part, sc) => { S.life[x.key] = Object.assign(S.life[x.key] || {}, {[part]:sc}); save(); };
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
      if (REC) return; $('#tm').classList.add('live');
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

/* ============ ÔN (bậc thang phản xạ) ============ */
function openReview(ids, title, onDone, didKey, maxMs = 0){
  ids = ids.filter(id => CARDS[id]);
  if (!ids.length){ toast('Không có câu nào để ôn.'); return; }
  openLesson(title, [{icon:'repeat', name:maxMs ? `Tối đa ${Math.round(maxMs / MIN)} phút` : `${ids.length} câu`, run:(el, next) => {
    let i = 0; const tot = [], t0 = Date.now();
    const one = () => {
      if (i >= ids.length || (maxMs && i > 0 && Date.now() - t0 > maxMs)){ next(avg(tot)); return; }
      learn(ids[i]); const c = CARDS[ids[i]], st = S.cards[ids[i]], hard = st.lv >= 3;
      el.innerHTML = `<p class="xs b muted">${i+1}/${ids.length} · Mức ${st.lv}/4 ${isKnown(ids[i]) ? '· đã thuộc' : ''}</p><div style="display:flex;flex-direction:column;gap:14px"></div>`;
      speakBlock(el.lastChild, c, {mode:'none', showVi:true, rates:[], timer:hard ? 3 : 5, label:hard ? 'Phản xạ: nói trong 3 giây' : 'Nhìn nghĩa, nói tiếng Anh', onDone:(sc, fast) => { if (sc != null){ tot.push(sc); review(ids[i], sc, fast); } i++; one(); }});
    };
    one();
  }}], sc => { onDone?.(sc); return {msg:'Câu nhớ tốt được giãn lịch xa hơn. Câu chưa nhớ gặp lại sau 10 phút.'}; }, didKey || 'review');
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
  const ids = Object.keys(S.cards).filter(id => CARDS[id]?.a);
  const d = due().filter(id => CARDS[id]?.a), today = Object.keys(S.cards).filter(id => CARDS[id]?.a && S.cards[id].r === 0);
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
  const stop = () => { playing = false; HF.tok++; try{ player.pause(); }catch{} if (ms) ms.playbackState = 'paused'; if (el.isConnected && !el.hidden) draw(); };
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
  box.querySelector('[data-r]').onclick = async e => { const b = e.currentTarget; if (REC){ stopListen(); return; } b.classList.add('live'); try{ const blob = await recordClip({maxMs:5000}); url = URL.createObjectURL(blob); box.querySelector('[data-p]').disabled = false; play(url); }catch{ toast(MICERR['not-allowed']); } b.classList.remove('live'); };
  box.querySelector('[data-p]').onclick = () => url && play(url);
  box.querySelector('[data-m]').onclick = () => playItem(item);
  el.appendChild(box);
}
function openIpa(L){
  const steps = [];
  if (L.kind === 'sound') L.sounds.forEach(s => {
    steps.push({icon:'ear', name:`/${s.sym}/ · nghe và xem cách đọc`, run:(el, next) => {
      el.innerHTML = `<div class="row"><span class="ipa">/${esc(s.sym)}/</span><b>${esc(s.name)}</b></div><div class="note">${esc(s.tip)}</div>
        <div class="tiles">${s.words.map((w, k) => `<button class="tile" data-k="${k}">${esc(w.w)}</button>`).join('')}</div><p class="xs muted">Muốn xem khẩu hình: mở video IPA của Alex (tùy chọn).</p>`;
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

/* ============ KHÓA ALEX ============ */
async function alexLines(L){
  if (L.sample) return L.lines.map(x => ({s:x.s, en:x.en, vi:x.vi, a:x.a}));
  const url = await lessonUrl(L); return L.lines.map(x => ({s:x.s, en:x.en, vi:x.vi, url, t0:x.t0, t1:x.t1}));
}
async function openAlex(L){
  const lines = await alexLines(L);
  if (!L.sample && !lines[0]?.url){ toast('Không tìm thấy file âm thanh của bài này trên máy này.'); return; }
  openLesson(`Alex CĐ${L.cd} · ${L.title}`, [
    {icon:'head', name:'Nghe (không chữ → có chữ)', run:(el, next) => dialogueStep(el, lines, next)},
    {icon:'repeat', name:'Shadowing từng câu', run:speakSeq(lines, {mode:'full', showVi:true, rates:[1]})},
    {icon:'users', name:'Đóng vai A', run:(el, next) => roleplay(el, lines, 'A', next)},
    {icon:'swap', name:'Đổi vai: đóng vai B', run:(el, next) => roleplay(el, lines, 'B', next)},
    {icon:'star', name:'Lưu câu hay', run:(el, next) => {
      el.innerHTML = `<p class="sm muted">Chạm ngôi sao ở câu bạn muốn dùng ngoài đời.</p>` + lines.map((x, k) => `<div class="li"><span class="t"><b>${esc(x.en)}</b><br><span class="sm muted">${esc(x.vi)}</span></span>${ib('star','Lưu câu hay', S.saved.some(s => s.en === x.en) ? 'on' : '', `data-k="${k}"`)}</div>`).join('') + `<button class="btn block" id="sn">${ico('next')}</button>`;
      el.querySelectorAll('[data-k]').forEach(b => b.onclick = () => { const x = lines[+b.dataset.k]; if (S.saved.some(s => s.en === x.en)) return; const id = 'sv-' + L.id + '-' + b.dataset.k; const c = {id, en:x.en, vi:x.vi, a:x.a || null, lesson:L.id, k:+b.dataset.k, src:'Alex CĐ' + L.cd, at:Date.now()}; S.saved.push(c); CARDS[id] = c; learn(id); save(); b.classList.add('on'); toast('Đã lưu vào Sổ câu hay'); });
      $('#sn').onclick = () => next(null);
    }}
  ], sc => { const s2 = avg(LS.rp || []) ?? sc; S.alex[L.id] = s2; save(); return {pass:s2 >= 85, score:s2, msg:s2 >= 85 ? `Đóng vai đạt ${s2}%. Bài tiếp theo đã mở.` : `Đóng vai đạt ${s2}%. Cần 85% để mở bài sau.`}; }, 'alex');
}
function roleplay(el, lines, me, next){
  let i = 0; const tot = [];
  const draw = (cur, extra = '') => {
    el.innerHTML = `<p class="sm muted">Bạn là <b>${me}</b>. App phát lời người kia, đến lượt bạn thì nói.</p>` + lines.slice(0, cur + 1).map((x, k) => `<div class="bub ${x.s === me ? 'me' : ''} ${k === cur ? 'now' : ''}"><span class="who ${x.s}">${x.s}</span><div class="tx">${x.s === me && k === cur ? '<span class="muted">Đến lượt bạn...</span>' : `<b>${esc(x.en)}</b>`}<br><span class="sm muted">${esc(x.vi)}</span></div></div>`).join('') + extra;
    el.lastElementChild?.scrollIntoView?.({block:'nearest'});
  };
  const step = async () => {
    if (!el.isConnected) return;
    if (i >= lines.length){ const sc = avg(tot); (LS.rp ||= []).push(sc ?? 0); draw(lines.length - 1, `<div class="note"><b>Vai ${me}: ${sc ?? '-'} điểm</b></div><button class="btn block" id="rn">${ico('next')}</button>`); $('#rn').onclick = () => next(sc); return; }
    const x = lines[i];
    if (x.s !== me){ draw(i); await playItem(x); await wait(300); i++; step(); return; }
    draw(i, `<div class="box2" style="display:flex;flex-direction:column;gap:12px"></div>`);
    speakBlock(el.querySelector('.box2'), x, {mode:'mask', showVi:true, rates:[], label:'Lượt của bạn', onDone:sc => { tot.push(sc ?? 0); i++; step(); }});
  };
  step();
}
/* Danh sách bài Alex + thêm bài */
function openAlexHub(){
  const el = openPanel();
  el.innerHTML = `<div class="wrap"><div class="lhead">${ib('x','Đóng','','id="hx"')}<h2 style="flex:1">Khóa Alex</h2></div>
    <p class="sm muted">Mỗi file âm thanh là một bài, nằm trong chủ đề bạn chọn. Chạm chủ đề để xem các bài.</p><div id="hl" style="display:flex;flex-direction:column;gap:12px"></div></div>`;
  $('#hx').onclick = closeLesson;
  alexPanel($('#hl'), true);
}
function addAlexForm(cd0){
  const el = openPanel();
  el.innerHTML = `<div class="wrap"><div class="lhead">${ib('x','Quay lại','','id="ax"')}<h2 style="flex:1">Thêm bài Alex</h2></div>
    <div class="card"><div class="field"><label for="af">File âm thanh (mp3, m4a, wav, aac, ogg, mp4...)</label><input type="file" id="af" accept="audio/*,video/*,.m4a,.mp3,.wav,.aac,.ogg,.opus,.webm,.mp4,.3gp,.amr"></div>
    <div class="field"><label for="acd">Chủ đề</label><select id="acd">${ALEX_CD.map((t, k) => `<option value="${k+1}">CĐ${k+1} · ${esc(t)}</option>`).join('')}</select></div>
    <div class="field"><label for="an">Tên bài</label><input type="text" id="an" placeholder="Ví dụ: Lời nhắn điện thoại 3.1"></div>
    <button class="btn block" id="ago">${ico('plus')} Tạo bài</button><div id="ast" style="display:flex;flex-direction:column;gap:8px"></div></div>
    <p class="xs muted">Lần đầu app tải bộ nhận giọng và bộ dịch (khoảng 160 MB), nên dùng wifi. Các lần sau không cần tải lại.</p></div>`;
  $('#ax').onclick = openAlexHub;
  const nx = nextAlex(); $('#acd').value = cd0 || S.set.lastCd || nx?.cd || 1;
  $('#af').onchange = () => { const f = $('#af').files[0]; if (f && !$('#an').value) $('#an').value = f.name.replace(/\.[^.]+$/, ''); };
  $('#ago').onclick = async () => {
    const f = $('#af').files[0]; if (!f){ toast('Chọn file âm thanh trước nhé.'); return; }
    const st = $('#ast'), btn = $('#ago'); btn.disabled = true;
    const say = (t, p) => { st.innerHTML = `<p class="sm b">${esc(t)}</p>${p != null ? `<div class="prog"><i style="width:${p}%"></i></div>` : ''}`; };
    try{
      say('Đang đọc file...', 5);
      let pcm, dur;
      try{ ({pcm, dur} = await decode16k(f)); }catch{ throw new Error('Trình duyệt chưa đọc được dạng file này (thường là .amr hoặc .3gp). Trong ứng dụng Ghi âm, chọn lưu dạng m4a/mp3 rồi thử lại.'); }
      say('Đang chuẩn bị bộ nhận giọng...', 10);
      const AI = await aiReady();
      const r = await AI.asr(pcm, {timestamps:true, onProg:p => { if (p.status === 'progress' && p.file?.endsWith('.onnx')) say('Tải bộ nhận giọng lần đầu...', 10 + (p.progress || 0) * .3); }});
      say('Đang tách câu...', 45);
      const lines = [];
      (r.chunks || [{text:r.text, timestamp:[0, dur]}]).forEach((ch, ci) => {
        const [a, b] = ch.timestamp; const end = b ?? dur; const parts = (ch.text.match(/[^.!?]+[.!?]*/g) || [ch.text]).map(s => s.trim()).filter(Boolean);
        const total = parts.reduce((s, p) => s + p.length, 0); let t = a;
        parts.forEach(p => { const d = (end - a) * p.length / total; lines.push({s:ci % 2 ? 'B' : 'A', en:p, vi:'', t0:Math.max(0, t - .15), t1:Math.min(dur, t + d + .2)}); t += d; });
      });
      if (!lines.length) throw new Error('Không nghe ra câu nào trong file. Thử file khác nhé.');
      say('Đang dịch sang tiếng Việt...', 55);
      const vi = await AI.translate(lines.map(l => l.en), {onProg:p => { if (p.status === 'progress' && p.file?.endsWith('.onnx')) say('Tải bộ dịch lần đầu...', 55 + (p.progress || 0) * .2); }, onEach:(n, all) => say(`Đang dịch ${n}/${all} câu...`, 75 + n / all * 20)});
      vi.forEach((t, k) => lines[k].vi = t);
      const id = 'u' + Date.now().toString(36), blob = 'b' + id;
      await IDB.put(blob, f);
      const L = {id, cd:+$('#acd').value, title:$('#an').value.trim() || f.name, blob, lines, created:Date.now(), dur};
      S.alexUser.push(L); S.set.lastCd = L.cd; OPENG['cd' + L.cd] = true; save();
      say('Xong! Kiểm tra lại vai A/B và lời thoại nhé.', 100);
      setTimeout(() => editAlex(L), 600);
    }catch(e){ st.innerHTML = `<div class="note sm">${esc(e.message || 'Có lỗi, thử lại nhé.')}</div>`; btn.disabled = false; }
  };
}
async function editAlex(L){
  const el = openPanel(); const url = await lessonUrl(L);
  const draw = () => {
    el.innerHTML = `<div class="wrap"><div class="lhead">${ib('x','Xong','','id="ex"')}<h2 style="flex:1">${esc(L.title)}</h2></div>
      <p class="sm muted">Chạm A/B để đổi người nói. Chạm vào câu để sửa chữ, sửa nghĩa hoặc bỏ câu.</p>
      ${L.lines.map((x, k) => `<div class="eline"><div class="top"><button class="role ${x.s}" data-k="${k}">${x.s}</button><button class="tx" data-x="${k}">${esc(x.en)}</button>${ib('play','Nghe','',`data-p="${k}"`)}</div><div class="ed" data-ed="${k}" ${OPENG['ed' + k] ? '' : 'hidden'} style="display:flex;flex-direction:column;gap:6px"><input type="text" value="${esc(x.en)}" data-en="${k}"><input type="text" value="${esc(x.vi)}" data-vi="${k}"><button class="btn ghost" data-d="${k}">${ico('trash')} Bỏ câu này</button></div></div>`).join('')}
      <button class="btn block" id="esave">${ico('check')} Lưu bài</button></div>`;
    $('#ex').onclick = () => { save(); openAlexHub(); };
    $('#esave').onclick = () => { save(); openAlexHub(); toast('Đã lưu bài'); };
    el.querySelectorAll('[data-k]').forEach(b => b.onclick = () => { const x = L.lines[+b.dataset.k]; x.s = x.s === 'A' ? 'B' : 'A'; draw(); });
    el.querySelectorAll('[data-x]').forEach(b => b.onclick = () => { const e = el.querySelector(`[data-ed="${b.dataset.x}"]`); e.hidden = !e.hidden; OPENG['ed' + b.dataset.x] = !e.hidden; });
    el.querySelectorAll('[data-en]').forEach(i => i.onchange = () => { L.lines[+i.dataset.en].en = i.value; i.closest('.eline').querySelector('.tx').textContent = i.value; save(); });
    el.querySelectorAll('[data-vi]').forEach(i => i.onchange = () => { L.lines[+i.dataset.vi].vi = i.value; save(); });
    el.querySelectorAll('[data-p]').forEach(b => b.onclick = () => { const x = L.lines[+b.dataset.p]; play(url, 1, x.t0, x.t1); });
    el.querySelectorAll('[data-d]').forEach(b => b.onclick = () => { L.lines.splice(+b.dataset.d, 1); Object.keys(OPENG).filter(k => /^ed\d/.test(k)).forEach(k => delete OPENG[k]); save(); draw(); });
  };
  draw();
}

/* ============ LỘ TRÌNH ============ */
VIEWS.path = v => {
  const seg = document.createElement('div'); seg.className = 'seg';
  seg.innerHTML = [['life','Đời sống'],['ipa','Phát âm'],['alex','Alex']].map(([k, t]) => `<button aria-pressed="${PATHTAB === k}" data-k="${k}">${t}</button>`).join('');
  seg.onclick = e => { const b = e.target.closest('button'); if (b){ PATHTAB = b.dataset.k; render(); } };
  v.appendChild(seg);
  if (PATHTAB === 'alex'){ alexPanel(v, false); return; }
  const DN = ['T2','T3','T4','T5','T6','T7','CN'];
  const bindRows = (el, rows) => el.querySelectorAll('.lrow').forEach(b => b.onclick = () => { const x = rows[+b.dataset.k]; x.lock ? toast(x.soon ? 'Phần này đang được soạn.' : 'Qua kiểm tra tuần trước (hoặc Nhảy cóc) để mở tuần này.') : x.go(); });
  if (PATHTAB === 'life'){
    const nx = nextSched(), curW = nx ? nx.w.w : 99;
    WEEKS.forEach(w => {
      const days = SCHED.filter(x => x.w === w), nDone = days.filter(x => lifeDone(x.key)).length, lock = w.w > curW;
      const rows = days.map(x => ({x, lock, go:() => openLifePart(x, S.life[x.key]?.am != null ? 'pm' : 'am')}));
      const body = days.map((x, k) => { const r = S.life[x.key], half = r && !lifeDone(x.key), sc = r ? Math.min(...['am','pm'].map(p => r[p]).filter(n => n != null)) : null;
        return lrow(k, {n:DN[x.dn-1], t:esc(x.topic), s:half ? 'Xong buổi sáng, còn buổi tối' : x === nx ? 'Bài tiếp theo' : '', st:(lifeDone(x.key) ? 'done' : lock ? 'lock' : half ? 'half' : '') + (x === nx ? ' next' : ''), right:pctTag(isFinite(sc) ? sc : null)}); }).join('')
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
      const body = ls.map((l, k) => lrow(k, {n:l.n, t:esc(ipaTitle(l)), s:l.kind === 'sound' ? esc(l.sounds.map(s => s.name).join(' · ')) : '', st:(S.ipa[l.id] != null ? 'done' : '') + (l === nx ? ' next' : ''), right:pctTag(S.ipa[l.id])})).join('');
      const cur = nx && nx.stage === st;
      const f = foldEl('ipa' + st, {title:`Chặng ${st} · ${STAGE_NAMES[st]}`, sub:`${nDone}/${ls.length} bài xong`, icon:nDone === ls.length ? ico('check') : st, open:cur, name:'ipas', cls:cur ? 'now' : '', body});
      bindRows(f, rows); v.appendChild(f);
    });
  }
};
/* Danh sách bài Alex: chủ đề có bài thành khung xổ ra; chủ đề chưa có bài gom vào một khung cuối */
function alexPanel(v, inHub){
  const all = alexAll(), nx = nextAlex(), done = Object.values(S.alex).filter(x => x >= 85).length;
  const top = document.createElement('div'); top.className = 'row spread';
  top.innerHTML = `<div><b>${all.length} bài</b> <span class="sm muted">· ${done} bài đạt 85%</span></div><button class="btn sun" data-add="0">${ico('plus')} Thêm bài</button>`;
  v.appendChild(top);
  const used = ALEX_CD.map((t, k) => k + 1).filter(cd => all.some(l => l.cd === cd));
  used.forEach(cd => {
    const ls = all.filter(l => l.cd === cd), nOk = ls.filter(l => S.alex[l.id] >= 85).length;
    const body = ls.map((l, k) => `<div class="lwrap">${lrow(k, {t:esc(l.title), icon:'play', st:(S.alex[l.id] >= 85 ? 'done' : '') + (l === nx ? ' next' : ''), right:pctTag(S.alex[l.id])})}${l.sample ? '' : ib('edit','Sửa lời thoại','',`data-edit="${l.id}"`) + ib('trash','Xóa bài','',`data-del="${l.id}"`)}</div>`).join('')
      + `<button class="btn ghost block" data-add="${cd}">${ico('plus')} Thêm bài vào chủ đề này</button>`;
    const cur = (S.set.lastCd || nx?.cd) === cd;
    const f = foldEl('cd' + cd, {title:`CĐ${cd} · ${esc(ALEX_CD[cd-1])}`, sub:`${nOk}/${ls.length} bài đạt`, icon:cd, badge:ls.length, open:cur, name:'alexcd', cls:cur ? 'now' : '', body});
    f.querySelectorAll('.lrow').forEach(b => b.onclick = () => openAlex(ls[+b.dataset.k]));
    v.appendChild(f);
  });
  const empty = ALEX_CD.map((t, k) => k + 1).filter(cd => !used.includes(cd));
  if (empty.length) v.appendChild(foldEl('cdempty', {title:'Chủ đề chưa có bài', sub:'Chạm tên chủ đề để thêm bài', icon:ico('plus'), badge:empty.length, name:'alexcd',
    body:empty.map(cd => `<button class="lrow" data-add="${cd}"><span class="d">${cd}</span><span class="ft"><b>${esc(ALEX_CD[cd-1])}</b></span>${ico('plus')}</button>`).join('')}));
  const again = () => inHub ? openAlexHub() : render();
  v.querySelectorAll('[data-add]').forEach(b => b.onclick = () => addAlexForm(+b.dataset.add || null));
  v.querySelectorAll('[data-edit]').forEach(b => b.onclick = () => editAlex(S.alexUser.find(l => l.id === b.dataset.edit)));
  v.querySelectorAll('[data-del]').forEach(b => b.onclick = async () => { const L = S.alexUser.find(l => l.id === b.dataset.del); if (b.dataset.sure){ S.alexUser = S.alexUser.filter(l => l !== L); save(); await IDB.del(L.blob); again(); } else { b.dataset.sure = 1; b.classList.add('on'); toast('Bấm lần nữa để xóa bài này'); } });
}

/* ============ ÔN TẬP ============ */
VIEWS.rev = v => {
  const dueIds = due(), forg = forgotten();
  const weakIpa = IPAL.filter(l => S.ipa[l.id] != null && S.ipa[l.id] < 85);
  const weakLife = SCHED.filter(x => S.life[x.key] && ['am','pm'].some(p => S.life[x.key][p] != null && S.life[x.key][p] < 85));
  const weakAlex = alexAll().filter(l => S.alex[l.id] != null && S.alex[l.id] < 85);
  const weakSounds = Object.entries(S.weak).sort((a, b) => b[1] - a[1]).slice(0, 6);
  v.appendChild(sec(`<h3>Ôn tập</h3><p class="sm muted">App tự gom những gì cần ôn theo lịch và theo lỗi của bạn.</p>`));
  const block = (img, title, count, sub, btn) => { const s = sec(`<div class="row"><img src="img/${img}.png" alt="" width="32"><div style="flex:1"><b>${title}</b><br><span class="sm muted">${sub}</span></div><span class="chip">${count}</span>${count ? ib('play','Bắt đầu','main','data-go="1"') : ''}</div>`); if (count) s.querySelector('[data-go]').onclick = btn; v.appendChild(s); return s; };
  block('book', 'Đến hạn hôm nay', dueIds.length, 'Theo đồ thị lãng quên', () => openReview(dueIds, 'Ôn câu đến hạn'));
  block('drop', 'Câu hay quên', forg.length, 'Đã nói sai từ 2 lần', () => openReview(forg, 'Ôn câu hay quên'));
  const ws = block('lips', 'Âm hay đọc sai', weakSounds.length, weakSounds.length ? weakSounds.map(([s, n]) => `/${s.replace(/\//g,'')}/ ×${n}`).join(' · ') : 'Chưa có', () => { const l = IPAL.find(l => l.kind === 'sound' && l.sounds.some(s => weakSounds.some(([w]) => w.replace(/\//g,'').includes(s.sym)))) || IPAL.find(l => l.stage === 3); openIpa(l); });
  const list = [...weakLife.map(x => ({t:`Đời sống · Tuần ${x.w.w} · ${x.topic}`, sc:Math.min(...['am','pm'].map(p => S.life[x.key][p] ?? 100)), go:() => openLifePart(x, (S.life[x.key].am ?? 0) < 85 ? 'am' : 'pm')})),
    ...weakIpa.map(l => ({t:'Phát âm · ' + ipaTitle(l), sc:S.ipa[l.id], go:() => openIpa(l)})),
    ...weakAlex.map(l => ({t:'Alex · ' + l.title, sc:S.alex[l.id], go:() => openAlex(l)}))];
  const s = foldEl('rev85', {title:'Bài chưa đạt 85%', sub:'Chạm để xem và làm lại', icon:'<img src="img/trophy.png" alt="">', badge:list.length,
    body:list.length ? list.map((x, k) => lrow(k, {t:esc(x.t), icon:'repeat', right:pctTag(x.sc)})).join('') : '<p class="sm muted">Chưa có bài nào dưới 85%.</p>'});
  s.querySelectorAll('.lrow').forEach(b => b.onclick = () => list[+b.dataset.k].go());
  v.appendChild(s);
};

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
  seg.innerHTML = [['saved','Câu hay'],['diary','Nhật ký'],['set','Cài đặt']].map(([k, t]) => `<button aria-pressed="${NOTE.tab === k}" data-k="${k}">${t}</button>`).join('');
  seg.onclick = e => { const b = e.target.closest('button'); if (b){ NOTE.tab = b.dataset.k; render(); } };
  v.appendChild(seg);
  ({saved:savedView, diary:diaryView, set:settingsView})[NOTE.tab](v);
};
function savedView(v){
  const s = sec(`<div class="search">${ico('search')}<input type="text" id="sq" placeholder="Tìm câu..." value="${esc(NOTE.q)}"></div><div class="chips">${[['all','Tất cả'],['weak','Đang yếu'],['known','Đã thuộc']].map(([k, t]) => `<button aria-pressed="${NOTE.f === k}" data-f="${k}">${t}</button>`).join('')}</div><div id="sl" style="display:flex;flex-direction:column;gap:8px"></div>`);
  v.appendChild(s);
  const draw = () => {
    const q = NOTE.q.toLowerCase();
    const list = S.saved.filter(c => (!q || (c.en + ' ' + c.vi).toLowerCase().includes(q)) && (NOTE.f === 'all' || (NOTE.f === 'known' ? isKnown(c.id) : !isKnown(c.id) && (S.cards[c.id]?.l || 0) > 0)));
    const groups = {}; list.forEach(c => (groups[c.src] ||= []).push(c));
    s.querySelector('#sl').innerHTML = list.length ? Object.entries(groups).map(([g, cs]) => `<details class="grp" data-g="sv-${esc(g)}" ${q || NOTE.f !== 'all' || OPENG['sv-' + g] ? 'open' : ''}><summary><span>${esc(g)}</span><span class="n">${cs.length}</span></summary>${cs.map(c => { const lv = S.cards[c.id]?.lv || 1; return `<div class="line"><button data-o="${esc(c.id)}"><span class="tx">${esc(c.en)}</span><span class="lv">${isKnown(c.id) ? 'thuộc' : 'mức ' + lv}</span></button><div class="more" hidden data-m="${esc(c.id)}"><span class="sm muted">${esc(c.vi)}</span><div class="row">${ib('play','Nghe','',`data-p="${esc(c.id)}"`)}${ib('mic','Luyện câu này','',`data-r="${esc(c.id)}"`)}${ib('trash','Bỏ khỏi sổ','',`data-x="${esc(c.id)}"`)}</div></div></div>`; }).join('')}</details>`).join('') : `<p class="sm muted">${S.saved.length ? 'Không có câu khớp.' : 'Chưa có câu nào. Trong bài Alex, chạm ngôi sao để lưu.'}</p>`;
    s.querySelectorAll('[data-o]').forEach(b => b.onclick = () => { const m = s.querySelector(`[data-m="${CSS.escape(b.dataset.o)}"]`); m.hidden = !m.hidden; });
    s.querySelectorAll('[data-p]').forEach(b => b.onclick = async () => { const c = S.saved.find(x => x.id === b.dataset.p); if (c.a) play(c.a); else { const L = S.alexUser.find(l => l.id === c.lesson); const url = L && await lessonUrl(L); const x = L?.lines[c.k]; if (url && x) play(url, 1, x.t0, x.t1); } });
    s.querySelectorAll('[data-r]').forEach(b => b.onclick = () => openReview([b.dataset.r], 'Luyện câu'));
    s.querySelectorAll('[data-x]').forEach(b => b.onclick = () => { S.saved = S.saved.filter(x => x.id !== b.dataset.x); save(); draw(); });
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
    + fold('st-mic', {title:'Micro', sub:micMode() === 'google' ? 'Đang dùng micro của Chrome' : 'Đang dùng bộ nhận giọng trong máy', icon:ico('mic'), name:'set', body:`<select id="mic"><option value="auto">Tự động</option><option value="google">Micro của Chrome (nhanh, cần mạng)</option><option value="local">Bộ nhận giọng trong máy (chạy không cần mạng)</option></select>`})
    + fold('st-look', {title:'Cỡ chữ và giao diện', sub:`Chữ ${S.set.font} · ${({'':'theo máy',light:'sáng',dark:'tối'})[S.set.theme || '']}`, icon:ico('font'), name:'set', body:`<div class="row spread"><span class="row">${ico('font')} Cỡ chữ</span><div class="seg" style="box-shadow:none">${['S','M','L'].map(f => `<button aria-pressed="${S.set.font === f}" data-f="${f}">${f}</button>`).join('')}</div></div>
      <div class="row spread"><span class="row">${ico('sun')} Giao diện</span><div class="seg" style="box-shadow:none">${[['','Máy'],['light','Sáng'],['dark','Tối']].map(([k, t]) => `<button aria-pressed="${(S.set.theme || '') === k}" data-t="${k}">${t}</button>`).join('')}</div></div>`})
    + fold('st-bk', {title:'Sao lưu và khôi phục', sub:'Lần cuối: ' + bk, icon:ico('down'), name:'set', body:`<div class="row">${ib('down','Sao lưu','','id="bk"')}${ib('up','Khôi phục','','id="rs"')}<span class="sm muted" style="flex:1">Lưu tiến độ ra file hoặc nạp lại từ file (không gồm file âm thanh Alex)</span><input type="file" id="rf" accept=".json" hidden></div>`});
  v.appendChild(s);
  if (D.public) bindMe(s);
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

applySet(); render();
setInterval(() => { if ($('#lesson').hidden && TAB === 'today') render(); }, 60000);
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('sw.js').catch(() => {});
