const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const host = "localhost";
const mongoose = require('mongoose');
const router = require('./router');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://chama:Chama@cluster0.w42av.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    }
    catch (error) {
        console.log('MongoDB error: ', error);
    }
};

connect();

const server = app.listen(port, host, () => {
    console.log(`Node Server is listening to ${server.address().port}`);
});

// Use the router after middleware setup
app.use('/api', router);
