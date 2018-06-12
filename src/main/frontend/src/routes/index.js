import Dashboard from 'layouts/dashboard/Dashboard';
import Landing from 'layouts/landing/Landing';

const routes = [
  {
    exact: true,
    path: '/',
    component: Landing
  },
  {
    path: '/tasks',
    component: Dashboard
  }
];

export default routes;
