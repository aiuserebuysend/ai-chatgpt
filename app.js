const chat = document.getElementById('chat');
const welcome = document.getElementById('welcome');
const composer = document.getElementById('composer');
const input = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const newChat = document.getElementById('newChat');
const mobileMenu = document.getElementById('mobileMenu');
const sidebar = document.querySelector('.sidebar');
const chatList = document.getElementById('chatList');

function addMessage(role, text) {
  if (welcome) welcome.remove();
  const message = document.createElement('div');
  message.className = `message ${role}`;
  message.innerHTML = `<div class="avatar">${role === 'ai' ? 'AI' : '나'}</div><div class="message-body"></div>`;
  message.querySelector('.message-body').textContent = text;
  chat.appendChild(message);
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

function sendMessage(text) {
  const value = text.trim();
  if (!value) return;
  addMessage('user', value);
  input.value = '';
  input.style.height = 'auto';
  sendButton.disabled = true;

  // API 연동 전 기본 화면용 응답입니다.
  setTimeout(() => {
    addMessage('ai', `메시지를 받았습니다.\n\n“${value}”\n\n현재는 기본 UI 단계이며, 다음 단계에서 실제 AI API를 연결할 수 있습니다.`);
    sendButton.disabled = false;
    input.focus();
  }, 450);
}

composer.addEventListener('submit', (event) => {
  event.preventDefault();
  sendMessage(input.value);
});

input.addEventListener('input', () => {
  input.style.height = 'auto';
  input.style.height = `${Math.min(input.scrollHeight, 160)}px`;
  sendButton.disabled = !input.value.trim();
});

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    composer.requestSubmit();
  }
});

document.querySelectorAll('[data-prompt]').forEach((button) => {
  button.addEventListener('click', () => sendMessage(button.dataset.prompt));
});

newChat.addEventListener('click', () => {
  chat.innerHTML = '';
  const freshWelcome = document.createElement('div');
  freshWelcome.className = 'welcome';
  freshWelcome.innerHTML = `
    <div class="welcome-icon">✦</div>
    <h1>무엇을 도와드릴까요?</h1>
    <p>질문을 입력하면 AI가 답변해 드립니다.</p>
    <div class="suggestions">
      <button type="button" data-prompt="새로운 프로젝트 아이디어를 추천해줘">💡 프로젝트 아이디어</button>
      <button type="button" data-prompt="오늘 할 일을 효율적으로 정리해줘">📋 할 일 정리</button>
      <button type="button" data-prompt="어려운 개념을 쉽게 설명해줘">📚 쉽게 설명하기</button>
      <button type="button" data-prompt="짧은 이메일을 작성해줘">✍️ 글 작성하기</button>
    </div>`;
  chat.appendChild(freshWelcome);
  freshWelcome.querySelectorAll('[data-prompt]').forEach((button) => {
    button.addEventListener('click', () => sendMessage(button.dataset.prompt));
  });
  input.focus();
});

chatList.addEventListener('click', (event) => {
  const item = event.target.closest('.chat-item');
  if (!item) return;
  chatList.querySelectorAll('.chat-item').forEach((el) => el.classList.remove('active'));
  item.classList.add('active');
  sidebar.classList.remove('open');
});

mobileMenu.addEventListener('click', () => sidebar.classList.toggle('open'));

sendButton.disabled = true;
