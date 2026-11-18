import express, { type Express, type Response, type Request } from "express";
import { timeStamp } from "node:console";

const app: Express = express();

app.use(express.json());

app.get("/api/health", (req: Request, res: Response) => {
    res.status(200).json({
        status: "OK",
        timeStamp: new Date().toISOString()
    })
})

export default app;