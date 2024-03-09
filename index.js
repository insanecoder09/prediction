import express from 'express';
import cors from 'cors';

const app = express();



const keys = ["abc-xyz-mno-123",]

app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello")
});

app.get('/prediction/:param', (req, res) => {
    if(keys.includes(req.params.param))
    res.send('1' + req.connection.remoteAddress)
else res.send('0')
});

app.listen(3000, () => console.log("Server Running"))