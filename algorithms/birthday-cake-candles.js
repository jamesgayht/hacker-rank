function birthdayCakeCandles(candles) {
    // Write your code here
    candles.sort(function(a, b){return a-b})
    const tallestHeight = (candles[(candles.length-1)]);
    let count = 1;
    for(let i = candles.length - 2; i >= 0; i --) {
        if(candles[i] === tallestHeight) count++; 
    }
    return count; 
}