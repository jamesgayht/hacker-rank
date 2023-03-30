function diagonalDifference(arr) {
    // Write your code here
    
    let sumA = 0
    let sumB = 0
    
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(i === j) {
                sumA += arr[i][j]
            }
            if((i+j) === arr.length - 1) {
                sumB += arr[i][j]             
            }
        }
    }
    
    return Math.abs(sumA - sumB)
    
}