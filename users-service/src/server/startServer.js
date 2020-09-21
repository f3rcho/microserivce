import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";

import accessEnv from '#root/helpers/accessEnv';
import setUpRoutes from './routes'

const PORT = accessEnv("PORT", 7104);

const app = express();

app.use(bodyParser.json());

app.use(
    cors({
        origin: (origin, cb) => cb(null, true),
        credentials: true
    })
);
setUpRoutes(app)

app.listen(PORT, "0.0.0.0", () => {
    console.info(`Users service listening on ${PORT}`);
});