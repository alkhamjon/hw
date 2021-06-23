let userName = document.getElementById('name');
let userEmail = document.getElementById('mail');
let userComment = document.getElementById('textarea');

function form(event){
    event.preventDefault();
    let layoutEvnt = `
    <li class="comments__list-item">
    <h3 class="comments__list-name">${userName.value}</h3>
    <div class="comments__list-info">
      <p class="comments__list-mail">${userEmail.value}</p>
      <p class="comments__list-text">${userComment.value}</p>
    </div>
    </li>`
    document.querySelector(".comments__list").innerHTML += layoutEvnt;
    userName.value = "";
    userEmail.value = "";
    userComment.value = "";
}