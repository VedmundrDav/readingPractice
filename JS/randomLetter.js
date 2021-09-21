alert("Tap the scren or press the space bar!");

function randomRgbaString (alpha) {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    let a = alpha
    return `rgba(${r},${g},${b},${a})`
  }


var letters = 'ABCDEFGHIJKLMNOPQRSTUVXXYZabcdefghijklmnopqrstuvwxyz';
document.onkeyup = function(e){
    if(e.keyCode == 32){
        document.getElementById('letter').innerHTML = letters[Math.floor(Math.random() * letters.length)];
        document.body.style.background = randomRgbaString(1);
    }
}

document.addEventListener('touchend', function(){
    document.getElementById('letter').innerHTML = letters[Math.floor(Math.random() * letters.length)];
    document.body.style.background = randomRgbaString(1);
});