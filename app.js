const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');
const mongoose  = require('mongoose');
require('dotenv').config();

app.use(bodyParser.json());
app.use('/api', routes);


const uri = process.env.MONGO_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
    app.listen(8081, () => {
        console.log('App started');
    })
})
