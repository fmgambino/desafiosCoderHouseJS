const cotizacion = [{ id: 1,  ef: "Brubank", tc: 172 },
                    {  id: 2,  ef: "Uala", tc: 176 },
                    {  id: 3,  ef: "MercadoPago"  , tc: 174},
                    {  id: 4,  ef: "reBank" , tc: 173}];

const buscarUala = cotizacion.find(ef => ef.id === 2); 
console.log(buscarUala);
cotizacion[0]
const bancos = cotizacion.filter(ef => ef.tc < 175); 
console.log(bancos);
[{id: 1,ef:"Brubank",tc:172},{id:4,ef:"reBank",tc: 173}]

const mPago = cotizacion.map(ef => ef.tc * 100);
console.log(mPago);