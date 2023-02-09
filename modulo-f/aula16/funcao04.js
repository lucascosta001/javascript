function fatorial(n){
    let fat = 1 
    for(let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(8))
/*
    3! = 3x2x1 = 6
    4! = 4x3x2x1 = 24
    5! = 5x4x3x2x1 = 120
    6! = 6x5x4x3x2x1 = 720
    7! = 7x6x5x4x3x2x1 = 5040
    8! = 8x7x6x5x4x3x2x1 = 40320
*/