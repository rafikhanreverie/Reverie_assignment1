const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./db');
const indexRouter= require('./apiRouter/indexRouter');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB();

Object.keys(indexRouter).forEach((key)=> {
   return app.use(`/api/${key}`,indexRouter[key]);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
