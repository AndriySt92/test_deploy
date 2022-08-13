import {projects} from '../pages/Portfolio/Portfolio'

// function getRandomItem(arr, amount) {

//     // get random index value
//     const randomIndex = Math.floor(Math.random() * arr.length);

//     // get random item
//     const item = arr[randomIndex];

//     return item;
// }

// const array = [1, 'hello', 5, 8];

// const result = getRandomItem(array);
// console.log(result);

// function getRandom(arr, n) {
//     var result = new Array(n),
//         len = arr.length,
//         taken = new Array(len);
//     if (n > len)
//         throw new RangeError("getRandom: more elements taken than available");
//     while (n--) {
//         var x = Math.floor(Math.random() * len);
//         result[n] = arr[x in taken ? taken[x] : x];
//         taken[x] = --len in taken ? taken[len] : len;
//     }
//     return result;
// }

export const getRandomProjects = (n) => {
    const randomIndex = Math.floor(Math.random()*projects.length)
    return projects.slice(randomIndex,randomIndex+n)
}
