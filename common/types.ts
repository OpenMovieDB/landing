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
  
  export interface Data {
    title: string;
    sources: Source[];
    movie: Movie;
  }