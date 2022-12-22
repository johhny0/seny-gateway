import serversJson from "../../servers.json";
import { Server } from "./server";
import httpProxy from "express-http-proxy";
import express, { Express } from "express";

export class ServerService {
    servers: Server[] = serversJson;

    loadRoutes(app: Express) {
        app.get("/", (req, res) => res.json({ msg: "Middleware Runnin!" }));

        this.servers.forEach((server: Server) => app.use(server.path, httpProxy(server.url)));
    }
}