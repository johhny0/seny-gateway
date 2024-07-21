import serversJson from "../../servers.json";
import { Server } from "./server";
import httpProxy from "express-http-proxy";
import { Express } from "express";

export class ServerService {
    servers: Server[] = serversJson;

    loadRoutes(app: Express) {
        app.get("/", (_, res) => res.json({ msg: "Middleware Runnin! 🌉" }));

        this.servers.forEach((server: Server) => app.use(server.path, httpProxy(server.url)));

        app.all("*", (_, res) => res.status(404).json({ msg: "Middleware: Route Does Not Exists! 🛑🤚" }))
    }
}