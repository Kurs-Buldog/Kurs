# Револьвер Бульдог KURS — одностраничный сайт

Статический сайт для продажи револьвера Бульдог KURS (КСОИ).  
Единственный контакт — кнопка и ссылка в Telegram: [t.me/kurs_buldog_ru](https://t.me/kurs_buldog_ru)

## Структура

```
buldog-kurs-site/
├── index.html      # Главная страница
├── styles.css      # Стили
├── script.js       # Галерея фото
├── robots.txt      # Для поисковиков
├── sitemap.xml     # Карта сайта
├── images/         # Фото товара
└── README.md
```

## Как запустить локально

Просто откройте `index.html` в браузере.  
Или поднимите простой сервер:

```bash
npx serve .
# или
python -m http.server 8080
```

## Размещение на GitHub Pages

1. Создайте новый репозиторий на GitHub.
2. Загрузите все файлы из этой папки.
3. Settings → Pages → Source: Deploy from a branch → `main` / root.
4. Сайт будет доступен по адресу `https://username.github.io/repo-name/`.

После публикации:

- Замените `https://ваш-домен.ru/` в `index.html`, `robots.txt` и `sitemap.xml` на реальный URL.
- Добавьте сайт в [Яндекс.Вебмастер](https://webmaster.yandex.ru/).
- Подключите Яндекс.Метрику (по желанию).

## SEO

- Заголовок и описание заточены под запросы «револьвер бульдог курс купить».
- Schema.org Product + FAQPage.
- robots.txt + sitemap.xml.
- Семантическая разметка и alt у изображений.

## Цена

Сейчас стоит «по запросу». Чтобы показать конкретную сумму:

1. В `index.html` найдите `<span class="price">Цена по запросу</span>`.
2. Замените на нужную цену.
3. В JSON-LD (offers.price) тоже обновите значение.
