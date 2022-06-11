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
        finalNum /= 2;
    }
    return parseInt(finalNum);
}