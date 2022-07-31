
// You should implement your task here.

module.exports = function towelSort (matrix) {
    function towelSort(arr){
        let result=[]; 
        let k=0; 
        for( let i=0;i<arr.length;i++){
            for(let j=0;j<arr[i].length;j++){
                result[k]=arr[i][j]; k++ }} 
        return result}
}
