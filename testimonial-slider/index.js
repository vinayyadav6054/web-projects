const testimonial = [
    {
        name: "Cherise G",
        photoUrl: "https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        text: "I have been using apple for over a year now and I love it! I can't imagine life without it. It's so easy to use, and the customer service is great."
    },
    {
        
        name: "Cherise G",
        photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHVzZXJ8ZW58MHwxfDB8fHww",
        text: "Would definitely recommend jokes and will definitely be ordering again."
    },{
        name: "Cherise G",
        photoUrl: "https://images.unsplash.com/photo-1672863512959-6f7b696006cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHx1c2VyfGVufDB8MXwwfHx8MA%3D%3D",
        text: "I love jokes! This is an amazing service and it has saved me and my small business so much time. I plan to use it for a long time to come."
   
    },
];

const imgEl = document.querySelector('img');
const textEl = document.querySelector("p");
const usernameEl = document.querySelector(".username");


let idx=0;
function updateTestimonial(){
    const {name, photoUrl, text} = testimonial[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++;
    if(idx === testimonial.length){
        idx = 0;
    }
    setTimeout(()=>{  
        updateTestimonial();
    }, 2000)
}

updateTestimonial();