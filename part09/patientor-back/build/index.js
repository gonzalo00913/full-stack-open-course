"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.get("/api/ping", (_req, res) => {
    return res.status(200).send("pong");
});
const PORT = 3001;
server.listen(PORT, () => {
    console.log(`server runnin port ${PORT}`);
});
