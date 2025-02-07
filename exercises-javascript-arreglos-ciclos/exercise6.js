let array = [2,4,2,4,1,43,1,3,9];

let bubbleSort = (array) => {
    let aux = 0;
    for(let i = 0; i < array.length; i++){
        for(let j = 1; j < array.length; j++){
            if(array[j-1] > array[j]){
                aux = array[j-1];
                array[j-1] = array[j];
                array[j] = aux;
            }    
        }
    }
    return array;
};

console.log(bubbleSort(array));
