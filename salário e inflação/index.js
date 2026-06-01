// listar os salários minímos de 2010 a 2020
// listar o índice IPCA de 2012 a 2020
// Comparação entre o % de aumento salarial e o IPCA

let salarioMinimo = [
    {ano: 2010, valor: 510.00},
    {ano: 2011, valor: 545.00},
    {ano: 2012, valor: 622.00},
    {ano: 2013, valor: 678.00},
    {ano: 2014, valor: 724.00},
    {ano: 2015, valor: 788.00},
    {ano: 2016, valor: 880.00},
    {ano: 2017, valor: 937.00},
    {ano: 2018, valor: 954.00},
    {ano: 2019, valor: 998.00},
    {ano: 2020, valor: 1045.00}
]

let ipca = [
    {ano: 2010, ipca: 5.91},
    {ano: 2011, ipca: 6.50},
    {ano: 2012, ipca: 5.84},
    {ano: 2013, ipca: 5.91},
    {ano: 2014, ipca: 6.41},
    {ano: 2015, ipca: 10.67},
    {ano: 2016, ipca: 6.29},
    {ano: 2017, ipca: 2.95},
    {ano: 2018, ipca: 3.75},
    {ano: 2019, ipca: 4.31},
    {ano: 2020, ipca: 4.52}
]

// escolha do usuário
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(
    "1 - Listar salários mínimos\n" +
    "2 - Listar IPCA\n" +
    "3 - Comparar aumento salarial e IPCA\n\n" +
    "Digite uma opção: ",
    (resposta) => {

        let opcao = Number(resposta);

        if (opcao === 1) {

            for (let salario of salarioMinimo) {
                console.log(`${salario.ano} - R$ ${salario.valor}`);
            }

        } else if (opcao === 2) {

            for (let indice of ipca) {
                console.log(`${indice.ano} - ${indice.ipca}%`);
            }

        } else if (opcao === 3) {

            for (let i = 1; i < salarioMinimo.length; i++) {

                let aumento =
                    ((salarioMinimo[i].valor - salarioMinimo[i - 1].valor) /
                    salarioMinimo[i - 1].valor) * 100;

                console.log(
                    `Ano: ${salarioMinimo[i].ano} | ` +
                    `Aumento: ${aumento.toFixed(2)}% | ` +
                    `IPCA: ${ipca[i].ipca}%`
                );
            }

        } else {
            console.log("Opção inválida!");
        }

        rl.close();
    }
);
