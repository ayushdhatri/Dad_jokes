const jokebar = document.getElementById('joke');
console.log(jokebar);
const joke = document.getElementById('jokeBtn');

joke.addEventListener('click',generateJoke);

generateJoke();
async function generateJoke(){
    const config={
        headers:{
            Accept:'application/json',
        },
    }
    const res = await fetch('https://icanhazdadjoke.com/',config);
    const data = await res.json();
    jokebar.innerHTML = data.joke;
}