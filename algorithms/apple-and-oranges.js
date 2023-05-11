function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let appleCount = 0;
    let orangeCount = 0;
        
    apples.map((apple) => {
        apple += a; 
        if(apple >= s && apple <= t) appleCount++;
    })

    oranges.map((orange) => {
        orange += b; 
        if(orange >= s && orange <= t) orangeCount++;
    })
    
    console.info(appleCount);
    console.info(orangeCount);

}