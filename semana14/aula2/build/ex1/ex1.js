const numberArray = [1, 2, 3, 4, 5];
function sweepArrayInformation(arrayData) {
    let oddNumberCounter = 0;
    let somaArray = 0;
    for (let i = 0; i < arrayData.length; i++) {
        if (arrayData[i] % 2 !== 0) {
            oddNumberCounter++;
        }
        somaArray += arrayData[i];
    }
    const response = {
        arrayLentgh: arrayData.length,
        arrayImpar: oddNumberCounter,
        totalSumArray: somaArray,
    };
    return response;
}
const result = sweepArrayInformation(numberArray);
console.log(result);
//# sourceMappingURL=ex1.js.map