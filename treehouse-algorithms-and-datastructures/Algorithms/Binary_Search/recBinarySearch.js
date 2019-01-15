const recursiveBinarySearch = (list, target) => {
    if(list.length === 0){
        return false
    } else {
        let midpoint = Math.floor(list.length / 2)
        if(list[midpoint] === target){
            return true
        } else {
            if(list[midpoint] < target){
                return recursiveBinarySearch(list.slice(midpoint + 1), target)
            } else {
                return recursiveBinarySearch(list.slice(0, midpoint), target)
            }
        }
    }
}

console.log(recursiveBinarySearch([1,2,3,4,5,6,7,8,9,10], 3))

const iterativeBinarySearch = (list, target) => {
    let first = 0
    let last = list.length - 1
    while(first <= last){
        midpoint = Math.floor((first + last) / 2)
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

