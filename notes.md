## fetch  default = GET 

async function fetchUserData(url) {
  try {
     const response = await fetch(url);  
     if(!response.ok){
         throw new Error ('error'); 
     }
     const data = await response.json(); 
     console.log(data);
  }
    catch {
        console.error('Error:', error); 
    }
return data; 
}

or

function fetchUserData(url) {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Fetch error:', error);
      throw error;
    });
}

### fetch - response not in range

function fetchData(url) {
  return fetch(url)
    .then(response => {
      if(response.status < 200 || response.status > 299) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
    return response.json();

    })
    .catch(error => {
      console.error('Fetch error:', error);
      throw error;
    });
}

#### fetch POST

fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ key: 'value' })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

##### fetch PUT

fetch('https://api.example.com/data/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ key: 'newValue' })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

###### fetch DELETE 


# GitHub API Examples .. 

async function getUser(ghUserName) {
    try {
        const res = await fetch(`https://api.github.com/users/${ghUserName}`);
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

getUser(yourUserNameHere);


async function getUserRepos(ghUserName) {
    try {
        const res = await fetch(`https://api.github.com/users/${ghUserName}/repos`)
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

getUserRepos(aUserNameHere);