const exercicios = ['Supino', 'Agachamento', 'Leg-Press', 'Terra'];

//Crud sem o Express, nesse caso roda no Browser

// Retorna um exercicio
const getExercicio = (index) => {
    return exercicios[index];
};

// Retorna todos os exercicios
const getAllExercicios = () => {
    return exercicios;
};

// Cria um novo exercicio
const createExercicio = (name) => {
    exercicios.push(name);
    return exercicios;
};

// Atualiza algum exercicio
const updateExercicio = (index, name) => {
    exercicios[index] = name;
    return exercicios;
};

// Exclui algum exercicio
const deleteExercicio = (index) => {
    exercicios.splice(index, 1);
    return { message: "O exercicio foi deletado" };
};

// Exemplo de uso dos métodos
console.log(getExercicio(0)); // Retorna 'Supino'
console.log(getAllExercicios()); // Retorna ['Supino', 'Agachamento', 'Leg-Press', 'Terra']
console.log(createExercicio('Novo Exercício')); // Retorna ['Supino', 'Agachamento', 'Leg-Press', 'Terra', 'Novo Exercício']
console.log(updateExercicio(1, 'Novo Agachamento')); // Retorna ['Supino', 'Novo Agachamento', 'Leg-Press', 'Terra']
console.log(deleteExercicio(2)); // Retorna { message: "O exercicio foi deletado" }
console.log(getAllExercicios()); // Retorna ['Supino', 'Novo Agachamento', 'Terra']