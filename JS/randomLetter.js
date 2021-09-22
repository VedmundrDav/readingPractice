function randomRgbaString (alpha) {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    let a = alpha
    return `rgba(${r},${g},${b},${a})`
  }

var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var words = ["Am", "The", "White", "Blue", "Black", "Pink", "Purple","Green", "Gray", "Three", "Five"]; 


function toggleAlphabet(){
    var btn = document.getElementById('toggle-btn');
    btn.blur();
    if(btn.innerHTML === 'Alphabet'){
       btn.innerHTML = "Words";
        // document.addEventListener('touchend', function(){
        //     document.getElementById('header').style.opacity= 0;
        //     document.getElementById('letter').innerHTML = words[Math.floor(Math.random() * words.length)];
        //     document.body.style.background = randomRgbaString(1);
        // }); 
    }else if(btn.innerHTML === "Words"){
        btn.innerHTML = "Alphabet";
        // document.addEventListener('touchend', function(){
        //     document.getElementById('header').style.opacity= 0;
        //     document.getElementById('letter').innerHTML = letters[Math.floor(Math.random() * letters.length)];
        //     document.body.style.background = randomRgbaString(1);
        // }); 
    }

}
document.addEventListener('keyup', function(e){
    var btn = document.getElementById('toggle-btn');
    if(e.key === ' '){
        if(btn.innerHTML === 'Alphabet'){
            document.getElementById('header').style.opacity= 0;
            document.getElementById('letter').innerHTML = letters[Math.floor(Math.random() * letters.length)];
            document.body.style.background = randomRgbaString(1);
        }else{
            document.getElementById('header').style.opacity= 0;
            document.getElementById('letter').innerHTML = words[Math.floor(Math.random() * words.length)];
            document.body.style.background = randomRgbaString(1);            
        }
    }
});

document.getElementById('main-content').addEventListener('touchend', function(){
    console.log("div touched");
    var btn = document.getElementById('toggle-btn');
    if(btn.innerHTML === 'Alphabet'){
        document.getElementById('header').style.opacity= 0;
        document.getElementById('letter').innerHTML = letters[Math.floor(Math.random() * letters.length)];
        document.body.style.background = randomRgbaString(1);
    }else{
    document.getElementById('header').style.opacity= 0;
     document.getElementById('letter').innerHTML = words[Math.floor(Math.random() * words.length)];
     document.body.style.background = randomRgbaString(1);
    }
});



