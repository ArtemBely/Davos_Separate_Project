import Main from './Main';
import NoMatch from './NoMatch';

const routes = [
  {
    path: '/',
    exact: true,
    component: Main
  },
  {
    component: NoMatch
  }
]

export default routes;
