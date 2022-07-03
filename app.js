const express = require('express');
const app = express();
const router = require('./Routes/router');
const connectDb = require('./DB/db');
require('dotenv').config();

app.use(express.json());

app.get('/',(req,res) => {
    res.send('Base Page');
});

app.use('/api/v1/maps',router);

const start = async () => {
    try {
        await connectDb(process.env.MongoUrl);
        console.log('Db connected ...');
        app.listen(3000,() => {
            console.log('Listening on port 3000 ...');
        });
    } catch (error) {
        console.error(error);       
    }
}

start();