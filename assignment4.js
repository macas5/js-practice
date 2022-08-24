// 4. Write a function that takes an array (a) and a number (n) as arguments 
// /It should return the last n elements of a

const lastElements = (array, number) => {
    const newArray = [];
    for (let i = (array.length - number); i < array.length; i++) {
        newArray.push(array[i])
    }
    return newArray;
}