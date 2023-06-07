


let arr = process.argv.slice(2)

let add = arr.reduce((a,b) => {
    return Number(a) + Number(b)
});
console.log(add)