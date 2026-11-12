// Bộ nhận giọng (Whisper) và bộ dịch Anh-Việt chạy ngay trong máy, miễn phí.
// Lần đầu tải mô hình từ Hugging Face rồi lưu lại trong trình duyệt, các lần sau dùng không cần mạng.
import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.8.1';
env.allowLocalModels = false;
env.useBrowserCache = true;

const cache = {};
function get(task, model, onProg){
  if (!cache[model]) cache[model] = pipeline(task, model, {progress_callback: onProg}).catch(e => { delete cache[model]; throw e; });
  return cache[model];
}

window.AI = {
  // audio: Float32Array 16 kHz mono
  async asr(audio, {model = 'Xenova/whisper-base.en', timestamps = false, onProg} = {}){
    const p = await get('automatic-speech-recognition', model, onProg);
    return p(audio, {chunk_length_s: 30, stride_length_s: 5, return_timestamps: timestamps});
  },
  async translate(texts, {onProg, onEach} = {}){
    const p = await get('translation', 'Xenova/opus-mt-en-vi', onProg);
    const out = [];
    for (let i = 0; i < texts.length; i++){ const r = await p(texts[i], {max_new_tokens: 16 + texts[i].split(' ').length * 4, no_repeat_ngram_size: 3, repetition_penalty: 1.2}); out.push(r[0].translation_text); onEach?.(i + 1, texts.length); }
    return out;
  }
};
window.dispatchEvent(new Event('ai-ready'));
