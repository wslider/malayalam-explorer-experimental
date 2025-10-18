# malayalam-explorer-experimental

# Malayalam Explorer 

* Features: 
 
Flashcards for Language Learnging 
- JSON , JS , flashcards.html 
- start with 50 (unique phrases)
- shuffle mode 
- images?... use own images or API callout to USPLASH  

- remember progress 
- 300 cards total cards
- add audio to cards 

Featured Locations 
- Custom greeting with time, weather conditions (language toggle)
- weather (c - f toggle)
- map from overpass 

* self hosted api 
- how to use it? 
    - persist data? 
    - user progress on flashcards? 
    - user prefferences and settings? 
    - images and data for notecards .. earmark some to review again 

Persist Data
- remember user progress and settings 



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
    8. kochi.html
        - overpass static map
        - malayalam english toggle (or highlight to change language)
    9. munnar.html 
        - overpass static map
        - malayalam english toggle (or highlight to change language)
    10. add weather widget to location pages 
        - weather : C - F toggle & language togglet (openMeteo Api)
        - update custom greeting to include time of day and wx conditions
    11. polish and add CSS styles

    12. Add Audio to first 50 flashcards 
        - mp3 of native speakers
        - audio option on cards 
    13. Notecard Review Feature 
        - user marks some to review. 
        - resets when user goes through all of them  
    14. Add additional Flashcards .. ideally 300 total 
    15. Achievment badges 





                        