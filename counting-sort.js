function countingSort(arr) {
    // Write your code here
    const result = []
    for(let i = 0; i < 100; i++) {
        result.push(0)
    }
    
    for(let num of arr) {
        console.log(result[num])
        result[num] ++
    }

    return result    
}
