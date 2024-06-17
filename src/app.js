const express = require('express');
const helmet = require('helmet');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const compression = require('compression');
const cors = require('cors');
const passport = require('passport');
const httpStatus = require('http-status');
const config = require('./config/config');
const morgan = require('./config/morgan');
const { jwtStrategy } = require('./config/passport');
const { authLimiter } = require('./middlewares/rateLimiter');
const routes = require('./routes/v1');
const { errorConverter, errorHandler } = require('./middlewares/error');
const ApiError = require('./utils/ApiError');
const path = require('path');

const app = express();

// Enable CORS with a comprehensive set of options
const corsOptions = {
  origin: 'https://digiapi.vercel.app', // Frontend origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  credentials: true, // Allow cookies to be sent
  allowedHeaders: 'Content-Type,Authorization', // Ensure these headers are allowed
  preflightContinue: false,
  optionsSuccessStatus: 204, // Some legacy browsers choke on 204
};

// Apply CORS middleware globally before other middleware
app.use(cors(corsOptions));

// Handle preflight requests for all routes
app.options('*', cors(corsOptions));

if (config.env !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

// Set security HTTP headers
app.use(helmet());

// Parse urlencoded request body and JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Sanitize request data
app.use(xss());
app.use(mongoSanitize());

// Gzip compression
app.use(compression());

// JWT authentication
app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

// Limit repeated failed requests to auth endpoints in production
if (config.env === 'production') {
  app.use('/v1/auth', authLimiter);
}

// v1 API routes
app.use('/v1', routes);

// Handle unknown API requests
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// Convert error to ApiError, if needed
app.use(errorConverter);

// Handle errors
app.use(errorHandler);

module.exports = app;
