let flashcards = []; // Global array of cards
let currentIndex = 0;
let isFlipped = false; 
let isShuffled = false; 

// DOM elements (cached for efficiency)
const engCard = document.getElementById('engCardContent');
const malCard = document.getElementById('malCardContent');

// Load data (API first, fallback to local JSON)
async function loadFlashcards() {
    try {
        const response = await fetch('/api/flashcards');
        if (!response.ok) throw new Error('API fetch failed');
        flashcards = await response.json(); 
    } catch (err) {
        console.error('API load failed, using local:', err);
        try {
            const localData = await fetch('/data/flashcards.json');
            if (!localData.ok) throw new Error('Local fetch failed');
            flashcards = await localData.json(); 
        } catch (localErr) {
            console.error('Local load failed:', localErr);
            flashcards = [];  // Fallback to empty
        }
    }
    if (flashcards.length > 0) {
        currentIndex = 0;  // Reset index on reload
        displayCard();
    } else {
        console.warn('No flashcards loaded');
    }
}

// Display current card on both sides (always populate, visibility toggles)
function displayCard() {
    if (flashcards.length === 0 || !flashcards[currentIndex]) {
        console.warn('No card to display');
        return;
    }
    const card = flashcards[currentIndex];
    
    // English side
    document.getElementById('category').textContent = card.category;
    document.getElementById('english').textContent = card.english;
    document.getElementById('engExample').textContent = card.engExample;
    
    // Malayalam side (always set, even if hidden)
    document.getElementById('malayalam').textContent = card.malayalam;
    document.getElementById('translit').textContent = card.transliteration;  // Matches JSON field
    document.getElementById('malExample').textContent = card.malExample;
    document.getElementById('malExampleTranslit').textContent = card.malExampleTranslit;
    
    console.log(`Displayed card ${currentIndex + 1}: ${card.english} / ${card.malayalam}`);  // Debug log
}

// Flip on click - toggle English front / Malayalam back
engCard.addEventListener('click', () => {
    console.log('Flip clicked! Current isFlipped:', isFlipped);  // Debug
    isFlipped = !isFlipped;
    
    if (isFlipped) {
        // Flip to Malayalam
        engCard.style.display = 'none';
        malCard.style.display = 'block';  // Show back
        console.log('Switched to Malayalam side');
    } else {
        // Flip back to English
        engCard.style.display = 'block';
        malCard.style.display = 'none';
        console.log('Switched to English side');
    }
    
    displayCard();  // Refresh content AFTER swap
});

// Add click listener to Malayalam side for flip-back
malCard.addEventListener('click', () => {
    console.log('Malayalam clicked! Flipping back');
    isFlipped = false;  // Force back to English
    engCard.style.display = 'block';
    malCard.style.display = 'none';
    displayCard();
});

// Navigation Buttons (with flip reset to English)
document.getElementById('nextButton').addEventListener('click', () => {
    if (flashcards.length === 0) return;
    currentIndex = (currentIndex + 1) % flashcards.length; 
    // Reset to English side
    isFlipped = false;
    engCard.style.display = 'block';
    malCard.style.display = 'none';
    displayCard(); 
});

document.getElementById('prevButton').addEventListener('click', () => {
    if (flashcards.length === 0) return;
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
    // Reset to English side
    isFlipped = false;
    engCard.style.display = 'block';
    malCard.style.display = 'none';
    displayCard(); 
});

// Shuffle: Copy array, randomize, reset index and flip
document.getElementById('shuffleButton').addEventListener('click', () => {
    isShuffled = !isShuffled; 
    flashcards = [...flashcards].sort(() => Math.random() - 0.5); 
    currentIndex = 0; 
    // Reset to English side
    isFlipped = false;
    engCard.style.display = 'block';
    malCard.style.display = 'none';
    displayCard(); 
});

// Reset: Reload original, unshuffle, reset flip
document.getElementById('resetButton').addEventListener('click', () => {
    loadFlashcards();
    isShuffled = false; 
});

// New Card Form: POST to API, refresh list
document.getElementById('newCardForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const newCard = {
        id: Date.now(), // Simple ID gen
        category: document.getElementById('newCategory').value.trim(),
        english: document.getElementById('newEnglish').value.trim(),
        engExample: document.getElementById('newEngExample').value.trim(),
        malayalam: document.getElementById('newMalayalam').value.trim(),
        transliteration: document.getElementById('newTranslit').value.trim(),  // Matches JSON field
        malExample: document.getElementById('newMalExample').value.trim(),
        malExampleTranslit: document.getElementById('newMalExampleTranslit').value.trim(),
    };
    // Basic validation
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
        loadFlashcards();  // Refresh list
        e.target.reset();
        console.log('New card added:', newCard.english);
    } catch (err) {
        console.error('Form submission failed:', err);
        alert('Failed to add card. Check console.');
    }
});

// Init: Load on page load, ensure English side visible
loadFlashcards();
isFlipped = false;
engCard.style.display = 'block';
malCard.style.display = 'none';