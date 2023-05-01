import Link from 'next/link';

const Free = () => {
  return (
    <section className='free'>
      <div className='free-inner'>
        <h2 className='free-title inline-title section-title'>Хотите начать бесплатно?</h2>
        <Link href='https://mdwit.t.me' target='_blank' className='tariffs-item__button link-gradient'>
          <div className='overlay'>
            <span>Подключить</span>
            <span>Подключить</span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Free;
