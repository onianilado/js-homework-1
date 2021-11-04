let arr = ['javascript', 'php', 'c#', 'python', 'c++', 'kotlin', 'c', 'swift'];
for (let i = 0; i < arr.length; i++){
    if(arr[i].length < 5){
        continue
    }
    else{ 
        console.log(arr[i])
    }
}
// let arr1 = [2, -3, 5, 11, 1, -30, -11, 100, -1, -3, -4];
// for (let i = 0; i< arr1.length; i++){
//     if(arr1[i] > 0){
//         console.log(arr1[i])
//     }
// }
// let arr2 = [[2, -3, 5, 11], [1, -30, -11, 100], [-1, -3, -4]];
// for (let i = 0; i < arr2.length; i++){
//     for (let j = 0; j < arr2[i].length; j++){
//         if(arr2[i][j] > 0){
//             console.log(arr2[i][j])
//         }
//     }
// }
