let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

if(nacionalidade === "brasileira"){
    console.log("a pessoa é do Brasil!");
} else if(nacionalidade === "argentina"){
    console.log("a pessoa é da Argentina!");
} else if(nacionalidade === "uruguaia"){
    console.log("a pessoa é do Uruguai!");
} else if(nacionalidade === "chilena"){
    console.log("a pessoa é do Chile!");
} else if(nacionalidade === "colombiana"){
    console.log("a pessoa é da Colômbia!");
} else{
    console.log("nacionalidade não encontrada")
};

// versão com switch case

switch (nacionalidade) {
    case "brasileira":
        console.log("a pessoa é do Brasil!")
        break;
    case "argentina":
        console.log("a pessoa é da Argentina!");
        break;
    case "uruguaia":
        console.log("a pessoa é do Uruguai!");
        break;
    case "chilena":
    console.log("a pessoa é do Chile!");
        break;
    case "colombiana":
    console.log("a pessoa é da Colômbia!");
        break;
    default:
    console.log("nacionalidade não encontrada");
};