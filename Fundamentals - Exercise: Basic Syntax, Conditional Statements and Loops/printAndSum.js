function printAndSum(startNum,endNum){
    let sum = 0;
    let displayNumbers = '';

    for (let i = startNum; i <= endNum; i++) {
        sum += i;
        displayNumbers += (`${i} `) ; 
        
        
    }
    console.log(`${displayNumbers}`)
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);