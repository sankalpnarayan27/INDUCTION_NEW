import worldwide from './assets/worldwide.svg';
import hourglass from './assets/hourglass.svg';
import connection from './assets/connection.svg';

const currentYear = new Date();

export default [
  {
    title: '2000+',
    desc: 'people worldwide',
    icon: connection,
  },
  {
    title: `${currentYear.getFullYear() - 2004}+`,
    desc: 'glorious years and counting',
    icon: hourglass,
  },
  {
    title: 17,
    desc: 'global presence',
    icon: worldwide,
  }
];
