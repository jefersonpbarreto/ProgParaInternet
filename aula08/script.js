var esconderOri = document.querySelector("#esconderOri");
var esconderUsa = document.querySelector("#esconderUsa");
var esconderFun = document.querySelector("#esconderFun");
var mostrarOri = document.querySelector("#mostrarOri");
var mostrarUsa = document.querySelector("#mostrarUsa");
var mostrarFun = document.querySelector("#mostrarFun");
var pOri = document.querySelector("#pOri");
var pUsa = document.querySelector("#pUsa");
var pFun = document.querySelector("#pFun");

function mosOri() {
    pOri.style.display = "inline";
    esconderOri.style.display = "inline";
    mostrarOri.style.display = "none";
}
function mosUsa() {
    pUsa.style.display = "inline";
    esconderUsa.style.display = "inline";
    mostrarUsa.style.display = "none";
}
function mosFun() {
    pFun.style.display = "inline";
    esconderFun.style.display = "inline";
    mostrarFun.style.display = "none";
}
function escOri() {
    pOri.style.display = "none";
    esconderOri.style.display = "none";
    mostrarOri.style.display = "inline";
}
function escUsa() {
    pUsa.style.display = "none";
    esconderUsa.style.display = "none";
    mostrarUsa.style.display = "inline";
}
function escFun() {
    pFun.style.display = "none";
    esconderFun.style.display = "none";
    mostrarFun.style.display = "inline";
}