function timeConversion(s) {
    // Write your code here
    const sArr = s.split(":")

    let timeOfDay = sArr[2][2] + sArr[2][3]

    if (timeOfDay == "AM") {
        if (parseInt(sArr[0]) === 12) {
            sArr[0] = "00"
        }
    }

    else {
        if (parseInt(sArr[0]) !== 12) {
            sArr[0] = parseInt(sArr[0]) + 12
        }
    }
    
    sArr[2] = sArr[2][0] + sArr[2][1]
    sArr.splice(1, 0, ":")
    sArr.splice(3, 0, ":")
    
    return sArr.join("")

}

function timeConversion(s) {
    // Write your code here
    const sArr = s.split("");
    // console.info(sArr[sArr.length-2]); 
    if(sArr[sArr.length-2] === "A") {
        if(sArr[0] == 1 && sArr[1] == 2) {
            sArr[0] = 0;
            sArr[1] = 0;
            sArr.splice((sArr.length-2), 2); 
            return sArr.join("");            
        }
        else {
            sArr.splice((sArr.length-2), 2); 
            return sArr.join("");            
        }
    }
    if(sArr[sArr.length-2] === "P") {
        if(sArr[0] == 1 && sArr[1] == 2) {
            sArr.splice((sArr.length-2), 2); 
            return sArr.join("");            
        }
        else {
            sArr[0] = Number(sArr[0]) + 1;
            sArr[1] = Number(sArr[1]) + 2;
            sArr.splice((sArr.length-2), 2); 
            return sArr.join("");            
        }
    }
}