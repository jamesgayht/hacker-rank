function miniMaxSum(arr) {
    // Write your code here
    
    arr.sort((a,b) => {
        return a - b
    })
    
    const sum = arr.reduce((a, b) => a + b)
    
    const max = sum - arr[0]
    const min = sum - arr[arr.length - 1]
    
    console.log(min + " " + max)
}