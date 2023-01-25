import {}

const {consultarCep} = required('correios-brasil');
const cep = '55294273';
consultarCep(cep).then(response => {
    console.log(response);
});