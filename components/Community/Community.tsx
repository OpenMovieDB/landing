import Link from 'next/link';

const Community = () => {
  return (
    <section className='community container'>
      <h2 className='section-title'>Сообщество</h2>
      <div className='community-block section-block'>
        <div className='community-item'>
          <h3 className='community-item__title section-h3'>
            <img src='img/tg-icon.svg' alt='tg' />
            Telegram
          </h3>
          <p className='community-item__description section-body'>
            Присоединяйся в наше сообщество в telegram и получай круглосуточную помощь
          </p>
          <Link href='https://t.me/+jeHPZVXiLPFhODJi' className='community-item__link'>
            Присоединиться
          </Link>
        </div>
        <div className='community-item'>
          <h3 className='community-item__title section-h3'>
            <img src='img/github-icon.svg' alt='github' />
            Github
          </h3>
          <p className='community-item__description section-body'>
            Присоединяйся в наше сообщество в telegram и получай круглосуточную помощь
          </p>
          <Link href='https://github.com/OpenMovieDB' className='community-item__link'>
            Присоединиться
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Community;
