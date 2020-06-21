var filtro = 0;
var categoria = JSON.parse (localStorage.getItem("filtro"))
var tituloCategoria = document.getElementById("tituloCategoria")

//categorias
var blusaCat = document.querySelectorAll("li[name=blusa]")
var bermudaCat = document.querySelectorAll("li[name=bermuda]")
var calcadoCat = document.querySelectorAll("li[name=calcado]")
var acessorioCat = document.querySelectorAll("li[name=acessorio]")

function reset() {
    filtro=0
    salvar()
}

function blusas() {
    filtro = 1;
    salvar()
}
function bermudas() {
    filtro = 2;
    salvar()
}
function calcados() {
    filtro = 3;
    salvar()
}
function acessorios () {
    filtro = 4;
    salvar()
}

function salvar() {
    localStorage.setItem("filtro", filtro)
}


function verifiCarcategoria() {
if(categoria == 1){ //BLUSAS
    tituloCategoria.innerHTML = "Nosso modelos de blusas"
    bermudaCat.forEach(Element => {
        Element.setAttribute("class", "invisivel")
    })
    calcadoCat.forEach(Element => {
        Element.setAttribute("class", "invisivel")
    })
    acessorioCat.forEach(Element => {
        Element.setAttribute("class", "invisivel")
    })
}
  else if(categoria == 2){//BERMUDAS
    tituloCategoria.innerHTML = "Nosso modelos de Bermudas"
    blusaCat.forEach(Element => {
        Element.setAttribute("class", "invisivel")
    })
    calcadoCat.forEach(Element => {
        Element.setAttribute("class", "invisivel")
    })
    acessorioCat.forEach(Element => {
        Element.setAttribute("class", "invisivel")
    })
}
    else if(categoria == 3){//CALÇADOS
        tituloCategoria.innerHTML = "Nosso modelos de Calçados"
        blusaCat.forEach(Element => {
            Element.setAttribute("class", "invisivel")
        })
        bermudaCat.forEach(Element => {
            Element.setAttribute("class", "invisivel")
        })
        acessorioCat.forEach(Element => {
            Element.setAttribute("class", "invisivel")
        })
    }
        else if(categoria == 4){//ACESSORIOS
            tituloCategoria.innerHTML = "Nosso modelos de Acessorios"
            blusaCat.forEach(Element => {
                Element.setAttribute("class", "invisivel")
            })
            calcadoCat.forEach(Element => {
                Element.setAttribute("class", "invisivel")
            })
            bermudaCat.forEach(Element => {
                Element.setAttribute("class", "invisivel")
            })
  }
}

var imgPeca = document.getElementById('imgPeca')
var nomePeca = document.getElementById('nomePeca')
var descricaoPeca = document.getElementById('descricaoPeca')
var precoPeca = document.getElementById('precoPeca')


function blusa1() {
    filtro = 5;
    salvar()
}

function blusa2() {
    filtro = 6;
    salvar()
}

function bermuda1() {
    filtro = 7;
    salvar()
}

function calcados1() {
    filtro = 8;
    salvar()
}

function calcados2() {
    filtro = 9;
    salvar()
}

function calcados3() {
    filtro = 10;
    salvar()
}

function acessorios1() {
    filtro = 11;
    salvar()
}

function acessorios2() {
    filtro = 12;
    salvar()
}

function blusa3() {
    filtro = 13;
    salvar()
}

function calca1() {
    filtro = 14;
    salvar()
}

function calca2() {
    filtro = 15;
    salvar()
}

function verificaPeca() {
if(categoria == 5){
    imgPeca.setAttribute("src","imagens/03.jpg")
    nomePeca.innerHTML = "Blusa Estilo"
    descricaoPeca.innerHTML = "Uma linda Blusa para ocasiões especiais"
    precoPeca.innerHTML = "R$ 99,90"
}
else if(categoria == 6){
    imgPeca.setAttribute("src","imagens/nike.jpg")
    nomePeca.innerHTML = "Blusa NIKE"
    descricaoPeca.innerHTML = "Uma linda Blusa para se exercitar"
    precoPeca.innerHTML = "R$ 79,90"
}
else if (categoria == 7){
    imgPeca.setAttribute("src","imagens/camu.jpg")
    nomePeca.innerHTML = "Bermuda 1"
    descricaoPeca.innerHTML = "Uma linda Bermudaa para sair aos finais de semana"
    precoPeca.innerHTML = "R$ 89,90"
}
else if (categoria == 8){
    imgPeca.setAttribute("src","imagens/calcado.jpg")
    nomePeca.innerHTML = "Sapatênis Básico"
    descricaoPeca.innerHTML = "Sapatenis Confortavel, perfeito para você"
    precoPeca.innerHTML = "R$ 89,90"
}
else if (categoria == 9){
    imgPeca.setAttribute("src","imagens/calcado2.jpg")
    nomePeca.innerHTML = "Sapatênis NIKE"
    descricaoPeca.innerHTML = "Sapato Bonito"
    precoPeca.innerHTML = "R$ 89,90"
}
else if (categoria == 10){
    imgPeca.setAttribute("src","imagens/calcado3.jpg")
    nomePeca.innerHTML = "Sapatênis Básico"
    descricaoPeca.innerHTML = "Tênis bonito"
    precoPeca.innerHTML = "R$ 89,90"
}
else if (categoria == 11){
    imgPeca.setAttribute("src","imagens/shopping.png")
    nomePeca.innerHTML = "Cinto Zara"
    descricaoPeca.innerHTML = "Cinto 80 cm"
    precoPeca.innerHTML = "R$ 49,90"
}
else if (categoria == 12){
    imgPeca.setAttribute("src","imagens/shopping.png")
    nomePeca.innerHTML = "Cinto Zara"
    descricaoPeca.innerHTML = "Cinto 100 cm"
    precoPeca.innerHTML = "R$ 59,90"
}
else if (categoria == 13){
    imgPeca.setAttribute("src","imagens/33.jpg")
    nomePeca.innerHTML = "Blusa Social"
    descricaoPeca.innerHTML = "Perfeita para ocasiões especiais"
    precoPeca.innerHTML = "R$ 69,90"
}
else if (categoria == 14){
    imgPeca.setAttribute("src","imagens/calca.jpg")
    nomePeca.innerHTML = "Calça Jeans"
    descricaoPeca.innerHTML = "Uma linda Calça para festas"
    precoPeca.innerHTML = "R$ 89,90"
}
else if (categoria == 15){
    imgPeca.setAttribute("src","imagens/calca02.jpg")
    nomePeca.innerHTML = "Calça Jeans"
    descricaoPeca.innerHTML = "Uma linda Calça Jeans para usar em seu dia-a-dia."
    precoPeca.innerHTML = "R$ 99,90"
}

}