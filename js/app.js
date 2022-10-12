function saludoUsuario(){
    alert("Bienvenido al Merch de Origen");
}
saludoUsuario();

const productos =  [
    {nombre: "Conjunto kairos", precio: 8500, disponibilidad: true},
    {nombre: "Remera voluntarios", precio: 3500 , disponibilidad: true},
    {nombre: "Gorra origen", precio: 2500, disponibilidad: false},
    {nombre: "Kit de bienvenida", precio: 3000, disponibilidad: true},
    {nombre: "Remera origen", precio: 2800, disponibilidad: true},
];

let carrito = [];

let seleccion = prompt("Hola, ¿Desea comprar algún producto de la Tienda Online?")
while(seleccion != "si" && seleccion != "no"){
    alert("Porfavor ingrese si o no.")
    seleccion = prompt("¿Desea comprar algo de la Tienda?(Ingrese si - no)")
}

if(seleccion == "si"){
    alert("A continuación nuestra Lista de Productos: ");
    let todosLosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
    alert(todosLosProductos.join(" - "));
}else if(seleccion == "no"){
    alert("Muchas gracias por tu visita, ¡te esperamos pronto!");
}

while(seleccion != "no"){
    let producto = prompt("Por favor, agrega un producto a tu carrito: ");
    let precio = 0;
    if(producto == "Conjunto kairos" || producto == "Remera voluntarios" || producto == "Gorra origen" || producto == "Kit de bienvenida" || producto == "Remera origen"){
        switch(producto){
            case "Conjunto kairos":
                precio=8500;
                break;
            case "Remera voluntarios":
                precio=3500;
                break;
            case "Gorra origen":
                precio=2500;
                break;
            case "Kit de bienvenida":
                precio=3000;
                break;
            case "Remera origen":
                precio=2800;
                break;
            default:
                break;
        }
        let unidades = parseInt(prompt("¿Cuantas unidades quiere llevar?"));
        carrito.push({producto,unidades,precio})
        console.log(carrito);
    }else{
        alert("Disculpa la molestia, no tenemos ese producto.")
    }

    seleccion = prompt("¿Desea seguir comprando?")
    while(seleccion == "no"){
        alert("Muchas gracias por la compra, ¡Hasta pronto!");
        carrito.forEach((carritoFinal) => {
            alert("Te dejamos la descripción con la compra realizada:")
            alert(`
            Producto Adquirido: ${carritoFinal.producto}
            Unidades: ${carritoFinal.unidades}
            Total a pagar por producto: ${carritoFinal.unidades * carritoFinal.precio} `)
        })
        break;
    }
}

formaPago();

function formaPago(){
    let tarjetaCred = "Tarjeta de Crédito";
    let tarjetaDeb = "Tarjeta de Débito"
    let transferencia = "Mercado de Pago"
    alert("Forma de pago:")
    alert(`
    1. ${tarjetaCred}
    2. ${tarjetaDeb}
    3. ${transferencia}`);
    let opc = Number(prompt("¿Que forma de pago realizarás?  "));
    if((opc > 0 && opc < 4) || opc === ""){
        switch (opc){
            case 1:
                alert("Usted relizó el pago con " + tarjetaCred);
                break;
            case 2:
                alert("Usted relizó el pago con "+ tarjetaDeb);
                break;
            case 3:
                alert("Usted relizó el pago con " + transferencia);
                break;
        }
    }else{
        prompt("Favor de ingresar correctamente la forma de Pago: ")
    }
    alert("Pago realizado.Muchas gracias por elegirnos y por la compra. ¡Esperamos que disfrutes el producto, te recordamos que el envío es gratis y corre por nuestra cuenta!");
}
