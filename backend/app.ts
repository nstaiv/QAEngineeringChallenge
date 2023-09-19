import express, {Request, Response} from 'express';
import {getMachineHealth} from './machineHealth';

const app = express();
const port = 3001;

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to fix CORS policy error
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
})

// Endpoint to get machine health score
app.post('/machine-health', (req: Request, res: Response) => {
  const result = getMachineHealth(req);
  if (result.error) {
    res.status(400).json(result);
  } else {
    res.json(result);
  }
});

app.listen(port, () => {
  console.log(`API is listening at http://localhost:${port}`);
});
