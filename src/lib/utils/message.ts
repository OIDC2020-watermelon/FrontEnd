export default function (message: string) {
  if (document.querySelector('.message_wrap')) return;
  console.log('message 시작');
  const messageEl = document.createElement('div');
  messageEl.className = 'message_container';
  messageEl.innerHTML = `<div class="message_wrap"><span class="message_text">${message}</span><div>`;
  const body = document.querySelector('body');
  body?.appendChild(messageEl);
  setTimeout(() => body?.removeChild(messageEl), 5000);
  console.log('message 끝');
}
