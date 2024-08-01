import express, { Express } from 'express';
import http from 'http';
import cors, { CorsOptions } from 'cors';
import { Server } from "node:http";

// ROUTER IMPORTS
// ...

// GLOBAL VARIABLES
const app: Express = express();
const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;
const server: Server = http.createServer(app);

// CORS MIDDLEWARE
const corsOptions: CorsOptions = {
  optionsSuccessStatus: 200,
  credentials: true,
  methods: [ 'GET', 'POST', 'PUT', 'DELETE' ],
  allowedHeaders: [ 'Content-Type', 'Authorization', 'Origin', 'X-Requested-With', 'Accept' ],
};
app.use(express.json());
app.use(cors(corsOptions));

// SERVER ROUTES
// ...

// HANDLE PREFLIGHT REQUESTS
app.options('*', cors(corsOptions));

// WILDCARD ENDPOINT
app.use('*', (req: any, res: any): void => {
  res.status(404).send('Resource not found');
});


// RUN SERVER FOR API REQUESTS
server.listen(PORT, (): void => {
  console.log(`Serverlistening on port: ${ PORT }...`);
});
