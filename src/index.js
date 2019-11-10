import app from './config/express';
import config from './config/env';
import winston from './config/winston';
import { connectDb } from './config/mongo';

const eraseDatabaseOnSync = true;

connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    // await Promise.all(models.forEach(model => model.deleteMany({})));
  }
  app.listen(config.port, () => {
    winston.info(`API server listening at port ${config.port}`);
  });
});

export default app;
