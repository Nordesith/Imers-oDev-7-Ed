var listaFilmes = [];
var contador = 1;
for(var i=0; i<5; i++){
  listaFilmes[i]=prompt('Digita a URL do filme '+ contador + ':');
  contador++;
}

for(var i = 0; i < listaFilmes.length ;i++){
  document.write('<img src=' + listaFilmes[i] + '>')
}