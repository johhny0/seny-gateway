import express, { Router, Request, Response } from "express"

import dotenv from "dotenv";

dotenv.config();

const app = express();

const route = Router();

app.use(express.json());

route.all("/", (req: Request, res: Response) => {
    res.json({ msg: "Ok" })
})

app.use(route);

app.listen(process.env.API_PORT, () => console.log(`Server running at: http://localhost:${process.env.API_PORT}`));

