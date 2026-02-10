export interface Source {
  name: string;
  logo: string;
}

export interface Award {
  name: string;
  logo: string;
}

export interface Actor {
  name: string;
  role: string;
  photo: string;
}

export interface Movie {
  titles: string[];
  descriptions: string[];
  year: string;
  rating: string;
  genres: string[];
  countries: string[];
  budget: string;
  awards: Award[];
  poster: string;
  trailer: string;
  actors: Actor[];
}

export const sources: Source[] = [
  { name: 'TMDB', logo: '/img/icons/tmdb.png' },
  { name: 'JastWatch', logo: '/img/icons/jastwatch.png' },
  { name: 'IMDB', logo: '/img/icons/imdb.png' },
  { name: 'Rotten Tomatoes', logo: '/img/icons/rt.png' },
  { name: 'TVDB', logo: '/img/icons/tvdb.png' },
  { name: 'KinoPoisk', logo: '/img/icons/kp.png' },
];

export const movie: Movie = {
  titles: ['Однажды в\nголливуде', 'Once Upon a Time...\nin Hollywood'],
  descriptions: [
    'В 1969 году в Лос-Анджелесе, где все еще великая эпоха голливудского кинематографа, снялся новый фильм. В главных ролях — звезда телевидения Рик Даллас и его дублер Брат Винсент. Вместе они пытаются подняться по карьерной лестнице, но в то же время сталкиваются с рядом проблем, связанных с современной жизнью.',
    'In 1969 Los Angeles, TV star Rick Dalton and his longtime stunt double Cliff Booth make their way around an industry they hardly recognize anymore. The ninth film from the writer-director features a large ensemble cast and multiple storylines in a tribute to the final moments of Hollywood\'s golden age.',
  ],
  year: '2019',
  rating: '7.9',
  genres: ['Криминал', 'Драма', 'Комедия'],
  countries: ['США'],
  budget: '$90 000 000',
  awards: [{ name: 'Golden Globe', logo: '/img/icons/golden-globe.png' }],
  poster: '/img/posters/once-upon-a-time-in-hollywood.png',
  trailer: 'https://www.youtube.com/embed/zw81ihoukKU',
  actors: [
    { name: 'Леонардо\nДиКаприо', role: 'Rick Dalton', photo: '/img/persons/leonardo-dicaprio.png' },
    { name: 'Брэд\nПитт', role: 'Cliff Booth', photo: '/img/persons/brad-pitt.png' },
    { name: 'Марго\nРобби', role: 'Sharon Tate', photo: '/img/persons/margo-robbie.png' },
  ],
};

export const exampleTitle = 'Информация о фильмах из популярных источников';
