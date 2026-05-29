// EN 

A website for a GTA RP project. Pure HTML/CSS/JS, no need to build anything.

`index.html` - the basics: the main page, how to play, and donation are switched via a hash (`#/how`, `#/donate`, etc.). Login and registration are separate - `login.html` and `reg.html`.

## Files

```
index.html - all the basics
login.html - login
reg.html - registration
auth.css/js - authorization
ui.css/js - popups and dialogs (not browser alerts)
start.html - redirects to #/how
donate.html - redirects to #/donate
.htaccess - if hosted on Apache
_redirects - if hosted on Netlify
```

## Launch

Don't just double-click to open the page - some links via `file://` are buggy. It's better to set up a local server:

```bash
python -m http.server 8080
```

or `npx serve .`, then `http://localhost:8080`.

## Just in case

GTARP is not affiliated with Rockstar. GTA is their trademark.


// RU

Сайт для GTA RP проекта. Чистый HTML/CSS/JS, ничего собирать не нужно.

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

