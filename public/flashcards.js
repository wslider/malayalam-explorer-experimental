let flashcards = [];
let currentIndex = 0;
let isFlipped = false; 
let isShuffled = false; 

async function loadFlashcards () {
    try {
        const response = await fetch('/api/flashcards');
        flashcards = await response.json(); 
    }
    catch {
        const localData = await fetch('data/flashcards.json');
        flashcards = await localData.json(); 
    }
    displayCard()
}

function displayCard() {
    const card = flashcards[currentIndex];
    document.getElementById('category')=card.category;    
    document.getElementById('english')=card.english;
    document.getElementById('engExample')=card.engExample;
    document.getElementById('malayalam')=card.malayalam;
    document.getElementById('translit')=card.translit;
    document.getElementById('malExample')=card.malExample;
    document.getElementById('malExampleTranslit')=card.malExampleTRanslit;
    document.querySelectorAll('.cardContainer').forEach(c => c.classList.remove('flipped'));
    isFlipped = false; 
}