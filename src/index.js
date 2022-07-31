
// You should implement your task here.

module.exports =     function towelSort(arr){
        let result=[]; 
        let k=0; 
        for( let i=0;i<arr.length;i++){
            if(i%2!==0){
                arr[i]=arr[i].sort(function(a,b){return a-b}).reverse()
                for(let j=0;j<arr[i].length;j++){
                result[k]=arr[i][j]; k++ } 
            }
            else{
            arr[i]=arr[i].sort(function(a,b){return a-b})
            for(let j=0;j<arr[i].length;j++){
                result[k]=arr[i][j]; k++ }}}
        return result}
