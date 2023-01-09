import { NextSeo } from 'next-seo';
import { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

import BackgroundNoise from '../components/BackgroundNoise/BackgroundNoise';
import BackgroundScene from '../components/BackgroundScene/BackgroundScene';
import Community from '../components/Community/Community';
import Example from '../components/Example/Example';
import Footer from '../components/Footer/Footer';
import Free from '../components/Free/Free';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Stats from '../components/Stats/Stats';
import Support from '../components/Support/Support';
import Tariffs from '../components/Tariffs/Tariffs';
import ScrollTriggerProxy from '../utils/ScrollTriggerProxy';

export default function Home() {
  const containerRef = useRef(null);
  return (
    <>
      <NextSeo
        title="API с фильмами, актерами и картинками. Получите доступ к базам фильмов из Kinopoisk и TMDB - Open Movie API"
        description="Все популярные источники фильмов в одном API. В базе уже 960 тысяч фильмов, 6 млн персон (актеров, режиссеров ...) и 1 млн изображений к кино"
        canonical="https://openmovieapi.dev/"
        openGraph={{
          url: 'https://openmovieapi.dev/',
          title: 'Open Movie API',
          description:
            'Все популярные источники фильмов в одном API. В базе уже 960 тысяч фильмов, 6 млн персон (актеров, режиссеров ...) и 1 млн изображений к кино',
          siteName: 'Open Movie API',
        }}
      />

      <LocomotiveScrollProvider
        options={{
          smooth: true,
        }}
        watch={[]}
        containerRef={containerRef}
      >
        <ScrollTriggerProxy />
        <main
          ref={containerRef}
          className="main"
          id="smooth-scroll"
          data-scroll-container
        >
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
      </LocomotiveScrollProvider>
    </>
  );
}
