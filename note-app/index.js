const btnEl = document.getElementById('btn');
const appEl = document.getElementById("app");

function createNoteEl(id, content){
    // console.log(id, content);
    const element =document.createElement("textarea");
    element.classList.add("note");
    element.placeholder = "Empty Note";
    element.value = content;

    element.addEventListener("dblclick",()=>{
        const warning = confirm("Do you want to delete this note?");
        if(warning){
            deleteNote(id, element);
        }
    })

    element.addEventListener("input",()=>{
        updateNote(id,element.value);
    });
    return element;
}

function deleteNote(){

}

function updateNote(){
     
}

function addNote(){
    // console.log("clicked");

    const notes = [];
    const noteObj = {
        id:Math.floor(Math.random() *100000),
        content: ""
    };
    // console.log(noteObj);
    const noteEl = createNoteEl(noteObj.id, noteObj.content);  
    appEl.insertBefore(noteEl,btnEl); 
    
    notes.push(noteObj);

    saveNote(notes);
}



btnEl.addEventListener('click',addNote)