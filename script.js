let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let value = document.querySelector('.count');
let n1 = document.querySelector('.num-1');
let n2 = document.querySelector('.num-2');
let n3 = document.querySelector('.num-3');
let n4 = document.querySelector('.num-4');
let counter = 0;
plus.onclick = function() {
    if ( value.textContent < 15) {
    counter++;
    value.textContent = counter;
    if (counter % 2 == 0) {
        n4.textContent = '0';
    } else {
        n4.textContent = '1';

    }
    if (counter === 2 || counter === 3 || counter === 6 || counter === 7 || counter === 10 || counter === 11 || counter === 14 || counter === 15) {
        n3.textContent = '1';
    } else {
        n3.textContent = '0';

    }
    if (counter > 3 && counter < 8 || counter > 11  && counter < 16) {
        n2.textContent = '1';
    } else {
        n2.textContent = '0';

    }
    if (counter >= 8 && counter <= 15) {
        n1.textContent = '1';
    } else {
        n1.textContent = '0';

    }}
}


minus.onclick = function() {
    if (value.textContent > 0) {
    counter--;
        value.textContent = counter;
        if (counter % 2 == 0 || counter === 0) {
            n4.textContent = '0';
        } else {
            n4.textContent = '1';
    
        }
        if (counter === 2 || counter === 3 || counter === 6 || counter === 7 || counter === 10 || counter === 11 || counter === 14 || counter === 15) {
            n3.textContent = '1';
        } else {
            n3.textContent = '0';
    
        }
        if (counter > 3 && counter < 8 || counter > 11  && counter < 16) {
            n2.textContent = '1';
        } else {
            n2.textContent = '0';
    
        }
        if (counter >= 8 && counter <= 15) {
            n1.textContent = '1';
        } else {
            n1.textContent = '0';
    
        }}
    }