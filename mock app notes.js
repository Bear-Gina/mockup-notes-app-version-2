const form = document.getElementById('form');
const input = document.getElementById('input');
const notesContainer = document.getElementById('notes');

let notes = JSON.parse(localStorage.getItem('notes')) || [];

function save() {
    notesContainer.innerHTML = notes.map(note => `<div class="note">${note}   <button id="undo">delete</button> </div>`).join('');
    localStorage.setItem('notes', JSON.stringify(notes));
    localStorage.clear()
}
function uploadFiles() {
 //unable to upload anything in there
 //working progress

}

function undo(){
    localStorage.removeItem(notes);
}

form.addEventListener('submit', (clicked) => {
    clicked.preventDefault();
    if(input.value) {
        notes.push(input.value);
        input.value = '';
        save();
    }
});


save();