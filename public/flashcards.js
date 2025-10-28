let flashcards = [];
let currentIndex = 0;
let isFlipped = false; 
let isShuffled = false; 
const engCardContent = document.getElementById('engCardContent'); 


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
    document.getElementById('malExampleTranslit')=card.malExampleTranslit;
    document.querySelectorAll('.cardContainer').forEach(c => c.classList.remove('flipped'));
    isFlipped = false; 
}

//flip on click - start with English side of card 

engCardContent.addEventListener('click', ()=>{
    if(!isFlipped){
        engCardContent.classList.add('flipped');
        isFlipped = true; 
    }
});

//buttons 

document.getElementById('nextButton').addEventListener('click',()=>{
    currentIndex = (currentIndex + 1) % flashcards.length; 
    displayCard(); 
});

document.getElementById('prevButton').addEventListener('click',()=>{
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
    displayCard(); 
});

document.getElementById('shuffleButton').addEventListener('click',()=>{
    shuffled = !shuffled; 
    flashcards = [...flashcards].sort(()=> Math.random()- 0.5); 
    currentIndex = 0; 
    displayCard(); 
});

document.getElementById('resetButton').addEventListener('click', ()=>{
    loadFlashcards();
    shuffled = false; 
});

//New Card Form - event listeners, input validation and functions 

document.getElementById('newCardForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const newCard = {
        id: Date.now(), //prints date created as id 
        category: document.getElementById('newCategory').value, 
        english: document.getElementById('newEnglish').value,
        engExample: document.getElementById('newEngExample').value,
        malayalam: document.getElementById('newMalayalam').value,
        translit: document.getElementById('newTranslit').value,
        malExample: document.getElementById('newMalExample').value,
        malExampleTranslit: document.getElementById('newMalExampleTranslit').value,
    };
    await fetch('/api/flashcards', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(newCard)
    });
    loadFlashcards();
    e.target.reset();
});


