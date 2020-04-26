const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
// TODO: add jwtCheck using Auth0 middleware

//CORS
app.use((req, res, next) => {
    //TODO: Make this only to allow requests from *.mydomain
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === "OPTIONS") {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

//Routes
app.get('/ping', (req, res) => {
    res.send({
        'message': 'API is rocking'
    })
});

const templateRoutes = require('./routes/templates');
app.use('/templates', templateRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;