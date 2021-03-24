//Sposób odwołania się do .env poprzez obiekt w pliku config
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  port: process.env.PORT,
};

// Sposób na eksportowanie z pliku w developmencie całego obiektu zmiennych środowiskowych przypisanego do zmiennej result - dotenv. do przeinstalowania na paczkę środowiskową
const dotenv = require('dotenv');
const result = dotenv.config();

if (result.error) {
  throw result.error;
}

const { pased: envs } = result;
module.exports = envs;

// Sposób na eksportowanie przez scrypt NODE - paczka dotenv zainstalowana jako --save-dev
module.exports = {
  port: process.env.PORT,
};
