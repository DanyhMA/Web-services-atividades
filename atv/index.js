//consultar de dados do CEP
const {consultarCep} = require ('correios-brasil');

const cep = '55294273';

consultarCep(cep).then(response => {
    console.log(response);
});

//Consulta de preço e prazo
const {calcularPrecoPrazo} = require ('correios-brasil');

let args = {
    sCepOrigem: '50791510',
    sCepDestino: '55294273',
    nVlPeso: '1',
    nCdFormato: '1',
    nVlComprimento: '20',
    nVlAltura: '20',
    nVlLargura: '20',
    nCdServico: ['04014', '04510'],
    nVlDiametro: '0',
  };
  
  calcularPrecoPrazo(args).then(response => {
    console.log(response);
  });