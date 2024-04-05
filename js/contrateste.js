botaoContraste = document.getElementById("contraste");
botaoContraste.addEventListener("click", verificarContraste);

function verificarContraste() {
//conteudo = document.getElementById("Conteudo");
/*var btnContraste = document.getElementById("contraste");

if (btnContraste.value == 0){
  btnContraste.setAttribute("value","1");
}
else {
  btnContraste.setAttribute("value","0");
}*/



let acessibilidade = document.getElementById("acessibilidade");
let iconeLuz = document.getElementById("iconeContraste");

let menu = document.getElementById("gtco-header-navbar");
let menu_home = document.getElementById("menu_home");
let menu_quemsomos = document.getElementById("menu_quemsomos");
let menu_contato = document.getElementById("menu_contato");

let opcoes = document.getElementById("opcoes");
let btn_capacitacao = document.getElementById("btn_capacitacao");
let btn_vagas = document.getElementById("btn_vagas");
let btn_contato = document.getElementById("btn_contato");

let beneficios = document.getElementById("beneficios");

//let footer = document.getElementById("footer");
let footer_direitos = document.getElementById("footer_direitos");
let footer_facebook = document.getElementById("footer_facebook");
let footer_twitter = document.getElementById("footer_twitter");
let footer_instagram = document.getElementById("footer_instagram");
let footer_linkedin = document.getElementById("footer_linkedin");
let footer_youtube = document.getElementById("footer_youtube");


acessibilidade.classList.toggle("bg-warning");
iconeLuz.classList.toggle("bi-lightbulb"); iconeLuz.classList.toggle('bi-lightbulb-fill');

menu.classList.toggle("bg-dark"); 
menu_home.classList.toggle("bg-warning");
menu_quemsomos.classList.toggle("bg-warning");
menu_contato.classList.toggle("bg-warning");

btn_capacitacao.classList.toggle("bg-warning");
btn_vagas.classList.toggle("bg-warning");
btn_contato.classList.toggle("bg-warning");

opcoes.classList.toggle("bg-dark");
beneficios.classList.toggle("bg-dark");

//footer.classList.toggle("bg-dark");
footer_direitos.classList.toggle("bg-warning");
footer_facebook.classList.toggle("bg-warning");
footer_twitter.classList.toggle("bg-warning");
footer_instagram.classList.toggle("bg-warning");
footer_linkedin.classList.toggle("bg-warning");
footer_youtube.classList.toggle("bg-warning");


document.body.classList.toggle('text-white');





for(let i=0; i < modal.length; i++) {
  modal[i].classList.toggle('bg-dark');
}


}