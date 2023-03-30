function lonelyinteger(a) {
    // Write your code here
    
    const map = {}
    
    a.map((a) => {
        if(map[a]) {
            map[a] ++ 
        }
        else {
            map[a] = 1
        }
    })
    
    console.info(map)
    
    let num = 0
    for(let key in map) {
        if(map[key] === 1) {
            num += parseInt(key)
        }
    }
    
    return num
}