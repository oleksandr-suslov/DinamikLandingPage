import './sass/main.scss';
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');
// Options
const showAmPm = true;
    // Show Time
function showTime() {
        // let today = new Date(2019, 06, 10, 20, 33, 30, 10),
        let today = new Date(),
            hour = today.getHours(),
            min = today.getMinutes(),
            sec = today.getSeconds();
        
        // Set AM or PM
        const amPm = hour >= 12 ? 'PM' : 'AM'
        
        // 12hr format
        hour = hour % 12 || 12;
        
        //Output Time
        time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

        setTimeout(showTime, 1000);
    }

// Add Zeros 
function addZero (n){
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
};

// Set Background and Greeting
function setBgGreet() {
    // let today = new Date(2019, 06, 10, 20, 33, 30, 10),
    let today = new Date(),
        hour = today.getHours();
        document.body.classList.add('morning', 'afternoon', 'night');

    if (hour < 12) {
        // It's morning
        // document.body.style.backgroundImage = "url('../src/images/morning.jpg')";
        greeting.textContent = 'Good morning';
        document.body.style.color = 'blue';
            document.body.classList.remove('afternoon', 'night');
    }
    else if (hour < 18) {
        // It's afternoon
        // document.body.style.backgroundImage = "url('../src/images/afternoon.jpg')";
        greeting.textContent = 'Good afternoon';
        document.body.classList.remove('morning', 'night');
    } else {
        // It's evening
        // document.body.style.backgroundImage = "url('../src/images/night.jpg')";
 document.body.classList.remove('morning', 'afternoon');
        greeting.textContent ='Good evening!';
        document.body.style.color = 'white';
    }
};

// Get Name
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// Set Name
function setName(e) {
    if (e.type === 'keypress') {
// Make sure enter is pressed
        if (e.wich == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
            localStorage.setItem('name', e.target.innerText);
        }
}

// Get Focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Set Focus
function setFocus(e) {
    if (e.type === 'keypress') {
// Make sure enter is pressed
        if (e.wich == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
            localStorage.setItem('focus', e.target.innerText);
        }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
//Run
showTime();
setBgGreet();
getName();
getFocus();