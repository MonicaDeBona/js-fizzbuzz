
for (let i = 1; i < 101; i++) { //chiedo al programma di mostrare in console i numeri da uno a 100
    
    let container = document.querySelector('.container')
    let div = document.createElement("div")
    

    if (i%3 === 0 && i%5 === 0) {
        console.log("FizzBuzz");
        div.append('FizzBuzz')
    } else if (i%3 === 0) {
        console.log("Fizz");
        div.append('Fizz')
    } else if (i%5 === 0 ) {                      
        console.log("Buzz");
        div.append('Buzz')
    } else {
        console.log(i);
    }

    container.append(div)

    
}


