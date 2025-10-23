# Malayalam Explorer 

Overview:

A Code: You capstone project highlighting HTML, CSS, and JavaScript abilities.

Project Overview:

Educational app for Malayali diaspora and Travelers seeking to explore Kerala's language, geography and culture. 


## Project Organization

| Page | Description |
|------|-------------|
| **Landing Page** | Includes a map and information about Kerala, with navigation to language flashcardsa and featured location pages. |
| **Flashcards** | Learn Malayalam with interactive flashcards of the most commonly used words with example phrases. |
| **Trivandrum** | Featured location page for the Capitol city including a map, weather data and information. |
| **Munnar** | Featured location page for the mountain town of Munnar including a map, weather data and information. |
| **Kochi** | Featured location page for the port city including a map, weather data and information. |
| **Malayalam Script Flashcards** | Learn the basics of reading and writing Malayalam Script. |


## Capstone Requirements Fulfilled

| Requirement | Implementation |
|-------------|----------------|
| **Create a Node.js web server using Express.js** | & Host on Render |
| **Custom API** | Create an API that implements HTTP requests for GET and POST. Data can be stored in a JSON file on the back-end |
| **Use arrays, objects to store and retrieve information** |  Flashcard data stored in JSON Array of Objects. Shuffle / Random Selection Available. |
| **Visualize data in a user-friendly way** | Flashcards, Weather Data and Topogrpahic Maps. |
| **Responsive Design** | Mobile first design utilizing CSS flexbox. CSS grid layout with full size maps optimized for tablets and larger screens. |
| **Persist important data to the user to local storage and make the stored data accessible in your app. (including after reload/refresh).**| Remember user preferences and progress on flashcards |

## How to Download

1. Instructions available soon. 


## Features: 
 
    Flashcards for Language Learning 
    - JSON , JS , flashcards.html 
    - start with 50 most common words (unique phrases)
    - shuffle mode 
    - images?... use own images or API callout to USPLASH  

    - Stretch Goals: 
        - remember progress 
        - 300 cards total cards
        - add audio to cards 

    Featured Locations 
    - Custom greeting with time, weather conditions (language toggle)
    - weather (c - f toggle)
    - static map obtained from Open Street Maps via Overpass 

    Self hosted api : Node.JS + Express + Render 
    - how to use it? 
        - persist data? 
        - user progress on flashcards? 
        - user prefferences and settings? 
        - images and data for notecards .. earmark some to review again 

    Persist Data in Local Storage:
    - remember user progress on flashcards and settings 



* 10 Distinct commits
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
        - Use Postman to visit http://localhost:3000 & http://localhost:3000/api. You should see the responses defined in index.js
        - gitignore file 
            - node_modules/
            - .env
    4. index.html 
        - welcome message and language toggle
        - nav bar and into content 
        - with Kerala map
        - world clock
    5. flashcards.JSON (first 50)
    6. Update flashcards.js  flashcards.html & css to display cards
    7. trivandrum.html 
        - overpass static map
        - malayalam english toggle (or highlight to change language)
    8. munnar.html 
        - overpass static map
        - malayalam english toggle (or highlight to change language)
    9. add weather widget to location pages 
        - weather : C - F toggle & language togglet (openMeteo Api)
        - update custom greeting to include time of day and wx conditions
    10. polish and add CSS styles

    Additional Commits ... 

    11. Add Audio to first 50 flashcards 
        - mp3 of native speakers
        - audio option on cards 
    12. Notecard Review Feature 
        - user marks some to review. 
        - resets when user goes through all of them  
    13. Add additional Flashcards .. ideally 300 total 
    14. Add 3rd Location Page .. kochi.html
        - overpass static map
        - malayalam english toggle (or highlight to change language)
    15. Achievment badges 

# Site Map

- **server.js**
- **package.json**
- **public/**
  - index.html
  - trivandrum.html
  - kochi.html
  - munnar.html
  - flashcards.html
  - badges.html
  - **css/**
    - reset.css
    - style.css
  - **js/**
    - script.js
  - **data/**
    - flashcards.json
    - alphabet.json
    - locations.json
  - **images/**
    - kerala.png
    - trivandrum.png
    - kochi.png
    - munnar.png
    - logo.png
  - **audio/**
    - 1.mp3
    - 297.mp3
  - **maps/**
    - kerala.overpass
    - trivandrum.overpass
    - kochi.overpass
    - munnar.overpass
- **.gitignore**

## AI Usage: 




                        