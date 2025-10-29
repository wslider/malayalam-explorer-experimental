const express = require('express');
const cors = require('cors'); 
const bodyParser = require('body-parser'); 
const fs = require('fs');
const path = require('path'); 

const app = express();
const port = 3002;
const DATA_PATH = path.join(__dirname, 'data', 'flashcards.json');

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