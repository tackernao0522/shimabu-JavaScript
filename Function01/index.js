// function cut(food) {
//     const cutFood = food.slice();
//     return cutFood;
// }

// function throwAway(food) {
//     delete food;
// }

// const cutCarrot = cut('carrot');
// const cutPotato = cut('potato');

// console.log(cutCarrot);
// console.log(cutPotato);

function isTweetable(text) {
    return text.length <= 140;
}

function alertTweetable(text) {
    if (isTweetable(text)) {
        alert("you can tweet");
    }
}

console.log(isTweetable('foo'));
alertTweetable('foo');
