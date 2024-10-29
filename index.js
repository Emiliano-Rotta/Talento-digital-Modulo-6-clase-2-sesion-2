//Repaso de la clase del viernes (Asincronismo)

// const { Faker } = require("@faker-js/faker")

// //funcion setTimeOut
// console.log("inicio")
// setTimeout(()=>{
//     console.log("mensaje demorado")
// },3000)
// console.log("fin")


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

//npm list: da la instrucción para mostrar por la terminal, la lista de paquetes instalados.

// npm update: se utiliza para actualizar los paquetes que hayamos instalado

// npm outdated: imprime una lista con los paquetes desactualizados.

//////////////////////////////
//NODEMON: npm i nodemon y colocar en el package.json en la parte del script "dev": "nodemon index.js",
// npm run dev

// crear un archivo index.js luego colocar un console.log("hola"), iniciar npm (npm init), instalar y correr nodemon.


////////////////////////////////////////
// trabajo con Faker
//faker organiza sus métodos en categorías como name, address, internet, commerce, date, phone, entre otras.

// Supongamos que estás construyendo un sistema de comercio electrónico y necesitas crear datos ficticios para probar el inventario de productos. Puedes usar faker para crear una lista de productos con nombres, descripciones y precios de manera rápida:

const { faker } = require('@faker-js/faker')

const product = {
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price()
}
 
console.log(product)

// Consignas

// 1 Generar un nombre completo y una dirección de correo electrónico
// Crea un script que genere un nombre completo aleatorio y un correo electrónico utilizando @faker-js/faker. Muestra ambos datos en la consola.

// 2 Crear un perfil de usuario
// Crea un objeto que simule un perfil de usuario con los siguientes datos ficticios: nombre completo, correo electrónico, dirección de casa, ciudad, país, y número de teléfono. Muestra el objeto completo en la consola.

// 3 Generar lista de productos
// Escribe un script que genere una lista de 5 productos ficticios. Cada producto debe incluir un nombre, una descripción y un precio (puedes usar faker.commerce para esto). Muestra la lista completa en la consola.

// 4 Generar direcciones IP aleatorias
// Genera y muestra en la consola 3 direcciones IP ficticias.
// const { faker } = require('@faker-js/faker'); const ips = Array.from({ length: 3 }, () => faker.internet.ip()); console.log('Direcciones IP:', ips);

// 5Simular mensajes de chat
// Crea una función que genere un mensaje de chat ficticio con el nombre de usuario y el mensaje. Genera y muestra en la consola 5 mensajes aleatorios.

// 6 Crear un historial de transacciones bancarias
// Simula un historial de 10 transacciones bancarias aleatorias. Cada transacción debe incluir una cantidad (positiva para depósitos y negativa para retiros), una fecha, y una descripción breve.

// 7 Generar datos de una empresa ficticia
// Crea un objeto con información sobre una empresa ficticia. Incluye el nombre de la empresa, dirección, número de teléfono, y sector comercial (por ejemplo, "Tecnología" o "Alimentación").

// 8 Generar una lista de citas médicas
// Simula una lista de 5 citas médicas. Cada cita debe tener el nombre del paciente, el nombre del doctor, la fecha de la cita y una breve descripción del motivo de consulta.

// 9 Crear perfiles de redes sociales
// Genera una lista de 3 perfiles de redes sociales ficticios. Cada perfil debe incluir el nombre del usuario, un nombre de usuario único, una pequeña biografía y un enlace a su página de perfil (ficticio).

// 10 Simular un carrito de compras
// Crea un carrito de compras que incluya 3 productos. Cada producto debe incluir un nombre, un precio y una cantidad. Luego, calcula el precio total del carrito y muestra el carrito completo junto al total en la consola.


//--------------------respuestas-------------------------
//-------------------------------------------------------
//1 Generar un nombre completo y una dirección de correo electrónico

const { faker } = require('@faker-js/faker');

const name = faker.name.fullName();
const email = faker.internet.email();

console.log('Nombre:', name);
console.log('Correo:', email);

//-------------------------------------------------------
//2 Crear un perfil de usuario

const { faker } = require('@faker-js/faker');

const userProfile = {
  name: faker.name.fullName(),
  email: faker.internet.email(),
  address: faker.address.streetAddress(),
  city: faker.address.city(),
  country: faker.address.country(),
  phone: faker.phone.number(),
};

console.log('Perfil de usuario:', userProfile);

//-------------------------------------------------------
//3 Generar lista de productos

const { faker } = require('@faker-js/faker');

const products = Array.from({ length: 5 }, () => ({
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  price: faker.commerce.price(),
}));

console.log('Lista de productos:', products);

//-------------------------------------------------------
//4 Generar direcciones IP aleatorias

const { faker } = require('@faker-js/faker');

const ips = Array.from({ length: 3 }, () => faker.internet.ip());

console.log('Direcciones IP:', ips);

//-------------------------------------------------------
//5 Simular mensajes de chat

const { faker } = require('@faker-js/faker');

const chatMessages = Array.from({ length: 5 }, () => ({
  user: faker.internet.userName(),
  message: faker.lorem.sentence(),
}));

console.log('Mensajes de chat:', chatMessages);

//-------------------------------------------------------
//6 Crear un historial de transacciones bancarias

const { faker } = require('@faker-js/faker');

const transactions = Array.from({ length: 10 }, () => ({
  amount: faker.finance.amount(-500, 500),
  date: faker.date.recent(),
  description: faker.finance.transactionDescription(),
}));

console.log('Historial de transacciones:', transactions);

//-------------------------------------------------------
//7 Generar datos de una empresa ficticia

const { faker } = require('@faker-js/faker');

const company = {
  name: faker.company.name(),
  address: faker.address.streetAddress(),
  phone: faker.phone.number(),
  industry: faker.company.industry(),
};

console.log('Empresa:', company);

//-------------------------------------------------------
//8 Generar una lista de citas médicas

const { faker } = require('@faker-js/faker');

const appointments = Array.from({ length: 5 }, () => ({
  patientName: faker.name.fullName(),
  doctorName: faker.name.fullName(),
  date: faker.date.future(),
  reason: faker.lorem.sentence(),
}));

console.log('Citas médicas:', appointments);

//-------------------------------------------------------
//9 Crear perfiles de redes sociales

const { faker } = require('@faker-js/faker');

const socialProfiles = Array.from({ length: 3 }, () => ({
  name: faker.name.fullName(),
  username: faker.internet.userName(),
  bio: faker.lorem.sentence(),
  profileLink: faker.internet.url(),
}));

console.log('Perfiles de redes sociales:', socialProfiles);

//-------------------------------------------------------
//10 Simular un carrito de compras

const { faker } = require('@faker-js/faker');

const cart = Array.from({ length: 3 }, () => ({
  product: faker.commerce.productName(),
  price: parseFloat(faker.commerce.price()),
  quantity: faker.datatype.number({ min: 1, max: 5 }),
}));

const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

console.log('Carrito de compras:', cart);
console.log('Total:', total.toFixed(2));


