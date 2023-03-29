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