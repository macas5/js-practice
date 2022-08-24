const lastElements = (array, number) => {
    const newArray = [];
    for (let i = (array.length - number); i < array.length; i++) {
        newArray.push(array[i])
    }
    return newArray;
}
