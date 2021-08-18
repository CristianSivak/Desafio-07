const express = require("express");
const fs = require("fs");

const app = express();

const port = 8080
const server = app.listen(port, () => console.log("Corriendo en el puerto " + port));

let contenido = fs.readFileSync('productos.txt','utf-8');
let json = JSON.parse(contenido);

const id_random = obj => Math.floor(Math.random() * obj.length);

let countItems = 0
let countRandom = 0;

app.get('/items', (req, res) => {

    let inventario = {
        items : json,
        cantidad : json.length
    }

    res.json(inventario);
    countItems++;
})

app.get('/item-random', (req, res) => {

    let producto_random = json[id_random(json)];

    let item = {
        item : producto_random
    }

    res.json(item)
    countRandom++;
})

app.get('/visitas', (req, res) => {

    let countVisitas = {
        visitas :  {
            items: countItems,
            item: countRandom
        }
    }

    res.json(countVisitas);
})

