const Support = () => {
  return (
    <section className='support' id='support'>
      <div className='background support__background'>
        <img src='img/support-left.png' alt='' className='background-left' />
        <img src='img/support-right.png' alt='' className='background-right' />
      </div>
      <div className='container'>
        <h2 className='support__title section-title'>Поддержка</h2>
        <p className='support__description section-body'>
          Мы не оставим Вас без поддержки, сотрудники openmovieapi.dev онлайн 24/7. Готовы решить практически любой ваш
          вопрос, а также - подсказать, помочь, обновить, загрузить, даже доработать код для корректной работы с API
          kinopoisk.dev.
        </p>
      </div>
    </section>
  );
};

export default Support;
