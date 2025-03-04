//Array para adicionar nome de amigos
let amigos = [];
//Função para adicionar nome de amigos a lista
function adicionarAmigo() {
//obtém valor digitado no campo de entrada
const amigo = document.getElementById('amigo').value;
//Verificar se o campo está vazio
if(amigo.trim() !== '') {
//adicionar nome do amigo no array
    amigos.push(amigo);
 //Criar um novo item de lista (li)
 const li = document.createElement('li');
 //Definir conteudo de item de lista(li) como nome de amigo
 li.textContent = amigo;
 // Adicionar lista de amigos na página
 document.getElementById('listaAmigos').appendChild(li);
 
}    
}