import Main from './Main';
import NoMatch from './NoMatch';
import Day21 from './Day21';
import Day22 from './Day22';
import Day23 from './Day23';
import Day24 from './Day24';
import Day25 from './Day25';
import Day26 from './Day26';

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
    path: '/day22',
    exact: true,
    component: Day22
  },
  {
    path: '/day23',
    exact: true,
    component: Day23
  },
  {
    path: '/day24',
    exact: true,
    component: Day24
  },
  {
    path: '/day25',
    exact: true,
    component: Day25
  },
  {
    path: '/day26',
    exact: true,
    component: Day26
  },
  {
    component: NoMatch
  }
]

export default routes;
