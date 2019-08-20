/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
/* Step 2: Inspect and study the data coming back, this is YOUR 
github info! You will need to understand the structure of this 
data in order to use it to build your component function 

Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
follow this link in your browser https://api.github.com/users/<Your github name>/followers 
, manually find some other users' github handles, or use the list found 
at the bottom of the page. Get at least 5 different Github usernames and add them as
Individual strings to the friendsArray below.

Using that array, iterate over it, requesting data for each user, creating a new card for each
user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
<img src={image url of user} />
<div class="card-info">
<h3 class="name">{users name}</h3>
<p class="username">{users user name}</p>
<p>Location: {users location}</p>
<p>Profile:  
<a href={address to users github page}>{address to users github page}</a>
</p>
<p>Followers: {users followers count}</p>
<p>Following: {users following count}</p>
<p>Bio: {users bio}</p>
</div>
</div>

*/

function cardMaker(obj) {
  let div = document.createElement('div');
  div.classList.add('card')
  
  let img = document.createElement('img');
  img.setAttribute('src', obj.avatar_url);
  div.appendChild(img);
  
  let h3 = document.createElement('h3');
  h3.classList.add("name");
  h3.textContent = obj.name
  div.appendChild(h3);
  
  let user = document.createElement('p');
  user.classList.add("username");
  user.textContent = obj.login;
  h3.appendChild(user);
  
  let location = document.createElement('p');
  location.textContent = `Location: ${obj.location}`;
  user.appendChild(location);
  
  let url = document.createElement('a');
  url.textContent = `Profile: ${obj.html_url}`;
  url.setAttribute('href', obj.html_url);
  user.appendChild(url);
  
  let followers = document.createElement('p');
  followers.textContent = `Followers: ${obj.followers}`;
  user.appendChild(followers);
  
  let following = document.createElement('p');
  following.textContent = `Following: ${obj.following}`
  user.appendChild(following);
  
  let bio = document.createElement('p');
  bio.textContent = `Bio: ${obj.bio}`
  user.appendChild(bio);

  return div
}

axios.get('https://api.github.com/users/tetondan')
  .then((response) => {
    console.log(response.data);
    document.querySelector('.cards').appendChild(cardMaker(response.data));
  }
  )
  .catch((error) => 
    console.log(error)
  )
axios.get('https://api.github.com/users/dallasjames')
  .then((response) => {
    console.log(response.data);
    document.querySelector('.cards').appendChild(cardMaker(response.data));
  }
  )
  .catch((error) => 
  console.log(error)
  )

axios.get('https://api.github.com/users/dustinmyers')
  .then((response) => {
    console.log(response.data);
    document.querySelector('.cards').appendChild(cardMaker(response.data));
  }
  )
  .catch((error) => 
    console.log(error)
  )

axios.get('https://api.github.com/users/justsml')
  .then((response) => {
    console.log(response.data);
    document.querySelector('.cards').appendChild(cardMaker(response.data));
  }
  )
  .catch((error) => 
    console.log(error)
  )

axios.get('https://api.github.com/users/luishrd')
  .then((response) => {
    console.log(response.data);
    document.querySelector('.cards').appendChild(cardMaker(response.data));
  }
  )
  .catch((error) => 
    console.log(error)
  )

axios.get('https://api.github.com/users/bigknell')
  .then((response) => {
    console.log(response.data);
    document.querySelector('.cards').appendChild(cardMaker(response.data));
  }
  )
  .catch((error) => 
    console.log(error)
  )

/* List of LS Instructors Github username's: 
tetondan
dustinmyers
justsml
luishrd
bigknell
*/
