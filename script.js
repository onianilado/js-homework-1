let arr = ['javascript', 'php', 'c#', 'python', 'c++', 'kotlin', 'c', 'swift'];
for (let i = 0; i < arr.length; i++){
    if(arr[i].length >= 5){
        console.log(arr[i])
    }
    else{ 
        continue
    }
}