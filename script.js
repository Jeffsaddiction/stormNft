document.addEventListener("DOMContentLoaded", function() {
    // Seleciona os botões e as divs filhas
    var prevButton = document.getElementById("prevButton");
    var nextButton = document.getElementById("nextButton");
    var filho1 = document.getElementById("storms");
    var filho2 = document.getElementById("flyer");

    // Define a posição inicial e final dos filhos
    var posicaoAtual = 1;

    prevButton.addEventListener("click", function() {
        if(posicaoAtual === 1) {
            filho1.style.transform = "translateX(0px)";
            filho2.style.transform = "translateX(-2400px)";
        posicaoAtual = 2;
        }
        else if(posicaoAtual === 2) {
            filho1.style.transform = "translateX(-2400px)";
            filho2.style.transform = "translateX(0px)";
        posicaoAtual = 1;
        }
    })
    
    nextButton.addEventListener("click", function() {
        if(posicaoAtual === 1) {
            filho1.style.transform = "translateX(0px)";
            filho2.style.transform = "translateX(2400px)";
        posicaoAtual = 2
        }
        else if(posicaoAtual === 2) {
            filho1.style.transform = "translateX(2400px)";
            filho2.style.transform = "translateX(0px)";
        posicaoAtual = 1
        }
    })

});