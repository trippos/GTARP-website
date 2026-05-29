function showAuthError(msg) {
  const el = document.getElementById('authError');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('visible');
}

function hideAuthError() {
  const el = document.getElementById('authError');
  if (el) el.classList.remove('visible');
}

function saveUser(username) {
  localStorage.setItem('gta_user', username);
}

function handleLogin(e) {
  e.preventDefault();
  hideAuthError();
  const username = document.getElementById('loginUser').value.trim();
  const password = document.getElementById('loginPass').value;
  if (!username || !password) {
    showAuthError('Заполните все поля');
    return;
  }
  saveUser(username);
  window.location.href = 'index.html';
}

function handleRegister(e) {
  e.preventDefault();
  hideAuthError();
  const p1 = document.getElementById('regPass').value;
  const p2 = document.getElementById('regPass2').value;
  if (p1 !== p2) {
    showAuthError('Пароли не совпадают');
    return;
  }
  if (p1.length < 6) {
    showAuthError('Пароль должен быть не менее 6 символов');
    return;
  }
  const username = document.getElementById('regUser').value.trim();
  if (!username) {
    showAuthError('Введите логин');
    return;
  }
  saveUser(username);
  window.location.href = 'index.html';
}

function applyPromo(code) {
  const input = document.getElementById('regPromo');
  if (input) input.value = code;
}
