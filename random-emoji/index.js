const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");


const emoji=[]

async function getEmoji(){
    let response = await fetch("https://emoji-api.com/emojis?access_key=d56f1ef5743fdd336134773e6963292d27f10630");

    const data = await response.json();

    console.log(data);
    
}

getEmoji();

btnEl.addEventListener("click", ()=>{
    // console.log("clicked");
    
})