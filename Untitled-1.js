// // Use Promise.all to wait for all promises to resolve.

// function squarenumberasync(numbers){
//     return numbers.map(number=>
//         new Promise(resolve=>
//             setTimeout(() => 
//                 resolve(number**2), 5000)
//         )
//             );
// }

// const originalnumber=[1,2,3,4,5]

// Promise.all(squarenumberasync(originalnumber))

// .then(squareresult=> console.log("square numbers:",squareresult))
// .catch(error=> console.error("enter squaring numbers:",error));


function squaredvalues(){
    console.log(a**2)
}
const a = [1,4,5];
squaredvalues()