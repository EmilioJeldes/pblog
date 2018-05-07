import Dashboard from 'layouts/dashboard/Dashboard';
import Landing from 'layouts/dashboard/Dashboard';

const routes = [
  {
    path: '/tasks',
    component: Dashboard
  },
  {
    path: '/landing',
    component: Landing
  },
  {
    redirect: true,
    path: '/',
    to: '/tasks'
  }
];

export default routes;
