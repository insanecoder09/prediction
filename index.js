import express from 'express';
import cors from 'cors';

const app = express();

const keys = [
    "abc-xyz-mno-123",
    "bhf-scs-rfr",
    "dhr-chs-khy",
    "dhe-wur-fht",
    "wpt-vhf-elt"
]

const keysData = {
    "abc-xyz-mno-123": {
        username: "Ayush Singh",
        isUsed: true,
    },
    "bhf-scs-rfr":{
        username:"Vivek"
        isUsed:false,
    }
    "dhr-chs-khy":{
        username:"Ram"
        isUsed:false,
    }
    "dhe-wur-fht":{
        username:"Prashant"
        isUsed:true,
    }
    "wpt-vhf-elt":{
        username:"Yash"
        isUsed:true,
    }
}

app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello")
});

app.get('/prediction/:param', (req, res) => {
    if (keys.includes(req.params.param)) {
        if (keysData[req.params.param].isUsed) res.send('2');
        else res.send('1');
    }
    else res.send('0')
});

app.listen(3000, () => console.log("Server Running"))
