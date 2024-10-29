Documentación para usar @faker-js/faker

https://fakerjs.dev/

1. ¿Qué es @faker-js/faker?
@faker-js/faker es una biblioteca de Node.js que permite generar datos ficticios aleatorios para diversas necesidades. Este tipo de datos es útil para probar aplicaciones y realizar prototipos. Con @faker-js/faker, puedes crear nombres de personas, direcciones, números de teléfono, precios de productos, fechas, y mucho más sin utilizar datos reales.

2. Instalación
Para comenzar a usar @faker-js/faker, asegúrate de que Node.js esté instalado en tu sistema, luego sigue estos pasos:

Abre la terminal y navega al directorio de tu proyecto.

Ejecuta el siguiente comando para instalar el paquete:

bash

npm install @faker-js/faker
En tu archivo JavaScript, importa el paquete de la siguiente manera:

const { faker } = require('@faker-js/faker');

3. Principales categorías y métodos de @faker-js/faker
Aquí tienes algunas de las categorías más comunes y ejemplos de métodos que puedes usar. Esta lista incluye solo algunos métodos principales; explora la documentación oficial para encontrar más opciones.

A. Datos de Personas y Contacto
Nombre completo: Genera un nombre completo aleatorio.
faker.name.fullName();

Nombre de usuario: Genera un nombre de usuario aleatorio.
faker.internet.userName();

Correo electrónico: Genera una dirección de correo electrónico aleatoria.
faker.internet.email();

Número de teléfono: Genera un número de teléfono ficticio.
faker.phone.number();

B. Direcciones
Calle: Genera una dirección de calle aleatoria.
faker.address.streetAddress();

Ciudad: Genera un nombre de ciudad ficticia.
faker.address.city();

País: Genera un país aleatorio.
faker.address.country();

Código postal: Genera un código postal ficticio.
faker.address.zipCode();

Dirección IP: Genera una dirección IP aleatoria.
faker.internet.ip();

C. Productos y Empresas
Nombre de producto: Genera un nombre de producto ficticio.
faker.commerce.productName();

Descripción de producto: Genera una descripción de producto.
faker.commerce.productDescription();

Precio de producto: Genera un precio aleatorio para el producto.
faker.commerce.price();

Nombre de empresa: Genera el nombre de una empresa ficticia.
faker.company.name();

Sector o industria: Genera un sector o industria de la empresa.
faker.company.industry();

D. Datos Financieros y Transacciones
Monto de transacción: Genera una cantidad ficticia.
faker.finance.amount(min, max);

Parámetros: Puedes pasar valores min y max opcionales para definir el rango.
Descripción de transacción: Genera una descripción para una transacción.
faker.finance.transactionDescription();

E. Fechas
Fecha reciente: Genera una fecha en el pasado reciente.
faker.date.recent(days);

Parámetro: days (opcional). Define el número de días hacia el pasado desde la fecha actual.
Fecha en el futuro: Genera una fecha en el futuro.
faker.date.future();

F. Otros datos útiles
Oración aleatoria: Genera una oración con palabras aleatorias.
faker.lorem.sentence();

Número aleatorio: Genera un número aleatorio en un rango.
faker.datatype.number({ min: 1, max: 10 });


4. Ejemplo básico de uso

archivo javascript

const { faker } = require('@faker-js/faker');

const userProfile = {
  name: faker.name.fullName(),
  email: faker.internet.email(),
  address: faker.address.streetAddress(),
};

console.log(userProfile);
Este código generará datos aleatorios cada vez que se ejecute, lo que es ideal para practicar y ver cómo faker puede simular distintos tipos de información.

5. Buenas prácticas
Evita datos sensibles en producción: Usa datos ficticios solo en entornos de prueba o desarrollo.
Explora la API completa: @faker-js/faker tiene muchas funcionalidades. Explora la documentación para familiarizarte con las opciones disponibles.