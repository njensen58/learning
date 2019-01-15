// Dataset must be sorted for this to work
const binarySearch = (list, target) => {
    let first = 0
    let last = list.length - 1
    while(first <= last){
        let midpoint = Math.floor((first + last) / 2)
        if(list[midpoint] == target){
            return midpoint
        } else if(list[midpoint] < target){
            first = midpoint + 1
        } else {
            last = midpoint - 1
        }
    }
    return -1
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8))