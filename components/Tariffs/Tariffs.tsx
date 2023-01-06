const Tariffs = () => {
  return (
    <section className="tariffs">
      <h2 className="section-title">Тарифы</h2>
      <p className="tariffs-description section-body">
        За 3 года разработки API стало понятно, что он используется для бизнеса
        и для обучения. Чтобы стать более удобными теперь только 2 самых нужных
        тарифа.
      </p>
      <div className="tariffs-cards">
        <div className="tariffs-item">
          <div className="tariffs-item__overlay">
            <h3 className="tariffs-item__title section-h3">Обучение</h3>
            <p className="tariffs-item__description section-body">
              Это тариф создан для некомерческого использования API kinopoisk,
              tmdb и imdb с целью обучения программированию. Идеален для
              студентов :)
            </p>
            <ul className="tariffs-item__list">
              <li>
                Доступ ко всем методам API кинопоиска (3000 запросов в сутки)
              </li>
              <li>Доступ к документации</li>
              <li>Доступ исходному коду API</li>
              <li>Нельзя использовать в приватных репозиториях</li>
              <li>Тех. поддержка в чате @dev_to_dev</li>
              <li className="mobile-hidden">&nbsp;</li>
            </ul>
            <a
              href="#"
              className="tariffs-item__button link-gradient without-gradient"
            >
              <div className="overlay">
                <span>Получить токен</span>
                <span>Получить токен</span>
              </div>
            </a>
          </div>
        </div>
        <div className="tariffs-item tariffs-item-popular">
          <div className="tariffs-item__overlay">
            <h3 className="tariffs-item__title section-h3">Бизнес</h3>
            <p className="tariffs-item__description section-body">
              Для этого тарифа доступен тестовый период, который позволит вам не
              платить за апи во время эксперементов. Поумолчанию этот период
              длится 2 недели c момента активации тарифа, после 2000 р. в месяц.
            </p>
            <ul className="tariffs-item__list">
              <li>Безлимитный доступ ко всем методам API</li>
              <li>Доступ к документации</li>
              <li>Доступ исходному коду API</li>
              <li>Возможность купить дамп базы</li>
              <li>Возможность развернуть свой личный инстанс API</li>
              <li>Оперативная тех. поддержка</li>
            </ul>
            <a href="#" className="tariffs-item__button link-gradient">
              <div className="overlay">
                <span>Бесплатное демо</span>
                <span>Бесплатное демо</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tariffs;
