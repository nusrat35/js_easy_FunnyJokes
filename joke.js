const generateJoke = async() =>{
    try{
        const url = 'https://icanhazdadjoke.com/';
    const header = {
        headers:{
            Accept: "application/json"
        }
    }
    const res = await fetch(url,header);
    const data = await res.json();

    let p = document.querySelector("#joke");
    p.value = data.joke;
    }catch(error){
        console.log(error);
    }
}

let btn = document.querySelector("#jokeBtn");
btn.addEventListener('click',generateJoke);