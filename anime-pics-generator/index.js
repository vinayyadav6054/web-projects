const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-img");
const animeNameEl = document.querySelector(".anime-name");


async function getAnime(){
    // console.log("clicked");
    try {
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
        animeNameEl.innerText ="Updating...";
        const response = await fetch("https://api.catboys.com/img");
        const data = await response.json();
        // console.log(data);
        btnEl.disabled = false;
        btnEl.innerHTML = "Get Anime";
        animeContainerEl.style.display = "block";
        animeImgEl.src = data.url;
        animeNameEl.innerText = data.artist;

        
    } catch (error) {
        console.log(error);
        
        
    }
    
    
}

btnEl.addEventListener("click", getAnime);