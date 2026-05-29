README EN + RU

// EN

# GTARP

Website for a GTA 5 RP project. Plain HTML/CSS/JS, no build step.

`index.html` is the main file - home, how to play, and donate switch via hash routes (`#/how`, `#/donate`, etc.). Login and registration are separate: `login.html` and `reg.html`.

## Files

```
index.html       - main stuff
login.html       - login
reg.html         - sign up
auth.css/js      - auth
ui.css/js        - toasts and dialogs (no browser alert)
start.html       - redirects to #/how
donate.html      - redirects to #/donate
.htaccess        - for Apache hosting
_redirects       - for Netlify
```

## Run locally

Don't just double-click the file - some links break over `file://`. Spin up a local server instead:

```bash
python -m http.server 8080
```

or `npx serve .`, then open `http://localhost:8080`.

## Disclaimer

GTARP is not affiliated with Rockstar. GTA is their trademark.

// RU

# GTARP

Сайт для GTA 5 RP проекта. Чистый HTML/CSS/JS, ничего собирать не нужно.

`index.html` - основа: главная, как играть, донат переключаются через hash (`#/how`, `#/donate` и т.д.). Логин и регистрация отдельно - `login.html` и `reg.html`.

## Файлы

```
index.html       - всё основное
login.html       - вход
reg.html         - регистрация
auth.css/js      - авторизация
ui.css/js        - всплывашки и диалоги (не alert из браузера)
start.html       - кидает на #/how
donate.html      - кидает на #/donate
.htaccess        - если хостинг на Apache
_redirects       - если Netlify
```

## Запуск

Не открывай просто двойным кликом - часть ссылок через `file://` глючит. Лучше поднять локальный сервер:

```bash
python -m http.server 8080
```

или `npx serve .`, потом `http://localhost:8080`.

## На всякий случай

GTARP не имеет отношения к Rockstar. GTA - их торговая марка.
