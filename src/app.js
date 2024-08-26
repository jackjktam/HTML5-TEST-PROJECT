document.addEventListener('DOMContentLoaded', function () {
    let content = document.querySelector('.content');
    let msg = document.createElement('h2');
    msg.innerText = '(batteris included)';
    console.log(msg);
    content.appendChild(msg);
});