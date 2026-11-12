// Giọng đọc tự nhiên Kokoro-82M (Apache-2.0) chạy ngay trong trình duyệt, miễn phí.
// Lần đầu tải mô hình khoảng 92 MB rồi trình duyệt tự lưu, các lần sau không cần mạng.
import { KokoroTTS } from 'https://cdn.jsdelivr.net/npm/kokoro-js@1.2.1/+esm';
let model = null;
const load = onProg => model || (model = KokoroTTS.from_pretrained('onnx-community/Kokoro-82M-v1.0-ONNX', {dtype: 'q8', device: 'wasm', progress_callback: onProg}).catch(e => { model = null; throw e; }));
export default {
  async speak(text, {voice = 'af_heart', onProg} = {}){
    const tts = await load(onProg);
    const audio = await tts.generate(text, {voice, speed: 0.95});
    return audio.toBlob();
  }
};
