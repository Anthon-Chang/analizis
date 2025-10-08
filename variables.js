let cantidadProductos = 10;
let precioProducto = 15.5;
let nombreProducto = "Alchemised: The Enchanted Edition";
let esDisponible = true;
let fechaLanzamiento = new Date('2023-01-15');
let detallesProducto = {
    autor: "John Doe",
    genero: "Fantasy",
    paginas: 350
};
let etiquetas = ["fantasy", "adventure", "magic"];
let descuento = null;
let codigoProducto; // undefined
let cantidadValoraciones = 23;
let valoracionMedia = 4.2;

console.log("Cantidad de Productos:", cantidadProductos);
console.log("Precio del Producto:", precioProducto);
console.log("Nombre del Producto:", nombreProducto);
console.log(`El ${nombreProducto} está disponible:, esDisponible y tiene un precioProducto de ${precioProducto}.`);