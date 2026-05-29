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

## GitHub Pages

Залил на GitHub -> Settings -> Pages -> branch `main`, root. Будет `username.github.io/название-репа`.

## На всякий случай

GTARP не имеет отношения к Rockstar. GTA - их торговая марка.
