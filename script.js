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

const pai = document.querySelector(".pai");
const antes = document.querySelector("#antes");
const depois = document.querySelector("#depois");

let pos = 1;
antes.style.visibility = "hidden";

depois.addEventListener("click", function () {

    if (pos===1) {
        pai.style.transform = "translate(-25%)";
        antes.style.visibility = "visible";
        pos = 2;
    }
   else if (pos===2) {
        pai.style.transform = "translate(-50%)";
        pos = 3;
    }

    else if (pos===3) {
        pai.style.transform = "translate(-75%)";
        depois.style.visibility = "hidden";
        pos = 4;
    }

  });

antes.addEventListener("click", function () {
    
    if (pos===2) {
        pai.style.transform = "translate(0%)";
        antes.style.visibility = "hidden";
        depois.style.visibility = "visible";
        pos = 1;
    }
   else if (pos===3) {
        pai.style.transform = "translate(-25%)";
        depois.style.visibility = "visible";
        pos = 2;
    }

    else if (pos===4) {
        pai.style.transform = "translate(-50%)";
        depois.style.visibility = "visible";
        pos = 3;
    }
  });
