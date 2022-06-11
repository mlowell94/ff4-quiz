const btn = document.querySelector('button');

const select = document.querySelector('select');

select.addEventListener('click', function(e) {
    switch(e.target.value) {
        case "blue":
            select.style.backgroundColor = "#18398c";
            break;
        case "green":
            select.style.backgroundColor = "#188c48";
            break;
        case "yellow":
            select.style.backgroundColor = "#8c8418";
            break;
        case "red":
            select.style.backgroundColor = "#8c1818";
            break;
        case "purple":
            select.style.backgroundColor = "#73188c";
            break;
        default:
            select.style.backgroundColor = "#18398c";
    }
})

function toArray(string) {
    let newArray = string.split('');
    return newArray;
}

function toNumber(array) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] != ' ') {
            newArray.push(array[i].charCodeAt(0))
        }
    }
    let finalVal = newArray.reduce(getSum, 0)
    return finalVal;
}

function getSum(total, num) {
    return total + num
}

function finalNum(number) {
    let newString = number.toString();
    let newArray = newString.split('');
    let finalNum = 0;
    newArray.forEach(element => {
        let temp = parseInt(element);
        finalNum += temp;
    });
    while(finalNum >= 10) {
        finalNum %= 9;
    }
    return parseInt(finalNum);
}

const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    let images = [];
    let number = finalNum(toNumber(toArray(form['name'].value + form['secret'].value)));
    let color = form['fav-color'].value;
    let rad = getSize(document.querySelector('input[name="size"]:checked').value);

    for(i = 1; i < 10; i++) {
        images.push(`${rad}/${color}/${i}.webp`)
    }
    let result = document.querySelector('.img-result');
    if(images[number] == undefined) {
        console.log(number)
        number -= 1;
    }
    if(form['chance'].checked) {
        let temp = Math.floor(Math.random() * 1000);
        console.log(temp)
        if(temp  > 950) {
            result.src = `special/${color}.webp`;
            return;
        }
    }
    result.src = `${images[number]}`;
})

function getSize(size) {
    if(size == 's') {
        return 'little-guys';
    }
    if(size == 'm') {
        return 'medium-guys';
    }
    if(size == 'l') {
        return 'big-guys'
    }
}