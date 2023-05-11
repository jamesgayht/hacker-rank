function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    if(v2 > v1) return "NO";
    else {
        const jumpRemainder = (v1 - v2);
        const startDifference = Math.abs(x1 - x2);
        console.info("jumpRemainder >>> ", jumpRemainder); 
        console.info("startDifference >>> ", startDifference); 
        
        if(startDifference % jumpRemainder === 0) return "YES";
        return "NO";

    }
}