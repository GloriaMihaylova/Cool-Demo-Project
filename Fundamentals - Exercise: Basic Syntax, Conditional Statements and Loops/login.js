function login(input){
    const userName = input[0];
    let index = 1;
    let password = input[index];
    var splitString = userName.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    isThePasswordCorrect = false;


    while (!isThePasswordCorrect) {
        if(password == joinArray){
            isThePasswordCorrect = true;
            console.log(`User ${userName} logged in.`);
            break;
        }
        if (index >= 4){
            console.log(`User ${userName} blocked!`);
            isThePasswordCorrect = true;
            break;

        }
        index++;
        password = input[index];
        console.log(`Incorrect password. Try again.`);
    }
    
}
login(['Acer','login','go','let me in','recA']);
