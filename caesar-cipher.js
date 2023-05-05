function caesarCipher(s, k) {
    // Write your code here

    // create an array of all the alphabets 
    let alphabets = "abcdefghijklmnopqrstuvwxyz"
    const alphabetsArr = alphabets.split("")

    // check the index of the alphabets in string s 
    const inputArr = s.split("")

    for (let i = 0; i < inputArr.length; i++) {
        console.info(i)
        if (alphabetsArr.includes(inputArr[i].toLowerCase())) {
            let index = parseInt(alphabetsArr.indexOf(inputArr[i].toLowerCase())) + k
            
            // check if index exceeds alphabets, if so then rotate back to start
            if (index > alphabetsArr.length - 1) {
                index %= alphabetsArr.length
                console.info("index after subtract >>> ", index)

                if (inputArr[i] === inputArr[i].toUpperCase()) {
                    inputArr[i] = alphabetsArr[index].toUpperCase()
                    console.log("inputArr[i] >>> ", inputArr[i])
                }
                else {
                 inputArr[i] = alphabetsArr[index]                    
                }
            } 
            else {
                if (inputArr[i] === inputArr[i].toUpperCase()) {
                    inputArr[i] = alphabetsArr[index].toUpperCase()
                    console.log("inputArr[i] >>> ", inputArr[i])
                }
                else {
                 inputArr[i] = alphabetsArr[index]   
                }
            }
        }
    }
    console.log("inputArr after forloop >>> ", inputArr)
    return inputArr.join("")


}