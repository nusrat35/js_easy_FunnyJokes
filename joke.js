const generateJoke = async() =>{
    try{
        const url = 'https://icanhazdadjoke.com/';
        const header = {
        headers:{
            Accept: "application/json"
        }
    }
    let textArea = document.querySelector("#joke");
    textArea.value = `Loading..`
    const res = await fetch(url,header);
    const data = await res.json();

    textArea.value = data.joke;
    }catch(error){
        console.log(error);
    }
}

let btn = document.querySelector("#jokeBtn");
btn.addEventListener('click',generateJoke);