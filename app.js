import express from 'express';
import userRouter from './routes/user.js';
import taskRouter from './routes/task.js';  
import {config} from 'dotenv';
import cookieParser from 'cookie-parser';
import { errormiddleware } from './middlewares/error.js';
import cors from 'cors';

export const app = express();

config({
    path: './data/config.env'
})

//Using Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

//Using Router
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);

app.get('/', (req, res) => {
    res.send('Hello World');
});

//Using Error Middleware
app.use(errormiddleware);
