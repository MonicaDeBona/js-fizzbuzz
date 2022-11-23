
for (let i = 1; i < 101; i++) { //chiedo al programma di mostrare in console i numeri da uno a 100
    

    let div = document.createElement("div")
    

    if (i%3 === 0 && i%5 === 0) {
        console.log("FizzBuzz");
        div.append(i)
    } else if (i%3 === 0) {
        console.log("Fizz");

    } else if (i%5 === 0 ) {                      
        console.log("Buzz");

    } else {
        console.log(i);
    }



    
    console.log(div.textContent) 
    
}


