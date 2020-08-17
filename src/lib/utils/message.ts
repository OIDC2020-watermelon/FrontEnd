export default function (message: string) {
  const messageEl = document.createElement('div');
  messageEl.className = 'message_container';
  messageEl.innerHTML = `<div class="message_wrap"><span class="message_text">${message}</span><div>`;
  const body = document.querySelector('body');

  if (document.querySelector('.message_wrap')) {
    document.querySelector('.message_wrap')?.remove();
    body?.appendChild(messageEl);
    setTimeout(() => body?.removeChild(messageEl), 5000);
    return;
  } else {
    body?.appendChild(messageEl);
    setTimeout(() => body?.removeChild(messageEl), 5000);
  }
}
