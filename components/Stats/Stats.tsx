import gsap, { Power3 } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

type StatItem = {
  sum: number;
  unit: string;
  name: string;
  images: string[];
  imageSize: {
    width: number;
    height: number;
  };
};

const STATS: StatItem[] = [
  {
    sum: 777,
    unit: 'тысяч',
    name: 'фильмов',
    images: [1, 2, 3, 4, 5, 6].map((i) => `/img/films/${i}.png`),
    imageSize: {
      width: 523,
      height: 294,
    },
  },
  {
    sum: 6,
    unit: 'миллионов',
    name: 'персон',
    images: [1, 2, 3, 4, 5, 6].map((i) => `/img/persons/${i}.png`),
    imageSize: {
      width: 367,
      height: 490,
    },
  },
  {
    sum: 1,
    unit: 'миллионов',
    name: 'изображений',
    images: [1, 2, 3, 4, 5, 6].map((i) => `/img/photos/${i}.png`),
    imageSize: {
      width: 523,
      height: 294,
    },
  },
];

const Stats = () => {
  const { scroll } = useLocomotiveScroll();

  gsap.registerPlugin(ScrollTrigger);
  const scene = useRef<HTMLDivElement>(null);

  const ScrollingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scroll) {
      const element = scroll?.el;

      gsap.utils.toArray('.stats__title').forEach((el, index) => {
        if (index) {
          gsap.set(el as HTMLElement, {
            y: '200%',
            opacity: 0,
            ease: Power3.easeInOut,
          });
        } else {
          gsap.set(el as HTMLElement, {
            y: '0%',
            ease: Power3.easeInOut,
            opacity: 1,
          });
        }
      });
      gsap
        .timeline({
          scrollTrigger: {
            scrub: 1,
            trigger: '.stats__slide_0',
            start: 'top top',
            scroller: element,
            end: `center center`,
            markers: true,
          },
        })
        .to('.stats__title_0', { y: '0' })
        .to('.stats__title_1', { y: '200%' })
        .to('.stats__title_2', { y: '200%' });

      gsap
        .timeline({
          scrollTrigger: {
            scrub: 1,
            trigger: '.stats__slide_1',
            start: 'top top',
            scroller: element,
            end: `center center`,
            markers: true,
          },
        })
        .to('.stats__title_0', { y: '-200%', opacity: 0 })
        .to('.stats__title_1', { y: '0%', opacity: 1 });

      gsap
        .timeline({
          scrollTrigger: {
            scrub: 1,
            trigger: '.stats__slide_2',
            start: 'center center',
            scroller: element,
            end: `bottom bottom`,
            markers: true,
          },
        })
        .to('.stats__title_1', { y: '-200%', opacity: 0 })
        .to('.stats__title_2', { y: '0%', opacity: 1 });

      ScrollTrigger.create({
        trigger: '.stats__titles',
        pin: true,
        scrub: 1,
        start: 'top',
        scroller: element,
        endTrigger: `.stats__slide_2`,
        end: 'center',
        markers: true,
      });
    }

    return () => {
      ScrollTrigger.addEventListener('refresh', () => scroll?.update());
      ScrollTrigger.refresh();
    };
  }, [scene, ScrollingRef, scroll]);

  const renderImages = (stat: StatItem): React.ReactNode => {
    return (
      <div className="stats__images">
        {stat.images.map((url, index) => (
          <Image
            src={url}
            width={stat.imageSize.width}
            height={stat.imageSize.height}
            alt=""
            key={index}
            className={`stats__image stats__image_${index}`}
          ></Image>
        ))}
      </div>
    );
  };

  const renderTitle = (stat: StatItem, index: number): React.ReactNode => {
    return (
      <h3
        className={`stats__title stats__title_${index} section-title`}
        key={index}
      >
        <span className="stats__sum">{stat.sum}</span>
        <b className="statu__unit">{stat.unit}</b>
        {stat.name}
      </h3>
    );
  };

  const renderSlides = (): React.ReactNode => (
    <div className="stats__slides" ref={ScrollingRef}>
      <div className="stats__titles">
        <div className="stats__titles-wrap">
          {STATS.map((item, index) => renderTitle(item, index))}
        </div>
      </div>
      {STATS.map((item, index) => (
        <div
          className={`stats__slide stats__slide_${index}`}
          key={`slide-${index}`}
          id={`slide-${index}`}
        >
          {renderImages(item)}
        </div>
      ))}
    </div>
  );

  return (
    <section className="stats" ref={scene}>
      {renderSlides()}
    </section>
  );
};

export default Stats;
