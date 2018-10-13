import Dashboard from '../layouts/dashboard/Dashboard';
import Landing from '../layouts/landing/Landing';

const routes = [
  {
    path: '/tasks',
    component: Dashboard
  },
  {
    path: '/',
    component: Landing,
    exact: true,
    redirect: true
  }
];

export default routes;
