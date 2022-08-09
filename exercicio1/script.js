const numeroUsuario = Number(prompt("Informe um número:")); //seu numero aqui

// Verificar se é divísivel por 2 e por 3 com ifs aninhados:

if (numeroUsuario % 2 === 0) {
    if (numeroUsuario % 3 === 0) {
      console.log("O número é divisível por 2 e por 3.");
    } else {
      console.log("O número é divisível por 2 porém não é divisível por 3.");
    }
  } else if (numeroUsuario % 3 === 0) {
    console.log("O número é divisível por 3 porém não é divisivel por 2");
  } else {
    console.log("O número não é divisível nem por 2 e nem por 3");
  }
  
  // Verificar se é divísivel por 2 e por 3 com operações lógicas:
  
  if (numeroUsuario % 2 === 0 || numeroUsuario % 3 === 0) {
    console.log("O número é divisível por 2 ou por 3");
  } else {
    console.log("O número não é divisível por 2 e nem por 3");
  }