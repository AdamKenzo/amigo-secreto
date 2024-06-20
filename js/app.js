let listaPessoas = [];

function adicionar() {
    // acessar o digite o nome de um amigo e guardar o nome em uma variavel 
    let nome = document.getElementById('nome-amigo').value;
    let listaAmigos = document.getElementById('lista-amigos');
    
    if (nome == '') {
        alert('Digite um nome valido!');
        return;
    }
    listaPessoas.push(` ${nome}`);
    listaAmigos.innerHTML = listaPessoas;
  
    
}



//sortear os nomes e juntar uma pessoa a outra

//limpar 