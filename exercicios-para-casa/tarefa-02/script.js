/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */

    let precoMercadoria = parseFloat (prompt("Insira preço mercadoria"))
    let percentualDesconto = parseFloat (prompt("Percentual de desconto"))

    let mercadoriaComDesconto = precoMercadoria - (precoMercadoria*percentualDesconto)/100 
    alert(`valor da mercadoria é ${mercadoriaComDesconto.toFixed(2)}`)
    let valorEconomia = precoMercadoria - mercadoriaComDesconto
    alert(`Você economizou ${valorEconomia.toFixed(2)}`)
