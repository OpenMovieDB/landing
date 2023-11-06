import Link from 'next/link';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='container'>
        <h1 className='hero-title'>База кино и сериалов</h1>
        <p className='section-body hero-description'>
          У нас хранятся данные из самых популярных источников, таких как КиноПоиск, IMDB, TMDB, TVDB, Rotten Tomatoes и
          JustWatch. Все это доступно в одном API с гибким RESTful интерфейсом и хорошей документацией. Вся информация
          собирается из открытых источников и регулярно обновляется.
        </p>
        <Link href='https://mdwit.t.me' target='_blank' className='hero__link link-gradient'>
          <div className='overlay'>
            <span>Подключить API</span>
            <span>Подключить API</span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
