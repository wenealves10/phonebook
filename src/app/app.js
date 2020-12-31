require('dotenv/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

// website security
const helmet = require('helmet');
const csrf = require('csurf');
const {  csurfError, csurfMiddleware } = require('../middlewares/middlewares');
// Mongoose
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTDB,{ useNewUrlParser: true,  useUnifiedTopology: true}).then(() =>{
    app.emit('db-started');
    console.log('Started the mongodb');
}).catch((e) =>{
    console.log(e);
});

// Session 
const session = require('express-session');
const mongooseStore = require('connect-mongo')(session);
const flash = require('connect-flash');


// Config Ports and HOST
const configs = {
    port: process.env.PORT || 8080,
    host: process.env.HOST || "127.0.0.1"
}

// Helmet
app.use(helmet());
// Config Server
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
// Config Views
app.use(express.static(path.resolve(__dirname,'..','..','public')));
app.set('views',path.resolve(__dirname,'../','views'));
app.set('view engine','ejs');

// Sessions Options
const sessionOptions = session({
    secret: process.env.SECRETSESSION,
    store: new mongooseStore({mongooseConnection:mongoose.connection}),
    resave:false,
    saveUninitialized: false,
    cookie:{
        maxAge: (1000 * 60 * 60 * 24 * 7),
        httpOnly:true
    }
});
app.use(sessionOptions);
app.use(flash());

// CSURF 
app.use(csrf());
 app.use(csurfError);
app.use(csurfMiddleware);

// routes 
const routes = require('../routes/users.routes');
app.use(routes);

module.exports = {
    app,
    configs
};
