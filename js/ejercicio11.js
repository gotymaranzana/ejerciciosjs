let numero = parseInt(prompt('Ingrese un numero'))

if(numero%2 == 0){
    document.write('El numero es divisible en 2')
}else if(numero%3 == 0){
    document.write('El numero es divisible en 3')
}else if(numero%5 == 0){
    document.write('El numero es divisible en 5')
}else if(numero%7 == 0){
    document.write('El numero es divisible en 7')
}else{
    document.write('El numero NO es divisible en 2, 3, 5 o 7')
}