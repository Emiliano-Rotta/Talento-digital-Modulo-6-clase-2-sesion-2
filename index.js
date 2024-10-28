//Repaso de la clase del viernes (Asincronismo)

//funcion setTimeOut
console.log("inicio")
setTimeout(()=>{
    console.log("mensaje demorado")
},3000)
console.log("fin")


//Async
// async function obtenerPersonaje() {
//     try {
//         const response = await fetch("URL API")
//         const data = await response.json();
//         console.log(data)
//     } catch(error){
//         console.log(error)
//     }
// }

// obtenerPersonaje()

//fetch .then
// fetch("URL API")
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error))

//////////////////////////////////////////////////////////////////////////////////
// ¿QUÉ ES NPM? Es el gestor de paquetes de Node

//COMANDOS BÁSICOS

//npm init: permite inicializar un nuevo proyecto.

//npm install nombre-paquete: da la instrucción para la instalación de un paquete determinado

// npm uninstall express para desintalar express

//npm Audit: da la instrucción para auditar los paquetes instalados, e informar sobre sus posibles vulnerabilidades. 

//NODEMON: npm i nodemon y colocar en el package.json en la parte del script "dev": "nodemon index.js",
// npm run dev

// crear un archivo index.js luego colocar un console.log("hola"), iniciar npm (npm init), instalar y correr nodemon.