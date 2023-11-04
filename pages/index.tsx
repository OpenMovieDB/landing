import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { useRef } from 'react';
import { YMInitializer } from 'react-yandex-metrika';

import BackgroundNoise from '../components/BackgroundNoise/BackgroundNoise';
import BackgroundScene from '../components/BackgroundScene/BackgroundScene';
import Community from '../components/Community/Community';
import Footer from '../components/Footer/Footer';
import Free from '../components/Free/Free';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Stats from '../components/Stats/Stats';
import Support from '../components/Support/Support';
import Tariffs from '../components/Tariffs/Tariffs';
import Example from '../sections/Example/Example';
import GlobalStyles from '../styles/GlobalStyles';

export default function Home() {
  const containerRef = useRef(null);

  return (
    <>
      <GlobalStyles />
      <NextSeo
        title='API с фильмами, актерами и картинками. Получите доступ к базам фильмов из Kinopoisk и TMDB - Open Movie API'
        description='Все популярные источники фильмов в одном API. В базе уже 960 тысяч фильмов, 6 млн персон (актеров, режиссеров ...) и 1 млн изображений к кино'
        canonical='https://openmovieapi.dev/'
        openGraph={{
          url: 'https://openmovieapi.dev/',
          title: 'Open Movie API',
          description:
            'Все популярные источники фильмов в одном API. В базе уже 960 тысяч фильмов, 6 млн персон (актеров, режиссеров ...) и 1 млн изображений к кино',
          images: [
            {
              url: 'https://openmovieapi.dev/img/800-600.jpg',
              width: 800,
              height: 600,
              alt: 'Open Movie Api',
              type: 'image/jpeg',
            },
            {
              url: 'https://openmovieapi.dev/img/900-800.jpg',
              width: 900,
              height: 800,
              alt: 'Open Movie Api',
              type: 'image/jpeg',
            },
            {
              url: 'https://openmovieapi.dev/img/1200-600.jpg',
              width: 1200,
              height: 600,
              alt: 'Open Movie Api',
              type: 'image/jpeg',
            },
            {
              url: 'https://openmovieapi.dev/img/1200-630.jpg',
              width: 1200,
              height: 630,
              alt: 'Open Movie Api',
              type: 'image/jpeg',
            },
          ],
          siteName: 'Open Movie API',
          locale: 'ru_RU',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Head>
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#4b48d2' />
        <meta name='msapplication-TileColor' content='#080715' />
        <meta name='msapplication-TileImage' content='/mstile-144x144.png' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <YMInitializer
        accounts={[92038751]}
        options={{
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true,
        }}
      />
      <main ref={containerRef} className='main'>
        <BackgroundNoise></BackgroundNoise>
        <BackgroundScene></BackgroundScene>
        <Header></Header>
        <Hero></Hero>
        <Stats></Stats>
        <Example></Example>
        <Tariffs></Tariffs>
        <Community></Community>
        <Support></Support>
        <Free></Free>
        <Footer></Footer>
      </main>
    </>
  );
}
