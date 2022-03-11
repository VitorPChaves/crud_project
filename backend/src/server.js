const express = require('express')
const cors = require('cors')

const database = require('./database/db')
const Pessoa = require('./models/pessoa')

const app = express()

await database.sync()

app.get('/', (req, res) => {
    res.send("hello world")
})

app.listen(3333, () => {
    console.log("rodando servidor");
})

// (async () => {
//     const database = require('./db')
//     const Pessoa = require('./pessoa')
//     await database.sync()

//     const novaPessoa = await Pessoa.create({
//         cpf: '999.503.159-80',
//         nome: 'Purisbileu',
//         telefone: 991234517,
//         data_nascimento: "1989-04-13"
//     })
//     console.log(novaPessoa)

//     const pessoas = await Pessoa.findAll()
//     console.log(pessoas)
    
//     //pessoas.telefone = 999146300
//     //pessoas.save()
//     //console.log(pessoas)
// })()