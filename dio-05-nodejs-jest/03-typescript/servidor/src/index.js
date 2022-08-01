import express from 'express';
import { routes } from './routes.js';
const server = express();
const port = 3000;
server.use(express.json());
server.use(routes);
server.listen(port, () => {
    console.log(`Server on in port: ${port}`);
});
