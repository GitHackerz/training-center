const cors = require('cors');
const express = require('express');
const connectDB = require("./config/db.js");
const path = require('path');
require('dotenv').config()

// import routes
const usersRouter = require('./routes/users.route');
const parcoursRouter = require('./routes/parcours.route');

const app = express();

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
const httpStatusText = require('./utils/httpStatusText');

// middlewares
app.use(cors())
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// global middleware for not found router
app.all('*', (req, res) => {
    return res.status(404).json({status: httpStatusText.ERROR, message: 'this resource is not available'})
})

// global error handler
app.use((error, req, res, next) => {
    res.status(error.statusCode || 500).json({
        status: error.statusText || httpStatusText.ERROR,
        message: error.message,
        code: error.statusCode || 500,
        data: null
    });
})

app.use('/api/parcours', parcoursRouter) // /api/parcours
app.use('/api/users', usersRouter) // /api/users

app.listen(process.env.PORT || 4000, () => {
    connectDB().then(() => console.log(`* listening on port: ${process.env.PORT || 4000} *`));
});
