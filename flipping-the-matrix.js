function flippingMatrix(matrix) {
    // Write your code here
    const n = matrix.length / 2
    let max = 0
    let totalSum = 0
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            max = Number.MIN_VALUE
            max = Math.max(matrix[i][j], max)
            max = Math.max(matrix[i][2*n-1-j], max)
            max = Math.max(matrix[2*n-1-i][j], max)
            max = Math.max(matrix[2*n-1-i][2*n-1-j], max)
            
            totalSum += max
    
        }
    }
    return totalSum
}