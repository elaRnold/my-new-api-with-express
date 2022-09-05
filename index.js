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
    {
        Username:"elwazon", 
        Nombre:"wazon", 
        id:4
    },
    {
        Username:"ellexlutor", 
        Nombre:"lexlutor", 
        id:5
    }
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


//Usuarios
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

//crear
app.post('/personas/nuevapersona',async (req,res) => {
    let cuerpo = req.body
    if (cuerpo.Username && cuerpo.Nombre && cuerpo.id) {
        console.log('entro')
        data.users.push(cuerpo)   
        res.status(200).json({message: 'Success'})
    }else{
        res.status(200).json({message: 'Estructura no valida'})
    }
});

//borrar
app.delete('/personas/borrarid/:id',async (req,res) => {
    let id = req.params.id
    let busqueda = data.users.filter(i => i.id == id)
    if (busqueda.length != 0) {
        data.users = data.users.filter(i => i.id != id)
        res.status(200).json({message: 'Success'})  
    }else{
        res.status(200).json({message: 'El id no existe'})  
    }
});

//actualizar
app.patch('/personas/actualizar',async (req,res) => {
    let usuario = req.body
    let busqueda = data.users.filter(i => i.id == usuario.id)
    if (busqueda.length != 0) {
        let usuariooo = data.users.filter(i => i.id == usuario.id)[0]
        let i = data.users.indexOf(usuariooo)
        data.users[i]=usuario
        res.status(200).json({message: 'Success'})   
    }else{
        res.status(200).json({message: 'El id no existe'})  
    } 
});


//Productos
//mostrar todos
app.get('/productos',async (req,res) => {
    res.status(200).json(data.products)    
});

//mostrar x id
app.get('/productos/:id',async (req,res) => {
    let id = req.params.id
    let busqueda = data.products.filter(i => i.id == id)
    res.status(200).json(busqueda)    
});

//crear
app.post('/productos/nuevoproducto',async (req,res) => {
    let cuerpo = req.body
    data.products.push(cuerpo)
    res.status(200).json({message: 'Success'})    
});

//borrar
app.delete('/productos/borrarid/:id',async (req,res) => {
    let id = req.params.id
    data.products = data.products.filter(i => i.id != id)
    res.status(200).json({message: 'Success'})    
});

//actualizar
app.patch('/productos/actualizar',async (req,res) => {
    let productonuevo = req.body
    let producto = data.products.filter(i => i.id == productonuevo.id)[0]
    let i = data.products.indexOf(producto)
    data.products[i]=productonuevo
    res.status(200).json({message: 'Success'})    
});


//Compras
//mostrar todos
app.get('/compras',async (req,res) => {
    res.status(200).json(data.purchases)    
});

//mostrar x id
/* app.get('/productos/:id',async (req,res) => {
    let id = req.params.id
    let busqueda = data.products.filter(i => i.id == id)
    res.status(200).json(busqueda)    
}); */

//crear
app.post('/compra/nuevacompra',async (req,res) => {
    let cuerpo = req.body
    data.purchases.push(cuerpo)
    res.status(200).json({message: 'Success'})    
});

//borrar
app.delete('/compra/borrarid/:id',async (req,res) => {
    let id = req.params.id
    data.purchases = data.purchases.filter(i => i.id != id)
    res.status(200).json({message: 'Success'})    
});

//actualizar
/* app.patch('/productos/actualizar',async (req,res) => {
    let productonuevo = req.body
    let producto = data.products.filter(i => i.id == productonuevo.id)[0]
    let i = data.products.indexOf(producto)
    data.products[i]=productonuevo
    res.status(200).json(data.products)    
}); */

app.listen(8080);