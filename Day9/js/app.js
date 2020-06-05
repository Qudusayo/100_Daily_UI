let check = true;
let muted = false;

//Auto Minimal Volume
document.querySelector('audio').volume = document.querySelector('#volume').value

// Pause and Play Control
document.querySelector('#play').addEventListener('click', () => {
    if (check) {
        document.querySelector('.disc').style.animation = 'rotate 1000s infinite'
        document.querySelector('#play').className = 'fa fa-pause';
        document.querySelector('audio').play();
        check = !check;
    } else {
        document.querySelector('.disc').style.animation = ''
        document.querySelector('#play').className = 'fa fa-play';
        document.querySelector('audio').pause();
        check = !check;
    }
})

//Seting Audio Length
duration = document.querySelector('audio').duration;
setTimeout(() => {
    document.querySelector('#range').setAttribute('max', document.querySelector('#audio').duration)
}, 1000)

// Timer Control
document.querySelector('#range').addEventListener('change', () => {
    document.querySelector('audio').currentTime = document.querySelector('#range').value;
})

//Checker and Merge
setInterval(() => {
    document.querySelector('#range').value = document.querySelector('audio').currentTime
}, 1000)

// Play Timer Control
document.querySelector('#range').addEventListener('change', () => {
    document.querySelector('audio').currentTime = document.querySelector('#range').value
})

// Volume Control
document.querySelector('#volume').addEventListener('change', () => {
    if(document.querySelector('#volume').value == 0){
        document.querySelector('#muted').className = 'fa fa-volume-off';
        document.querySelector('audio').volume = document.querySelector('#volume').value
    }else if(document.querySelector('#volume').value > 0 && document.querySelector('#volume').value < .5){
        document.querySelector('#muted').className = 'fa fa-volume-down';
        document.querySelector('audio').volume = document.querySelector('#volume').value
    }else{
        document.querySelector('#muted').className = 'fa fa-volume-up';
        document.querySelector('audio').volume = document.querySelector('#volume').value
    }
})

//Mute Control
document.querySelector('#muted').addEventListener('click', () => {
    if (muted) {
        document.querySelector('#muted').className = 'fa fa-eye';
        document.querySelector('audio').muted = false;
        muted = !muted;
    } else {
        document.querySelector('#muted').className = 'fa fa-eye-slash';
        document.querySelector('audio').muted = true;
        muted = !muted;
    }
})