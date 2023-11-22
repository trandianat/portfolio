export enum Color {
  BLACK = 'var(--black)',
  BLUE = 'var(--blue)',
  DARK_GRAY = 'var(--dark-gray)',
  GRAY = 'var(--gray)',
  GREEN = 'var(--green)',
  NAVY = 'var(--navy)',
  RED = 'var(--red)',
  WHITE = 'var(--white)',
}

export enum Persona {
  AUTO = 'auto',
  BOT = 'bot',
  USER = 'user',
}

export enum Position {
  LEFT = 'left',
  RIGHT = 'right',
}

export enum Links {
  DESIGN = 'https://www.justinmind.com',
  GITHUB = 'https://github.com/trandianat',
  LINKEDIN = 'https://www.linkedin.com/in/trandianat',
  TENSORFLOW = 'https://www.tensorflow.org/js/models',
  WEDDING = 'https://www.thebeanwedding.com',
}

export enum Size {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export enum Status {
  DEFAULT = 'default',
  ERROR = 'error',
  SUCCESS = 'success',
}

export const Wedding = {
  ENTRY_DESKTOP: 0,
  ENTRY_MOBILE: 1,
  HOME_DESKTOP: 2,
  HOME_MOBILE: 3,
};

export const colors = [
  'red',
  'blue',
  'green',
  'orange',
  'purple',
  'gray',
  'pink',
  'brown',
  'black',
  'yellow',
];

export const lexRuntimeConfig = {
  credentials: {
    accessKeyId: process.env.REACT_APP_LEX_ACCESS as string,
    secretAccessKey: process.env.REACT_APP_LEX_SECRET as string,
  },
  region: process.env.REACT_APP_REGION,
};

export const lexInputConfig = {
  botAlias: process.env.REACT_APP_LEX_ALIAS,
  botName: process.env.REACT_APP_LEX_BOT,
  userId: process.env.REACT_APP_LEX_USER,
};
