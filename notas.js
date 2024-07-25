const alunos = [
    { nome: 'João', nota: 5 },
    { nome: 'Maria', nota: 8 },
    { nome: 'Ana', nota: 7 },
    { nome: 'Pedro', nota: 4 },
    { nome: 'Lucas', nota: 6 }
];

const alunosAprovados = (alunos) => {
    return alunos.filter(aluno => aluno.nota >= 6);
}

const aprovados = alunosAprovados(alunos);
console.log(aprovados);