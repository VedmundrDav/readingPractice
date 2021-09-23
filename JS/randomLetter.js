//JAVA START
var words = ["Am", "The", "White", "Blue", "Black", "Pink", "Purple", "Green", "Gray", "Three", "Five", "Three", "Four", "Five", "a", "To", "Brown", "Orange", "Little", "One", "Zero", "Two", "Red", "I", "Yellow"];
//JAVA END
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

function randomRgbaString (alpha) {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    let a = alpha
    return `rgba(${r},${g},${b},${a})`
  }

function toggleAlphabet(){
    var btn = document.getElementById('toggle-alpha-btn');
    btn.blur();
    if(btn.innerHTML === 'Alphabet'){
    document.getElementById('toggle-dec-btn').hidden = true;
       btn.innerHTML = "Words";

    }else if(btn.innerHTML === "Words"){
        document.getElementById('toggle-dec-btn').hidden = false;
        btn.innerHTML = "Numbers";
    }else if(btn.innerHTML === "Numbers"){
        document.getElementById('toggle-dec-btn').hidden = true;
        btn.innerHTML = 'Alphabet';
    }

}
function toggleDecPlace(){
    var btn = document.getElementById('toggle-dec-btn');
    btn.blur();
    if(btn.innerHTML === '1s'){
       btn.innerHTML = '10s';

    }else if(btn.innerHTML === '10s'){
        btn.innerHTML = '1s';
    }
}

var count = 0;
var number_1s = 0;
var number_10s = 10;
document.addEventListener('keyup', function(e){
    var btn = document.getElementById('toggle-alpha-btn');

    if(e.key === ' '){
        if(btn.innerHTML === 'Alphabet'){
            document.getElementById('toggle-dec-btn').opacity = 0;
            document.getElementById('header').style.opacity= 0;
            document.getElementById('letter').innerHTML = letters[Math.floor(Math.random() * letters.length)];
            document.body.style.background = randomRgbaString(1);
        }else if(btn.innerHTML === 'Words'){
            document.getElementById('toggle-dec-btn').opacity = 0;
            document.getElementById('header').style.opacity= 0;
            document.getElementById('letter').innerHTML = words[count];
            document.body.style.background = randomRgbaString(1);
            count++;
            if(count === words.length){
                count=0;
            }            
        }else if(btn.innerHTML === 'Numbers'){
            //make 1s or 10s toggle btn show
            if(document.getElementById('toggle-dec-btn').innerHTML === "1s"){
                document.getElementById('letter').innerHTML = number_1s;
                number_1s++;
                if(number_1s === 100){
                    number_1s = 0;
                }
            }else if(document.getElementById('toggle-dec-btn').innerHTML === "10s"){
                document.getElementById('letter').innerHTML = number_10s;
                number_10s += 10;
                if(number_10s === 110){
                    number_10s = 0;
                }
            }
            document.getElementById('header').style.opacity= 0;
            document.body.style.background = randomRgbaString(1);
        }
    }
});

document.getElementById('main-content').addEventListener('touchend', function(){
    var btn = document.getElementById('toggle-alpha-btn');
    if(btn.innerHTML === 'Alphabet'){
        document.getElementById('header').style.opacity= 0;
        document.getElementById('letter').innerHTML = letters[Math.floor(Math.random() * letters.length)];
        document.body.style.background = randomRgbaString(1);
    }else if (btn.innerHTML === "Words"){
        document.getElementById('header').style.opacity= 0;
        document.getElementById('letter').innerHTML = words[count];
        document.body.style.background = randomRgbaString(1);
        count++;
        if(count === words.length){
            count=0;
        }
    }else if(btn.innerHTML === "Numbers"){
        //make 1s or 10s toggle btn show
        if(document.getElementById('toggle-dec-btn').innerHTML === "1s"){
            document.getElementById('letter').innerHTML = number_1s;
            number_1s++;
            if(number_1s === 100){
                number_1s = 0;
            }
        }else if(document.getElementById('toggle-dec-btn').innerHTML === "10s"){
            document.getElementById('letter').innerHTML = number_10s;
            number_10s += 10;
            if(number_10s === 110){
                number_10s = 0;
            }
        }
        document.getElementById('header').style.opacity= 0;
        document.body.style.background = randomRgbaString(1);
    }
});
