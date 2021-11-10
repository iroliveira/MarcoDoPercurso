function Nota(estrela) {
  var url = window.location;
  url = url.toString()
  url = url.split("teste.html");
  url = url[0];
 
  var a1 = document.getElementById("a1").src;
  var a2 = document.getElementById("a2").src;
  var a3 = document.getElementById("a3").src;
  var a4 = document.getElementById("a4").src;
  var a5 = document.getElementById("a5").src;
  var avaliacao = 0;
 
 if (estrela == 5){ 
  if (a5 == url + "IMG/a-nao.png") {
  document.getElementById("a1").src="IMG/a-sim.png";
  document.getElementById("a2").src="IMG/a-sim.png";
  document.getElementById("a3").src="IMG/a-sim.png";
  document.getElementById("a4").src="IMG/a-sim.png";
  document.getElementById("a5").src="IMG/a-sim.png";
  avaliacao = 5;
  } else {
  document.getElementById("a1").src="IMG/a-sim.png";
  document.getElementById("a2").src="IMG/a-sim.png";
  document.getElementById("a3").src="IMG/a-sim.png";
  document.getElementById("a4").src="IMG/a-sim.png";
  document.getElementById("a5").src="IMG/a-nao.png";
  avaliacao = 4;
 }}
  
  //ESTRELA 4
 if (estrela == 4){ 
  if (a4 == url + "IMG/a-nao.png") {
  document.getElementById("a1").src="IMG/a-sim.png";
  document.getElementById("a2").src="IMG/a-sim.png";
  document.getElementById("a3").src="IMG/a-sim.png";
  document.getElementById("a4").src="IMG/a-sim.png";
  document.getElementById("a5").src="IMG/a-nao.png";
  avaliacao = 4;
  } else {
  document.getElementById("a1").src="IMG/a-sim.png";
  document.getElementById("a2").src="IMG/a-sim.png";
  document.getElementById("a3").src="IMG/a-sim.png";
  document.getElementById("a4").src="IMG/a-nao.png";
  document.getElementById("a5").src="IMG/a-nao.png";
  avaliacao = 3;
 }}
 
 //ESTRELA 3
 if (estrela == 3){ 
  if (a3 == url + "IMG/a-nao.png") {
  document.getElementById("a1").src="IMG/a-sim.png";
  document.getElementById("a2").src="IMG/a-sim.png";
  document.getElementById("a3").src="IMG/a-sim.png";
  document.getElementById("a4").src="IMG/a-nao.png";
  document.getElementById("a5").src="IMG/a-nao.png";
  avaliacao = 3;
  } else {
  document.getElementById("a1").src="IMG/a-sim.png";
  document.getElementById("a2").src="IMG/a-sim.png";
  document.getElementById("a3").src="IMG/a-nao.png";
  document.getElementById("a4").src="IMG/a-nao.png";
  document.getElementById("a5").src="IMG/a-nao.png";
  avaliacao = 2;
 }}
  
 //ESTRELA 2
 if (estrela == 2){ 
  if (a2 == url + "IMG/a-nao.png") {
  document.getElementById("a1").src="IMG/a-sim.png";
  document.getElementById("a2").src="IMG/a-sim.png";
  document.getElementById("a3").src="IMG/a-nao.png";
  document.getElementById("a4").src="IMG/a-nao.png";
  document.getElementById("a5").src="IMG/a-nao.png";
  avaliacao = 2;
  } else {
  document.getElementById("a1").src="IMG/a-sim.png";
  document.getElementById("a2").src="IMG/a-nao.png";
  document.getElementById("a3").src="IMG/a-nao.png";
  document.getElementById("a4").src="IMG/a-nao.png";
  document.getElementById("a5").src="IMG/a-nao.png";
  avaliacao = 1;
 }}
  
  //ESTRELA 1
 if (estrela == 1){ 
  if (a1 == url + "IMG/a-nao.png") {
  document.getElementById("a1").src="IMG/a-sim.png";
  document.getElementById("a2").src="IMG/a-nao.png";
  document.getElementById("a3").src="IMG/a-nao.png";
  document.getElementById("a4").src="IMG/a-nao.png";
  document.getElementById("a5").src="IMG/a-nao.png";
  avaliacao = 1;
  } else {
  document.getElementById("a1").src="IMG/a-nao.png";
  document.getElementById("a2").src="IMG/a-nao.png";
  document.getElementById("a3").src="IMG/a-nao.png";
  document.getElementById("a4").src="IMG/a-nao.png";
  document.getElementById("a5").src="IMG/a-nao.png";
  avaliacao = 0;
 }}
  
  document.getElementById('avaliação-final').innerHTML = avaliacao;
  
 }