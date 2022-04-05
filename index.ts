import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';

// Create configuration the .env file
dotenv.config();


// Crete Express APP
const app: Express = express();
const port: string | number = process.env.PORT || 8000;


// Define the first Route of APP
app.get('/', (req: Request, res: Response) => {
    // Send Hello World
    res.send('Welcome to App Restfull Express from Oscar')
})

app.get('/bye', (req: Request, res: Response) =>{
    let farewell =  {
        "message": "Goodbye, world"
    }
    res.send(farewell)
})

app.get('/hello', (req: Request, res: Response) => {
    res.send('Hello World')
})


// Execute APP and listen in port
app.listen(port, ()=> {
    console.log(`Express Server: running at http://localhost:${port}`)
})