import Link from 'next/link';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const Header = () => {
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id: string) => {
    const elem = document.querySelector(id);

    scroll.scrollTo(elem, {
      offset: '-100',
      duration: '2000',
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <Link href="/" className="logo link-opacity">
            <img src="img/logo.svg" alt="Open Movie API" />
          </Link>
          <nav className="header-nav">
            <button
              onClick={() => handleScroll('#example')}
              className="header-nav__link link-underline"
            >
              Пример API
            </button>
            <Link href="#" className="header-nav__link link-underline">
              Тарифы
            </Link>
            <Link href="#" className="header-nav__link link-underline">
              Поддержка
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
