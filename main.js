// // Task1

// let arr1=[1,3,5]
// let arr2=[2,8,6]

// console.log(arr1.concat(arr2))

// // ----------------

// // Task2

// let arr=[1,2,4,5,7,10]
// let n=3
// let count=0

// arr.forEach(item => {
//     if(item==3){
//         count++
//     }
// });

// if(count>0){
//     console.log("true")
// }else{
//     console.log("false")
// }

// // --------------------


// // Task3

// function getSequence(a,b){
//     let arr=new Array()
//     for(let i=a;i<=b;i++){
//         a++;
//         arr.push(i)
//     }
//     console.log(arr)
// };

// getSequence(98,100)

// // --------


// // Task4

// let monthName=[
//     'January', 
//     'February', 
//     'March', 
//     'April', 
//     'May', 
//     'June', 
//     'July', 
//     'August', 
//     'September', 
//     'October', 
//     'November', 
//     'December']

// let month=9;

// console.log(monthName[month-1])

// // -------


// // Task5

// let arr=[1,2,50]
// let factor=100
// let count=0;

// arr.forEach(item => {
//     if(factor%item!=0){
//         count++;
//     }
// });

// if(count>0){
//     console.log(false)
// }
// else{
//     console.log(true)
// }
// // ------------------




// Task6

// let array=[32,25,85,89,45,76,7,41,2,12]

// 1
// array.forEach(element => {
//     console.log(element)
// });

// 2
// let max=[0]

// for (let i = 0; i < array.length; i++) {
//     if(array[i]>max){
//         max=array[i]
//     }
// }
// console.log(max)

// 3
// array.push(15)
// console.log(array)

// 4
// array.shift()
// console.log(array)

// 5

// array.splice(3,0,43)
// console.log(array)

// 6
// let n=3
// for (let i = n; i < array.length; i++) {
//     console.log(array[i])
// }

// 7
// array.forEach(element => {
//     console.log(element)
// });


// 8
// console.log(array.filter(e=>e>40))

// ---------