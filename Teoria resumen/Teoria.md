# _CLASE 1_

# ¿Qué es un algoritmo?

Un algoritmo es una serie de instrucciones que deben cumplir las siguientes condiciones:

- Ser ordenadas: Al igual que en matemáticas no es lo mismo hacer`( 2 + 2 ) * 3` que `2 + ( 2 * 3)`, en programación el orden también es muy importante para que nuestro código funcione correctamente.
- Estar bien definidas: Las instrucciones tienen que ser claras y estar escritas en el lenguaje que entiende nuestro navegador que en nuestro caso es JavaScript.
- Ser finitas: Si nuestras instrucciones no tiene un punto de corte o un fin, nuestro programa va a entrar en lo que se conoce como un loop y nunca va a terminar tildando el navegador.

Las partes principales de un algoritmo son:

- Datos de entrada: Son los datos necesarios que el algoritmo necesita para ser ejecutado.
- Proceso: Es la secuencia de pasos para ejecutar el algoritmo.
- Datos de salida: Son los datos obtenidos después de la ejecución del algoritmo.

> Nota: Tanto los datos de entrada como de salida no son obligatorios para que sea un algoritmo.

# Algoritmo de un café ☕️

> La idea es tener un ejemplo mental de un algoritmo y sus partes, noten que acá tenemos los ingredientes (elementos de entrada), la preparación del café (proceso) y un resultado final que es la taza de café lista (elementos de salida). En la mayoría de los ejercicios que hagamos la estructura vas a ser la misma, por lo cual es bueno tener esto en mente.

## Ingredientes (Datos de entrada)

- Café 250 ml.
- Azúcar 3 cdas.
- Una taza café.

## Preparación (Proceso)

1. Servir el café en la taza hasta que la misma este completa.
2. Agrega el azúcar en la taza.
3. Revolver hasta disolver el azúcar.

## Resultado (Datos de salida)

Un taza de un buen café!

# ¿Qué es JavaScript?

JavaScript es un lenguaje de programación que se utiliza principalmente para crear páginas web dinámicas y actualmente también en servidores gracias a Node.

Una página web dinámica es aquella que incorpora efectos como texto que aparece y desaparece, animaciones, acciones que se activan al pulsar botones y ventanas con mensajes de aviso al usuario.

Técnicamente, JavaScript es un lenguaje de programación interpretado, por lo que no es necesario compilar los programas para ejecutarlos. En otras palabras, los programas escritos con JavaScript se pueden probar directamente en cualquier navegador sin necesidad de procesos intermedios.

A pesar de su nombre, JavaScript no guarda ninguna relación directa con el lenguaje de programación Java. Legalmente, JavaScript es una marca registrada de la empresa Sun Microsystems.

# Inclusión de JavaScript

Para incluir JavaScript en nuestro archivo HTML tenemos dos formas:

- Incluyendo los tags `<script></script>` y escribiendo nuestro código JavaScript adentro.
- Importando un archivo que contenga JavaScript usando el mismo tag `<script src="./js/index.js"></script>`, pero con la propiedad src. Esta forma es similar a como importar distintas hojas de estilos cada archivo nuevo que importemos se combina con el anterior, si repetimos nombres de variables se pueden pisar.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="tab icon" href="./favicon.png" />
    <title>Clase 01 - En clase</title>
  </head>
  <body>
    <!-- Inclusión de JavaScript desde un archivo externo -->
    <script src="./js/index.js"></script>
  </body>
</html>
```

> A lo largo del curso vamos a utilizar la segunda forma y vamos a ir viendo también como evitar los conflictos cuando usamos más de un archivo.

# Sintaxis

En JavaScript como en otros lenguajes de programación existe una sintaxis que es la forma para darle ordenes o instrucciones a la computadora. La sintaxis tiene palabras reservadas que vamos a ver en el siguiente tema, pero también un orden. Siempre los programas se leen de arriba hacia abajo y para poder usar un valor tiene que estar declarada antes.

La sintaxis de un lenguaje de programación se define como el conjunto de reglas que deben seguirse al escribir el código fuente de los programas para considerarse como correctos para ese lenguaje de programación.

La sintaxis de JavaScript es muy similar a la de otros lenguajes de programación como Java y C. Las normas básicas que definen la sintaxis de JavaScript son las siguientes:

- No se tienen en cuenta los espacios en blanco y las nuevas líneas, como sucede con XHTML, el intérprete de JavaScript ignora cualquier espacio en blanco sobrante, por lo que el código se puede ordenar de forma adecuada para entenderlo mejor (tabulando las líneas, añadiendo espacios, creando nuevas líneas, etc.)

- Se distinguen las mayúsculas y minúsculas, al igual que sucede con la sintaxis de las etiquetas y elementos XHTML. Sin embargo, si en una página XHTML se utilizan indistintamente mayúsculas y minúsculas, la página se visualiza correctamente, siendo el único problema la no validación de la página. En cambio, si en JavaScript se intercambian mayúsculas y minúsculas el script no funciona.

- No se define el tipo de las variables, al crear una variable no es necesario indicar el tipo de dato que almacenará. De esta forma, una misma variable puede almacenar diferentes tipos de datos durante la ejecución del script.

- No es necesario terminar cada sentencia con el carácter de punto y coma (;): en la mayoría de lenguajes de programación, es obligatorio terminar cada sentencia con el carácter ;. [Standar JS - No semicolons](https://standardjs.com/)

- Se pueden incluir comentarios, los comentarios se utilizan para añadir información en el código fuente del programa. Aunque el contenido de los comentarios no se visualiza por pantalla, si que se envía al navegador del usuario junto con el resto del script, por lo que es necesario extremar las precauciones sobre la información incluida en los comentarios y tener en cuenta que ocupan espacio.

### JavaScript define dos tipos de comentarios: los de una sola línea y los que ocupan varias líneas.

Ejemplo de comentario de una sola línea (se definen añadiendo dos barras oblicuas `//`):

```js
// A continuación se muestra un mensaje en consola
console.log('Soy un mensaje')
```

Ejemplo de comentario de varias líneas (se definen encerrando el texto entre los caracteres `/*` y `*/`):

```js
/**
 * A continuación se muestra
 * un mensaje en consola
 */
console.log('Soy un mensaje')
```

Ejemplo de sintaxis en JavaScript es:

```js
var firstName

firstName = 'Juan'

console.log('Hola ' + firstName) // Resultado
```

> En este ejemplo le pedimos a la computadora varias cosas:
>
> 1. Crear una variable llamada `firstName` sin ningún valor asignado, esto lo hacemos escribiendo `var` espacio el nombre de la variable.
> 2. Asignarle a la variable `firstName` el string `Juan`, esto se hace poniendo el nombre de la variable igual al valor que le queremos asignar. Todo lo de la derecha del igual se guarda en lo de la izquierda, en este caso el string `Juan` se guarda en la variable `firstName`.
> 3. Que muestre en consola `Hola` seguido del string almacenado en la variable `firstName`, dando como resultado `Hola Juan`. Esto se logra escribiendo `console.log()` y poniendo dentro de los paréntesis el string que queremos mostrar en pantalla.
> 4. También podemos observar un texto libre que está escrito luego de dos barras `//`, esto en JavaScript es un comentario y es solo informativo la computadora lo saltea.

# Palabras reservadas

Las palabras reservadas son especiales porque las usamos para darle instrucciones a la computadora, estas palabras no se pueden usar para nombres de variables ni funciones por eso se llaman reservadas. Algunas son `break, case, catch, continue, default, delete, do, else, finally, for, function, if, in, instance of, new, return, switch, this, throw, try, typeof, var, void, while, with`.

_Existen muchas palabras reservadas que vamos a ir viendo de a poco, pero como ayuda prestemos atención a que muchos editores de texto las marcan con un color distinto para diferenciarlas como en el siguiente ejemplo:_

```js
var firstName

firstName = 'Juan'

if (firstName === 'Juan') {
  alert('Tu nombre es Juan!')
}
```

> Vemos algunas palabras como `var` (en rojo) que la usamos para declarar una variable o el `if` que nos permite decirle a la computadora que evalúe una condición booleana, esta son palabras reservadas. También vemos otras palabras como `alert()` (en violeta) que son llamados a métodos del sistema. Estas no son palabras reservadas, pero hay que tener cuidado de no generar nombres de variables que puedan confundirse con estas funciones.

# Variables

Las variables en JavaScript sirven para almacenar datos de distintos tipos y tiene la particularidad de que puede modificarse su contenido y el tipo del mismo a lo largo de la ejecución del programa. Si nosotros escribimos un string `Hola mundo` el mismo es inmutable, pero si este `Hola mundo` se lo asignamos a una variable lo podemos modificar más adelante en el programa.
Para poder declarar una variable usamos la palabra reservada `var` seguida de un espacio y luego el nombre de la variable, que puede empezar con una letra mayúscula o minúscula `a b c D E z`, un guion bajo `_` o un signo pesos `$`, luego de la primer letra también podemos usar números `1 2 67`.

```js
var firstName

firstName = 'Juan'

firstName = 'Pedro'

var $price

$price = 25

var _text

_text = 'Soy un texto'

var text1

text1 = 'Primer texto'
```

> En este caso usamos el nombre `firstName`, luego de la declaración le asignamos el string `Juan` y luego modificamos o pisamos ese valor asignando el string `Pedro`.

La declaración y asignación de un variable también puede realizarse en un solo de la siguiente forma:

```js
var firstName = 'Juan'
```

> Es importante ser descriptivos con los nombres de nuestras variables y que representen lo que van a contener. No es lo mismo que una variable se llame `firstName` o `fN`, en la primera es bien claro que va a contener un nombre mientras que la segunda puede interpretarse otra cosa.
> Los caracteres no se cobran en JavaScript así que úsenlos tranquilos. 😛

# Tipos de valores

En JavaScript no existen los tipos de variables, pero si los tipos de valores que puede contener o tomar una variable. Es por esto que se lo conoce como un lenguaje débilmente tipado.

## Booleano - `boolean`

Booleano o boolean, solo puede tomar dos valores `true` (verdadero) o `false` (falso). Aunque no se usa tanto como valor de una variable de manera implícita, si muchas veces ciertos valores los convertimos a booleanos para poder tomar decisiones.

```js
var boolean1 = true

var boolean2 = false
```

> Ej: La tecla de luz, si está prendida es `true`, si la apago es `false`.

## Número - `number`

Número o number son los números que usamos en operaciones matemáticas y pueden ser números enteros incluido el cero `0 1 2 3`, decimales `3.1416 2.4` y negativos `-5 -8.3`. Este tipo de valores nos sirven para contar o hacer cálculos matemáticos con ellos.

```js
var intNumber = 3

var floatNumber = 0.87876

var negativeFloatNumber = -5.4
```

> Ej: Una calculadora almacena valores de tipo number para hacer las operaciones.

## Cadena de texto - `string`

Las cadenas de texto o strings son las palabras que contienen, letras `a b C D`, signos `: . @`, saltos de línea `enter`, espacios ``, o cualquier carácter valido de la tabla [ASCII](http://www.elcodigoascii.com.ar/). Para declarar un string tenemos que escribir el texto entre comillas simples o dobles (se recomienda usar simples según [STJS](https://standardjs.com/)). Con este tipo de valor podemos representar los textos y hacer operaciones para modificarlos o mostrarlos en pantalla. Es importante que tengamos en cuenta que no es lo mismo un número almacenado como string que un number, JavaScript los va a tratar de manera distinta.

```js
var firstName = 'Juan'

var email = 'juan@gmail.com'

var numbers = '1 2 3 4 5 setenta y ocho'

var text = 'The dark side of the moon'
```

> Ej: El email que ingresamos como usuario o los textos que escribimos en los muros de facebook son de tipo string

## Indefinido y Nulo - `undefined` y `null`

- Indefinido o undefined es un valor que nos arroja JavaScript para indicarnos que el valor al cual queremos acceder aún no fue definido, ya sea porque no se le asigno un valor a la variable o porque queremos acceder a la propiedad de un objeto que no existe.

- Nulo o null tiene el mismo significado que undefined en la mayoría de los casos, pero este es un valor que nosotros asignamos a una variable para indicar que no contiene nada o es nula.

```js
var example1 // En este punto la variable tiene el valor indefinido

var example2 = null // Acá yo como usuario le asigno el valor nulo
```

> Ej: Cuando no ingresamos nada en un `prompt()`, el valor que nos devuelve es `undefined`. También una variable sin valor asignado da `undefined`.

## Arreglo - `array`

Un arreglo o array es un caso particular de un objeto en JavaScript, que nos permite tener valores ordenado y acceder a ellos mediante la posición. La otra forma de acceder a la propiedades de un array es el nombre del array seguido de `[]` y poniendo dentro la posición en formato number del elemento al cual queremos acceder, es importante tener en cuenta que la posición dentro del array se cuenta empezando por cero. Los array pueden contener cualquier tipo de valor dentro de ellos incluidos otros arrays y objetos.

```js
var array = [1, 2, 'Pedro', false]

array[2] // Esto me devuelve el string 'Pedro'

array[3] // Esto me devuelve el boolean false
```

> Ej: La bandeja de entrada del e-mail contiene objetos ,en este caso e-mails, ordenados cronológicamente.

## Objeto - `object`

Un objeto o object es un contenedor que nos permite agrupar variables juntas bajo un mismo concepto. Los valores que pueden contener son todos los permitidos en JavaScript y la forma de acceder es a través de las keys o llaves del objeto. Un objeto se declara abriendo y cerrando llaves `{ }`, dentro de las llaves se ponen las keys del objeto y con dos puntos `:` se le asignan valores a esas keys, de la misma manera que usábamos el `=` en las variables. Para acceder a las propiedades de un objeto existen dos maneras, una es el nombre del objeto seguido de un `.` y luego el nombre de la key y la otra forma es el nombre del objeto seguido de `[]` y poniendo dentro de los `[]` el nombre en formato string de la key que queremos acceder.

```js
var user = {
  firstName: 'Juan',
  age: 25,
  address: 'Calle falsa 1234'
}

user.firstName // Accedo a la propiedad firstName del objeto user, devuelve 'Juan'
user.age // Accedo a la propiedad age del objeto user, devuelve 25
user['address'] // Accedo a la propiedad address del objeto user, devuelve 'Calle falsa 1234'
```

> Ej: Un contacto de la agenda que contiene información como el nombre, la dirección, el número de teléfono, el cumpleaños, etc. de alguien en particular es un objeto.

# Operadores aritméticos

## Asignación - assignment

El operador de asignación `=` nos permite asignar un valor a una variable, todo lo que esta a la derecha del igual se le asigna a la variable de la izquierda.

```js
var total

total = 2.5 // Asigno el valor number 2.5 a la variable total

var message = 'Hola mundo!' // Asigno el valor string 'Hola mundo!' a la variable message
```

En caso de que lo que se encuentra a la derecha precise realizar algún calculo este se hace primero y luego se asigna el valor a la variable.

```js
var total = 2 + 2 // Calculo la operación y asigno el valor de tipo number 4 a la variable total
```

## Adición y Concatenación - addition y concat

El símbolo `+` en JavaScript nos permite hacer dos operaciones distintas dependiendo de los elementos que interactúen.

### Adición - addition

La adición es la operación de la suma matemática de valores, para esto es necesario que todos los elementos sean de tipo number o booleanos. En caso de `false` o `true` los toma como 0 y 1 respectivamente.

```js
var number1 = 2.5

var number2 = 4

number1 + number2 // Esto devuelve el valor de tipo number 6.5

6 + 5.3 // Esto devuelve el valor de tipo number 11.3

var total

total = true * 5 // Este devuelve el valor de tipo number 5 y se lo asigna a la variable total
```

### Concatenación - concat

La otra operación es la concatenación o unión de cadenas de texto, esto se logra teniendo al menos uno de los elementos de tipo string en la operación. Si los dos valores son string los uno directo y sino lo que hace JavaScript es tratar de convertir los valores no numéricos a string y luego juntarlos en uno solo.

```js
'Hola ' + 'mundo' // Esto devuelve el string 'Hola mundo'

'Hola ' + 234 // Esto devuelve el string 'Hola 234'

'Hola ' + true // Esto devuelve el string 'Hola true'

var firstName = 'Juan'

var message = 'Hola ' + firstName // Esto concatena el string 'Hola ' con el string de la variable firstName y se lo asigna a la variable message, guardando el string 'Hola Juan' en la misma
```

## Substracción - subtraction

La resta se define con el símbolo `-` y se realiza entre dos valores de tipo number. Si uno de los valores es de tipo string JavaScript va a tratar de convertirlo a number y hacer la operación, si la conversión falla o los dos valores son string devuelve `NaN`.

```js
var subtotal = 8

var total = subtotal - 10 // Esto devuelve el valor de tipo number -2 y se lo asigna a la variable total

5 - '2' // En este caso la resta entre el number 5 y el string convertido a number 2 y devuelve el number 3

2 - 'Hola' // Como el string 'Hola' no se puede convertir a number esto devuelve NaN
```

## Multiplicación - multiplication

La multiplicación se define con el símbolo `*` y se realiza entre dos valores de tipo number. Si uno de los valores es de tipo string JavaScript va a tratar de convertirlo a number y hacer la operación, si la conversión falla o los dos valores son string devuelve `NaN`.

```js
var subtotal = 5

var total = subtotal * 10 // Esto devuelve el valor de tipo number 50 y se lo asigna a la variable total

2 * '3' // En este caso la multiplicación entre el number 2 y el string convertido a number 3 y devuelve como resultado el number 6

2 * 'Hola' // Como el string 'Hola' no se puede convertir a number esto devuelve NaN
```

## División - division

La división se define con el símbolo `/` y se realiza entre dos valores de tipo number. Si uno de los valores es de tipo string JavaScript va a tratar de convertirlo a number y hacer la operación, si la conversión falla o los dos valores son string devuelve `NaN`. En caso de tratar de dividir por cero el resultado que devuelve es Infinity.

```js
var subtotal = 50

var total = subtotal / 10 // Esto devuelve el valor de tipo number 5 y se lo asigna a la variable total

6 - '2' // En este caso la resta entre el nomber 6 y el string convertido a number 2 y devuelve como resultado el number 4

2 / 0 // Devuelve Infinity

2 / 'Hola' // Como el string 'Hola' no se puede convertir a number esto devuelve NaN
```

## Módulo - modulus

El módulo es un operador que nos permite saber el resto de una división entre dos valores de tipo number. Si uno de los valores es de tipo string JavaScript va a tratar de convertirlo a number y hacer la operación, si la conversión falla o los dos valores son string devuelve `NaN`.
Este operador nos sirve por ejemplo para saber si un número es par o impar, haciendo el módulo de 2.

```js
5 % 2 // En este caso devuelve el valor de tipo number 1, por lo cual el número es impar

10 % 2 // En este caso devuelve el valor de tipo number 0, por lo cual el número es par

10 % '5' // En este caso devuelve el valor de tipo number 0, por lo cual el número es divisible por 5 sin resto.

10 % 'Hola' // Como el string 'Hola' no se puede convertir a number esto devuelve NaN
```

## Incremental - increment

El operador incremental `++` nos sirve para sumarle un 1 al valor de una variable number. Si el valor de la variable es de tipo string lo va a tratar de convertir a number y sumarle `1`, si falla la variable queda con el valor NaN asignado. Esta es una manera rápida de hacer la operación `i = i + 1`.

```js
var subtotal = 5

subtotal++ // Esto es equivalente a subtotal = subtotal + 1, la variable subtotal queda con el valor de tipo number 6

var total = '2'

total++ // Esto es equivalente a total = total + 1, la variable total queda con el valor de tipo number 3

var text = 'Hola'

text++ // Como el string 'Hola' no se puede convertir a number esto devuelve NaN y se lo asigna a la variable text
```

## Decremental - decrement

El operador decremental `--` nos sirve para restarle un 1 al valor de una variable number. Si la el valor de la variable es de tipo string lo va a tratar de convertir a number y restarle `1`, si falla la variable queda con el valor NaN asignado.

```js
var subtotal = 5

subtotal-- // Esto es equivalente a subtotal = subtotal - 1, la variable subtotal queda con el valor de tipo number 4

var total = '2'

total-- // Esto es equivalente a total = total - 1, la variable total queda con el valor de tipo number 1

var text = 'Hola'

text-- // Como el string 'Hola' no se puede convertir a number esto devuelve NaN y se lo asigna a la variable text
```

#_CLASE 2_

# Condicionales

Los condicionales nos permiten evaluar si se cumple una condición y decidir seguir según el resultado que camino seguir dentro del código. En JavaScript existen unos valores que son evaluados como falsos (falsy values), cualquier otro valor es verdadero.

### Lista de falsos - falsy list

- El string vacío `''`
- El número cero `0` o menos cero `-0`
- El símbolo `NaN`
- El nulo `null` o indefinido `undefined`
- El falso `false`

## If

El If se declara usando la palabra reservada `if` seguida de paréntesis y llaves `(){}`, dentro de los paréntesis se coloca una expresión booleana para evaluar y dentro de las llaves la porción de código que se va a ejecutar si la expresión es verdadera.

```js
var firstName = 'María'

if (firstName) {
  console.log('Escribiste un nombre')
}

console.log('Gracias!')
```

> En este código el `if` evalúa si la variable `firstName` es verdadera, si es así muestra en consola `Escribiste un nombre`, por otro lado siempre se va a mostrar en consola un `Gracias!` no importa el valor de `firstName` porque esta por fuera de las llaves `{}` del `if`.

## If else

El If Else se declara usando la palabra reservada `if` seguida de paréntesis y llaves `(){}`, dentro de los paréntesis se coloca una expresión booleana para evaluar y dentro de las llaves la porción de código que se va a ejecutar si la expresión es verdadera, seguido de esto se pone la palabra reservada `else` y llaves de nuevo `{}`, dentro de las cuales se coloca el código que se va a ejecutar si la condición booleana es falsa.

```js
if (firstName === 'Juan') {
  console.log('Tu nombre es Juan')
} else {
  console.log('Tu nombre no es Juan')
}
```

> En este código el `if` evalúa si la variable `firstName` contiene el string `Juan`, si es así muestra en consola `Tu nombre es Juan`, en caso contrario muestra en consola `Tu nombre no es Juan`. Es importante ver que siempre se va a cumplir un caso o el otro, pero es imposible que se cumplan ambos.

## Switch

El Switch se declara usando la palabra reservada `switch` seguida de paréntesis y llaves `(){}` dentro de los paréntesis se coloca el valor que se quiere comparar y dentro de las llaves se colocan los casos contra los cuales se va a comparar el valor. Cada caso se escribe usando la palabra reservada `case` espacio el caso a evaluar y dos puntos `:`, luego de eso se escribe el código a ejecutar y se termina el caso con `break`. El switch admite también el caso `default:` que se va a ejecutar siempre que fallen todas las otras opciones. La comparación entre los casos y el valor se hace haciendo estrictamente igual `===`.

```js
switch (resultOfGame) {
  case 'Ganó':
    console.log('Se le suman 3 puntos')
    break
  case 'Perdió':
    console.log('Se le suma 1 punto')
    break
  case 'Empató':
    console.log('No se le suma ningún punto')
    break
  default:
    console.log('El resultado no es correcto')
    break
}
```

> En el ejemplo vemos como el valor que se ingresa es el resultado de un partido de fútbol `resultOfGame` y según cual sea se muestra en consola los puntos ganados por el jugardor. También dejamos el caso `default` por si el usuario se equivoca al ingresar el resultado.

Cuando multiples casos deben ejecutar el mismo código lo que se hace es poner los casos `case` uno a continuación del otro y dejando luego del último el código a ejecutar, como en el siguiente ejemplo:

```js
switch (dayOfTheWeek) {
  case 'Lunes':
  case 'Martes':
  case 'Miércoles':
  case 'Jueves':
  case 'Viernes':
    console.log('Es un día hábil')
    break
  case 'Sábado':
  case 'Domingo':
    console.log('Es un día de fin de semana')
    break
  default:
    console.log('El día ingresado no es valido')
    break
}
```

En este ejemplo siempre que el día ingresado sea Lunes, Martes, Miércoles, Jueves o Viernes se muestra en consola `Es un día hábil`, si ingresó Sábado o Domingo se muestra en consola `Es un día de fin de semana` y si ingresó cualquier otra cosa se muestra `El día ingresado no es valido`.

# Operadores de comparación

Los operadores de comparación permiten comparar elementos y arrojar un resultado verdadero `true` o falso `false` que nos permite tomar decisiones en nuestro código.

## Estrictamente igual - strict equality

El operador estrictamente igual `===` recibe dos parámetros y los compara, si ambos son iguales tanto en su valor como en su tipo devuelve `true`, en caso contrario `false`. Los objetos y arrays los compara por el lugar al que apuntan, por lo cual solo son iguales si apuntan al mismo objeto.

```js
var firstName = 'Juan'

firstName === 'Juan' // Esto da como resultado true, porque tanto el valor 'Juan', como el tipo de valor string coinciden.

var number = 1234

number === '1234' // Esto da como resultado false porque aunque parecen similares '1234'y 1234, uno es de tipo string y el otro number.

var result = 'FF5733' === 'FF5733' // Devuelve true porque ambas cadenas de caracteres son iguales y luego le asigna true a result

{} === {} // Devuelve false porque no son la misma referencia.

var obj1 = {}

var obj2 = obj1

obj1 === obj2 // Devuelve true, porque apuntan al mismo objeto

```

## Estrictamente desigual - strict not equal

El operador estrictamente desigual `!==` recibe dos parámetros y los compara, si ambos son iguales tanto en su valor como en su tipo devuelve `false`, en caso contrario `true`. Los objetos y arrays los compara por el lugar al que apuntan, por lo cual solo son iguales si apuntan al mismo objeto.

```js
var number = 1234

number !== '1234' // Esto da como resultado true porque aunque parecen similares '1234'y 1234, uno es de tipo string y el otro number.

var firstName = 'Juan'

firstName !== 'Juan' // Esto da como resultado false, porque tanto el valor 'Juan', como el tipo de valor string coinciden.

{} === {} // Devuelve true porque no son la misma referencia.

var obj1 = {}

var obj2 = obj1

obj1 === obj2 // Devuelve false, porque apuntan al mismo objeto

```

## Mayor - greater than operator

El operador mayor `>` devuelve `true` si el número de la izquierda es mayor al de la derecha. En el caso de comparar un string con un number va a tratar de convertir el string en un number y luego hacer la comparación, si falla al convertir el string da como resultado `false`. En el caso de comparar dos string hace una comparación carácter por carácter que es mayor si tiene una posición posterior en la tabla [ASCII](http://www.elcodigoascii.com.ar/) que el otro.

```js
var number = 5

'7' > 5 // Devuelve true, porque convierte el '7' en un number y 7 es mayor que 5.

'Ana' > 'Pedro' // Devuelve false, porque el carácter 'A' tiene la posición 65, mientras que el carácter 'P' tiene la posición 80

'Ana' > 'Alan' // Devuelve true, porque el carácter 'A' de 'Ana' tiene la posición 65 al igual que la 'A' de 'Alan', pero la 'n' tiene la posición 110, mientras que la 'l' tiene la posición 108.
```

## Mayor igual - greater than or equal operator

El operador mayor igual `>=` devuelve true si el número de la izquierda es mayor o igual que el de la derecha. En el caso de comparar un string con un number va a tratar de convertir el string en un number y luego hacer la comparación, si falla al convertir el string da como resultado false. En el caso de comparar dos string el string hace una comparación carácter por carácter que es mayor o igual si tiene una posición posterior o igual en la tabla [ASCII](http://www.elcodigoascii.com.ar/) que el otro.

```js
var number = 5

'5' >= 5 // Devuelve true, porque convierte el '5' en un number y 5 es igual que 5.

'Ana' >= 'Pedro' // Devuelve false, porque el carácter 'A' tiene la posición 65, mientras que el carácter 'P' tiene la posición 80
```

## Menor - less than operator

El operador menor `<` devuelve true si el número de la izquierda es menor que el de la derecha. En el caso de comparar un string con un number va a tratar de convertir el string en un number y luego hacer la comparación, si falla al convertir el string da como resultado false. En el caso de comparar dos string hace una comparación carácter por carácter que es menor si tiene una posición anterior en la tabla [ASCII](http://www.elcodigoascii.com.ar/) que el otro.

```js
var number = 5

'7' < 5 // Devuelve false, porque convierte el '7' en un number y 7 no es menor que 5.

'Ana' < 'Pedro' // Devuelve true, porque el carácter 'A' tiene la posición 65, mientras que el carácter 'P' tiene la posición 80
```

## Menor igual - less than or equal operator

El operador menor igual `<=` devuelve true si el número de la izquierda es menor o igual que el de la derecha. En el caso de comparar un string con un number va a tratar de convertir el string en un number y luego hacer la comparación, si falla al convertir el string da como resultado false. En el caso de comparar dos string hace una comparación carácter por carácter que es menor o igual si tiene una posición anterior o igual en la tabla [ASCII](http://www.elcodigoascii.com.ar/) que el otro.

```js
var number = 5

'5' <= 5 // Devuelve true, porque convierte el '5' en un number y 5 es igual que 5.

'Ana' <= 'Pedro' // Devuelve true, porque el carácter 'A' tiene la posición 65, mientras que el carácter 'P' tiene la posición 80
```

> Nota: La tabla [ASCII](http://www.elcodigoascii.com.ar/) diferencia minúsculas de mayúsculas, tiene también otros caracteres como saltos de linea o espacios y esta pensada para el alfabeto inglés. Por lo cual las tildes, la ñ, u otros caracteres no necesariamente respetan la posición del alfabeto Español.

# Operadores lógicos

Los operadores lógicos nos permiten evaluar dos elementos que arrojen resultados booleanos o puedan evaluarse como tales y devolver un resultado que también puede ser evaluado como un booleano. En el caso del NOT la operación la hace solo con un elemento.

## NOT

El operador de negación evalúa una sentencia de un solo termino, si la evaluación es verdadera devuelve `false` y si la evaluación es falsa devuelve `true`.

```js
!false // Devuelve true

!null // Devuelve true

!!'' // Devuelve false, porque niega el '' convirtiéndolo en true y luego lo vuelve a negar a false

!'Hola' // Devuelve false

!('Hola' === 'Hola') // Devuelve false, porque el estrictamente igual devuelve true y luego la negación lo convierte en false
```

## AND

El operador AND se declara utilizando dos veces el símbolo ampersand `&&` y compara dos expresiones que puedan ser evaluadas como `true` o `false`. El valor que retorna es de uno de los dos términos, según la siguiente tabla:

| Expresión 1 | Expresión 2 | Resultado -> Booleano  |
| :---------: | :---------: | :--------------------- |
|   `true`    |   `true`    | Expresión 2 -> `true`  |
|   `true`    |   `false`   | Expresión 2 -> `false` |
|   `false`   |   `true`    | Expresión 1 -> `false` |
|   `false`   |   `false`   | Expresión 1 -> `false` |

```js
'Juan' && 'Pedro' // Devuelve 'Pedro', que se puede evaluar como true

'Juan' && 0 // Devuelve 0, que se puede evaluar como false

'' && true // Devuelve '', que se puede evaluar como false

7 > 9 && false // Devuelve 7 > 9, que puede evaluarse como false
```

## OR

El operador OR se declara utilizando dos veces el símbolo barra vertical `||` y compara dos expresiones que puedan ser evaluadas como `true` o `false`. El valor que retorna es de uno de los dos términos, según la siguiente tabla:

| Expresión 1 | Expresión 2 | Resultado -> Booleano  |
| :---------: | :---------: | :--------------------- |
|   `true`    |   `true`    | Expresión 1 -> `true`  |
|   `true`    |   `false`   | Expresión 1 -> `true`  |
|   `false`   |   `true`    | Expresión 2 -> `true`  |
|   `false`   |   `false`   | Expresión 2 -> `false` |

```js
'Juan' || 'Pedro' // Devuelve 'Juan', que se puede evaluar como true

'Juan' || 0 // Devuelve 'Juan', que se puede evaluar como true

'' && true // Devuelve true, que es true

7 > 9 && false // Devuelve false, que es false
```

#_CLASE 3_

# Repaso de los comandos más utilizado de Git y GitHub

Git es un programa de control de versiones y Github es una pagína web que nos permite subir nuestros repos Git, compartirlos y guardarlos on line. A continuación vamos a repasar algunos de los comandos básicos y dejar esto como una cheat sheet en caso de que nos surjan dudas en su uso a lo largo del curso.

## Git add

El comando `git add` nos permite agregar archivos modificados al siguiente commit, en general siempre vamos a usar `git add .` para agregar todos los archivos modificados de una vez.

## Git commit

El comando `git commit -m "Mensaje"` nos va a permitir generar un nuevo commit y escribir un mensaje para identificarlo más tarde, el mensaje es libre y tenemos que tratar de que sea descriptivo de lo que estamos haciendo. Ej: `git commit -m "Fix issue on student's table scroll"`

## Git push

El comando `git push` sube todos los cambios a GitHub, en este paso si nuestro repo no está actualizado nos va a marcar que primero tenemos que bajarnos los cambios del servidor, resolver los conflictos que pudiera producir el merge y luego subirlo.

## Git pull

El comando `git pull` nos permite traar todos los cambios que estuvieran subidos a nuestro repo principal, si lo usamos pasandole los parámetros de repositorio y branch `git pull <repo> <branch>` podemos traernos cambios de repos externos que estén configurados como remote branch. Ej: `git pull profe master` nos permite traer los cambios del repo que tiene el alias profe.

# Ciclos

Los ciclos nos permiten repetir una parte del código una cierta cantidad de veces.

## For

El ciclo For se declara usando la palabra reservada `for` seguida de paréntesis y llaves `(){}`, dentro de los paréntesis se escribe la inicialización de la variable (que se ejecuta solo la primera vez), la condición de corte del ciclo que se evalúa antes de ejecutar cada porción de código y la modificación de la variable que se asigna luego de cada ejecución, y dentro de las llaves la porción de código que se va a ejecutar si la expresión es verdadera.

```js
for (var i = 1; i < 10; i++) {
  console.log(i)
}
```

En este ejemplo el ciclo hace lo siguiente:

1. Declara e inicializa la variable `i` en uno `var i = 1`.
2. Verifica que se cumpla la condición booleana `i < 10`.
3. Ejecuta el código dentro de las llaves imprimiendo en pantalla el valor de la variable `i`.
4. Le suma un 1 a la variable `i++`.
5. Repite desde el paso 2 al 4 hasta que la condición booleana no se cumpla y el ciclo corte.

> Esto nos da como resultado que se muestran en consola los números del 1 al 9 (la condición corta en `i < 10`).

Los ciclos For suelen ser muy empleados para recorrer arrays, de la siguiente forma:

```js
var daysOfTheWeek = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Domingo'
]

for (var i = 0; i < daysOfTheWeek.length; i++) {
  var day = daysWeek[i]
  console.log(day)
}
```

En este ejemplo el ciclo hace lo siguiente:

1. Declara e inicializa la variable `i` en cero `var i = 0`, que es la primera posición del array.
2. Verifica que se cumpla la condición booleana `i < daysOfTheWeek.length`, en este caso el largo del array es 7.
3. Ejecuta el código dentro de las llaves imprimiendo en pantalla el valor de la variable `day`, que contiene el día de la semana en la esa posición `var day = daysWeek[i]`.
4. Le suma un 1 a la variable `i++`.
5. Repite desde el paso 2 al 4 hasta que la condición booleana no se cumpla y el ciclo corte.

> Esto da como resultado que se muestre en consola todos los días de la semana que están cargados en el array, respetando el orden.

## While

El ciclo While se declara usando la palabra reservada `while` seguida de paréntesis y llaves `(){}`, dentro de los paréntesis se escribe la condición de corte del ciclo y dentro de las llaves la porción de código que se va a ejecutar si la expresión es verdadera. Es importante poner en los paréntesis una condición de corte que se deje de cumplir en algún momento para evitar generar un ciclo infinito.

```js
var i = 1

while (i < 10) {
  console.log(i)

  i++
}
```

En este ejemplo el ciclo hace lo siguiente:

1. Declara e inicializa la variable `i` en uno `var i = 1`.
2. Verifica que se cumpla la condición booleana `i < 10`.
3. Ejecuta el código dentro de las llaves imprimiendo en pantalla el valor de la variable `i`.
4. Le suma un 1 a la variable `i++`.
5. Repite desde el paso 2 al 4 hasta que la condición booleana no se cumpla y el ciclo corte.

> Esto nos da como resultado que se muestran en consola los números del 1 al 9 (la condición corta en `i < 10`).

## Do while

El ciclo Do while se declara usando la palabra reservada `do` seguida de llaves `{}`, la palabra reservada `while` y paréntesis `()`, dentro de los paréntesis se escribe la condición de corte del ciclo que se evalúa en cada ciclo, excepto la primera vez y dentro de las llaves la porción de código que se va a ejecutar si la expresión es verdadera. Es importante poner en los paréntesis una condición de corte que se deje de cumplir en algún momento, para evitar generar un ciclo infinito.

```js
var i = 1

do {
  console.log(i)

  i++
} while (i > 10)
```

En este ejemplo el ciclo hace lo siguiente:

1. Declara e inicializa la variable `i` en uno `var i = 1`.
2. Ejecuta el código dentro de las llaves imprimiendo en pantalla el valor de la variable `i`.
3. Le suma un 1 a la variable `i++`.
4. Verifica que se cumpla la condición booleana `i > 10`, como la condición no se cumple termina el ciclo.

> Esto nos da como resultado que se muestran en consola solo el número 1.

El Do While nos permite por ejemplo pedir un dato y volver a pedirlo hasta que sea el esperado como en el siguiente ejemplo.

```js
var value

do {
  value = promp('Ingrese un valor mayor a 5')
} while (value <= 5)

console.log(value)
```

En este ejemplo el ciclo hace lo siguiente:

1. Declara e inicializa la variable `value`.
2. Ejecuta el código dentro de las llaves pidiendo le al usuario que ingrese un valor y lo asigna a la variable `value`.
3. Verifica que se cumpla la condición booleana `value <= 5`, si el usuario ingresa un número menor a 5 se va a ejecutar el código entre llaves pidiendo le al usuario que ingrese un valor hasta que el valor ingresado no cumpla con la condición `value <= 5`.
4. Imprime el valor ingresado por el usuario en consola.

> Esto nos da como resultado que se muestran en consola el valor ingresado por el usuario, que siempre va a ser mayor a 5.

# Sentencias break y continue

Las palabras reservadas break y continue, nos permiten salir de un ciclo o saltearnos una iteración del ciclo respectivamente, evitando tener que hacer el ciclo completo.

## Salir - break

La palabra reservada `break` nos permite cortar toda la ejecución de un ciclo para evitar un ciclo completo cuando no es necesario. Se suele utilizar con algún condicional de la siguiente manera:

```js
for (var i = 1; i < 10; i++) {
  console.log(i)

  if (i === 5) {
    break
  }
}
```

En este ejemplo el ciclo hace lo siguiente:

1. Declara e inicializa la variable `i` en uno `var i = 1`.
2. Verifica que se cumpla la condición booleana `i < 10`.
3. Ejecuta el código dentro de las llaves imprimiendo en pantalla el valor de la variable `i`.
4. Verifica la condición dentro del `if`, si es verdadera corta el ciclo con el `break` si no continua.
5. Le suma un 1 a la variable `i++`.
6. Repite desde el paso 2 al 5 hasta que la condición booleana no se cumpla o el break se ejecute y corte el ciclo.

> Esto nos da como resultado que se muestran en consola los números del 1 al 5, la condición cortaría en `i < 10` pero el `break` hace que corte en `i === 5` y no siga más.

## Seguir - continue

La palabra reservada `continue` nos permite corta la ejecución de una pasada de un ciclo para evitar tener que realizar un ciclo completo. Se suele utilizar con algún condicional de la siguiente manera:

```js
for (var i = 1; i < 5; i++) {
  if (i === 3) {
    continue
  }
  console.log(i)
}
```

En este ejemplo el ciclo hace lo siguiente:

1. Declara e inicializa la variable `i` en uno `var i = 1`.
2. Verifica que se cumpla la condición booleana `i < 5`.
3. Verifica la condición dentro del `if`, si es verdadera saltea esa pasada del ciclo si no sigue.
4. Imprime en pantalla el valor de la variable `i`.
5. Le suma un 1 a la variable `i++`.
6. Repite desde el paso 2 al 5 hasta que la condición booleana no se cumpla y el ciclo corte.

> Esto nos da como resultado que se muestran en consola los números 1, 2 y 4, la condición corta en `i < 5` pero el `continue` hace que se saltee el 3`.

#_CLASE 4_

# ¿Qué es una función?

La funciones son porciones de código que se pueden pensar como un sub algoritmo dentro de nuestro programa, que puede tener parámetros de salida y de entrada. Las funciones son esenciales ya que nos permiten encapsular una parte de nuestro algoritmo y poder así reutilizarlo o también ordenar nuestro código.

# Función

Una función se declara usando la palabra reservada `function`, espacio el nombre (se aplican las mismas reglas que para los nombres de variables), seguido de paréntesis y corchetes `(){}`, dentro de los paréntesis ingresamos los argumentos de la función y dentro de los corchetes el código que queremos que se ejecute cuando llamamos a la función. Para invocar una función usamos el nombre seguido de paréntesis `()` y dentro de los paréntesis ponemos los parámetros de la función que le pasamos a la función. Las funciones pueden devolver valores de retorno usando la palabra reservada `return` espacio el valor que queremos devolver, en caso de no hacerlo devuelven indefinido `undefined`.

- Ej: Función sin argumentos de entrada ni valores de retorno:

```js
function sayHello() {
  console.log('Hola!')
}

sayHello() // Muestra en consola el string 'Hola!'

var result = sayHello() // Muestra en consola el string 'Hola!' y asigna undefined a la variable result1
```

> La función `sayHello` no recibe argumentos y cuando es invocada devuelve `undefined` que en el segundo caso se lo asigno a `result` y en el segundo solo la invoco sin asignar. En ambos casos muestra en consola `Hola!`.

# Parámetros que recibe una función

Los parámetros son aquellos valores que una función tiene definidos dentro de la misma, y que recibe al momento de iniciar la ejecución. Esto nos permite que una misma función pueda arrojar varios valores como resultado simplemente cambiando los parámetros de entrada.

- Ej: Función con argumentos de entrada, pero sin valores de retorno:

```js
function sayMyName(yourName) {
  console.log('Tu nombre es ' + yourName)
}

var myName = 'Mónica'

sayMyName(myName) // Muestra en consola el string 'Tu nombre es Mónica'

sayMyName('Heisenberg') // Muestra en consola el string 'Tu nombre es Heisenberg'

sayMyName(2) // Muestra en consola el string 'Tu nombre es 2'
```

> La función `sayMyName` recibe como argumento una variable `yourName` y cuando es invocada muestra en consola un mensaje que contiene el string `Tu nombre es` seguido de la variable que recibió como argumento. Es importante notar acá que no es necesario que la variable que le pasamos a la función tenga el mismo nombre que lleva dentro de la función. Por otro lado en el ejemplo también se ve como puedo usar la misma función para imprimir distintos mensajes al llamarla con distintos parámetros.

# Valor de retorno de una función

El valor de retorno de una función lo que devuelve la función al ser ejecutada. Si la función no tiene valor de retorno devuelve `undefined`.

- Ej: Función con argumentos de entrada y valor de retorno:

```js
function sum(value1, value2) {
  var sum = value1 + value2
  return sum
}

var result = sum(5, 4) // Calcula la suma de 5 + 4 y asigna 9 a la variable result

var text = sum('Hola ', 2) // Calcula la suma de 'Hola' + 2 y asigna el string 'Hola 2' a la variable text
```

> La función `sum` recibe dos argumentos y devuelve la suma como valor de retorno. Es importante tener en cuenta que en este caso si le pasamos dos números va a hacer la suma algebraica, pero si al menos uno es un string los concatena, porque la función recibe valores, pero no verifica que sean de tipo number.

```js
function message(firstName, lastName) {
  var message = 'Hola ' + firstName + ' ' + lastName
  return message
}

var text = message('Mónica', 'Perez') // Calcula el mensaje y asigna el string 'Hola Mónica Perez' a la variable text

console.log(text) // Muestra en consola el string 'Hola Mónica Perez'
```

> La función `message` recibe como argumentos `firstName` y `lastName` y devuelve un string con un mensaje de saludo, en este caso `Hola Mónica Perez`.

# Scope global y scope local

El Scope define que puede usar un algoritmo dentro de nuestro programa y que no, todas las partes de nuestro programa no tienen acceso a las mismas variables.

## Scope global

Todas las variables o funciones que definamos dentro de nuestro archivo principal (index.js) o por fuera de cualquier función existen en el Scope global y son visibles para todos los elementos de nuestro programa.

- Ej:

```js
var name = 'Juan'

function showMessage() {
  console.log(name)
}

showMessage() // Muestra en consola 'Juan'
```

> La función `showMessage` tiene acceso a la variable `name`, por que la misma fue definida dentro del Scope global de nuestro programa.

## Scope local

Todas las variables o funciones que definamos dentro de una función solo son accesibles dentro de la misma o de las funciones que contiene.

- Ej:

```js
function showMessage() {
  var name = 'Juan'
  console.log(name)
}

showMessage() // Muestra en consola 'Juan'

console.log(name) // Muestra un error indicando que name no esta definida
```

> La función `showMessage` tiene acceso a la variable `name`, por que la misma fue definida dentro de su scope, pero por fuera de la misma la variable `name` no existe.

#_CLASE 5_

# Objetos

Un objeto en programación es una entidad independiente que nos permite agrupar propiedades y/o comportamientos igual que los objetos de la vida real. Algunos ejemplos son:

- Un auto que tiene por propiedades color, marca, modelo y por comportamiento o métodos (como se le llama en JavaScript) arrancar, frenar o girar.
- Un usuario que tiene por propiedades nombre, apellido, email y por métodos mostrar su información o su edad.

Los objetos en JavaScript se hacen mediante funciones especiales llamadas constructoras que funcionan como las clases de lenguajes orientados a objetos. Se crean nuevos objetos al instanciarlos o crearlos mediante la palabra reservada `new` logrando un nuevo objeto totalmente distinto a otra instancia del mismo, pero que comparte métodos y propiedades definidos en la función constructora. Cualquier función de JavaScript se puede usar como función constructora por lo cual se aplican las mismas reglas que vimos hasta ahora más algunas particularidades que vamos a ir viendo.

```js
// Defino la función constructora
function People() {}

// Genero una nueva instancia del objeto People
var people1 = new People()
```

## Función constructora y new

Una función constructora se declara usando la palabra reservada `function`, espacio el nombre (se aplican las mismas reglas que para los nombres de variables, con la salvedad de que por convención se usa en PascalCase es decir empezando con la primera letra mayúsculas y siguiendo el resto de las palabras también con la primera letra en mayúscula), seguido de paréntesis y corchetes `(){}`, dentro de los paréntesis ingresamos los argumentos que se van a usar en la construcción y dentro de los corchetes el código que va a incluir los métodos y propiedades del objeto. Para crear una instancia de un objeto con nuestra función constructora usamos la palabra reservada `new`, espacio, el nombre de la función, seguido de paréntesis `()` y dentro de los paréntesis ponemos los parámetros con los cuales vamos a construir nuestro objeto.

```js
function User(name) {
  // Acá se definen los métodos y propiedades de los objetos
}

var user1 = new User('Mónica') // Esto crea un nuevo objeto de tipo User, que recibe como parámetro al momento de su construcción el string 'Mónica'
var user2 = new User('Mónica') // Esto crea un nuevo objeto de tipo User, que recibe como parámetro al momento de su construcción el string 'Mónica'
var user3 = new User('Pedro') // Esto crea un nuevo objeto de tipo User, que recibe como parámetro al momento de su construcción el string 'Pedro'

user1 === user2 // Esto devuelve false, porque las instancias son distintas por mas que reciban los mismos parámetros

user1 === user3 // Esto devuelve false, porque las instancias son distintas
```

> La función constructora `User` recibe como argumento una variable `name` y cuando es instanciada mediante la palabra `new` crea un nuevo objeto usuario que es asignado a la variable `user1`, se repite este paso con `user2`y `user3`. Estos objetos no tiene ningún método, pero si tienen una propiedad privada que es la variable `name`. En el código creamos tres instancias de objetos `User`, usando la misma función constructora para comprobar que siempre crea objetos nuevosy distintos entre sí, sin embargo todos comparten los mismos métodos y propiedades.

[Más info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)

# Propiedades de un objeto

Las propiedades de los objetos son todas aquellas variables que recibe o están definidas dentro de la función constructora. Estas propiedades pueden ser publicas o privadas dependiendo de como fueron definidas.

## Propiedades privadas

Las propiedades privadas son aquellas variables que la función constructora tiene y usa dentro de su definición, pero que no pueden ser modificadas ni leídas desde fuera del scope de la función.

```js
function User(name) {
  var modified = false

  console.log('Hola mi nombre es ', name)
}

var user = new User('Mónica') // Muestra en consola 'Hola mi nombre es  Mónica', porque ejecuta el console.log definido dentro de la función constructora.

console.log(user.modified) // Muestra en consola undefined

console.log(user.name) // Muestra en consola undefined

user.name = 'Pato'
```

> La función constructora `User` recibe como argumento una variable `name` y cuando es instanciada mediante la palabra `new` crea un nuevo objeto usuario que es asignado a la variable `user`. Este objeto tiene las propiedades privadas `name`, que fue recibida como parámetro y `modified` que es declarada dentro de la función. Al tratar de mostrar en consola el valor de `modified`, vemos que nos devuelve `undefined` porque solo es visible dentro del scope de la función, lo mismo sucede al querer mostrar en consola el valor de `name`. Cuando hacemos `user.name = 'Pato'` lo que estamos haciendo es definir una propiedad publica `name` para `user` y asginandole el valor `Pato`, pero la variable `name` que usa dentro de la función sigue guardando el valor `Mónica`.

## Propiedades publicas

Las propiedades publicas son aquellas que se pueden tanto leer como modificar por fuera del scope de la función constructora. Para poder declarar estas variables dentro de la función constructora tenemos que usar la palabra reservada `this`, seguido de `.` y el nombre de la propiedad que queremos hacer publica.

```js
function User(name) {
  this.firstName = name

  this.age = 45
}

var user = new User('Mónica')

console.log(user.name) // Muestra en consola undefined

console.log(user.firstName) // Muestra en consola el string 'Mónica'

console.log(user.age) // Muestra en consola el number 45

user.firstName = 'Pato'

console.log(user.firstName) // Muestra en consola el string 'Pato'
```

> La función constructora `User` recibe como argumento una variable `name` y cuando es instanciada mediante la palabra `new` crea un nuevo objeto usuario que es asignado a la variable `user`. Este objeto tiene las propiedades publicas `firstName`, que se inicializa con el valor recibido en la variable `name` y `age` que es declarada dentro de la función. Al tratar de mostrar en consola el valor de `name`, vemos que nos devuelve `undefined` porque solo es visible dentro del scope de la función, pero cuando mostramos `firstName` o `age` nos muestra el valor porque son propiedades publicas. Esto también nos permite modificar el valor de `firstName` y asignarle el nuevo valor `Pato`, para luego mostrarlo en consola.

[Más info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

# Métodos de los objetos

Los métodos de los objetos son todas aquellas funciones definidas dentro de la función constructora o por fuera en el prototype. Estos métodos pueden ser públicos o privados dependiendo de como fueron definidos.

## Métodos privados

Los métodos privados son aquellas que la función constructora tiene definidos y usa dentro de su definición, pero que no pueden ser llamados por fuera del scope de la función. Estos métodos tienen acceso a las propiedades privadas de la función, pero no las publicas porque el contexto del `this` se define luego de instanciar el objeto con la palabra `new`.

```js
function User(name) {
  this.age = 45

  function showInfo() {
    console.log('Hola mi nombre es ', name, ' y mi edad es ', this.age)
  }

  function addYear() {
    this.age = this.age + 1
  }

  showInfo()

  addYear() // Esta función no cambia la propiedad publica age, porque se llama al crear el objeto.
}

var user = new User('Mónica') // Muestra en consola 'Hola mi nombre es  Mónica y mi edad es undefined',
// porque showInfo se ejecuta dentro de la función constructora al momento de generar el objeto.

console.log(user.age) // Muestra en consola el number 45

user.addYear() // Muestra el error user.addYear is not a function y rompe el código
```

> La función constructora `User` recibe como argumento una variable `name` y cuando es instanciada mediante la palabra `new` crea un nuevo objeto usuario que es asignado a la variable `user`. Este objeto tiene la propiedad publica age y los métodos privados `showInfo` y `addYear`. Estos métodos pueden ser llamados dentro de la función y se ejecutan, pero no van a modificar ni mostrar las propiedades publicas definidas en el `this`. Al mostrar en consola `user.age` vemos que el método `addYear` no pudo modificar la propiedad publica `age`, al igual que el método `showInfo` no pudo mostrarla en consola. Lo otro que también sucede es que al tratar de llamar al método `addYear` por fuera de la función constructora el código se rompe generando un error.

## Métodos públicos

Los métodos públicos son aquellas que la función constructora tiene definidos y agregados en el `this`, permitiendo que sean llamados por fuera de la función. Estos métodos tienen acceso a las propiedades privadas de la función y también las publicas, porque son llamados luego de instanciar el objeto con la palbra `new` y definir el contexto de `this`.

```js
function User(name) {
  this.age = 45

  this.showInfo = function() {
    console.log('Hola mi nombre es ' + name + ' y mi edad es ' + this.age)
  }

  this.addYear = function() {
    this.age = this.age + 1
  }
}

var user = new User('Mónica') // Crea una nueva instancia de un objeto User

console.log(user.age) // Muestra en consola el number 45

user.addYear() // Agrega uno a la propiedad publica age

user.showInfo() // Muestra en consola 'Hola mi nombre es Mónica y mi edad es 46'
```

> La función constructora `User` recibe como argumento una variable `name` y cuando es instanciada mediante la palabra `new` crea un nuevo objeto usuario que es asignado a la variable `user`. Este objeto tiene la propiedad publica age y los métodos publicos `showInfo` y `addYear`. Estos métodos pueden ser llamados por fuera de la función y se ejecutan, permitiendo leer y modificar las propiedades publicas y privadas de la función constructora. Cuando ejecutamos el método `addYear` y luego el método `showInfo` vemos que pueden acceder tanto a la propiedad privada `name`, como a la publica `age` y modificarla.

[Más info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

#*CLASE 6*

# typeof

Al aplicar el operador `typeof` sobre una variable este nos devuelve un `string` que indica el tipo de valor contenido en la misma, siguiendo la siguiente tabla:


| Tipo           | Resultado      |
|:--------------:|:--------------:|
| `Undefined`    | ``undefined`   |
| `Null`         | `'object'`     |
| `Boolean`      | `'boolean'`    |
| `Number`       | `'number'`     |
| `String`       | `'string'`     |
| `Function`     | `'function'`   |
| `Object`       | `'object'`     |

Como vemos en la siguiente tabla no todos los tipos de valores están contemplados, como es el caso de los Array. Pero para validar que un elemento sea tipo `string` o `number` nos sirve y nos permite poder usar los métodos correspondientes a esos tipos de variables.

```js
var firstName = 'Ana'

typeof firstName === 'string' // Devuelve true

var number = 2

typeof number === 'string' // Devuelve false
```

> Al validar mediante el `typeof` la variable `firstName` y luego usar el estrictamente igual puedo verificar que el tipo de valor que contiene es string, en el caso de `number` valido lo contrario. Esto me permite identificar que métodos y propiedades podre usar en cada caso.

# Métodos de String

Al asignar un valor de tipo string a una variable implícitamente estamos creando un objeto de tipo String. Esto hace que dicha variable tenga acceso a propiedades y métodos del objeto String de JavaScript que nos permiten hacer distintas operaciones de manera más sencilla. Algunos de ellos son:

## Propiedad length

- La propiedad `length` indica la cantidad de caracteres que tiene nuestro String en formato de número entero, si esta vacío devuelve 0.

```js
var text = 'Hola soy germán'

console.log(text.length) // Esto muestra en consola el número 15
```

> Creamos implícitamente un objeto String y al obtener la propiedad `length` nos devuelve la longitud del texto, en este caso 15 caracteres.

## Método indexOf

- El método `indexOf` nos permite saber la posición de un string que le pasamos por parámetro dentro de nuestro objeto String. Si no lo encuentra devuelve -1, si lo encuentra al igual que los Array me devuelve la posición empezando desde `0` para el primer carácter. Como las comparaciones que venimos haciendo hasta ahora esta también respeta mayúsculas y minúsculas.

```js
var text = 'Hola soy germán'

console.log(text.indexOf('soy')) // Esto muestra en consola el número 5

console.log(text.indexOf('Soy')) // Esto muestra en consola el número -1
```

> En el primer caso encuentra el string `'soy'` en la posición número 5 del Array `text`, y en el segundo caso como el string es `'Soy'` con S mayúscula no lo encuentra y devuelve -1.

## Método toLowerCase

- El método `toLowerCase` nos devuelve el mismo String, pero con todos los caracteres en minúsculas. Importante notar que no modifica el String original.

```js
var text = 'Hola soy GERMÁN'

console.log(text.toLowerCase()) // Esto muestra en consola el 'hola soy germán'

console.log(text) // Esto muestra en consola 'Hola soy GERMÁN'
```

> Al usar el método `toLowerCase` obtenemos el mismo String pero en letras minúsculas y luego comprobamos que no se modifica el String original.

## Método toUpperCase

- El método `toUpperCase` nos devuelve el mismo String, pero con todos los caracteres en mayúsculas. Importante notar que no modifica el String original.

```js
var text = 'Hola soy GERMÁN'

console.log(text.toUpperCase()) // Esto muestra en consola el 'HOLA SOY GERMÁN'

console.log(text) // Esto muestra en consola 'Hola soy GERMÁN'
```

> Al usar el método `toUpperCase` obtenemos el mismo String pero en letras mayúsculas y luego comprobamos que no se modifica el String original.

## Método split

- El método `split` nos permite separar un String mediante un carácter pasado por parámetro en un Array, donde cada posición del Array va a contener las partes del String en el mismo orden. Importante notar que no modifica el String original.

```js
var text = 'Hola soy GERMÁN'

var splitedText = text.split(' ') 

console.log(splitedText) // Esto muestra en consola el Array ['Hola', 'soy', 'GERMÁN']

console.log(text) // Esto muestra en consola 'Hola soy GERMÁN'
```

> Al usar el método `split` pasando le como parámetro el carácter espacio (' ') este nos devolvió un Array con los tres substring que quedaron de la variable `text` original y luego comprobamos que no se modifica el String original.


```js
var numbers = '1,2,3,4,5'

var splitedNumbers = numbers.split(',')

console.log(splitedNumbers) // Esto muestra en consola el Array ['1', '2', '3', '4', '5']
```

> En este caso al usar el método `split` pasando le como parámetro el carácter coma (',') este nos devolvió un Array con los substring que quedaron de dividir la variable `number`. Importante notas que los subtrings son de tipo string también.

# Array.isArray()

El objeto Array tiene un método llamado `.isArray()` que nos permite evaluar si un valor es Array o no, el método devuelve `true` en caso correcto y `false` si el valor no es un Array. Esto nos va a permitir validar un valor para luego usar los métodos o propiedades de Array sin riesgo de errores.


```js
var numbers = [1, 2, 3]

Array.isArray(numbers) // Devuelve como resultado true

var obj = {}

Array.isArray(obj) // Devuelve como resultado false
```

> Al aplicar el método `.isArray()` puedo comprobar que la variable `numbers` contiene un Array, pero que la variable `obj` no. Esto me permite identificar que métodos y propiedades podre usar en cada caso.

#	Métodos de Array

Al asignar un valor de tipo Array a una variable implícitamente estamos creando un objeto de tipo Array. Esto hace que dicha variable tenga acceso a propiedades y métodos del objeto Array de JavaScript que nos permiten hacer distintas operaciones de manera más sencilla. Algunos de ellos son:

## Propiedad length

- La propiedad `length` indica la cantidad de elementos que tiene nuestro Array en formato de número entero, si esta vacío devuelve 0.

```js
var numbers = [1,2,3,4]

console.log(numbers.length) // Esto muestra en consola el número 4
```

> Creamos implícitamente un objeto Array y al obtener la propiedad `length` nos devuelve la cantidad de elementos que contiene.

## Método push

- El método `push` nos permite agregar un elemento al final de un Array, modifican el original.

```js
var numbers = [1,2,3,4]

numbers.push(5)

console.log(numbers) // Muestra en consola [1, 2, 3, 4, 5]
```

> El método `push` modifica el Array `numbers` agregandole al final el número 5 pasado por parámetro.

## Método toString

- El método `toString` convierte un Array en un string cuyos valores están separados por comas (','). Importante notar que no modifica el Array original.

```js
var numbers = [1,2,3,4]

var stringNumbers = numbers.toString()

console.log(stringNumbers) // Muestra en consola '1,2,3,4'
```

> El método `toString` devuelve como resultado el Array `numbers` convertido a un String separado por comas, pero sin modificar el original. Este método es el empleado por defecto cuando queremos concatenar un string con un Array usando el operado `+`.

## Método join

- El método `join` convierte un Array en un string cuyos valores están separados por comas el valor que le paso por parámetro al método. Importante notar que no modifica el Array original.

```js
var numbers = [1,2,3,4]

var stringNumbers = numbers.join(' ')

console.log(stringNumbers) // Muestra en consola '1 2 3 4'
```

> El método `join` devuelve como resultado el Array `numbers` convertido a un String separado por espacios (' '), pero sin modificar el original. Si no le paso ningún parámetro lo separa con comas como el método `toString`.

## Método splice

- El método `splice` nos permite modificar una Array eliminando elementos del mismo. El método recibe como primer parámetro el indice a partir del cual eliminar y como segundo parámetro el número de elemento a eliminar.

```js
var numbers = [1,2,3,4]

numbers.splice(2,1)

console.log(numbers) // Muestra en consola [1,2,4]
```

> El método `splice` elimina un elemento desde la posición 2 del Array, modificando el original.


## Método slice

- El método `slice` nos hacer una copia de una parte de un Array, el método recibe como primer parámetro el indice a partir del cual empezar la copia y como segundo parámetro el indice final de la copia (desde donde, hasta donde) el final no esta incluido. Si no le pasamos ningún parámetro devuelve una copia del Array completo (shallow copy).

```js
var numbers = [1,2,3,4]

var numbersCopy1 = numbers.slice(2,4)

console.log(numbersCopy1) // Muestra en consola [3,4]

var numbersCopy2 = numbers.slice()

console.log(numbersCopy2) // Muestra en consola [1,2,3,4]

numbers === numbersCopy2 // Devuelve false
```

> El método `slice` devuelve una copia del Array `numbers` desde la posición 2 hasta la 3 (el 4 no está incluido), esa copia la guardo en la variable `numbersCopy1`. En el segundo caso hace una copia completa del Array `numbers`, esa copia la guardo en la variable `numbersCopy2` y luego la comparo para verificar que son dos Array distintos.


## Método sort

- El método `sort` ordena un Array usando la tabla ASCCI como parámetro de orden.

```js
var numbers = [2,3,1,4]

numbers.sort()

console.log(numbers) // Muestra en consola [1,2,3,4]
```

> El método `sort` modifica el Array `numbers` ordenando lo de menor a mayor.

- El método `sort` también admite una función de comparación que según el resultado que devuelva va ordenando los elementos. Si es negativo van primero, cero los deja en la posición en la que están y positivos los mueve adelante.

```js
var numbers = [4, 2, 5, 1, 3]

numbers.sort(function(a, b) {
  return b - a
})

console.log(numbers) // Muestra en consola [5, 4, 3, 2, 1]
```

> En este caso al usar la función podemos ordenarlo en orden inverso al caso default.

#*CLASE 7*

# SessionStorage

- El sessionStorage es un objeto global que tiene el navegador y que nos va a permitir persistir información durante la sesión que el usuario tenga en la página. La sesión va a durar hasta que el usuario cierre la pestaña o el navegador, cuando lo haga eso va a borrar la información guardada en este objeto. El espacio de almacenamiento es de aproximadamente 2.5 MB a 5 MB depende del navegador que estemos usando y actualmente esta ampliamente soportado. Este objeto suele ser un buen reemplazo de la Cookies para algunos de sus casos de uso, como también para almacenar datos como el Token de acceso o configuraciones del usuario. Al igual que un objeto la forma de ordenar los datos es con un par `key: value`, solo que en este caso el `value` se guarda siempre en formato `string`.

# LocalStorage

- El localStorage es un objeto global que tiene el navegador con las mismas características que tiene el SessionStorage, la única diferencia es que su tiempo de duración es ilimitado por lo cual la información se mantiene guardada aun cuando se cierre el navegador o la pestaña.

## Verlo en las devTools

- El sessionStorage y el localStorgae puede verse en las devTools de Chorme en la solapa `Application` como muestra la siguiente foto

![LocalStorage](https://github.com/adrianc4/programadorWeb-base/blob/master/Teoria%20plataforma/07_01_captura_localStorage.png?raw=true)

> Acá podemos ver los valores que ya tiene cargados así como los nuevos que vayamos agregando, pisando o eliminando.

## Métodos

- Tanto el SessionStorage como LocalStorage tiene los mismos métodos principales.

### SetItem

- El método `setItem(key, value)` recibe como parámetro una key y un valor y como resultado guarda el valor en la key pasada como parámetro, si ya existe un valor lo pisa.

```js
var list = '[ "Juan", "Pedro", "María" ]'

sessionStorage.setItem('list', list)

localStorage.setItem('list', list)
```

> El primer método guarda en el sessionStorage el JSON que representa un Array de nombres en la key `list`, el segundo método hace lo mismo pero en el localStorage.

### GetItem

- El método `getItem(key)` recibe como parámetro una key y devuelve el valor almacenado en esa key, en caso de que no exista devuelve `null`

```js
var list = localStorage.getItem('list')

console.log(list) // Muestra en consola el JSON que guardamos anteriormente '[ "Juan", "Pedro", "María" ]'
```

> Usamos el método getItem para recuperar el valor guardado en el localStorage, bajo la key `list`.

### RemoveItem

- El método `removeItem(key)` recibe como parámetro una key y elimina el valor almacenado en esa así como la key.

```js
localStorage.removeItem('list')
```

> Usamos el método removeItem para eliminar tanto la key como el valor que guardamos anteriormente.

# ¿Qué es un JSON?

- JSON (JavaScript Object Notation) es una forma de escribir objetos de JavaScript y sus propiedades como texto plano, esto significa que aunque contengan los valores de un objeto de JavaScript no poseen por ejemplo sus métodos. Al transformar los objetos de JavaScript a JSON vamos a poder almacenarlos y compartirlos mediante cualquier sistemas que permita almacenar texto, para luego volverlos a convertir a JavaScript y así usarlos en nuestro código. Los dos casos de uso que vamos a ver son para poder almacenar datos en el SessionStrage o LocalStorage y el otro caso es para enviar o recibir data de servidores, actualmente es el formato standard para las comunicaciones.

# JSON.stringify

- Este método nos va a permitir convertir objetos de JavaScript a JSON, para de esta manera poder guardarlos en el LocalStorage o enviarlos a través de una llamada HTTP a una API. El método recibe como parámetro un objeto de JavaScript y devuelve un JSON en formato string.

```js
var obj = {
  firstName: 'Adrián',
  lastName: 'Ferré',
  age: 29
}

var stringifiedObj = JSON.stringify(obj)

console.log(stringifiedObj) // Esto muestra en consola el string '{"firstName":"Adrián","lastName":"Ferré","age":29}'
```

> Al aplicar el método stringify no se modifica el objeto original, sino que se genera un string cuyas propiedades coinciden con las del objeto pasado como parámetro.

# JSON.parse

- Este método nos va a permitir convertir JSON a objetos de JavaScript, al hacer el proceso inverso del `JSON.stringify()` nos permite poder volver a usar en nuestro código el elemento. Esto lo vamos a utilizar tanto para recuperar los datos del LocalStorage como para recibir información de un API.

```js
var obj = {
  firstName: 'Adrián',
  lastName: 'Ferré',
  age: 29
}

var stringifiedObj = JSON.stringify(obj)

var parsedObj = JSON.parse(stringifiedObj)

console.log(parsedObj) // Esto muestra en consola el objeto {firstName: "Adrián", lastName: "Ferré", age: 29}
```

> Al aplicar el método parse no se modifica el string original, sino que se genera un objeto JavcaScript nuevo cuyas propiedades coinciden con las del string JSON.

#*CLASE 8*

# Árbol de nodos

- El árbol de nodos o DOM es un estándar definido por la W3C a través del cual se convierte el HTML de nuestra página en una serie de objetos que se pueden manipular usando código JavaScript. Estos objetos llamados nodos representan elementos en nuestro HTML, como pueden ser etiquetas `(<p>, <h1>, <span>, etc.)`, atributos (href, name, value, etc.) o textos. Cada uno de estos nodos se puede manipular de manera independiente y también agregar o eliminar dentro del árbol, para de esta manera cambiar el contenido HTML que está viendo el usuario.

## Ejemplo de un árbol de nodos de un página HTML

![Árbol de nodos](https://github.com/adrianc4/programadorWeb-base/blob/master/Teoria%20plataforma/08_01_arbol_de_nodos.gif?raw=true)

# Objeto document

- El árbol de nodos comienza en un objeto o nodo principal llamado `document`, es a partir de este nodo que vamos a acceder y a manipular todos los otros. El objeto `document` es de alto nivel, como lo es el `Array` o el `JSON` por lo cual la forma de emplear sus métodos es similar al igual que antes hacíamos `JSON.stringify()`, ahora usaremos métodos como `document.getElementById()`.

#	Acceso a los nodos

- Existen varios métodos para acceder a los nodos que utilizan distintas formas de identificarlos puede ser a través del Id, de la clase, del nombre de la etiqueta, etc. Por lo cual con sabiendo alguno de esos datos de nuestro elemento HTML vamos a poder acceder a ese nodo y manipularlo para poder mostrar en pantalla datos dinámicos creados en JavaScript.

## Acceso a los nodos por Id

- El método que vamos a emplear para acceder a un nodo sabiendo su Id es `getElementById()`, este método recibe como parámetro un Id en formato string y devuelve como resultado un solo nodo, porque el Id debería ser único en toda la página.

*Supongamos nuestra página con el siguiente HTML*

```html
<h1 id="main-title"></h1>
```

```js
var titleNode = document.getElementById('main-title')

titleNode.innerHTML = 'Al fin voy a ver algo en mi página'
```

> Este código lo que va a hacer es buscar en la página el elemento HTML con el Id `main-title`, luego voy a guardarlo en la variable `titleNode` y le voy a pedir mediante la propiedad `innerHTML` que el contenido del nodo sea el string 'Al fin voy a ver algo en mi página'. De esta manera el resultado en nuestra pagina es que el elemento de mi página queda así -> `<h1 id="main-title">Al fin voy a ver algo en mi página</h1>` logrando mostrarle al usuario un mensaje en el HTML pero empleando código JavaScript para lograrlo.


## Acceso a los nodos por clase

- El método que vamos a emplear para acceder a un nodo sabiendo su clase es `getElementsByClassName()`, este método recibe como parámetro una clase en formato string y devuelve como resultado array de nodos, porque pueden existir varios nodos con la misma clase.

*Supongamos nuestra página con el siguiente HTML*

```html
<p class="paragraph"></p>
<p class="paragraph"></p>
<p class="paragraph"></p>
```

```js
var paragraphsNodes = document.getElementsByClassName('paragraph')

paragraphsNodes[0].innerHTML = 'Soy el párrafo numero uno'
paragraphsNodes[1].innerHTML = 'Soy el párrafo numero dos'
paragraphsNodes[2].innerHTML = 'Soy el párrafo numero tres'
```

> Este código lo que va a hacer es buscar en la página todos los elementos HTML con la clase `paragraph`, luego voy a guardarlos en la variable `paragraphsNodes` y le voy a pedir mediante la propiedad `innerHTML` que el contenido del elemento cero del Array sea el string 'Soy el párrafo numero uno', luego voy a hacer lo mismo con el elemento uno del Array pero pasando le el string 'Soy el párrafo numero dos' y por último con el elemento dos del Array y el string 'Soy el párrafo numero tres'. De esta manera los elementos `<p>` de nuestra página quedan así:

```html
<p class="paragraph">Soy el párrafo numero uno</p>
<p class="paragraph">Soy el párrafo numero dos</p>
<p class="paragraph">Soy el párrafo numero tres</p>
```
#	Crear y eliminar nodos

- Para poder agregar o eliminar elementos de nuestro HTML existen distintos métodos o propiedades que podemos utilizar, nosotros vamos a ver algunos a continuación.

## Crear un elemento o etiqueta html

- Con el método `createElement()` vamos a poder crear etiquetas de html, este método recibe como parámetro el nombre de la etiqueta en formato string y devuelve como resultado el nodo.

```js
var paragraphNode = document.createElement('p')
```

> El método recibe como parámetro el nombre de la etiqueta que queremos crear (no se incluyen los menor `<` y mayor `>` de apretura de la etiqueta), y nos devuelve el nodo ya creado para que luego lo podamos modificar o agregar directamente al DOM. Un dato importante es que si no lo agregamos al documento nunca lo vamos a ver en pantalla.

## Cambiar el contenido de un elemento

- La propiedad `innerHTML` nos permite cambiar el contenido de un nodo asignandole un string, esto pisa o elimina cualquier otro elemento dentro del nodo.

```js
var paragraphNode = document.createElement('div')

paragraphNode.innerHTML = '<p>Soy un párrafo</p>'
```

> Primero creamos un nodo de etiqueta `<div>` con el método `createElement` y luego cambiamos su contenido al modificar la propiedad `innerHTML` y asignarle el `<p>Soy un párrafo</p>`, esto nos va dar como resultado un nodo con una etiqueta `div`, que adentro va a tener una etiqueta `p` con el texto 'Soy un párrafo'. Quería algo así:

```html
<div>
  <p>Soy un párrafo</p>
</div>
```

## Agregar un nodo dentro de otro

- El método `appendChild()` nos va a permitir agrega un nodo dentro de otro, recibe como parámetro un nodo y lo agrega dentro del elemento que llamo el método. Este método es muy útil para cuando queremos agregar elementos uno por uno, el caso típico es una lista que proviene de un Array de javaScript.

```js
var list = ['Elemento 1','Elemento 2','Elemento 3']

var listNode = document.createElement('ul')

var listItemNode

for(var i = 0; i < list.length; i++){
  listItemNode = document.createElement('li')

  listItemNode.innerHTML = list[i]

  listNode.appendChild(listItemNode)
}
```

> En este caso creo primero el nodo `ul` que va a contener a todos los elmentos de la lista y luego itero el Array `list` para crear un nuevo nodo `li` y agregarlo al `lu` en cada pasada del for. Esto daría como resultado lo siguiente:

```html
<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
</ul>
```

## Acceder al nodo padre

- Con la propiedad `parentNode` vamos a poder acceder al nodo padre de un nodo.

```html
<div>
  <p id="paragraph">Soy un párrafo</p>
</div>
```

```js
var paragraph = document.getElementById('paragraph')

paragraph.parentNode.innerHTML = '<h1>Soy un título</h1>'
```

> Al usar la propiedad `parentNode` accedo al nodo `div` pudiendo cambiar el contenido del mismo y reemplazarlo por el string `<h1>Soy un título</h1>`. Esto genera como resultado que el HTML quede:

```html
<div>
  <h1>Soy un título</h1>
</div>
```

## Remover un elemento hijo

- El método `removeChild()` nos permite eliminar un nodo que sea hijo de otro, el método recibe como parámetro el nodo que queremos eliminar. En combinación con el `parentNode` nos permite eliminar el mismo elemento que seleccionamos previamente.

```html
<div>
  <p id="paragraph">Soy un párrafo</p>
</div>
```

```js
var paragraph = document.getElementById('paragraph')

paragraph.parentNode.removeChild(paragraph)
```

> Al utilizar este método en combinación con la propiedad `parentNode` podemos eliminar el elemento en cuestión dejando como resultado el `<div></div>` vacío.

# Propiedades de los nodos

- Los nodos tiene propiedades o atributos (los mismo atributos de HTML) que pueden tanto devolver un valor como modificarse. Esto se puede hacer accediendo a la propiedad correspondiente de los nodos así como modificando esa propiedad. Los atributos o propiedades disponibles van a depender del tipo de elemento HTML que estemos manipulando.

```html
<h1 id="title"></h1>
```

```js
var id = document.getElementById('title').id

console.log(id) // Muestra en consola el string title

document.getElementById('title').id = 'pato'
```

> En el código vemos tanto como acceder al valor de la propiedad Id, así como modificarlo. El resultado final es que el HTML queda asi -> `<h1 id="pato"></h1>`



```html
<li id="list-item"></li>
```

```js
document.getElementById('text-input').className = 'list-group-item'
```

> En el código vemos como asigna la clase `list-group-item` el nodo `<li>`, esta clase se va agregar a otras que se encuentren en el nodo. El elemento quedaría así -> `<li id="list-item" class="list-group-item"></li>`


```html
<input type="text" id="text-input">
```

```js
var value = document.getElementById('text-input').value

console.log(value) // Muestra en consola el valor que haya ingresado el usuario en el  input

document.getElementById('text-input').value = ''
```

> En el código vemos tanto como acceder al valor de la propiedad value de un input que es el valor que el usuario haya ingresado en el campo. Depsués en la siguiente línea lo que hacemos es asignarle el string vacío para borrar lo que estuviera en el input.

#*CLASE 9*

# ¿Que son los eventos y para qué sirven?

Los eventos son notificaciones activadas por interacciones del usuario, el render del dom o eventos programados. Al suscribirnos a ciertos eventos como un click en un botón o la modificación de un input vamos a poder generar páginas que vayan respondiendo a estos y generando distintos flujos en nuestra aplicación. Existen dos formas de suscribirse a los eventos, como atributo en el HTML o semántica.

# Eventos como atributos

Para suscribirnos a un evento podemos usar un atributo en nuestro tag HTML con el nombre del manejador del evento y asignarle una función para ejecutar.

```html
<input type="button" onclick="showMessage()" />
```

```js
function showMessage(){
  console.log('El usuario hizo click')
}
```

> En este código al hacer click en el botón se va a mostrar un mensaje en consola que diga `'El usuario hizo click'`.

Si queremos que el mismo elemento se suscriba a más de un evento simplemente agregamos otro atributo para manejar ese nuevo evento en nuestro tag HTML y le asignamos otra función para ejecutar.

```html
<input type="button" class="btn-primary" onclick="showMessage()" onblur="showBlurMessage()" />
```

```js
function showMessage(){
  console.log('El usuario hizo click')
}

function showBlurMessage(){
  console.log('El usuario perdió el foco')
}
```

> En este código al hacer click en el botón se va a mostrar un mensaje en consola que diga `'El usuario hizo click'` y al perder el foco un mensaje que diga `'El usuario perdió el foco'`.

*La desventaja de esta forma es que suele ensuciar nuestro HTML si queremos suscribir nuestro botón a varios eventos porque cada uno es un atributo más, si encima a esto le agregamos que los elementos tienen sus propios atributos como clases o estilos el asunto empeora. Por este motivo a lo largo del curso vamos a utilizar la forma semántica.*

# Eventos semánticos

Para suscribirse a un evento de forma semántica vamos a buscar nuestro elemento con alguno de los métodos de `document` y le vamos a asignar al atributo encargado de manejar el evento la función que queremos que ejecute.

```html
<input type="button" id="button" />
```

```js
var button = document.getElementById('button')

button.onclick = showMessage

function showMessage(){
  console.log('El usuario hizo click')
}
```

> En este código al hacer click en el botón se va a mostrar un mensaje en consola que diga `'El usuario hizo click''`.

Si queremos registrar más de un evento simplemente le vamos asignando nuevas funciones a los manejadores de eventos que correspondan.

```html
<input type="button" id="button" />
```

```js
var button = document.getElementById('button')

button.onclick = showMessage

function showMessage(){
  console.log('El usuario hizo click')
}

button.onmouseover = showMessageOver

function showMessageOver(){
  console.log('El usuario paso el mouse sobre el botón')
}
```

> En este código al hacer click en el botón se va a mostrar un mensaje en consola que diga `'El usuario hizo click'` y al pasar el mouse por encima un mensaje que diga `'El usuario paso el mouse sobre el botón'`.

*En este caso el HTML se mantiene limpio porque solo es necesario el id en el HTML no importa cuantos manejadores de eventos le agreguemos al mismo elemento. Esto mantiene nuestro código más limpio y ordenado*

# Evento click

El evento click puede ser escuchado usando el manejador (on-event handler), asignando le una función a la propiedad `onclick` del nodo del DOM. Esta función se va a ejecutar cuando el usuario haga click sobre ese elemento. Este evento suele ser muy usado sobre botones para permitirle al usuario tomar acciones.

```html
<input type="button" id="button" />
```

```js
var button = document.getElementById('button')

button.onclick = showMessage

function showMessage(){
  console.log('El usuario hizo click')
}
```

> En este código al hacer click en el botón se va a mostrar un mensaje en consola que diga `'El usuario hizo click'`.

En todos los eventos se recibe un objeto `event` como primer parámetro que contiene propiedades que identifican que elemento fue el que recibió el click del usuario.

```html
<input type="button" id="button" />
```

```js
var button = document.getElementById('button')

button.onclick = showMessage

function showMessage(event){
  var inputNode =  event.target
  
  console.log('El usuario hizo click en el elmento con id ' + inputNode.id)
}
```

> En este código al hacer click en el botón se va a mostrar un mensaje en consola que diga `'El usuario hizo click en el elmento con id button'`.

# Evento blur

El evento blur puede ser escuchado usando el manejador (on-event handler), asignando le una función a la propiedad `onblur` del nodo del DOM. Esta función se va a ejecutar cuando el usuario haga pierda el foco sobre ese elemento. Este suele ser un evento muy usado para validar formularios.

```html
<input type="text" id="input-text" />
```

```js
var inputText = document.getElementById('input-text')

inputText.onblur = showMessage

function showMessage(){
  console.log('El usuario perdió foco')
}
```

> En este código al perder el foco en el input se va a mostrar un mensaje en consola que diga `'El usuario perdió foco'`.

En todos los eventos se recibe un objeto `event` como primer parámetro que contiene propiedades que identifican que elemento fue disparó el evento de perdida de foco. En este caso nos va a servir para levantar el valor del input en el momento que se perdió el foco.

```html
<input type="text" id="input-text" />
```

```js
var inputText = document.getElementById('input-text')

inputText.onblur = showMessage

function showMessage(event){
  var inputNode =  event.target

  console.log('El usuario perdió foco y el input tiene el valor ' + inputNode.value)
}
```

> En este código al hacer click en el botón se va a mostrar un mensaje en consola que diga `'El usuario perdió foco y el input tiene el valor <valor de input en ese momento>'`.

#*CLASE 10*



