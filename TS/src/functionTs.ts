//Functions in Typescript

function calculateSquare(num: number /*These are the specific type of argument that function accpets  */)
    : number /*->This line specifies the return type of the variable it is going to return*/ {
    return num * num
}
console.log(calculateSquare(5))