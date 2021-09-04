let numero;
let x = 0;
let contador = 0;
alert("ingresa numeros al azar y te dire cuandos ingresaste y su suma");
alert("Finaliza cuando agregues un 0");
while (numero != 0) {
    numero = prompt("Ingresar Un Número");
    if (0 != numero) {
        contador = suma(contador,numero) ; 
        x++;
    }
    else {
        break;
    }
}
alert("Ingresaste " + x + " numeros y la suma de valores ingresados es " + contador);

function suma(a,b) {    
    return(parseFloat (a) + parseFloat(b));
}