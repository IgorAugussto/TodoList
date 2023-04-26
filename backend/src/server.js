const app = require('./app');
//Configuração para acessar as variaveis de ambiente no .env
require('dotenv').config();

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));