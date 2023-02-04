import Image from 'next/image';
import styled from 'styled-components';

const Example = () => {
  const data = {
    titles: [
      // На русском
      'САМАЯ БОЛЬШАЯ БАЗА ФИЛЬМОВ В МИРЕ',
      // На английском
      'THE LARGEST MOVIE DATABASE IN THE WORLD',
      // На китайском языке
      '世界上最大的电影数据库',
      // На японском языке
      '世界で最も大きな映画データベース',
      // На корейском языке
      '세계에서 가장 큰 영화 데이터베이스',
      // На испанском языке
      'LA BASE DE DATOS DE PELÍCULAS MÁS GRANDE DEL MUNDO',
      // На французском языке
      'LA PLUS GRANDE BASE DE DONNÉES DE FILMS AU MONDE',
    ],
    vendors: [
      {
        name: 'TMDB',
        logo: 'img/icons/tmdb.png',
      },
      {
        name: 'JastWatch',
        logo: 'img/icons/jastwatch.png',
      },
      {
        name: 'IMDB',
        logo: 'img/icons/imdb.png',
      },
      {
        name: 'Rotten Tomatoes',
        logo: 'img/icons/t.png',
      },
      {
        name: 'TVDB',
        logo: 'img/icons/tvdb.png',
      },
      {
        name: 'KinoPoisk',
        logo: 'img/icons/kp.png',
      },
    ],
    movie: {
      titles: ['Однажды в голливуде', 'Once Upon a Time... in Hollywood'],
      description: [
        'В 1969 году в Лос-Анджелесе, где все еще великая эпоха голливудского кинематографа, снялся новый фильм. В главных ролях — звезда телевидения Рик Даллас и его дублер Брат Винсент. Вместе они пытаются подняться по карьерной лестнице, но в то же время сталкиваются с рядом проблем, связанных с современной жизнью.',
        'In 1969 Los Angeles, TV star Rick Dalton and his longtime stunt double Cliff Booth make their way around an industry they hardly recognize anymore. The ninth film from the writer-director features a large ensemble cast and multiple storylines in a tribute to the final moments of Hollywood’s golden age.',
      ],
      year: '2019',
      rating: '7.9',
      genres: ['Криминал', 'Драма', 'Комедия'],
      countries: ['США'],
      budget: '$90 000 000',
      awards: [
        {
          name: 'Golden Globe',
          logo: 'img/icons/golden-globe.png',
        },
      ],
      poster: 'img/posters/once-upon-a-time-in-hollywood.png',
      trailer: 'https://www.youtube.com/embed/zw81ihoukKU',
      actors: [
        {
          name: 'Леонардо ДиКаприо',
          role: 'Rick Dalton',
          photo: 'img/persons/leonardo-dicaprio.png',
        },
        {
          name: 'Брэд Питт',
          role: 'Cliff Booth',
          photo: 'img/persons/brad-pitt.png',
        },
        {
          name: 'Марго Робби',
          role: 'Sharon Tate',
          photo: 'img/persons/margo-robbie.png',
        },
      ],
    },
  };

  return (
    <section className="example" id="example">
      <div className="background example__background">
        <img
          src="img/example.png"
          alt=""
          className="background-image example__background-image"
        />
      </div>
      <div className="container">
        <h2 className="section-title">Пример работы</h2>
        <div className="example-block section-block">
          <div className="example-top">
            <h3 className="example-top__title section-h3">
              Однажды в голливуде
            </h3>
            <ul className="example-top__list">
              <li>
                ID: <span>1209712</span>
              </li>
              <li>
                <div className="mobile-hidden">Рейтинг</div>
                КП: <span>5.7</span>
              </li>
              <li>
                <div className="mobile-hidden">Рейтинг</div>
                IMDB: <span>5.3</span>
              </li>
            </ul>
          </div>
          <div className="example-block__content">
            <img src="img/films/5.png" alt="" className="example-block__img" />
            <ul className="example-block__list">
              <li>
                Год: <span>2019</span>
              </li>
              <li>
                Страны:
                <span>США, Великобритания, Китай</span>
              </li>
              <li>
                Актёры:
                <span>
                  Леонардо ДиКаприо, Брэд Питт, Марго Робби, Эмиль Хирш,Маргарет
                  Куэлли, Тимоти Олифант
                </span>
              </li>
              <li>
                Слоган:
                <span>«The 9th Film from Quentin Tarantino»</span>
              </li>
              <li>
                Жанр: <span>драма, комедия</span>
              </li>
              <li>
                Премьера в мире: <span>21 мая 2019</span>
              </li>
              <li>
                Сборы в мире:
                <span>+ $231 872 331 = $372 711 080</span>
              </li>
            </ul>
          </div>
          <div className="example-block__footer">
            <p className="example-block__description">
              1969 год, золотой век Голливуда уже закончился. Известный актёр
              Рик Далтон и его дублер Клифф Бут пытаются найти свое место в
              стремительно меняющемся мире киноиндустрии.
            </p>
            <a href="#" className="example-block__link link-gradient">
              <div className="overlay">
                <span>
                  Трейлер <img src="img/arrow.svg" alt=">" />
                </span>
                <span>
                  Трейлер <img src="img/arrow.svg" alt=">" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Example;
