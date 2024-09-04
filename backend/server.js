const express = require('express');
const cors = require('cors'); // Importando o CORS
const app = express();

app.use(cors()); // Usando o CORS como middleware

// Outras configurações e rotas do servidor...

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
