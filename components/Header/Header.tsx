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
            <Link href="#" className="header-nav__link link-underline">
              Пример API
            </Link>
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
