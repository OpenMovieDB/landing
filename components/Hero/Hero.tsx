import Link from 'next/link';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero-title">Свободная база фильмов</h1>
        <p className="section-body hero-description">
          Получайте максимум данных о фильмах, сериалах, мультфильмах, тв-шоу,
          аниме, актерах и режиссерах максимально быстро. Наше api содержит
          данные из таких баз как: kinopoisk, tmbd, imdb
        </p>
        <Link
          href="https://mdwit.t.me"
          target="_blank"
          className="hero__link link-gradient"
        >
          <div className="overlay">
            <span>Подключить</span>
            <span>Подключить</span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
