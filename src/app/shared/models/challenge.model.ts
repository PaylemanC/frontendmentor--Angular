export enum Difficulty {
  NEWBIE = 'NEWBIE',
  JUNIOR = 'JUNIOR',
  INTERMEDIATE = 'INTERMEDIATE',
  ADVANCED = 'ADVANCED',
  GURU = 'GURU',
}

export enum Language {
  HTML = 'HTML',
  CSS = 'CSS',
  API = 'API',
  TS = 'TS'
}

export interface Challenge {
  id: string | number;
  name: string;
  img: string; //preview
  description: string;
  languages: Language[];
  difficulty: Difficulty;
  url: string;
}
