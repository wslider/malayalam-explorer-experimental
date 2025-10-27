import express from "express";

const app = express();
const port = 2030;

const flashcards = [
    {
      "id": 1,
      "category": "Nouns",
      "english": "House",
      "engExample": "I live in a house.",
      "malayalam": "വീട്",
      "transliteration": "vīṭŭ",
      "malExample": "ഞാൻ ഒരു വീട്ടിൽ വസിക്കുന്നു. (ñān oru vīṭṭil vasikkunnu.)",
    },
    {
      "id": 2,
      "category": "Nouns",
      "english": "Water",
      "engExample": "I drink water.",
      "malayalam": "വെള്ളം",
      "transliteration": "veḷḷam",
      "malExample": "ഞാൻ വെള്ളം കുടിക്കുന്നു. (ñān veḷḷam kuṭikkunnu.)",
    },
    {
      "id": 3,
      "category": "Nouns",
      "english": "Food",
      "engExample": "The food is delicious.",
      "malayalam": "ഭക്ഷണം",
      "transliteration": "bhakṣaṇam",
      "malExample": "ഭക്ഷണം രുചികരമാണ്. (bhakṣaṇam rucikaramāṇŭ.)",
    },
    {
      "id": 4,
      "category": "Nouns",
      "english": "Family",
      "engExample": "My family is big.",
      "malayalam": "കുടുംബം",
      "transliteration": "kuṭumbam",
      "malExample": "എന്റെ കുടുംബം വലുതാണ്. (ente kuṭumbam valumāṇŭ.)",
    },
    {
      "id": 5,
      "category": "Nouns",
      "english": "Friend",
      "engExample": "My friend is kind.",
      "malayalam": "സുഹൃത്ത്",
      "transliteration": "suhr̥t",
      "malExample": "എന്റെ സുഹൃത്ത് ദയാലുവാണ്. (ente suhr̥t dayāluvāṇŭ.)",
    }
]

function getAllFlashcards() {
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
});