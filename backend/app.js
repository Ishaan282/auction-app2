import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

//loading .env variables
dotenv.config();

// initializing express app
const app = express();
const port = process.env.PORT || 5001;


app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    credentials: true
})); // to allow cross-origin requests

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//test route 
app.get('/', (req, res) => {
    res.send('I am working!');
});