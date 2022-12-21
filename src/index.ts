import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
import cors from "cors";
import httpProxy from "express-http-proxy";

import servers from "../servers.json";

dotenv.config();

//TODO: ADD SWAGGER
//TODO: ADD JWT
//TODO: ADD ORM
//TODO: REFACTOR - CONFIG

async function main() {
    const app = express();

    app.use(cors());
    app.use(morgan("dev"));
    app.use(helmet());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }))


    app.get("/", (req, res) => res.json({ msg: "Middleware Runnin!" }));

    servers.forEach((server) => {
        app.use(server.path, httpProxy(server.url));
    });

    app.listen(process.env.API_PORT, () => console.log(`Server running at: http://localhost:${process.env.API_PORT}`));
}

main();