// let age: number = 10;
// console.log(age)
// type numberarr = number[]
// function getf(arr: numberarr): number /*return type of the value it returns*/ {
//     return arr[0];
// }


// let ans = getf([1, 2, 3]);
// console.log(ans)


function getFirstElement<T>(arr: T[]) {
    return arr[0];
}
console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(["first", "second", "third"]));
