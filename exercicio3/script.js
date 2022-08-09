//código a ser reescrito
const nome = prompt('Qual o seu nome?');
const idade = +prompt('Qual a sua idade?');


if(nome === "José"){
	console.log("Oi, Zé!");
} else {
	console.log("Olá, "+nome);
}

if(idade >= 18){
	console.log("pode tirar carteira de motorista!");
} else {
	console.log("Ainda não pode tirar carteira de motorista");
}

// Código com ifternário

nome === 'José' ? console.log('Oi, Zé!') : console.log('Olá, '+nome);

idade >= 18 ? console.log("pode tirar carteira de motorista!") : console.log("Ainda não pode tirar carteira de motorista");
