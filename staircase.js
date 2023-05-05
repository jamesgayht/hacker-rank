function staircase(n) {
    // Write your code here
    let difference = n - 1;
    let staircase = "";
    for (let i = 0; i < n; i++) {
        // let stairs = "";
        for (let j = 0; j < n; j++) {
            if(j < difference) staircase += " ";
            else staircase += "#"; 
        }
        staircase += "\n";
        difference --; 
    }
    
    console.info(staircase);
}