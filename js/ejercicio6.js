let numero1 = parseInt(prompt('Ingrese un numero'))
let numero2 = parseInt(prompt('Ingrese un segundo numero'))

console.log(numero1);
console.log(numero2);

if(numero1 > numero2){
    //numero1 es mayor
    document.write('El numero 1 es mayor que numero 2= '+ numero1);
}else if(numero1 == numero2){
        document.write('Ambos numeros son iguales =' +numero1)
    }else{
         //numero2 es mayor que el numero1
    document.write('El numero 2 es mas grande que el numero 1 =' + numero2);
    }