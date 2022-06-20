function multiplicationTable(number){
    let result = 0;
    let times = 0;
    for(i=1;i<=10;i++){
        times++;
        result = number * times;
        console.log(`${number} X ${times} = ${result}`);
    }
}
multiplicationTable(2);