let factorial = 10;
let resultado = factorial;
let contador = factorial - 1;

while(true){
    if(contador === 1){
        break
    }

    else if(contador != 1){
        resultado = resultado * contador;
        contador--
    }
}
console.log(resultado)
