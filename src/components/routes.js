import Main from './Main';
import NoMatch from './NoMatch';
import Day21 from './Day21';

const routes = [
  {
    path: '/',
    exact: true,
    component: Main
  },
  {
    path: '/day21',
    exact: true,
    component: Day21
  },
  {
    component: NoMatch
  }
]

export default routes;
