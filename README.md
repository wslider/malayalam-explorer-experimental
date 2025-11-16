# Malayalam Explorer 

## Overview:

A Code:You capstone project highlighting HTML, CSS, and JavaScript abilities.

## Project Overview:

Educational app for Malayali diaspora and Travelers seeking to explore Kerala's language, geography and culture. 


## Project Organization

| Page | Description |
|------|-------------|
| **Index / Home Page** | Includes a map and information about Kerala, World Clock displaying User's Local Time and IST, and navigation to language flashcardsa and featured location pages. |
| **Flashcards** | Learn Malayalam with interactive flashcards of the most commonly used words with example phrases. |
| **Locations** | General information about locations within Kerala and hub page to access featured location pages. | 
| **Malayalam Script Flashcards** | Learn the basics of reading and writing Malayalam Script. (Advanced Feature)|
| **Trivandrum** | Featured location page for the Capitol city including a map, weather data and information. (Advanced Feature)|
| **Munnar** | Featured location page for the mountain town of Munnar including a map, weather data and information. (Advanced Feature)|
| **Kochi** | Featured location page for the port city including a map, weather data and information. (Advanced Feature)|


## Capstone Requirements Fulfilled

| Requirement | Implementation |
|-------------|----------------|
| **Responsive Design** | Mobile first design utilizing CSS flexbox. Media query and CSS grid layout optimized for tablets and larger screens. |
| **Create a Node.js web server using Express.js** | Server.JS and Package.JSON files. Use Express and ES Modules.|
| **Custom API** | Create a CRD API that implements HTTP requests for GET, POST (user can post their own flashcards to the data set) and DELETE. Data stored in a JSON on the backend (Flashcards.json).  |
| **Use arrays, objects to store and retrieve information** |  Flashcard data stored in JSON Array of Objects with Shuffle mode, Previous, Next and Reset functionalities. |
| **Display Data Based on Some External Factor**| Display Bilingual World Clock with Local and IST. Recalculate times every minute - Set Interval of 1000ms. |
|**Use a regular expression to validate user input**| Specific character requirements in form inputs for creating new cards and adding to the JSON file. Input validated before user can POST a new flashcard. Regex is used, especially where Malayalam script is required as input (see event listener for submitting a new card in flashcards.js). |



## How to Download

1. **Clone the repository using GIT**
   ```bash
   git clone https://github.com/wslider/malayalam-explorer.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd malayalam-explorer
   ```

3. **Install dependencies**
   ```bash
   npm install
   npm install express
   npm install nodemon 
   ```
4. **NPM Start**
    ```bash
    npm run dev
    npm start
    ```

5. **Open Browser & Navigate to `http://localhost/3002`**
    - ! IMPORTANT: Do not use live server to view the UI. The server writes to a JSON file (flashcards.json) that live server is watching and it will refresh the page on a POST or DELETE request (creating new flashacards and deleting flashcards). 

 
## Features for MVP: 
- 2 Pages: Index.html and Flashcards.html 
- Responsive Mobile First Design with Media Query for Larger Screens 
- Flashcards with Next, Previous, Shuffle, Reset and Delete
    - Flip to Reveal Translation 
    - Start with 50 common words and phrases
- Form to Create and Submit (POST) new flashcards to the data set. 
- NodeJS and Express Server
- Custom API with GET, POST and DELETE interacting with Flashcards.json 
- World Clock Display 
    - Local Time and IST (Indian Standard Time)
    - Bilingual Greetings Displayed
    - Updated every minute (60000ms)


## Advanced Features: 
- Expand Flashcard Data to include 300+ words and phrases
- Add Playable Audio to Flashcards 
- Featured Location Pages with Maps and Information 
    - Trivandrum
    - Munnar
    - Kochi
- Malayalam Movie Search using The Movie Database API



## 10 Distinct commits
    1. ReadME and Project Proposal + Create Repository
    2. Site Organization - created files, folders (incling gitignore) 
    3. API 
        - npm init -y
        - npm npm install express
        - npm install --save-dev nodemon
        - setup express server in index.js 
        - update package.json 
            -"scripts": {
                "start": "node index.js",
                "dev": "nodemon index.js" }
        - npm run dev
        - Use Postman to visit http://localhost:3002 & http://localhost:3002/api. You should see the responses defined in index.js
        - gitignore file 
            - node_modules/
            - .env
    4. index.html & flashcards.html
        - basic structure for features
    5. Set up flashcard data in JSON - initial 10 - 50 cards for testing
        - Add flashcards.json with initial Malayalam-English array/objects; include client-side load script.
    6. Implement custom API endpoints
        - Add Express routes for GET/POST /api/flashcards with fs module for JSON persistence.
        - Build flashcard display component
        - Add script.js logic to fetch/render cards via API, with flip animation and error fallback.
    7. Add flashcard navigation controls
        - Implement Next/Previous/Skip buttons and “click” to Flip with event listeners and array indexing.
        - Integrate shuffle mode for flashcards
        - Add shuffle() function, button toggle, and state to randomize deck order.
    8. Create bilingual world clock on Index.html 
        - Add JS for local/IST time display, setInterval updates, time-of-day greetings, and hover / toggle.
    9. Polish CSS and Fine Tune Media Queries 
    10. Add additional Flashcards.  
    11. ... add additional stretch goals (commit each new feature). 

## Future Plans and Upcoming Versions:
    1. Continue to develop and expand advanced features.
    - add playable audio for cards
    - add locations  
    2. Public version on GitHub pages 



# Site Map

- **server.js**
- **package.json**
- **public/**
  - index.html
  - flashcards.html
  - locations.html (advanced feature)
  - **css/**
    - reset.css
    - style.css
    - flashcards.css
  - **js/**
    - script.js
    - flashcards.js
    - locations.js (advanced feature)
  - **data/**
    - flashcards.json
  - **images/**
    - kerala-map.png
    - ... 
  - **audio/** (advanced feature)
    - 1.mp3
    - .... 
- **.gitignore** 
    - node modules
    - env 


## AI USAGE - Grok 4 Assistance in the process of creating parts the following ... 
-  Delete Card event listener in flashcards.js 
-  Post Card event listener in flashcards.js
-  The function updateKeralaTimeGreeting() in script.js 
-  Obtaining Initial List & Translations of Most Commonly Used Words and Example Phrases for flashcards - flashcards.json 
    - * Translations checked and verified by native Malayalam speakers 



                        