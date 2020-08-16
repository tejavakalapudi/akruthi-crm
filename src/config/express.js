import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { errors } from 'celebrate';
import bearerToken from 'express-bearer-token';
import Boom, { isBoom, boomify } from '@hapi/boom';
import routes from '../apis';
import specs from './swagger/docs_generator';

const app = express();

// Body parser
app.use(express.json());

// token extractor
app.use(bearerToken());

app.use('/api-docs/v1', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/api/v1', routes);

app.use(express.json());
app.use(errors());

app.use((req, res, next) => {
  next(Boom.notFound());
});
// error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  let boomed;
  if (!isBoom(err)) {
    const errorResponse =
      req.app.get('env') === 'development'
        ? {
            statusCode: err.status || 500,
            message: err.message,
          }
        : { status: err.status || 500 };

    // add this line to include winston logging
    // winston.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    boomed = boomify(err, errorResponse);
  } else {
    boomed = err;
  }
  // set locals, only providing error in development

  return res.status(boomed.output.statusCode).json({ ...boomed.output.payload, ...boomed.data });
});
export default app;
