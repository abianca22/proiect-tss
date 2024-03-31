function rezolvare(p1, p2, p3, p4, p5, p6) {
    var nr_r1 = p2*p4
    var nr_r2 = p5*p1
    var nr_tot1 = p3*p4
    var nr_tot2 = p6*p1
    var nr_r = nr_r1-nr_r2
    var metri_rochii = nr_tot1-nr_tot2
    return metri_rochii/nr_r;
}

function verificare(param) {
    inp1 = parseFloat(document.getElementById("nr-bluze1").value);
    inp2 = parseFloat(document.getElementById("nr-rochii1").value);
    inp3 = parseFloat(document.getElementById("nr-metri1").value);
    inp4 = parseFloat(document.getElementById("nr-bluze2").value);
    inp5 = parseFloat(document.getElementById("nr-rochii2").value);
    inp6 = parseFloat(document.getElementById("nr-metri2").value);
    inp7 = parseFloat(document.getElementById("rasp-pb1").value);

    if (param === rezolvare(inp1, inp2, inp3, inp4, inp5, inp6)) {
        alert("Raspuns corect!");
    }
    else {
        alert("Raspuns gresit! Mai incearca :)");
    }

    return [inp1, inp2, inp3, inp4, inp5, inp6];
}

const btn_trimite = document.getElementById("trimite");
const btn_rasp = document.getElementById("rasp-corect");

let inputuri;

btn_trimite.addEventListener("click", function() {
    inp7 = parseFloat(document.getElementById("rasp-pb1").value);
    inputuri = verificare(inp7);
});

btn_rasp.addEventListener("click", function() {
    let rasp_corect = rezolvare(inputuri[0], inputuri[1], inputuri[2], inputuri[3], inputuri[4], inputuri[5]);
    alert(`Raspunsul corect este ${rasp_corect}`);
});

function handleKeyPress(event) {
    if (event.keyCode === 13) {
      document.getElementById("trimite").click();
      document.getElementById("rasp-corect").click();
    }
}

document.onkeydown = handleKeyPress;
