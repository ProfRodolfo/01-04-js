// console.log("Olá mundo!")
// console.log('Olá mundo 2')
// console.log(`Olá mundo 3`)

// let nome = 'Rodolfo'
// const idade = 38 
// var profissao = 'programador'

// console.log(typeof nome)
// console.log(typeof idade)
// console.log(profissao)

// console.log(nome + idade + profissao)
// console.log("Usuário: " + nome +  " Idade:" + idade + " Profissão: " + profissao)

// console.log(`${nome} ${idade} ${profissao}`)
// console.log(`Usuario: ${nome} Idade: ${idade} Profissão: ${profissao}`)


// var idade = parseInt(prompt("Digite sua idade"))

// alert("Você tem " + idade + " anos")

// var idade2 = idade + 10 

// alert("Daqui a 10 anos você terá " + idade2 + " anos")


// let  nome = prompt("Digite seu nome")
// let sobrenome = prompt("Sobrenome")

// alert(`O nome completo é: ${nome} ${sobrenome}`)


// let idade = parseInt(prompt("Idade"))

// if(idade >= 18) {
//     alert('Pode entrar')
// }else{
//     alert('Não pode entrar')
// }

let idade = parseInt(prompt("Idade"))

if(idade >= 18) {
    alert('Pode entrar')
}else if (idade >=15 && idade<18){
    alert('Pode entar com os pais')
}else{
    alert('Não pode entrar')
}