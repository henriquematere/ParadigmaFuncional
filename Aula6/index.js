const express = require('express');
const app = express();
const port = 3000;
const data = [
    {id: 1, nome:'Ana', idade: 25, email: 'ana@example.com', salario: 4500.00 },
    {id: 2, nome:'Bruno', idade: 30, email: 'bruno@example.com', salario: 5500.00 },
    {id: 3, nome:'Carlos', idade: 35, email: 'carlos@example.com', salario: 6500.00 },
    {id: 4, nome:'Daniel', idade: 40, email: 'daniel@example.com', salario: 7500.00 },
    {id: 5, nome:'Elaine', idade: 28, email: 'elaine@example.com', salario: 4800.00 },
    {id: 6, nome:'Fernando', idade: 32, email: 'fernando@example.com', salario: 5200.00 },
    {id: 7, nome:'Gabriela', idade: 27, email: 'gabriela@example.com', salario: 4700.00 },
    {id: 8, nome:'Hugo', idade: 45, email: 'hugo@example.com', salario: 8200.00 },
    {id: 9, nome:'Isabela', idade: 29, email: 'isabela@example.com', salario: 4900.00 },
    {id: 10, nome:'Gustavo', idade: 29, email: 'gustavo@example.com', salario: 24000.00 },
    {id: 11, nome:'João', idade: 33, email: 'joao@example.com', salario: 5300.00 }];

    app.get('/items', (req, res) => {
        const {salario} = req.query;
        const filteredData = data.filter(item => item.salario > parseFloat(salario));
        res.json(filteredData);});
        app.listen(port, () => {console.log(`Servidor OK`);});
  


    // depois digita node index.js no cmd
    // cola no navegador a url: http://localhost:3000/items?salario=1000