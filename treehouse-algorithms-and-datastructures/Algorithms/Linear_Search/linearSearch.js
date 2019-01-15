const linearSearch = (list, target) => {
    for(let i = 0; i < list.length; i++){
        if (list[i] == target){
            return i
        }
    }
    return -1
}

console.log(linearSearch([2, 4, 1, 4, 6,4, 2, 43,55, 3], 43))