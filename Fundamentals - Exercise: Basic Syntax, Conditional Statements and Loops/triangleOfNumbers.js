function triangleOfNumbers(number){
    
    for(row=1; row<=number;row++){

        let displayNumbers = '';

        for(col=1;col <= row; col++){

            displayNumbers += (`${row} `);
        }
        console.log(`${displayNumbers}`);
    }
    

}
triangleOfNumbers(3);
