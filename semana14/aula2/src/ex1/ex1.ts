const numberArray: number[] = [1,2,3,4,5]

type arrayData ={
    arrayLentgh: number,
    arrayImpar: number,
    totalSumArray: number,
}

function sweepArrayInformation(arrayData: number[]): arrayData  {
    
    let oddNumberCounter: number = 0
    let somaArray: number = 0
    for(let i: number = 0; i<arrayData.length; i++){
        if(arrayData[i] % 2 !== 0){
            oddNumberCounter++
        }
        somaArray+=arrayData[i]
    }
    

    const response : arrayData = {
        arrayLentgh: arrayData.length,
        arrayImpar: oddNumberCounter,
        totalSumArray: somaArray,
    }

    return response
}

const result: arrayData = sweepArrayInformation(numberArray)
console.log(result)
