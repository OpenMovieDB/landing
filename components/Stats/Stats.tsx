const Stats = () => {
  return (
    <section className="stats">
      <div className="stats__titles">
        <h3 className="stats__title">
          <span className="stats__sum">777</span>
          <b className="statu__unit">тысяч</b>
          фильмов
        </h3>
        <h3 className="stats__title">
          <span className="stats__sum">6</span>
          <b className="statu__unit">миллионов</b>
          персон
        </h3>
        <h3 className="stats__title">
          <span className="stats__sum">1</span>
          <b className="statu__unit">миллион</b>
          изображений
        </h3>
      </div>
      <div className="stats__images">
        <div className="stats__images-set">
          <img src="/img/films/1.png" alt="" className="stats__image" />
          <img src="/img/films/2.png" alt="" className="stats__image" />
          <img src="/img/films/3.png" alt="" className="stats__image" />
          <img src="/img/films/4.png" alt="" className="stats__image" />
          <img src="/img/films/5.png" alt="" className="stats__image" />
          <img src="/img/films/6.png" alt="" className="stats__image" />
        </div>
        <div className="stats__images-set">
          <img src="/img/persons/1.png" alt="" className="stats__image" />
          <img src="/img/persons/2.png" alt="" className="stats__image" />
          <img src="/img/persons/3.png" alt="" className="stats__image" />
          <img src="/img/persons/4.png" alt="" className="stats__image" />
          <img src="/img/persons/5.png" alt="" className="stats__image" />
          <img src="/img/persons/6.png" alt="" className="stats__image" />
        </div>
        <div className="stats__images-set">
          <img src="/img/photos/1.png" alt="" className="stats__image" />
          <img src="/img/photos/2.png" alt="" className="stats__image" />
          <img src="/img/photos/3.png" alt="" className="stats__image" />
          <img src="/img/photos/4.png" alt="" className="stats__image" />
          <img src="/img/photos/5.png" alt="" className="stats__image" />
          <img src="/img/photos/6.png" alt="" className="stats__image" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
