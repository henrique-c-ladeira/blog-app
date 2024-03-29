import express, { Request, Response } from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import path from 'path';
import { Routes } from './routes';
import { logger } from './middlewares/logger-middleware';

const app = express();
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());

// Serve Front End
app.use(express.static(path.join(__dirname, '../../client', 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../../client', 'build', 'index.html'));
});

// register express routes from defined application routes
Routes.forEach((route) => {
  (app as any)[route.method](
    route.route,
    logger,
    route.middlewares ?? [],
    (req: Request, res: Response, next: Function) => {
      const result = new (route.controller as any)()[route.action](
        req,
        res,
        next,
      );
      result
        .then((result) => {
          return result !== null && result !== undefined
            ? res.send(result)
            : undefined;
        })
        .catch((err) => res.status(500).send(err));
    },
  );
});

// Dynamically apply all routes
// Routes.forEach((route) => {
//   app[route.method](
//     route.route,
//     route.middlewares,
//     (
//       request: Request,
//       response: Response,
//       next: NextFunction
//     ) => {
//       (route.controller as any)[route.action](request, response, next)
//         .then((result) => next(result))
//         .catch((err) => next(err));
//     }
//   );
// });

export default app;
