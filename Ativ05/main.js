//Função para adicionar uma nova linha na tabela
function addToTable() {

    //Definindo as variaveis e recebendo os dados
    let titulo = document.getElementById('titulo').value;
    let autor = document.getElementById('autor').value;
    let ISBN = document.getElementById('ISBN').value;
    let table = document.getElementById("myTable");

    let tableSize = table.rows.length; //Calculando o tamanho da Tabela
    let row = table.insertRow(tableSize); //Inserindo uma linha abaixo da Tabela
    let cell1 = row.insertCell(0); //Inserindo as celulas da linha
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    row.id = tableSize; //Adicionando o id no elemento a ser criado

    //Criando o codigo do botão para remover a linha
    let btnCode = "<button onclick='removeToTable(this)'>Remover</button>";
    let btnCode2 = "<button onclick= 'updateToTable(this)'>Atualizar</button>";

    //Preenchendo as celulas da linha
    cell1.innerHTML = tableSize;
    cell2.innerHTML = titulo;
    cell3.innerHTML = autor;
    cell4.innerHTML = ISBN;
    cell5.innerHTML = btnCode;
    cell6.innerHTML = btnCode2;

    //Limpando os campos de inserção de dados
    document.getElementById('titulo').value = "";
    document.getElementById('autor').value = "";
    document.getElementById('ISBN').value = "";

    //Retornando 'false' para impedir o reload da pagina
    return false;
}

//Função para remover uma linha
function removeToTable(id) {
    let row = id.parentNode.parentNode.id;
    row = document.getElementById(row);
    row.parentNode.removeChild(row);

    return false;
}

//Função para editar uma linha
function updateToTable(id) {
    let row = id.parentNode.parentNode.id;
    row = document.getElementById(row);
    row.parentNode.removeChild(row);

    return false;
}

