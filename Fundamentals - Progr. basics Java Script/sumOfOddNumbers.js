function sumOfOddNumbers(n){
let totalsum = 0;
let num=1;
    
 for(i=1; i<=n; i++){
            
            totalsum += num;
            console.log(num);
            num+=2;
        }
        console.log(`Sum: ${totalsum}`)
    
    
}

sumOfOddNumbers(5);
