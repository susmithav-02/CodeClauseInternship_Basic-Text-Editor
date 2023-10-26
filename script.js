'use strict';


let userPost = document.getElementById('submittedPost');
let userFname = document.getElementById('submittedFname');
let userLname = document.getElementById('submittedLname');
let userEmail = document.getElementById('submittedEmail');
let username = document.getElementById('submittedUsername');
let publishDate = document.getElementById('pubDate');
let preview = document.getElementById('preview-item');

document.addEventListener('keyup', printSync);

function printSync(e) {
    if (e.keyCode >= 3 || e.keyCode <= 12 ||
        e.keyCode >= 16 || e.keyCode <= 20 ||
        e.keyCode == 32 ||
        e.keyCode >= 46 || e.code <= 90 || 
        e.keyCode >= 96 || e.keyCode <= 111 ||
        e.keyCode >= 160 || e.keyCode <= 171 || 
        (e.keyCode == 16 && e.keyCode <= 171)) {
        // preview.textContent = `${submittedPost.value}`;
        preview.innerHTML = submittedPost.value;

    } return;
}


let boldButton = document.getElementById('bold');
boldButton.onclick = () => {
    if (submittedPost.selectionStart != submittedPost.selectionEnd) {

        let selected = submittedPost.value.slice(submittedPost.selectionStart, submittedPost.selectionEnd);
        
        submittedPost.setRangeText(`<strong>${selected}</strong>`);
        
        preview.innerHTML = `${submittedPost.value}`;
    } return;
}


let italButton = document.getElementById('ital');
italButton.onclick = () => {
    if (submittedPost.selectionStart != submittedPost.selectionEnd) {

        let selected = submittedPost.value.slice(submittedPost.selectionStart, submittedPost.selectionEnd);
        
        submittedPost.setRangeText(`<em>${selected}</em>`);
        preview.innerHTML = `${submittedPost.value}`;
    } return;
}

let underButton = document.getElementById('under');
underButton.onclick = () => {
    if (submittedPost.selectionStart != submittedPost.selectionEnd) {

        let selected = submittedPost.value.slice(submittedPost.selectionStart, submittedPost.selectionEnd);
        
        submittedPost.setRangeText(`<u>${selected}</u>`);
        preview.innerHTML = `${submittedPost.value}`;
    } return;
}

let hiliButton = document.getElementById('hili');
hiliButton.onclick = () => {
    if (submittedPost.selectionStart != submittedPost.selectionEnd) {

        let selected = submittedPost.value.slice(submittedPost.selectionStart, submittedPost.selectionEnd);
        
        submittedPost.setRangeText(`<mark>${selected}</mark>`);
        preview.innerHTML = `${submittedPost.value}`;
    } return;
}

let strikeButton = document.getElementById('strike');
strikeButton.onclick = () => {
    if (submittedPost.selectionStart != submittedPost.selectionEnd) {

        let selected = submittedPost.value.slice(submittedPost.selectionStart, submittedPost.selectionEnd);
        
        submittedPost.setRangeText(`<s>${selected}</s>`);
        preview.innerHTML = `${submittedPost.value}`;
    } return;
}


   