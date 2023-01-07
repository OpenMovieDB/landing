import Image from 'next/image';
import React from 'react';

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
            className="stats__image"
          ></Image>
        ))}
      </div>
    );
  };

  const renderTitle = (stat: StatItem): React.ReactNode => {
    return (
      <h3 className="stats__title section-title">
        <span className="stats__sum">{stat.sum}</span>
        <b className="statu__unit">{stat.unit}</b>
        {stat.name}
      </h3>
    );
  };

  return (
    <section id="stats-fixed-target" className="stats" data-scroll>
      <div className="stats__scroll">
        <div className="stats__title">{renderTitle(STATS[0])}</div>
        {renderImages(STATS[0])}
      </div>
    </section>
  );
};

export default Stats;
