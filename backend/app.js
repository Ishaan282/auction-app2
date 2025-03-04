import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

//loading .env variables
dotenv.config();

// initializing express app
const app = express();
const port = process.env.PORT || 5001;

// Routes
app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});