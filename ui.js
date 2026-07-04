/* ================================================
   ui.js  —  Chat UI & DOM Logic
   Loaded THIRD after rules.js and engine.js
   ALL code inside DOMContentLoaded so DOM is
   guaranteed ready before any getElementById call
   ================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* DOM refs — inside DOMContentLoaded so never null */
  var messagesEl = document.getElementById('messages');
  var userInput  = document.getElementById('userInput');

  /* HH:MM AM/PM */
  function getTimestamp() {
    return new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  }

  /* Render one chat bubble */
  function appendMessage(text, role) {
    var msgDiv = document.createElement('div');
    msgDiv.className = 'msg ' + role;

    var avatar = document.createElement('div');
    avatar.className = 'avatar ' + role;
    avatar.textContent = role === 'bot' ? '\uD83E\uDD16' : '\uD83D\uDC64';

    var col = document.createElement('div');
    col.className = 'msg-col';

    var bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.textContent = text;

    var ts = document.createElement('div');
    ts.className = 'timestamp';
    ts.textContent = getTimestamp();

    col.appendChild(bubble);
    col.appendChild(ts);
    msgDiv.appendChild(avatar);
    msgDiv.appendChild(col);
    messagesEl.appendChild(msgDiv);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  /* Show animated dots while "thinking" */
  function showTyping() {
    var div = document.createElement('div');
    div.className = 'msg bot';
    div.id = 'typing-indicator';

    var avatar = document.createElement('div');
    avatar.className = 'avatar bot';
    avatar.textContent = '\uD83E\uDD16';

    var bubble = document.createElement('div');
    bubble.className = 'bubble';

    var dots = document.createElement('div');
    dots.className = 'typing';
    dots.innerHTML = '<span></span><span></span><span></span>';

    bubble.appendChild(dots);
    div.appendChild(avatar);
    div.appendChild(bubble);
    messagesEl.appendChild(div);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  /* Remove typing dots */
  function removeTyping() {
    var el = document.getElementById('typing-indicator');
    if (el) { el.parentNode.removeChild(el); }
  }

  /* Core send logic */
  function handleSend() {
    var text = userInput.value.trim();
    if (!text) { return; }

    appendMessage(text, 'user');
    userInput.value = '';
    showTyping();

    var delay = 500 + Math.floor(Math.random() * 400);
    setTimeout(function () {
      removeTyping();
      var reply = getBotResponse(text);
      appendMessage(reply, 'bot');
    }, delay);
  }

  /* Chips pass text directly — no emoji parsing needed */
  window.sendChip = function (text) {
    userInput.value = text;
    handleSend();
  };

  /* Enter key */
  userInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') { handleSend(); }
  });

  /* Send button */
  document.getElementById('sendBtn').addEventListener('click', function () {
    handleSend();
  });

  /* Welcome message */
  setTimeout(function () {
    appendMessage(
      'Hello! I am RuBot, your Rule-Based Chatbot!\n\n' +
      'I use predefined if-else rules to answer your questions.\n' +
      'Try the quick reply buttons or type anything below.\n\n' +
      'Type "help" to see everything I can do!',
      'bot'
    );
  }, 300);

}); /* end DOMContentLoaded */