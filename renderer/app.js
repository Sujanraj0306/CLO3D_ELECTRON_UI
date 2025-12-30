document.addEventListener('DOMContentLoaded', () => {

     // --- CHAT PAGE LOGIC ---
     const sendBtn = document.getElementById('sendBtn');
     const messageInput = document.getElementById('messageInput');
     const chatContainer = document.getElementById('chatContainer');
     const loginBtn = document.getElementById('loginBtn');

     if (sendBtn && messageInput && chatContainer) {
          // Chat functionality
          function addMessage(text, isBot = false) {
               const msgDiv = document.createElement('div');
               msgDiv.classList.add('message');
               msgDiv.classList.add(isBot ? 'bot' : 'user');
               msgDiv.textContent = text;
               chatContainer.appendChild(msgDiv);

               // Scroll to bottom
               chatContainer.scrollTop = chatContainer.scrollHeight;
          }

          function handleSend() {
               const text = messageInput.value.trim();
               if (!text) return;

               // 1. Add User Message
               addMessage(text, false);
               messageInput.value = '';

               // 2. Bot Reply (Immediate Placeholder)
               addMessage("This is a placeholder response. CLO3D Assistant intelligence will be added soon.", true);
          }

          sendBtn.addEventListener('click', handleSend);

          messageInput.addEventListener('keypress', (e) => {
               if (e.key === 'Enter') {
                    handleSend();
               }
          });

          // Navigation to Login
          if (loginBtn) {
               loginBtn.addEventListener('click', () => {
                    window.location.href = 'login.html';
               });
          }
     }

     // --- LOGIN PAGE LOGIC ---
     const loginForm = document.getElementById('loginForm');

     if (loginForm) {
          loginForm.addEventListener('submit', (e) => {
               e.preventDefault();
               // No auth logic, just redirect
               window.location.href = 'index.html';
          });
     }

});
