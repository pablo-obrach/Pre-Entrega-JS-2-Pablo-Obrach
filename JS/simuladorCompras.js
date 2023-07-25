class Producto {
  constructor(id, nombre, precio, descuento, cantidad) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.descuento = descuento;
    this.cantidad = cantidad;
    this.cantidadInicial = cantidad;
    this.adquirido = false;
  }
  //*Metodo para obtener el valor real del descuento segun el precio del producto
  resultadoDescuento() {
    return this.precio * this.descuento;
  }
  //*Metodo para obtener el total del producto con el descuento aplicado
  totalProductoConDto() {
    return this.precio - this.resultadoDescuento();
  }
  //*metodo para adquirir el producto
  productoAdquirido() {
    this.adquirido = true;
  }
  //*Metodo para descontar la cantidad de un producto
  descontarCantidadProducto() {
    return this.cantidad--;
  }
  //*Metodo para agregar la cantidad de un producto
  agregarCantidadProducto() {
    return this.cantidad++;
  }
}

//*Clase para el carrito de compras
class Carrito {
  constructor() {
    this.listaProductosCarrito = [];
  }

  //*Metodo para ver el carrito
  verCarrito() {
    let carritoItems = "";
    this.listaProductosCarrito.forEach((item) => {
      carritoItems += `${item.nombre} \nEl precio del producto con el ID: ${
        item.id
      } con el descuento es de: $${item.totalProductoConDto()} \n`;
    });

    return carritoItems;
  }
  //*Metodo para el Total del Carrito
  totalDelCarrito() {
    return this.listaProductosCarrito.reduce(
      (acc, item) => acc + item.totalProductoConDto(),
      0
    );
  }
  //*Metodo para eliminar productos del carrito
  eliminarProducto(idProductoAEliminar) {
    return this.listaProductosCarrito.find(
      (item) => item.id === idProductoAEliminar
    );
  }

  //*Metodo para agregar la cantidad del producto eliminado al arreglo original
  agregarCantidadRestada(productoEliminado) {
    listaProductos.forEach((item) => {
      if (item.id === productoEliminado.id) {
        item.agregarCantidadProducto();
      }
    });
  }
}

const listaProductos = [
  new Producto(1, "Televisor Plasma", 20000, 0.5, 2),
  new Producto(2, "Laptop Lenovo", 10000, 0.3, 3),
  new Producto(3, "Teclado Mecanico Nisuta", 5000, 0.1, 4),
];

const carrito = new Carrito();

function simuladorCompra() {
  alert(
    "¡Bienvenido! Elija un producto usando su letra correspondiente de la siguiente lista para saber el precio con el Dto de la semana:\n" +
      `A- ${listaProductos[0].nombre}: $${listaProductos[0].precio} (tiene un ${
        listaProductos[0].descuento * 100
      }% dto)\nQuedan disponibles: ${listaProductos[0].cantidad} \n` +
      `\nB- ${listaProductos[1].nombre}: $${
        listaProductos[1].precio
      } (tiene un ${
        listaProductos[1].descuento * 100
      }% dto) \nQuedan disponibles: ${listaProductos[1].cantidad} \n` +
      `\nC- ${listaProductos[2].nombre}: $${
        listaProductos[2].precio
      } (tiene un ${
        listaProductos[2].descuento * 100
      }% dto) \nQuedan disponibles: ${listaProductos[2].cantidad}`
  );

  let rtaUsuario;
  let total;
  let confirmarCompra;

  while (rtaUsuario !== "SALIR") {
    rtaUsuario = prompt(
      `¿Qué producto desea? Escoja la letra correspondiente:\nA- ${listaProductos[0].nombre}, quedan disponibles: ${listaProductos[0].cantidad}
      \nB- ${listaProductos[1].nombre}, quedan disponibles: ${listaProductos[1].cantidad}
      \nC- ${listaProductos[2].nombre}, quedan disponibles: ${listaProductos[2].cantidad}
      \nSi desea salir, escriba 'salir' o puede oprimir el botón cancelar.\nPara ver su carrito de compras ingrese "ver carrito"`
    );

    if (rtaUsuario === null) {
      alert("¡Gracias por utilizar nuestros servicios, hasta la próxima!");
      break;
    }

    rtaUsuario = rtaUsuario.toUpperCase();

    switch (rtaUsuario) {
      case "A":
        total = listaProductos[0].totalProductoConDto();
        alert(
          `El precio de ${listaProductos[0].nombre} con el descuento es de $${total}.\n¡Esperamos su compra, gracias por elegirnos!`
        );
        confirmarCompra = confirm("¿Desea adquirir este producto?");

        /* verificamos que el usuario confirmo la compra y luego envio el 
        producto al carrito mediante el metodo .push()*/
        if (confirmarCompra === true) {
          listaProductos[0].productoAdquirido();
          if (listaProductos[0].cantidad === 0) {
            alert(`No quedan mas ${listaProductos[0].nombre} disponibles`);
          } else if (listaProductos[0].adquirido === true) {
            listaProductos[0].descontarCantidadProducto();
            alert(`El Telvisor Plasma Samsung fue aquirido con exito`);
            carrito.listaProductosCarrito.push(listaProductos[0]);
          }
        } else {
          alert(
            "Lo esperamos la proxima!, gracias por usar nuestros servicios"
          );
        }
        break;
      case "B":
        total = listaProductos[1].totalProductoConDto();
        alert(
          `El precio de ${listaProductos[1].nombre} con el descuento es de $${total}.\n¡Esperamos su compra, gracias por elegirnos!`
        );
        confirmarCompra = confirm("¿Desea adquirir este producto?");
        if (confirmarCompra === true) {
          listaProductos[1].productoAdquirido();
          if (listaProductos[1].cantidad === 0) {
            alert(`No quedan mas ${listaProductos[1].nombre} disponibles`);
          } else if (listaProductos[1].adquirido === true) {
            listaProductos[1].descontarCantidadProducto();
            alert(`La Laptop Lenovo fue aquirida con exito`);
            carrito.listaProductosCarrito.push(listaProductos[1]);
          }
        } else {
          alert(
            "Lo esperamos la proxima!, gracias por usar nuestros servicios"
          );
        }
        break;
      case "C":
        total = listaProductos[2].totalProductoConDto();
        alert(
          `El precio de ${listaProductos[2].nombre} con el descuento es de $${total}.\n¡Esperamos su compra, gracias por elegirnos!`
        );
        confirmarCompra = confirm("¿Desea adquirir este producto?");
        if (confirmarCompra === true) {
          listaProductos[2].productoAdquirido();
          if (listaProductos[2].cantidad === 0) {
            alert(`No quedan mas ${listaProductos[2].nombre} disponibles`);
          } else if (listaProductos[2].adquirido === true) {
            listaProductos[2].descontarCantidadProducto();
            alert(`El Teclado Nisuta fue aquirido con exito`);
            carrito.listaProductosCarrito.push(listaProductos[2]);
          }
        } else {
          alert(
            "Lo esperamos la proxima!, gracias por usar nuestros servicios"
          );
        }
        break;
      case "SALIR":
        alert("¡Gracias por utilizar nuestros servicios, hasta la próxima!");
        break;
      case "VER CARRITO":
        /*Verificamos que el carrito no este vacio, si es asi damos un alert sino
        proseguimos con el codigo para ver el carrito de compras*/

        if (carrito.listaProductosCarrito.length === 0) {
          alert(
            "El carrito está vacío. Elija un Producto para inicar su compra"
          );
        } else {
          //Declaracion de variables para usar en el carrito. Uso el metodo
          let totalCarrito = carrito.totalDelCarrito();

          let mensajeCarrito = carrito.verCarrito();
          alert(
            `${mensajeCarrito} \nEl total del carrito es de: $${totalCarrito} 
            \nSi desea eliminar un producto del carrito ingrese ELIMINAR`
          );
        }
        break;
      case "ELIMINAR":
        if (carrito.listaProductosCarrito.length === 0) {
          alert("El carrito esta vacio, no se puede eliminar un producto");
        } else {
          //Pregunto al usuario si quiere eliminar algun producto
          let productoAEliminar =
            prompt(`Si desea eliminar algun producto del carrito,
          ingrese el ID del mismo \n${carrito.verCarrito()}`);

          if (productoAEliminar) {
            const idProductoAEliminar = parseInt(productoAEliminar);

            //*Eliminar el producto del carrito mediante su ID
            const productoEliminado =
              carrito.eliminarProducto(idProductoAEliminar);

            if (productoEliminado) {
              carrito.listaProductosCarrito.splice(
                carrito.listaProductosCarrito.indexOf(productoEliminado),
                1
              );
              alert(
                `Se ha eliminado el producto${productoEliminado.nombre} del carrito`
              );
              //*Agregar aca el metodo para agregar la cant. del productoEliminado a la lista de la clase Producto
              carrito.agregarCantidadRestada(productoEliminado);
              // listaProductos.forEach((item) => {
              //   if (item.cantidad >= 0) {
              //     item.agregarCantidadProducto();
              //   }
              // });
            } else {
              alert(
                "No se ha encontrado un producto con el ID proporcionado en el carrito"
              );
            }
          }
        }
        break;
      default:
        alert(
          "El dato ingresado es incorrecto, ingrese la letra correspondiente al producto deseado."
        );
        break;
    }
  }
}

setTimeout(simuladorCompra, 2000);
