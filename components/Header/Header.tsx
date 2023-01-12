import Link from 'next/link';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <Link href="/" className="logo link-opacity">
            <img src="img/logo.svg" alt="Open Movie API" />
          </Link>
          <nav className="header-nav">
            <a
              href="#example"
              data-scroll-to
              className="header-nav__link link-underline"
            >
              Пример API
            </a>
            <a
              href="#tariffs"
              data-scroll-to
              className="header-nav__link link-underline"
            >
              Тарифы
            </a>
            <a
              href="#support"
              data-scroll-to
              className="header-nav__link link-underline"
            >
              Поддержка
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
