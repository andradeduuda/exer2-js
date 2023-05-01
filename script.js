/*
Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:
- nome;
- nota da primeira prova;
- nota da segunda prova.
# Depois de criada a lista:
- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/
//Lista de estudantes criada, caso não coloque o nome entre "" o navegador não consegue fazer a leitura dos mesmos
//Como se trata de listas, usa-se []


const students = [
  { name: "Marcos",
     firstNote: 7, 
     lastNote: 4 },    
  
  { name: "Letícia", 
    firstNote: 5, 
    lastNote: 8 },

  { name: "Pedro", 
    firstNote: 2, 
    lastNote: 4 },

  { name: "Maria", 
    firstNote: 10, 
    lastNote: 9}
];

//para saber a média (average): neste caso, nota 1 e nota 2, o retorno será (nota1 + nota2) /2

function averageNote(firstNote, lastNote) {
  return (firstNote + lastNote) /2
};

//Aqui teremos o resultado de cada aluno, com base em sua média, então teremos uma função para cada estudante

//mean determinará a média para classificar-se, então: estudante.nota1, e estudante.nota2

function printAverageNote(student) {
  const mean = averageNote(student.firstNote, student.lastNote);

  if (mean >= 7) {
    return `
      A média de ${student.name} é: ${mean}\n Parabéns, você foi aprovado!`;
  } else {
    return `
      A média de ${student.name} é: ${mean}\n Tente novamente!`;
  }
}
//return: retornará para cada estudante sua média, sendo aprovado ou não, neste caso /n serivirá apenas para quebra de limja

//for servirá para emitir as mensagens, de aprovado ou não 

for (let student of students) {
  let Message = printAverageNote(student);
  alert(Message);
}
