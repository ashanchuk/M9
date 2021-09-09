const { transports } = require('winston');
const winston = require('winston');
const winston_rotate = require('winston-daily-rotate-file');

var transport = new winston.transports.DailyRotateFile({
    filename: 'module_9-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH-mm',
    maxSize: '20m',
    maxFiles: '14d'
  });

const logger = winston.createLogger({
    level: 'debug',
    transports: [
        new winston.transports.Console({ level: 'info' }),
        transport
    ],
    format: winston.format.simple()
});

module.exports = logger;