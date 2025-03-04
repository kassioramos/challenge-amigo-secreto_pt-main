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
 // Limpar campode de entrada após adicionar o nome
 document.getElementById('amigo').value = '';
} else{
 // Se o campo estiver vazio mostar uma menssagem de alerta
 alert('Por favor, digite o nome de um amigo.');
 return;   
}
}
// Função para sortear um amigo aleatoriamente
function sortearAmigo(){
// Verifica se há amigos na lista
if (amigos.length === 0) {
    alert ('Não há amigos, por favor, adicionar pelomenos um amigo');
    return;
}  

  // Sorteia um índice aleatório entre 0 e o tamanho da lista de amigos
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
  // Obtém o nome do amigo sorteado
  const amigoSorteado = amigos[indiceAleatorio];
  
  // Exibe o nome do amigo sorteado na tela
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `<li>O amigo sorteado é: <strong>${amigoSorteado}</strong></li>`;
}