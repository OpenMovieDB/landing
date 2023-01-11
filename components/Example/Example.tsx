const Example = () => {
  return (
    <section className="example">
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
