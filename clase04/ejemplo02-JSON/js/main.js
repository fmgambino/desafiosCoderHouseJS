//ALMACENAR OBJETOS EN EL STORAGE

const producto1 = '{"id":2, producto: "Arroz"}';
//localStorage.setItem("producto1", producto1); // Se guarda [object object]
const enJSON = JSON.stringify (enJSON);

console.log(enJSON);
console.log(typeof producto1);
console.log(typeof enJSON);

localStorage.setItem("producto1", enJSON);
// se guarda {"id", "producto": "Arroz"}