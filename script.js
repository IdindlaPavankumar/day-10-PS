// // The sum two element in an array should be equal to 10,and must be return in array pair
let arr = [1, 2, 1, 3, 5, 6, 4, 7];
let res = [];
let usedIndices = new Set();

for (let i = 0; i < arr.length; i++) {
    if (usedIndices.has(i)) continue; // Skip already used indices

    for (let j = i + 1; j < arr.length; j++) {
        if (!usedIndices.has(j) && arr[i] + arr[j] === 10) {
            res.push([arr[i], arr[j]]);
            usedIndices.add(i); // Mark this index as used
            usedIndices.add(j); // Mark the second index as used
            break; // Exit the inner loop after finding a pair
        }
    }
}

console.log(res);
// Reverse an array element without using reverse() method
let arr1=[1,2,3,4,5,6,7,8,9]
let rev=[]
for(i=arr1.length-1;i>=0;i--){
  rev.push(arr1[i])
}
console.log(rev);