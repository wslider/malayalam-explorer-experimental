// use ES modules 

import express from "express"; 
import cors from "cors"; 
import bodyParser from "body-parser"; 
import fs from "fs"; 
import path, { join } from "path"; 


const app = express();
const port = 3002;
const DATA_PATH = path.join(process.cwd(),'data', 'flashcards.json'); 

//middleware 

app.use(cors()); 
app.use(bodyParser.json());
app.use(express.static('public'));

//Routes for CRD API

app.get('api/flashcards', (req, res) => {}); // GET all
app.get('api/flashcards/:id', (req, res) => {}); // GET one
app.post('api/flashcards', (req , res) => {}); // POST 
app.delete('api/flashcards/:id', (req, res) => {}); // DELETE 

//start server

app.listen(port, ()=> {
    console.log(`Server running on http://localhost:${port}`);
    console.log("Press Ctrl+C to end this process.");
}); 


//API implementation 


// read / write json 
function readData() {
    if(!fs.existsSync(DATA_PATH)) fs.writeFileSync(DATA_PATH,'[]');
    return JSON.parse(fs.readFileSync(DATA_PATH,'utf8')); 
}

function writeData(data) {
    fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2)); 
}

//GET all
app.get('/api/flashcards', (req, res) => {
    const data = readData(); 
    res.json(data); 
}); 

//GET by Id
app.get('/api/flashcards/:id', (req, res) =>{ 
    const data = readData(); 
    const card = data.find(c => c.id == req.params.id); 
    if (!card) return res.status(404).json({error: 'Noy found'}); 
    res.json(card); 
});


//POST New Card
app.post('/api/flashcards', (req, res)=> {
    const data = readData(); 

    const maxId = data.reduce((m, c) => (c.id > m ? c.id : m), 0); //use maxID instead of Date.now()
    const newId = maxId + 1;
    const newCard = { id: newId, ...req.body };

    data.push(newCard);
    writeData(data);
    res.status(201).json(newCard); 
});

//DELETE card

app.delete('/api/flashcards/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) return res.status(400).json({ error: 'Invalid ID' });

        const data = readData(); 
        const filtered = data.filter(c => c.id !== id);

        if (filtered.length === data.length) {
            return res.status(404).json({ error: 'Not Found' });
        }

        writeData(filtered); 
        res.status(204).send();  
    } catch (err) {
        console.error('DELETE error:', err);
        res.status(500).json({ error: 'Server error' });
    }
});
