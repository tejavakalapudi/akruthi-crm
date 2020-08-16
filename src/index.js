import app from './config/express';
import config from './config/env';

app.listen(config.port, () => {
  console.info(`API server listening at port ${config.port}`);
});

export default app;
