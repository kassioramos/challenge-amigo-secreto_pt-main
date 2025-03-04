//Array para adicionar nome de amigos
let amigos = [];
//Função para adicionar nome de amigos a lista
function adicionarAmigos() {
//obtêm valor digitado no campo de entrada
const amigo = document.getElementById("amigo").ariaValue;
//Verificar se o campo setá vazio
if(amigo.trim() !== '') {
//adicionar nome do amigo no array
    amigos.push(amigos);
 //Criar um novo item de lista (li)
 const li = document.createElement("li");
 //Definir conteudo de ittêm de lista(li) como nome de amigo
 li.textContent = amigo;

}    
}