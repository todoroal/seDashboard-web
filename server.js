const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('Hola Teammates'));

app.listen(PORT, () => console.log("Server up and running"));
