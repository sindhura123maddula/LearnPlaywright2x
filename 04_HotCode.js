function add(a, b)
{
    return a + b;
}

let result;
for(let a = 0; a < 1000 ; a++)
{
    result = add(a, a + 1);
}
console.log("After 1000 calls:", result);