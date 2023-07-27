const jokeButton = document.getElementById('jokeButton');
//butttonu çekiyorum id sinden
const joke = document.getElementById('joke');
//şakamızın yazıcağı kısım

//https://api-ninjas.com/ dan My accountu apikey alıyoruz
//ve dad jokes kımnından url alıyorum 
const apiKey = 'aYhWqYNAUnU1KVHEwfZct25Kn1mWKk9VneXU8Zg7';
const apiURL='https://api.api-ninjas.com/v1/dadjokes?limit=1';
const options = {
    method: 'GET',
    headers: {'X-Api-Key': apiKey
    }
  };
//get methodu ile çağırıyorum headers i sitede nasıl tanımlanması gerektiği yazıyo 'X-Api-Key'
async function getJoke(){
    try {
        joke.textContent='Updating...';
        jokeButton.textContent = 'Loading...';
        jokeButton.disabled = true;

        const response = await fetch(apiURL,options);
        const data = await response.json();

        jokeButton.disabled = false;
        jokeButton.textContent = 'Tell Me A Joke';
        joke.textContent=data[0].joke;
    } catch (error) {
        joke.textContent='Try again later';

        jokeButton.disabled = false;
        jokeButton.textContent = 'Tell Me A Joke';
    }
}
jokeButton.addEventListener('click', getJoke);
//jokeButtona addEventListener ile 'click' eventini tanımlıyorum getJoke methodunu atıyorum