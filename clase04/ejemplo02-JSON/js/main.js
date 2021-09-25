//ALMACENAR OBJETOS EN EL STORAGE

/*const producto1 = '{"id":2, producto: "Arroz"}';
//localStorage.setItem("producto1", producto1); // Se guarda [object object]
const enJSON = JSON.stringify (producto1);

console.log(enJSON);
console.log(typeof producto1);
console.log(typeof enJSON);

localStorage.setItem("producto1", enJSON);
// se guarda {"id", "producto": "Arroz"} */

//EJEMPLO: OBTENER ARRAY ALMACENADO

class Producto {
    constructor(obj){
        this.nombre = obj.producto.toUpperCase();
        this.precio = parseFloat(objeto.precio);
    }
    sumaIVA(){
        this.precio = this.precio * 1.21;
    }
}

//Obtenemos el listado de los productos almacenado
const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
const productos = [];
//Iteramos almacenadis con for...of
for(const objeto of almacenados)
    productos.push(new Producto(objeto));
//Ahora tenemos objetos
for (const producto of productos)
    producto.sumaIVA();  