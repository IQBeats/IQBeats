const n = 21;

var i = 1;

const photo = document.querySelector('.pic');

function next(x, i, n) {
    if (i == n) {
        i = 1;
    }

    else {
          i += 1;
    }

    var attr = "img/hoeish/new/" + i + ".jpg";
    x.setAttribute('src', attr);

    return i;

}

function prev(x, i, n) {
    if (i == 1) {
        i = n;
    }

    else {
          i -= 1;
        }

    var attr = "img/hoeish/new/" + i + ".jpg";
    x.setAttribute('src', attr);  

    return i;

}

const btnNext = document.querySelector('.btn2');
const btnPrev = document.querySelector('.btn1');


btnNext.addEventListener("click", function() {i = next(photo,i,n);})
btnPrev.addEventListener("click", function() {i = prev(photo,i,n);})


