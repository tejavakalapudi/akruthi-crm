import swaggerJSdocs from 'swagger-jsdoc';
/*
Refer these sites for help :
  https://mherman.org/blog/swagger-and-nodejs/
  https://github.com/Surnet/swagger-jsdoc/blob/HEAD/docs/GETTING-STARTED.md
*/

export default swaggerJSdocs({
  swaggerDefinition: {
    // Like the one described here: https://swagger.io/specification/#infoObject
    info: {
      title: 'Akruthi CRM',
      version: '1.0.0',
      description: 'App to manage customers and employees',
    },
    basePath: '/api/v1',
  },
  // List of files to be processes. You can also set globs './routes/*.js'
  apis: ['./dist/apis/**/routes/**/*.js', './dist/apis/**/swagger/*.js'],
});
