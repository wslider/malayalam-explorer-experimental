const express = require('express'); 
const fs = require('fs').promises;
const path = require('path');
const app = express(); 
const port = process.env.PORT || 3000; 

// Middleware to parse JSON
app.use(express.json());

// Serve static files (for potential frontend or media files)
app.use(express.static('public'));

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Malayalam Explorer Flashcards API!');
});

// Get all flashcards
app.get('/api/flashcards', async (req, res) => {
  try {
    const data = await fs.readFile(path.join(__dirname, 'data', 'flashcards.json'));
    const flashcards = JSON.parse(data);
    res.json(flashcards);
  } catch (error) {
    res.status(500).json({ message: 'Error reading flashcards', error: error.message });
  }
});

                                    /*
                                    // Get flashcard by ID
                                    app.get('/api/flashcards/:id', async (req, res) => {
                                    try {
                                        const data = await fs.readFile(path.join(__dirname, 'data', 'flashcards.json'));
                                        const flashcards = JSON.parse(data);
                                        const flashcard = flashcards.flashcards.find(f => f.id === parseInt(req.params.id));
                                        if (!flashcard) {
                                        return res.status(404).json({ message: 'Flashcard not found' });
                                        }
                                        res.json(flashcard);
                                    } catch (error) {
                                        res.status(500).json({ message: 'Error reading flashcard', error: error.message });
                                    }
                                    });

                                    // Get flashcards by category
                                    app.get('/api/flashcards/category/:category', async (req, res) => {
                                    try {
                                        const data = await fs.readFile(path.join(__dirname, 'data', 'flashcards.json'));
                                        const flashcards = JSON.parse(data);
                                        const filtered = flashcards.flashcards.filter(f => f.category.toLowerCase() === req.params.category.toLowerCase());
                                        if (filtered.length === 0) {
                                        return res.status(404).json({ message: 'No flashcards found for this category' });
                                        }
                                        res.json({ flashcards: filtered });
                                    } catch (error) {
                                        res.status(500).json({ message: 'Error filtering flashcards', error: error.message });
                                    }
                                    }); */

// Get random flashcard
app.get('/api/flashcards/random', async (req, res) => {
  try {
    const data = await fs.readFile(path.join(__dirname, 'data', 'flashcards.json'));
    const flashcards = JSON.parse(data);
    const randomIndex = Math.floor(Math.random() * flashcards.flashcards.length);
    res.json(flashcards.flashcards[randomIndex]);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching random flashcard', error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});