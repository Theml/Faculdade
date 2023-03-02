var a = "abc" // pode ser substuivel o valor

let b = 123 // não pode subescrever valor

let dv = document.getElementById("body")

// aconcelhado usar var dentro de funções/internamente 
function soma(s1, s2){
    var s = s1 + s2 + b;
    return s
}
// var dv = 123 -> gera erro ao deixar dv com let acima

// alert(dv)

const soma1 = (s1, s2) => {
    return s1 + s2 + b
}
/* em caso de tiver so um comando no caso acima 'return' tem como otimizar 
const soma1 = (s1, s2) => s1 + s2 + b */

//Rest Operator
const dadosPessoais = (nome, ...dados) => {
    console.log(nome)
    console.log(dados)
}

dadosPessoais("Luis", "Estudante", 25, 1.70, true, 1350)

// spread 
let num = [5, 8]

//dv.innerHTML = soma(10, 10)
dv.innerHTML = soma1(...num) // soma1(5,8)

let aluno = {nome: "fulano", idade: 10, nota: 9.5, salario: 6000}
let aluno1 = {nome: "Cicrano", idade: 11, nota: 8.5, salario: 5000}
let aluno2 = {nome: "zezin", idade: 12, nota: 7.5, salario: 4000}

let turma = [aluno, aluno1, aluno2]

turma.push({nome: "Marco", nota : 6.5})

// for (const alu in turma) {
//     if (turma[alu].nota >= 7) {
//         console.log("nome :: "+ turma[alu].nome)
//     }
// }

// const aprove = () => {
//     if (alu.nota >= 7){
//         console.log(" nome :: " +alu.nome)
//     }
// }
// turma.forEach(aprove)

turma.forEach( alu => {
        if(alu.nota >= 7){
        console.log(" nome :: " + alu.nome)
        }
    }
);

let nTurma = turma.filter( alu => alu.nota >= 7 )

console.log(nTurma)
console.log(turma)

console.log("Nome do Aluno ::" + aluno.nome, "Nota do Aluno ::" + aluno.nota)

let {nome, nota} = aluno // destruturação 

console.log("nome :: "+nome+" - Nota :: "+nota)
console.log("nome :: "+aluno.nome+" - Nota :: "+aluno.nota)

//Template Strings
console.log(`nome :: ${nome} - Nota :: ${nota}`)
