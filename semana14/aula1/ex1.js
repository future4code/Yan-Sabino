const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])
const operacao = process.argv[2]

switch (operacao) {
    case 'soma':
        const respostaSoma = num1 + num2
        console.log("Resposta: ", respostaSoma)
        break;
    case 'sub':
        const respostaSub = num1 - num2
        console.log("Resposta: ", respostaSub)
        break;
    case 'mult':
        const respostaMult = num1 * num2
        console.log("Resposta: ", respostaMult)
        break;
    case 'div':
        const respostaDiv = num1 / num2
        console.log("Resposta: ", respostaDiv)
        break;

    default:
        undefined
        break;
}
