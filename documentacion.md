# Estructura general

El sistema de bootstrap utiliza una cuadrícula de 12 columnas por defecto. Eso quiere decir que para distribuir el contenido puedes usar md-2, md-3, md-4... sabiendo que la suma de las columnas no puede superar 12.


### Creando una tienda online

Sabiendo lo anterior, para la tienda online haremos lo siguiente:
1. Crear un contenedor principal con la clase container.
   
2. Crear una fila ÚNICA que va a tener dos columnas dentro:
    - Una columna de 3 unidades para mostrar el carrito de compras (como va a la derecha, lo pondremos al final de esta fila)
    - Una columna de 9 unidades para mostrar los productos. La columna de producto tendrá a su vez dentro:
        - Una fila ÚNICA donde van a estar todos los productos.
        - Dentro de cada fila, se define una columna de X unidades para cada producto.

El resultado de la arquitectura es el siguiente:

    

```html

<!-- CONTENEDOR GENERAL -->
<div class="container">
    <!-- La fila que tendrá dentro nuestro carrito y productos -->
    <div class="row">

        <!-- La columna de 9 unidades que tendrá los productos -->
        <div class="col-md-9">


            <!-- Una fila para agrupar todos los productos -->
            <div class="row">
                <!-- Producto 1 -->
                <div class=col-md-3>
                    <!-- Aquí metemos el card del producto 1 -->
                </div>

                 <!-- Producto 2 -->
                <div class=col-md-3>
                    <!-- Aquí metemos el card del producto 2 -->
                </div>

                 <!-- Producto 3 -->
                <div class=col-md-3>
                    <!-- Aquí metemos el card del producto 3 -->
                </div>
            </div>

        <!-- cerramos la fila de los productos-->
        </div>

        <div class="col-md-3">
            <!-- Aquí metemos el carrito de compras -->
        </div>

<!-- cerramos la fila principal y después cerramos el container -->
    </div>
</div>

```


### Explicación:

El contenedor es el contenedor. Esto es indistinto. Ahora pasamos a las filas.

La primera fila va a agrupar dentro una serie de columnas. Nosotros le hemos dicho que va a agrupar concretamente dos columnas: la primera columna es la de los productos y la segunda columna es la de la tienda. 

Sobre la columna de la tienda no hay que hacer nada. Simplemente la colocamos allá donde queramos.

La columna de los productos, por su parte, va a tener dentro una fila que, a su vez, va a agrupar en su interior cada producto en una columna. El tamaño de las columnas para cada producto lo definimos con md-X, donde X es el número de columnas que queremos que ocupe.

De forma natural, los productos se irán agrupando hasta llegar a un máximo de 9 unidades de tamaño. Al llegar a 9, pasarán automáticamente a una nueva fila.

    
### Tamaños de pantalla

````html
 <!-- Productos (ocupa 12 columnas en pantallas pequeñas, 9 en medianas y 8 en grandes) -->

    <!-- Producto 1 -->
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <!-- Contenido del producto 1 -->
    </div>

````

1. col-12: Ocupa 12 columnas en pantallas extra pequeñas.
2. col-sm-6: Ocupa 6 columnas en pantallas pequeñas y superiores.
3. col-md-4: Ocupa 4 columnas en pantallas medianas y superiores.
4. col-lg-3: Ocupa 3 columnas en pantallas grandes y superiores.


**La clase col-md-4 mb-4 define un contenedor (div) tal que así:**

- El md-4 ocupa 4 columnas de un total de 12 en una cuadrícula de Bootstrap. 

- El mb-4 agrega un margen inferior de 4 unidades para separar este contenedor de los demás elementos.
  
- Contenido dentro del div: Dentro de este contenedor, se coloca el contenido que deseas mostrar, en este caso, una tarjeta (card) con una imagen, un título y un botón.
Personalización:

## Se puede modificar lo siguiente:

### Clases de Bootstrap:
- col-md-4: Puedes cambiar el número para ajustar el ancho de la columna. Por ejemplo, col-md-6 ocuparía 6 columnas.

- mb-4: Puedes modificar el valor numérico para ajustar el margen inferior o utilizar otras clases de utilidad de Bootstrap para controlar el espaciado.

### Contenido de la tarjeta:
- Imagen: Cambia la ruta de la imagen (src="imagen_producto.jpg") por la URL de la imagen que deseas mostrar.
  
- Título: Modifica el texto dentro de la etiqueta h5 para cambiar el título del producto.
  
- Descripción: Puedes agregar una descripción del producto utilizando la etiqueta p.
  
- Botón: Cambia el texto del botón y la función asociada para realizar acciones diferentes.

