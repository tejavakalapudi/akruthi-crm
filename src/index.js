import app from './config/express';
import config from './config/env';
import initMongo from './config/mongo';

app.listen(config.port, async () => {
  if (config.env === 'dev') {
    await initMongo('akruthi');
  }
  console.info(`API server listening at port ${config.port}`);
});

export default app;
