const alunos = [
    {
      _id: 0,
      nome: "chico melato",
      notas: {
        portugues: [1, 1, 2, 2],
        matematica: [2, 2, 2, 2],
        historia: [2, 2, 3, 3],
        ciencias: [3, 3, 3, 3],
      },
    },
    {
      _id: 1,
      nome: "talita lima",
      notas: {
        portugues: [10, 4, 10, 4],
        matematica: [4, 4, 5, 5],
        historia: [5, 5, 6, 6],
        ciencias: [7, 7, 8, 9],
      },
    },
  ];


const alunosService = new AlunosService()

alunos.forEach(aluno => {
    alunosService.add(new AlunoModel(aluno))
});

/** 
const htmlHeader = document.createElement("tr")
htmlHeader.innerHTML = "<td>Nome</td>"

let htmlheaderMaterias = Object.keys(alunos[0].notas).map(materia => {
    console.log(materia);
    return `<td>${materia}</td>`
}).join('')

console.log(htmlheaderMaterias);

htmlHeader.innerHTML += htmlheaderMaterias

document.querySelector("[data-table-alunos] thead").appendChild(htmlHeader);


function render(){
    document.querySelector("[data-table-alunos] tbody").innerHTML = ""
    alunos.forEach(aluno => {
        const htmlBody = document.createElement("tr")
        let htmlMEdias = `<td>${aluno.nome}</td>`
        Object.keys(aluno.notas).forEach( materia => {
            htmlMEdias += `<td>${aluno.media[materia]}</td>`
        })
        htmlBody.innerHTML = htmlMEdias
    
        document.querySelector("[data-table-alunos] tbody").appendChild(htmlBody)
    });
}

render()
//add aluno
document.querySelector("form").addEventListener("submit" , function(e){
    e.preventDefault()
    const nome = document.getElementById("first_name").value

    const newAluno =  {
        _id: 0,
        nome,
        notas: {
          portugues: [1, 1, 2, 2],
          matematica: [2, 2, 2, 2],
          historia: [2, 2, 3, 3],
          ciencias: [3, 3, 3, 3],
        },
      }

      newAluno.media = {}

    for(let materia in newAluno.notas){
        newAluno.media[materia] = avarege(...newAluno.notas[materia])
    }

    alunos.push(newAluno)
      
    render()
}) **/