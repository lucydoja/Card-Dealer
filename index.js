var iconos = ["\u2666", "\u2660", "\u2663", "\u2665"];
var nombrar = ["rombo", "espada", "trebol", "corazon"]
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];



    var index = Math.floor(Math.random()*4);
    console.log(index);
    var ubiIcono1 = document.querySelector(".icono1");
    var ubiNumero = document.querySelector(".numero");
    var ubiIcono2 = document.querySelector(".icono2");
    
    if (index == 0){
        var simbolo1 = iconos[index];
        ubiIcono1.innerHTML = simbolo1;
        var numero = numeros[Math.floor(Math.random()*13)];
        ubiNumero.innerHTML = numero;
        var simbolo2 = iconos[index];
        ubiIcono2.innerHTML = simbolo2;
        ubiIcono1.style.color = "red";
        ubiIcono2.style.color = "red";
        ubiNumero.style.color = "red";
    }
    else if (index == 1){
        var simbolo1 = iconos[index];
        ubiIcono1.innerHTML = simbolo1;
        var numero = numeros[Math.floor(Math.random()*13)];
        ubiNumero.innerHTML = numero;
        var simbolo2 = iconos[index];
        ubiIcono2.innerHTML = simbolo2;

    }

     else if (index == 2){
        var simbolo1 = iconos[index];
        ubiIcono1.innerHTML = simbolo1;
        var numero = numeros[Math.floor(Math.random()*13)];
        ubiNumero.innerHTML = numero;
        var simbolo2 = iconos[index];
        ubiIcono2.innerHTML = simbolo2;

    }

     else if (index == 3){
        var simbolo1 = iconos[index];
        ubiIcono1.innerHTML = simbolo1;
        var numero = numeros[Math.floor(Math.random()*13)];
        ubiNumero.innerHTML = numero;
        var simbolo2 = iconos[index];
        ubiIcono2.innerHTML = simbolo2;
        ubiIcono1.style.color = "red";
        ubiIcono2.style.color = "red";
        ubiNumero.style.color = "red";

    }





