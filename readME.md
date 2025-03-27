# Tienda Virtual

Este proyecto es una **tienda virtual** desarrollada en HTML, CSS y JavaScript. Permite visualizar productos, filtrarlos, ordenarlos, y gestionar un carrito de compras.

## Funcionalidades

1. **Ordenar productos alfabéticamente**:
   - Los productos pueden ordenarse alfabéticamente al hacer clic en el botón "Ordenar alfabéticamente".
   - Si el orden alfabético está activo, el botón cambia su estilo y muestra los productos en orden alfabético.

2. **Filtrar productos por precio**:
   - Al activar el filtro de precio, los productos cuyo precio sea mayor o igual a $100 se ocultarán.

3. **Mostrar solo nombres de productos**:
   - Al hacer clic en el botón "Mostrar solo nombres", se ocultan los detalles de los productos (como el precio y la descripción) y solo se muestran los nombres.

4. **Carrito de compras**:
   - Los productos se pueden agregar al carrito de compras.
   - El carrito muestra una lista de los productos con su cantidad y precio total.
   - También es posible eliminar productos del carrito.

## Métodos JavaScript Utilizados

A continuación, se describen los métodos clave utilizados en el código para implementar las funcionalidades:

1. **`filter()`**:
   - El método `filter()` se usa para filtrar los productos en función de su precio. En el caso del filtro por precio, el método permite mostrar solo los productos cuyo precio sea inferior a $100.
   - Ejemplo de uso:
     ```javascript
     const filteredProducts = products.filter(product => product.price < 100);
     ```

2. **`sort()`**:
   - El método `sort()` se utiliza para ordenar los productos. Puede ordenar los productos alfabéticamente por su nombre o por su precio.
   - Si el orden alfabético está activo, el método ordena los productos por el nombre, de lo contrario, los ordena por precio.
   - Ejemplo de uso:
     ```javascript
     products.sort((a, b) => a.name.localeCompare(b.name)); // Ordenar por nombre
     products.sort((a, b) => a.price - b.price); // Ordenar por precio
     ```

3. **`map()`**:
   - El método `map()` se utiliza para generar nuevos arreglos. En este caso, se utiliza para obtener un arreglo con solo los nombres de los productos cuando se activa la opción de "Mostrar solo nombres".
   - Ejemplo de uso:
     ```javascript
     const namesOnly = products.map(product => product.name);
     ```

4. **`reduce()`**:
   - El método `reduce()` se utiliza para calcular el total de los productos en el carrito de compras. Acumula el valor de los precios multiplicados por la cantidad de cada producto.
   - Ejemplo de uso:
     ```javascript
     const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
     ```

## Estructura del Proyecto

El proyecto consta de tres partes principales:

1. **HTML**: Estructura básica de la tienda, donde se definen los productos y la interfaz.
2. **CSS**: Estilos que dan diseño y hacen la tienda visualmente atractiva.
3. **JavaScript**: Lógica de las funcionalidades interactivas, como ordenar, filtrar, mostrar los nombres, y gestionar el carrito de compras.

## Cómo usar

1. Clona el repositorio en tu máquina local:
   ```bash
   git clone <url_del_repositorio>
