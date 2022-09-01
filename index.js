const express = require('express');
const app = express();

app.use(express.json())

const data = {
    users: [
    {
        Username:"elhulk", 
        Nombre:"hulk", 
        id:1
    },
    {
        Username:"eliroman", 
        Nombre:"iroman", 
        id:2
    },
    {
        Username:"elsuperman", 
        Nombre:"superman", 
        id:3
    },
    ],
    products: [
        {
            Price: 100,
            Name: "Papa",
            id: 1
        },
        {
            Price: 200,
            Name: "Yuca",
            id: 2
        },
        {
            Price: 300,
            Name: "Guineo",
            id: 3
        },
        {
            Price: 400,
            Name: "Platano",
            id: 4
        },
        {
            Price: 500,
            Name: "Zanahoria",
            id: 5
        },
    ],
    purchases: [
        {
            idUser: 1,
            idProduct: [5, 4],
            id: 1
        },
        {
            idUser: 2,
            idProduct: [4, 3],
            id: 1
        },
        {
            idUser: 3,
            idProduct: [3, 2],
            id: 1
        },
        {
            idUser: 4,
            idProduct: [2, 1],
            id: 1
        },
        {
            idUser: 5,
            idProduct: [1, 5],
            id: 1
        },
    ]
}



//mostrar todos
app.get('/personas',async (req,res) => {
    res.status(200).json(data.users)    
});

//mostrar x id
app.get('/personas/:id',async (req,res) => {
    let id = req.params.id
    let busqueda = data.users.filter(i => i.id == id)
    res.status(200).json(busqueda)    
});

//actuaizar
app.post('/personas/nuevapersona',async (req,res) => {
    let cuerpo = req.body
    data.users.push(cuerpo)
    res.status(200).json({body : req.body})    
});

//borrar
app.delete('/personas/borrarid/:id',async (req,res) => {
    let id = req.params.id
    data.users = data.users.filter(i => i.id != id)

    res.status(200).json(data.users)    
});

//actualizar
app.patch('/personas/actualizar',async (req,res) => {
    let usuario = req.body
    let usuariooo = data.users.filter(i => i.id == usuario.id)[0]
    let i = data.users.indexOf(usuariooo)
    data.users[i]=usuario
    res.status(200).json(data.users)    
});

app.listen(8080);