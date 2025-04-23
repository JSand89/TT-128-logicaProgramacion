let numero = 50; // este dato lo cambian a lo que pone el usuario

// esta logica va dentro del boton y deben ver lo de los hijos 
for(let i=1;i<=numero;i++){
    if(i%3 == 0 && i%5 == 0){
        console.log("FizzBuzz")
    }else if (i%3==0){
        console.log("Fizz")
    }else if (i%5==0){
        console.log("Buzz")
    }
    else{
        console.log(i)
    }
}
