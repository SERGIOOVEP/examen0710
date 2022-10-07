/*
1. Usando la función filter en una sola línea coloca en un array las palabras que contienen "t" y/o "a" y están en posiciones impares.
array constante del que partimos: ["tierra", "loro", "alto", "otorgar", "cosa", "tumbona", "fresón", "tirar"]
*/


var arrayPalabras = ["tierra", "loro", "alto", "otorgar", "cosa", "tumbona", "fresón", "tirar"];


var palabrasImparesA = arrayPalabras.filter((palabra, numero) => (palabra.includes('a') || palabra.includes("t")) && (numero + 1) % 2 !== 0);

console.log(palabrasImparesA)





/*
Permite por medio de un formulario que el usuario puede insertar empleados y cambiar su nombre, apellido o ambos.

"Empleados":[
    { "Nombre": "John", "Apellido": "Doe" },
    { "Nombre": "Anna", "Apellido": "Smith" },
    { "Nombre": "Pedro", "Apellido": "Jones" }
]
*/
function enviar() {

var datoNombre = document.querySelector("#nombre").value
var datoApellido = document.querySelector("#apellidos").value
var datos = JSON.stringify([datoNombre, datoApellido])
localStorage.setItem("user", datos)

var nuevoObjeto = localStorage.getItem('user')
nuevoObjeto = JSON.parse(nuevoObjeto)

}

function recuperarDatos() {



}