import express, { Router, Request, Response } from "express"

const app = express();

const route = Router();

app.use(express.json());

route.all("/", (req: Request, res: Response) => {
    res.json({ msg: "sausifufu" })
})

app.use(route);

app.listen(3333, () => "Server running!");

