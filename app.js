let count = 0;
let counter = document.getElementById('counter');
counter.style.fontSize = "2.8rem";
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let reset = document.getElementById('reset');
let themeToggle = document.getElementById('theme-toggle'); 
let mainDiv = document.getElementById('main');

plus.addEventListener('click', ()=>{
    count++;
    counter.innerHTML = count;
})

minus.addEventListener('click' ,()=>{
    if (count > 0) {
    count--;
    counter.innerHTML = count;
    }
})

reset.addEventListener('click', ()=>{
    count = 0;
    counter.innerHTML = count;
})


themeToggle.addEventListener('click', () => {
    // 1. Toggle the dark mode on the main div
    mainDiv.classList.toggle('dark-mode');

    // 2. Change button background and icon based on current state
    if (mainDiv.classList.contains('dark-mode')) {
        themeToggle.style.backgroundColor = "yellow";
        themeToggle.style.color = "black"; // Ensure the sun icon is visible
        themeToggle.innerText = '☀️';
    } else {
        themeToggle.style.backgroundColor = "black";
        themeToggle.style.color = "white";
        themeToggle.innerText = '🌙';
    }
});