function findLargestNestedArray(arr){
    let largest = 0;

    function findLargest(arr){
        for (let i = 0;i< arr.length; i++){
            if(Array.isArray(arr[i])){
                findLargest(arr[i]);
            }else {
                if (arr[i] > largest){
                    largest = arr[i];
                }
            }
        }
    }
    findLargest(arr);
    return largest;
}

const nestedArray = [8, [2, 3] [5, 7], [6, 9],[34, 67], 10, 20]
console.log(findLargestNestedArray(nestedArray));
