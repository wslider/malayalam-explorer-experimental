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

//Routes

app.get('api/flashcards', (req, res) => {}); // GET all
app.get('api/flashcards/:id', (req, res) => {}); // GET one
app.post('api/flashcards', (req , res) => {}); // POST 
app.put('api/flashcards/:id', (req , res) => {}); // PUT
app.delete('api/flashcards/:id', (req, res) => {}); // DELETE 

//start server

app.listen(port, ()=> {console.log(`Server running on http://localhost:${port}`)}); 


//CRUD API implementation 


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
    const newCard = {id:Date.now(), ...req.body}; 
    data.push(newCard);
    writeData(data);
    res.status(201).json(newCard); 
});

//DELETE card
app.delete('/api/flashcards/:id', (req, res) => {
    const data = readData(); 
    const filtered = data.filter(c => c.id != req.pararms.id);
    if (filtered.length === data.length) return res.status(404).json({error: 'Not Found'});
    writeData(filtered); 
    res.status(204).send();  
});





/* function getAllFlashcards() {
    return flashcards;
}

app.get("/api/flashcards", (request, response) => {
    const characters = getAllFlashcards();
    response.status(200).json({
        data: flashcards,
    });
});

app.get("/api/flashcards/:id", (request, response) => {
    const flashcard = getFlashcardById(request.params.id);
    
    if (!flashcard) {
        return response.status(404).json({
            data: "Flashcard does not exist with that id",
        });
    }

    response.status(200).json({
        data: flashcard,
    });

});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log("Press Ctrl+C to end this process.");
});*/