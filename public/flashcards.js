let flashcards = [];
let currentIndex = 0;
let isFlipped = false; 
let isShuffled = false; 
const engCardContent = document.getElementById('engCardContent'); 

async function loadFlashcards() {
    try {
        const response = await fetch('/api/flashcards');
        if (!response.ok) throw new Error('API fetch failed'); 
        flashcards = await response.json(); 
    } catch (err) {  // Minor: Capture error for logging
        console.error('API load failed, using local:', err);
        try {
            const localData = await fetch('/data/flashcards.json');  // Fixed: Absolute path for Express serving
            if (!localData.ok) throw new Error('Local fetch failed');
            flashcards = await localData.json(); 
        } catch (localErr) {
            console.error('Local load failed:', localErr);
            flashcards = [];  // Fallback to empty
        }
    }
    if (flashcards.length > 0) {  // Minor: Safety check before display
        currentIndex = 0;  // Reset index on reload
        displayCard();
    } else {
        console.warn('No flashcards loaded');  // Optional: Log for debugging
    }
}

function displayCard() {
    if (flashcards.length === 0 || !flashcards[currentIndex]) {  // Fixed: Guard against empty/undefined
        console.warn('No card to display');
        return;
    }
    const card = flashcards[currentIndex];
    document.getElementById('category').textContent = card.category;  // Fixed: Add .textContent
    document.getElementById('english').textContent = card.english;
    document.getElementById('engExample').textContent = card.engExample;
    document.getElementById('malayalam').textContent = card.malayalam;
    document.getElementById('translit').textContent = card.translit;
    document.getElementById('malExample').textContent = card.malExample;
    document.getElementById('malExampleTranslit').textContent = card.malExampleTranslit;
    document.querySelectorAll('.cardContainer').forEach(c => c.classList.remove('flipped'));
    isFlipped = false; 
}

// Flip on click - start with English side of card (toggle for full flip-back)
engCardContent.addEventListener('click', () => {  // Minor: Arrow function consistency
    engCardContent.classList.toggle('flipped');  // Improved: Toggle instead of one-way
    isFlipped = !isFlipped;  // Sync state with toggle
});

// Buttons 
document.getElementById('nextButton').addEventListener('click', () => {
    if (flashcards.length === 0) return;  // Minor: Guard
    currentIndex = (currentIndex + 1) % flashcards.length; 
    displayCard(); 
});

document.getElementById('prevButton').addEventListener('click', () => {
    if (flashcards.length === 0) return;  // Minor: Guard
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
    displayCard(); 
});

document.getElementById('shuffleButton').addEventListener('click', () => {
    isShuffled = !isShuffled;  // Fixed: Use isShuffled
    flashcards = [...flashcards].sort(() => Math.random() - 0.5);  // Fixed: Arrow function spacing
    currentIndex = 0; 
    displayCard(); 
});

document.getElementById('resetButton').addEventListener('click', () => {
    loadFlashcards();
    isShuffled = false;  // Fixed: Use isShuffled
});

// New Card Form - event listeners, input validation and functions 
document.getElementById('newCardForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);  // Minor: Use FormData for easier validation
    const newCard = {
        id: Date.now(), // Prints date created as id 
        category: document.getElementById('newCategory').value.trim(),  // Minor: Trim whitespace
        english: document.getElementById('newEnglish').value.trim(),
        engExample: document.getElementById('newEngExample').value.trim(),  // Note: Matches your HTML ID?
        malayalam: document.getElementById('newMalayalam').value.trim(),
        translit: document.getElementById('newTranslit').value.trim(),
        malExample: document.getElementById('newMalExample').value.trim(),
        malExampleTranslit: document.getElementById('newMalExampleTranslit').value.trim(),
    };
    // Minor: Basic validation (extend as needed)
    if (!newCard.category || !newCard.english || !newCard.malayalam) {
        alert('Please fill required fields: Category, English, Malayalam');
        return;
    }
    try {
        const response = await fetch('/api/flashcards', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newCard)
        });
        if (!response.ok) throw new Error('POST failed');
        loadFlashcards(); 
        e.target.reset();
    } catch (err) {
        console.error('Form submission failed:', err);
        alert('Failed to add card. Check console.');
    }
});


loadFlashcards();  

