const Example = () => {
  return (
    <section className="example">
      {/* <div className="background example__background">
        <svg
          width="1598"
          height="1338"
          viewBox="0 0 1598 1338"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_96_560)">
            <path
              d="M1301.81 778.417C1441 712.195 1229.54 558.748 1132.06 495.073C986.515 383.504 800.404 436.799 755.013 480.998C709.623 525.197 1104.27 920.54 1030.28 700.221C956.287 479.902 981.671 479.231 1010.08 493.822C1038.5 508.414 1162.62 844.639 1301.81 778.417Z"
              fill="#00F0FF"
            />
            <path
              d="M1157.42 984.022C1127.68 1202.24 877.258 1019.61 832.32 932.396C782.184 835.093 577.405 934.345 592.459 847.898C607.513 761.451 851.525 416.051 892.703 720.578C933.882 1025.11 1187.16 765.802 1157.42 984.022Z"
              fill="#0500FF"
            />
            <path
              d="M308.735 684.746C151.43 808.16 354.127 473.731 427.066 375.035C504.992 269.592 571.428 330.358 622.33 281.563C673.232 232.767 449.372 876.747 417.778 733.649C386.184 590.551 466.04 561.332 308.735 684.746Z"
              fill="#BD00FF"
            />
          </g>
          <g
            style={{ mixBlendMode: 'color-dodge' }}
            filter="url(#filter1_f_96_560)"
          >
            <path
              d="M489.698 685.599C378.978 757.522 524.979 901.226 592.897 960.439C692.862 1065.28 837.822 1004.21 875.904 958.245C913.986 912.283 651.044 535.588 687.56 751.788C724.077 967.989 704.882 969.749 684.738 956.441C664.594 943.133 600.418 613.675 489.698 685.599Z"
              fill="#00F0FF"
            />
            <path
              d="M453.521 364.634C463.714 152.389 668.626 287.795 708.606 363.907C753.21 448.823 906.122 322.956 899.545 407.538C892.969 492.12 724.149 858.269 674.276 574.76C624.403 291.25 443.327 576.88 453.521 364.634Z"
              fill="#0500FF"
            />
            <path
              d="M531.134 402.033C426.721 307.643 659.258 320.488 730.842 338.535C807.319 357.815 788.349 467.691 827.086 492.739C865.823 517.788 455.574 673.926 528.397 550.849C601.22 427.772 635.548 496.423 531.134 402.033Z"
              fill="#BD00FF"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_96_560"
              x="0.404297"
              y="28.9163"
              width="1597.47"
              height="1308.21"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="125"
                result="effect1_foregroundBlur_96_560"
              />
            </filter>
            <filter
              id="filter1_f_96_560"
              x="199.515"
              y="0.765869"
              width="950.236"
              height="1267.44"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="125"
                result="effect1_foregroundBlur_96_560"
              />
            </filter>
          </defs>
        </svg>
      </div> */}
      <h2 className="section-title">Пример работы</h2>
      <div className="example-block section-block">
        <div className="example-top">
          <h3 className="example-top__title section-h3">Однажды в голливуде</h3>
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
            1969 год, золотой век Голливуда уже закончился. Известный актёр Рик
            Далтон и его дублер Клифф Бут пытаются найти свое место в
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
    </section>
  );
};

export default Example;
