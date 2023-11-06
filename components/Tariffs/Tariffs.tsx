const Tariffs = () => {
  return (
    <section className='tariffs container' id='tariffs'>
      <h2 className='section-title'>Тарифы</h2>
      <p className='tariffs-description section-body'>
        В настоящий моммент API находится в разработке и для продакшена доступна только часть с методами кинопоиска.
        Если это подходит для вас, то вы можете получить токен для доступа к API выбрав тариф ниже.
      </p>
      <div className='tariffs-cards'>
        <div className='tariffs-item'>
          <div className='tariffs-item__overlay'>
            <div>
              <h3 className='tariffs-item__title section-h3'>Обучение</h3>
              <p className='tariffs-item__description section-body'>
                Это тариф создан для тех, кто хочет проверить API перед тем как подключиться к нему. Всегда бесплатно.
              </p>
              <ul className='tariffs-item__list'>
                <li>Доступ ко всем методам API с ограничением в 200 запросов </li>
                <li>Доступ к документации</li>
                <li>Поддержка в чате разработчиков</li>
              </ul>
            </div>

            <a
              href='https://t.me/kinopoiskdev_bot'
              target='_blank'
              className='tariffs-item__button link-gradient without-gradient'
              rel='noreferrer'
            >
              <div className='overlay'>
                <span>Получить доступ</span>
                <span>Получить доступ</span>
              </div>
            </a>
          </div>
        </div>
        <div className='tariffs-item tariffs-item-popular'>
          <div className='tariffs-item__overlay'>
            <div>
              <h3 className='tariffs-item__title section-h3'>Бизнес</h3>
              <p className='tariffs-item__description section-body'>
                Тариф для тех кому нужны большие обьемы данных без ограничений. Стоимость 2999 р. в месяц.
              </p>
              <ul className='tariffs-item__list'>
                <li>Безлимитный доступ ко всем методам API</li>
                <li>Доступ исходному коду и документации</li>
                <li>Возможность купить дамп базы</li>
                <li>Оперативная тех. поддержка</li>
                <li>Влияние на обьем и качество данных</li>
              </ul>
            </div>

            <a
              href='https://t.me/kinopoiskdev_bot'
              target='_blank'
              className='tariffs-item__button link-gradient'
              rel='noreferrer'
            >
              <div className='overlay'>
                <span>Подключиться к API</span>
                <span>Подключиться к API</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tariffs;
