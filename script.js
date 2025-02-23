//EJERCICIOS PARTE 1


//ejercicio 1
let nombre = "yeraldyn aros" ;
let edad = 29; 
let ciudad = "Garzon";
console.log("hola, mi nombres es " + nombre + ",tengo"+ edad + "años y vivo en" + ciudad + ".");

//ejercicio 2 
/*crea una variable llamada precio y asignale un valor decimal . luego crea otra variable llamada 
cantidad  y asignale un valor entero . muestra el tipo de variable en la consola
*/

let valor = 2.25;
let cantidad = 3; 

//escribir en una consola 
console.log(typeof precio);
console.log(typeof cantidad);
//escribir una alerta 
alert(typeof precio);
//escribir en un documento
document.write(typeof cantidad);
alert("lo lograste")





//EJERCICIOS PARTE 2

// 1 Una tienda ofrece un 25% de descuento por cada compra. Un cliente desea saber cuánto deberá pagar por su compra.

let precio = 20500 ;
let descuento = 0.25 ;
let montoDescuento = precio * descuento;
let total = precio - montoDescuento;

console.log("el precio de la blusa es " + precio + " ,pero tiene un descuemto del " + (descuento * 100) + " % , la blusa tiene un valor total de "  + total);


// 2. Suponga que un individuo desea invertir su capital en un banco y desea sabercuánto dinero ganara después de un mes si el banco paga a razón de 2% mensual.

let inversion = 158000;
let ganancia = 0.02;
let interesGanado = inversion * ganancia; 
let totalConGanancia = inversion + interesGanado;

console.log( "el capital invertido sera de: "  + inversion + " asi el interes ganado despues de un mes sera de : " + interesGanado + " %, por lo tanto el total con ganancia despues de un mes es: " +totalConGanancia );

/*3. Un alumno desea saber cuál será su calificación final en la materia de
Algoritmos. Dicha calificación se compone de los siguientes porcentajes:
a. 55% del promedio de sus tres calificaciones parciales.
b. 30% de la calificación del examen final.
c. 15% de la calificación de un trabajo final.*/ 

let calificacion1 = 4.5;
let calificacion2 = 3.5;
let calificacion3 = 4.3;
let examenFinal= 4.6;
let trabajoFinal = 5.0; 

let calificacionParciales = (calificacion1 + calificacion2 + calificacion3) /3;

let calificacionFinal = (calificacionParciales * 0.55) + (examenFinal * 0.30) + (trabajoFinal * 0.15);

console.log( "la calificacion final de la materia de algoritmos del alumno se calcula  sumando el  resultado de los parciales que es =" + calificacionParciales + ", mas la calificacion del examen final que es = " + examenFinal + " ,mas la calificacion del trabajo final que es = " + trabajoFinal + " nos da la calificacion final que es = " + calificacionFinal );


//4. El dueño de una tienda compra un artículo a un precio determinado. Obtener el precio en que lo debe vender para obtener una ganancia del 30%.

let precioArticulo = 10000;

let porcentajeGanancia = 0.30;

let precioVenta = ( precioArticulo * porcentajeGanancia);

let totalVenta = (precioArticulo + precioVenta);

console.log(" El precio del articulo comprado es " + precioArticulo + " y el porcentaje de la ganancia es del " +porcentajeGanancia * 100 + "%, por lo tanto el  precio del articulo para obtener la ganancia es de : " +totalVenta);


//5. Un taxi cobra por una carrera 15 mil pesos por kilómetro recorrido y 2 mil por minuto. Determine el monto a pagar por una carrera.

let tarifaKilometro = 15000;
let tarifaMinuto = 2000;
let kilómetros = 10;
let minutos = 40;

let costoTotal = (tarifaKilometro * kilómetros) + (tarifaMinuto * minutos);  

console.log("El costo total de la carrera es:" + costoTotal + "mil pesos");  

//6. Realizara un programa en el cual se van a leer tres números y determinar el cuadrado de cada uno de ellos.

let numero1 = 10;
let numero2 = 20;
let numero3 = 15; 

let cuadrado1 = numero1 * numero1; 
let cuadrado2 = numero2 * numero2;
let cuadrado3 = numero3 * numero3;

console.log("El del cuadrado de los 3 numeros 10, 20, 15, es:");
console.log("El cuadrado de " +numero1+ " es " +cuadrado1);  
console.log("El cuadrado de " +numero2+ " es " +cuadrado2);  
console.log("El cuadrado de " +numero3+ " es " +cuadrado3); 

/*En un hospital existen tres áreas: Ginecología, Pediatría, Traumatología. El
presupuesto anual del hospital se reparte conforme a la sig. tabla:
Área Porcentaje del presupuesto
Ginecología 40%
Traumatología 30%
Pediatría 30%*/

let presupuestoHospital = 100000000;
let porcentajeGinecologia = 0.40;
let porcentajeTraumatologia = 0.30;
let porcentajePediatria = 0.30; 

let presupuestoGinecologia = (presupuestoHospital * porcentajeGinecologia);
let presupuestoTraumatologia = (presupuestoHospital * porcentajeTraumatologia);
let presupuestoPediatria = (presupuestoHospital * porcentajePediatria);

console.log("A cada area del hospital le corresponde los siguientes presupuestos : ");
console.log("El presupuesto para Ginecologia es: " +presupuestoGinecologia);
console.log("El presupuesto para Traumatologia es: " +presupuestoTraumatologia);
console.log("El presupuesto para Pediatria es : " +presupuestoPediatria);

/*Tres personas deciden invertir su dinero para fundar una empresa. Cada una de
ellas invierte una cantidad distinta. Obtener el porcentaje que cada quien invierte
con respecto a la cantidad total invertida. */

let persona1 = 2000000;
let persona2 = 4000000;
let persona3 = 6000000;

let totalInvertido = (persona1 + persona2 + persona3);

let porcentaje1 = (persona1 / totalInvertido) * 100;
let porcentaje2 = (persona2 / totalInvertido) * 100;
let porcentaje3 = (persona3 / totalInvertido) * 100;

console.log("el porcentaje que invierte cada persona respecto a la cantidad total invertida es : ");
console.log("la persona 1 invirtio el " +porcentaje1+ "% en la empresa");
console.log("la persona 2 invirtio el " +porcentaje2+ "% en la empresa");
console.log("la persona 3 invirtio el " +porcentaje3+ "% en la empresa");

/*Realizar una calculadora con las operaciones básicas suma, división,
multiplicación y división.*/

let num1= 20;
let num2= 6;

let suma=(num1 + num2);
let resta=(num1 - num2);
let multiplicacion=(num1 * num2);
let división=(num1 / num2);

console.log("OPERACIONES BASICAS:");
console.log("El resultado de la suma de los numeros 20 + 6 es = " +suma);
console.log("El resultado de la resta de los numeros 20 - 6 es = " +resta);
console.log("El resultado de la resta de los numeros 20 * 6 es = " +multiplicacion);
console.log("El resultado de la resta de los numeros 20 / 6 es = " +división);











