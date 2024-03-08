const arr = [5, 11, 9, 23, 13, 5, 55].sort()
console.log("Primeira lista: " + arr)

// Lista ordenada da maneira correta
const arr2 = [5, 11, 9, 23, 13, 1, 55].sort((a,b) => {return a - b} )
console.log("Segunda Lista: " + arr2)