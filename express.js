const express = require ('express');

const server = express();

server.use(express.json());

const exercicios = ['Supino', 'Agachamento', 'Leg-Press', 'Terra'];

//CRUD simples Node com o framework express (framework projetado para rodar em um servidor)

//Retorna um exercicio 
server.get('/exercicios/:index', (req, res) => {
    const {index} = req.params

    return res.json(exercicios[index]);
})

//Retornar todos os exercicios

server.get('/exercicios', (req, res) => {
    
    return res.json(exercicios)
})


//Criar um novo exercicio

server.post('/exercicios', (req, res) => {

    const {name} = req.body;
    exercicios.push(name);
    
    return res.json(exercicios);
})

//Atualizar algum exercicio

server.put('/exercicios/:index', (req,res) => {
    const {index} = req.params;
    const {name} = req.body;


    cursos[index] = name;

    return res.json(exercicios)
})

//Excluir algum exercicio

server.delete('/exercicios/:index', (req, res) => {
    const {index} = req.params;
    
    cursos.splice(index, 1);

    return res.json({message: "O exercicio foi deletado"});
})




server.listen(3000);