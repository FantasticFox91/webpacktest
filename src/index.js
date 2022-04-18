import './sass/index.scss';

const userStack = {
  langiage: 'JavaScript',
  framework: 'Angular'
}

const user = {
  name: 'Grygorii',
  age: '30',
  ...userStack
}
