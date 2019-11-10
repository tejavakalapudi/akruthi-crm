import express from 'express';
import glob from 'glob';

const router = express.Router();

function getRouteName(uri) {
  return `/${uri.split('/')[0]}`;
}

const routes = glob.sync('**/routes/*.js', {
  cwd: __dirname,
});

routes.forEach(async routeUri => {
  const route = await import(`./${routeUri}`);
  router.use(getRouteName(routeUri), route.default);
});

export default router;
