import appRoot from 'app-root-path';
import { createLogger as CreateLogger, transports, format } from 'winston';
// import {LoggingWinston} from '@google-cloud/logging-winston';
// const loggingWinston = new LoggingWinston();

// define the custom settings for each transport (file, console)
const options = {
  file: {
    level: 'info',
    filename: `${appRoot}/logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: 'info',
    handleExceptions: true,
    json: false,
    colorize: true,
    format: format.combine(format.colorize(), format.simple()),
  },
};

const logger = new CreateLogger({
  transports: [new transports.File(options.file), new transports.Console(options.console)],
  exitOnError: false, // do not exit on handled exceptions
});

// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
  write(message) {
    // use the 'info' log level so the output will be picked up by both transports (file and console)
    logger.info(message);
  },
};

export default logger;
