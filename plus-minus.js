function plusMinus(arr) {
    // Write your code here
    
    let posCount = 0
    let negCount = 0
    let zeroCount = 0
    
    for(let num of arr) {
        if (num > 0) {
            posCount++
        }
        if (num < 0) {
            negCount++
            
        }
        if (num === 0) {
            zeroCount++
            
        }
    }
    
    const posRatio = (posCount/arr.length).toFixed(6)
    const negRatio = (negCount/arr.length).toFixed(6)
    const zeroRatio = (zeroCount/arr.length).toFixed(6)

    console.log(posRatio)
    console.log(negRatio)
    console.log(zeroRatio)
}