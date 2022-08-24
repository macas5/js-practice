// 6. Write a function that takes an object (a) and a string (b) as argument  
// Return true if the object has a property with key 'b' Return false otherwise

const keyCheck = (obj, str) => {
    const keyVal = Object.keys(obj);
    let match = false;

    keyVal.forEach(value => {
        if (value == str) match = true;
    });

    return match;
}