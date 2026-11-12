/* Bộ chấm phát âm chạy ngay trong máy (miễn phí, không cần tài khoản).
   Mô hình nhận âm vị wav2vec2 (facebook/wav2vec2-lv-60-espeak-cv-ft, giấy phép Apache 2.0, bản ONNX 4-bit ~242 MB).
   Có card đồ họa (WebGPU) thì chạy bằng card đồ họa (nhanh), không có thì chạy bằng CPU. Tải một lần, sau đó không cần mạng. */
import { AutoFeatureExtractor, AutoModelForCTC, env } from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.8.1';
import { makeScorer, phKey, REV } from './gop.js';
env.allowLocalModels = false;
const ID = 'onnx-community/wav2vec2-lv-60-espeak-cv-ft-ONNX';
let P = null;
export { phKey, REV };
export function load(onProg, force){
  if (P && !force) return P;
  return P = (async () => {
    const ext = await AutoFeatureExtractor.from_pretrained(ID);
    let device = 'wasm';
    if (force !== 'wasm'){ try{ if (navigator.gpu && await navigator.gpu.requestAdapter()) device = 'webgpu'; }catch{} }
    let model;
    try{ model = await AutoModelForCTC.from_pretrained(ID, {dtype:'q4', device, progress_callback:onProg}); }
    catch(e){ if (device !== 'webgpu') throw e; device = 'wasm'; model = await AutoModelForCTC.from_pretrained(ID, {dtype:'q4', device, progress_callback:onProg}); }
    const vocab = await (await fetch('pron-vocab.json')).json();
    return {ext, model, device, sc:makeScorer(vocab, 'espeak')};
  })().catch(e => { P = null; throw e; });
}
/* pcm: Float32Array 16 kHz; target: [{w, wi, j, k}] */
export async function run(pcm, target, onProg){
  let M = await load(onProg);
  let out;
  try{ out = (await M.model(await M.ext(pcm))).logits; }
  catch(e){ if (M.device !== 'webgpu') throw e; M = await load(onProg, 'wasm'); out = (await M.model(await M.ext(pcm))).logits; }
  const [, T] = out.dims, data = out.data;
  /* Card đồ họa đôi khi trả kết quả hỏng (NaN): chuyển sang CPU */
  if (M.device === 'webgpu' && !Number.isFinite(data[0])){ M = await load(onProg, 'wasm'); return run(pcm, target, onProg); }
  return {ph:M.sc.score(data, T, target), heard:M.sc.greedy(data, T), device:M.device, T};
}
export const device = async () => (await load()).device;
