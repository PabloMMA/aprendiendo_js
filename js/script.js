// Comentario de una sola linea
/*comentario multilinea para usarn en
varias linear, como porejmplo un bloque de código */

//variable que puede cambiar en el futuro
// let nombre = "Pablo";

// //error de usar const con un dato que cambia
// const apellido = "Meza";

// // esta variable "const" es la que se utiliza para valores que no modifican
// const IVA = 0.22;


// //Las variables "Let" se pueden declarar de dos formas
// //forma 1, es clarar la variable y darle una valor
// let edad = 38;
// //para cambiar el valor de una variable solo necesito nombrarla
// edad = 40;

// //forma 2, es crear la variable sin el valor
// let lugarDeNacimiento;
// //darle valor a una variable al mencionarla sin darselo al momento de crearla
// lugarDeNacimiento = "Paysandú"

// //las variables "const" se declaran solo de una manera, y se le da varlo al momento de declarla
// const PI = 3.14;

// let numeroA = 38;
// let numeroB = 1;

// let edadProximoAnio = numeroA + numeroB;

// let name1= "Pablo";
// let lastName=" Meza";

// let fullName = name1+lastName;

// let altura= 1.7;

// for (let i = 0; i < 10; i++) {
//     alert(i)
// }

// let buscarProducto = parseInt(prompt("Buscar Producto"));
// for (let i = 1; i<= 10; i++) {
//     // let resultado=ingresarNumero * i ;
//     // alert (ingresarNumero + " x " + i +" = "+ resultado);
//     if(i==5){
//         break;
//     }
//     alert (i)
// }


// Condicional 
let granCompra = parseInt(prompt('Cuantos items compro?'));

if (granCompra >= 10) {
    alert('Item adicional de reglao');
} else if (granCompra < 10 && granCompra >= 7) {
    alert('Aplicar 5% de credito en Voucher');
} else {
    alert("Sin beneficios")
} 

let descuento = "5%";
let opcion = prompt('Elegí una opción: 1- De cuento es mi descuento?. \n2 - \n Presioná S para finalizar.')


while (opcion != 's') {
    switch (opcion) {
        case '1':
            alert('Tu descuento es del ' + descuento);
            break;

        default:
            alert('esa no es una opción');
            break;
    }
    opcion = prompt('Elegí una opción: 1- Descuento. \n2 - \n Presioná S para finalizar.');
}