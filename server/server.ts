import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import connect from "./db";
import morgan from "morgan";
import cors from 'cors'
import cookieParser from 'cookie-parser'
dotenv.config();
import authRouter from './routes/authRouter'
import mealRouter from './routes/mealRouter'
import userRouter from './routes/userRouter'
import dailyFitnessAndDietRouter from './routes/dialyFitnessAndDietRoutes';
const app: Express = express();
const port = process.env.PORT || 3000;
connect();
app.use(morgan("dev"));
app.use(cookieParser())
app.use(express.json());
const corsOptions: {} = {
    origin: [process.env.CROS_ORINGIN_ULR1, process.env.CROS_ORINGIN_ULR2],
    credentials: true,
    exposedHeaders: 'Authorization, Content-Type, X-Total-Count',
};
app.use(cors(corsOptions));
app.use('/api', authRouter);
app.use('/api', mealRouter);
app.use('/api', userRouter);
app.use('/api', dailyFitnessAndDietRouter);
app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});