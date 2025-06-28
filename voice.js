
function speak(text) {
  const synth = window.speechSynthesis;
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "vi-VN";
  utter.pitch = 1;
  utter.rate = 1;
  synth.speak(utter);
}
