localStorage.setItem('bienvenida', 'Hola Code!');
localStorage.setItem('esValido', true);
localStorage.setItem('unNumero', 20);


//LOCALSTORAGE: GETITEM

let mensaje = localStorage.getItem('bienvenido');
let bandera = localStorage.getItem('esValido');
let numero = localStorage.getItem('unNumero');

console.log(typeof mensaje); //string;
console.log(typeof bandera); //string;
console.log(typeof numero); //string;
console.log(mensaje);

//SESIONSTORAGE: SETITEM

sessionStorage.setItem('seleccionados', [1,2,3]);
sessionStorage.setItem('esValido', false);
sessionStorage.setItem('email', 'info@email.com');

//SESSIONSTORAGE: GETITEM

let lista = sessionStorage.getItem('seleccionados').split(","); //array separado por comas
let bandera = ( sessionStorage.getItem('seleccionados') == 'true');

console.log(typeof lista); //object [ "1", "2", "3"];
console.log(lista);

console.log(typeof bandera);
console.log(bandera);

