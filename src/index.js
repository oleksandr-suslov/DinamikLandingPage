import './sass/main.scss';
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

    // Show Time
    function showTime() {
        let today = new Date(),
            hour = today.getHours(),
            min = today.getMinutes(),
            sec = today.getSeconds();
        
        // Set AM or PM
        const amPm = hour >= 12 ? 'PM' : 'AM'
        
        // 12hr format
        hour = hour % 12 || 12;
        
        //Output Time
        time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

        setTimeout(showTime, 1000);
    }

//Run
showTime()

// Add Zeros 
function addZero (t){
    return (parseInt(t, 10) < 10 ? '0' : "") + t;
};

// Set Background and Greeting
function setBgGreet (){
    let today = new Date(),
        hour = today.getHours();

    if(hour < 12){
        // It's morning
        document.body.style.backgroundImage = "url('../images/morning.jpg')";
        greeting.textContent ='Good morning';
       
    } else if(hour < 18){
        // It's afternoon
        
        document.body.style.backgroundImage = "url('../images/afternoon.jpg')";
        document.body.style.color = 'yellow';
          greeting.textContent ='good afternoon';
    } else {
        // It's evening
        document.body.style.backgroundImage = "url('../images/night.jpg')";
        greeting.textContent ='good evening!';
        // document.body.style.color = 'white';
    }
};

//Run

showTime();
setBgGreet();