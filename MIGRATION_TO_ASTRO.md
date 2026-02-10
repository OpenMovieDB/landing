# План миграции Open Movie API Landing: Next.js → Astro

## Зачем переезжать

Текущий стек (Next.js + styled-components + framer-motion) тащит ~200KB+ JS на клиент для страницы, которая по сути статический лендинг. Astro отправляет **ноль JS по умолчанию** и подключает интерактивность только там, где она нужна (islands architecture). Ожидаемый результат: Lighthouse Performance 95+, FCP < 1s, TTI < 1.5s.

---

## 1. Текущая структура (Next.js)

```
landing/
├── pages/
│   ├── _app.tsx              # Глобальные стили (globals.css)
│   ├── _document.tsx         # HTML shell
│   ├── index.tsx             # Единственная страница — собирает все секции
│   └── api/                  # Не используется осмысленно
├── components/
│   ├── BackgroundNoise/      # CSS noise overlay
│   ├── BackgroundScene/      # Видео-фон (mp4)
│   ├── CircularLogo/         # SVG/img логотип в круге
│   ├── Community/            # Закомментирован, не используется
│   ├── Cources/Sources.tsx   # Источники данных (иконки)
│   ├── Footer/               # Футер с навигацией
│   ├── Free/                 # CTA секция "начать бесплатно"
│   ├── Header/               # Хедер с навигацией
│   ├── Hero/                 # Главный блок с заголовком
│   ├── MovieInfo/            # Карточка фильма (демо данные)
│   ├── MoviePoster/          # Постер фильма
│   ├── Stats/                # Статистика (parallax, только desktop)
│   ├── Support/              # Секция поддержки
│   ├── Tariffs/              # Тарифные карточки
│   └── ui/                   # Переиспользуемые компоненты
│       ├── AnimatedCounter.tsx    # Framer Motion счётчик
│       ├── Circles.tsx            # SVG круги
│       ├── Connectors.tsx         # SVG линии-коннекторы
│       ├── GradientTitle.tsx      # Градиентный заголовок
│       ├── ParalaxTitles.tsx      # Бегущая строка
│       ├── ParallaxCard.tsx       # Карточка с параллаксом
│       ├── ParallaxSlider.tsx     # Слайдер с параллаксом
│       ├── SectionContainer.tsx   # Обёртка секции
│       ├── SideFade.tsx           # Fade эффект по бокам
│       └── Title.tsx              # Базовый заголовок
├── sections/
│   └── Example/Example.tsx   # Сложная композиция: Sources + Connectors + Movie
├── hooks/
│   ├── useMobileDevice.tsx
│   ├── useParallaxEffect.tsx
│   ├── useParallaxScrolling.tsx
│   └── useWindowSize.tsx
├── common/
│   └── types.ts              # TypeScript интерфейсы
├── styles/
│   ├── globals.css           # Tailwind + секционные стили (~600 строк)
│   ├── GlobalStyles.tsx      # styled-components: шрифты, reset, типографика
│   └── theme.ts              # Константы: COLORS, GRADIENTS, FONTS
└── public/
    ├── fonts/                # PP Neue Machina (Inktrap + Plain)
    ├── img/                  # Постеры, иконки, фоны
    └── videos/               # header-bg.mp4
```

### Проблемы текущего стека
- **styled-components**: runtime CSS-in-JS — парсинг и генерация стилей на клиенте
- **framer-motion**: ~50KB gzipped, загружается для всех пользователей, хотя анимации видны только на desktop
- **Вся страница — React SPA**: гидрация всего DOM даже для статичных секций (Header, Footer, Tariffs, Support, Free)
- **Двойная система стилей**: Tailwind в globals.css + styled-components в компонентах — путаница

---

## 2. Целевая структура (Astro)

Вдохновлено структурой `kinopoiskdev_site/frontend/`.

```
landing/
├── src/
│   ├── components/              # Astro компоненты (zero JS)
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Stats.astro          # Статичная версия + island для анимации
│   │   ├── Sources.astro        # Диаграмма источников
│   │   ├── MovieShowcase.astro  # Постер + информация о фильме
│   │   ├── Tariffs.astro
│   │   ├── Support.astro
│   │   ├── FreeCTA.astro
│   │   ├── BackgroundScene.astro
│   │   └── BackgroundNoise.astro
│   │
│   ├── components/interactive/  # React islands (client:visible)
│   │   ├── ParallaxSection.tsx  # Параллакс для Stats (framer-motion, client:visible client:media="(min-width: 1024px)")
│   │   ├── AnimatedCounter.tsx  # Счётчик (framer-motion, client:visible)
│   │   └── ScrollingText.tsx    # Бегущая строка (framer-motion, client:visible)
│   │
│   ├── layouts/
│   │   └── Base.astro           # HTML shell, мета-теги, шрифты, аналитика
│   │
│   ├── pages/
│   │   └── index.astro          # Главная страница
│   │
│   ├── styles/
│   │   ├── main.css             # Entry point (@import всех слоёв)
│   │   ├── base/
│   │   │   ├── variables.css    # CSS custom properties (из theme.ts)
│   │   │   ├── reset.css        # Базовый reset
│   │   │   ├── typography.css   # Шрифты, размеры, базовая типографика
│   │   │   └── animations.css   # CSS анимации (замена простых framer-motion)
│   │   ├── layout/
│   │   │   ├── container.css
│   │   │   ├── header.css
│   │   │   └── footer.css
│   │   ├── components/
│   │   │   ├── buttons.css
│   │   │   └── cards.css
│   │   └── sections/
│   │       ├── hero.css
│   │       ├── stats.css
│   │       ├── example.css
│   │       ├── tariffs.css
│   │       ├── support.css
│   │       └── free.css
│   │
│   ├── scripts/
│   │   └── main.ts              # Минимальный клиентский JS: smooth scroll, mobile menu
│   │
│   ├── data/
│   │   └── movie.ts             # Хардкод данные фильма (из sections/Example)
│   │
│   └── env.d.ts
│
├── public/
│   ├── fonts/                   # PP Neue Machina
│   ├── img/
│   └── videos/
│
├── astro.config.mjs
├── postcss.config.cjs
├── tsconfig.json
└── package.json
```

---

## 3. План миграции по шагам

### Фаза 0: Подготовка (1 шаг)

**0.1 — Инициализация Astro проекта**
```bash
npm create astro@latest -- --template minimal
```
- Установить зависимости: `@astrojs/react`, `postcss`, `postcss-import`, `postcss-nested`, `autoprefixer`, `cssnano`
- Настроить `astro.config.mjs`:
  ```js
  import { defineConfig } from 'astro/config';
  import react from '@astrojs/react';

  export default defineConfig({
    output: 'static',
    integrations: [react()],
    build: { assets: 'assets' },
  });
  ```
- Настроить `tsconfig.json` с path aliases (`@/*`, `@components/*`, `@styles/*`)
- Настроить `postcss.config.cjs` (postcss-import, postcss-nested, autoprefixer, cssnano)
- Скопировать `public/` целиком (fonts, img, videos)

---

### Фаза 1: CSS система (2 шага)

**1.1 — Создать CSS design tokens**
Перенести `styles/theme.ts` → `src/styles/base/variables.css`:
```css
:root {
  --color-primary: #0500FF;
  --color-secondary: #BD00FF;
  --color-tertiary: #00F0FF;
  --color-light: #FFFFFF;
  --color-dark: #070612;
  --color-gray: #D9D9D9;
  --gradient-primary-title: linear-gradient(119deg, #0500ff, #00a8ff 19.33%, ...);
  --font-primary: 'ppmi', sans-serif;
  --font-plain: 'ppmp', sans-serif;
}
```

**1.2 — Перенести стили**
- `styles/globals.css` → разбить на файлы по слоям (base, layout, components, sections)
- `styles/GlobalStyles.tsx` → `base/typography.css` + `base/reset.css` (font-face, box-sizing, body styles)
- Все styled-components из компонентов → CSS классы в соответствующих section/component файлах
- Удалить Tailwind полностью — заменить утилиты на CSS custom properties и обычные классы

---

### Фаза 2: Layout и статичные компоненты (5 шагов)

**2.1 — Base layout**
Создать `src/layouts/Base.astro`:
- HTML shell с `lang="ru"`
- Мета-теги и Open Graph (перенести из `pages/index.tsx` NextSeo конфиг)
- Подключение `@/styles/main.css`
- Подключение шрифтов через `<link rel="preload">`
- Yandex Metrika inline script (без react-yandex-metrika)
- Слот для контента

**2.2 — Header.astro**
Перенести `components/Header/Header.tsx` → Astro компонент. Чистый HTML+CSS, zero JS.

**2.3 — Hero.astro**
Перенести `components/Hero/Hero.tsx`. Заменить `<Link>` на `<a>`. Zero JS.

**2.4 — Статичные секции**
Перенести один-к-одному как Astro компоненты (zero JS):
- `Tariffs.tsx` → `Tariffs.astro`
- `Support.tsx` → `Support.astro`
- `Free.tsx` → `FreeCTA.astro`
- `Footer.tsx` → `Footer.astro`
- `BackgroundScene.tsx` → `BackgroundScene.astro`
- `BackgroundNoise.tsx` → `BackgroundNoise.astro`

**2.5 — Собрать index.astro**
```astro
---
import Base from '@/layouts/Base.astro';
import Header from '@/components/Header.astro';
import Hero from '@/components/Hero.astro';
import Stats from '@/components/Stats.astro';
import Sources from '@/components/Sources.astro';
import MovieShowcase from '@/components/MovieShowcase.astro';
import Tariffs from '@/components/Tariffs.astro';
import Support from '@/components/Support.astro';
import FreeCTA from '@/components/FreeCTA.astro';
import Footer from '@/components/Footer.astro';
import BackgroundScene from '@/components/BackgroundScene.astro';
import BackgroundNoise from '@/components/BackgroundNoise.astro';
---

<Base>
  <BackgroundNoise />
  <BackgroundScene />
  <Header />
  <main>
    <Hero />
    <Stats />
    <Sources />
    <MovieShowcase />
    <Tariffs />
    <Support />
    <FreeCTA />
  </main>
  <Footer />
</Base>
```

---

### Фаза 3: Интерактивные islands (3 шага)

Здесь ключевая оптимизация — framer-motion загружается **только** для интерактивных компонентов и **только** когда они видимы.

**3.1 — AnimatedCounter island**
Перенести `components/ui/AnimatedCounter.tsx` как React island.
Использование в Astro:
```astro
---
import AnimatedCounter from '@/components/interactive/AnimatedCounter';
---
<AnimatedCounter client:visible from={1} to={1} />
```

**3.2 — ParallaxSection island**
Объединить логику из `Stats.tsx` + `useParallaxScrolling` + `ParallaxCard` в один React компонент.
Загружать только на desktop:
```astro
<ParallaxSection client:visible client:only="react" />
```
**Альтернатива**: заменить framer-motion параллакс на CSS scroll-driven animations (если поддержка браузеров достаточна) или легковесный Intersection Observer в `scripts/main.ts`.

**3.3 — ScrollingText island**
Перенести `ParalaxTitles.tsx` + `ParallaxSlider.tsx`. Рассмотреть замену на CSS animation (`@keyframes translateX`) — бегущая строка не требует framer-motion.

---

### Фаза 4: Example секция (2 шага)

**4.1 — Перенести данные**
`sections/Example/Example.tsx` содержит хардкод данные фильма. Вынести в `src/data/movie.ts`.

**4.2 — Разбить на Astro компоненты**
- `Sources.astro` — иконки источников + SVG Circles (чистый HTML/CSS, zero JS)
- `Connectors` — SVG линии. Если анимация скролл-зависимая → React island с `client:visible`. Если можно на CSS → Astro компонент.
- `MovieShowcase.astro` — MoviePoster + MovieInfo (статика, zero JS)
- `CircularLogo.astro` — Astro компонент

---

### Фаза 5: Скрипты и оптимизация (2 шага)

**5.1 — Client-side скрипт**
Создать `src/scripts/main.ts` с минимальным JS:
- Smooth scroll для anchor-ссылок
- Mobile menu toggle (если есть)
- Intersection Observer для scroll reveal анимаций (замена framer-motion `useInView`)

**5.2 — Оптимизация ассетов**
- Конвертировать PNG постеры/изображения в WebP/AVIF
- Видео: добавить `poster` атрибут к `<video>`, `loading="lazy"` где возможно
- Шрифты: оставить только woff2, удалить eot/ttf/otf; добавить `font-display: swap`
- Preload критичных ресурсов в `<head>`

---

### Фаза 6: SEO и аналитика (1 шаг)

**6.1 — Финальная настройка**
- Canonical URL, OG-теги, structured data — в `Base.astro`
- Yandex Metrika — inline `<script>` (без npm пакета)
- Vercel Analytics — `@vercel/analytics/astro` интеграция или inline
- Sitemap: `@astrojs/sitemap` интеграция
- Убедиться что `robots.txt` корректен

---

## 4. Что удалить (бывшие зависимости)

| Пакет | Причина удаления |
|-------|-----------------|
| `styled-components` | Заменяем на CSS файлы |
| `framer-motion` | Частично — только islands; простые анимации → CSS |
| `next`, `next-seo`, `@next/font` | Заменяем на Astro |
| `react-yandex-metrika` | Inline скрипт |
| `polished` | CSS custom properties |
| `next-transpile-modules` | Не нужен в Astro |
| `resize-observer-polyfill` | Встроен в браузеры |
| `tailwindcss` + все eslint плагины | Другая система стилей |

## 5. Новые зависимости

| Пакет | Зачем |
|-------|-------|
| `astro` | Фреймворк |
| `@astrojs/react` | React islands для интерактивных компонентов |
| `@astrojs/sitemap` | Автогенерация sitemap |
| `postcss` + `postcss-import` + `postcss-nested` | CSS процессинг |
| `autoprefixer` + `cssnano` | Оптимизация CSS |
| `react` + `react-dom` | Только для islands |
| `framer-motion` | Только для islands (AnimatedCounter, ParallaxSection) |

---

## 6. Решения по замене анимаций

| Текущая анимация | Решение в Astro |
|------------------|----------------|
| `AnimatedCounter` (framer-motion) | React island с `client:visible` |
| `ParallaxCard` (scroll-linked transform) | **Вариант A**: React island. **Вариант B**: CSS `scroll-timeline` (experimental). **Вариант C**: Intersection Observer + CSS transitions |
| `ParalaxTitles` (бегущая строка) | CSS `@keyframes` — не требует JS |
| `Connectors` (scroll-linked SVG) | React island с `client:visible` или CSS scroll-driven animation |
| `SideFade` (gradient mask) | Чистый CSS (`mask-image`) |
| Hover эффекты на кнопках | CSS `:hover` transitions |

---

## 7. Ожидаемый результат

| Метрика | Сейчас (Next.js) | Цель (Astro) |
|---------|-------------------|--------------|
| JS bundle | ~200KB+ | ~20-30KB (только islands) |
| FCP | ~2-3s | < 1s |
| TTI | ~3-4s | < 1.5s |
| CLS | Зависит от SC hydration | ~0 (no layout shift) |
| Lighthouse Performance | ~60-75 | 95+ |

---

## 8. Порядок выполнения (сводка)

1. Инициализация Astro + конфиги + копирование public/
2. CSS система (variables, reset, typography, разбивка globals.css)
3. Base layout + мета-теги
4. Статичные компоненты (Header, Hero, Tariffs, Support, Free, Footer, Background*)
5. Сборка index.astro — проверка что статика рендерится
6. Интерактивные islands (AnimatedCounter, ParallaxSection, ScrollingText)
7. Example секция (Sources, Connectors, MovieShowcase)
8. Клиентские скрипты (smooth scroll, mobile menu)
9. Оптимизация ассетов (WebP, font subsetting, preload)
10. SEO, аналитика, sitemap
11. Тестирование: Lighthouse, кроссбраузерность, мобильные устройства
12. Деплой
