let vf = false;

function modoEscuro() {
    if (vf == false) {
        document.body.style.backgroundColor = "grey";
        document.body.style.color = "white";
        document.getElementsByClassName("SL")[0].src = "imgs/sol.png";
        vf = true;
    } else if (vf == true) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.getElementsByClassName("SL")[0].src = "imgs/lua.png";
        vf = false;
    }
}