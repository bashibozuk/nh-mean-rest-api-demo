const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');
const mongoose  = require('mongoose');

app.use(bodyParser.json());
app.use('/api', routes);



const uri = 'mongodb+srv://blog-app:bl0g-@pp@cluster0.rocff.mongodb.net/blog-app?retryWrites=true&w=majority';
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
