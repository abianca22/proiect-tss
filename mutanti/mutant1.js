class Ex1 {
    constructor(){
        console.log('ex1');
    }

    rezolvare(p1, p2, p3, p4, p5, p6) {
        var nr_r1 = p2*p4
        var nr_r2 = p5*p1
        var nr_tot1 = p3*p4
        var nr_tot2 = p6*p1
        var nr_r = nr_r1-nr_r2
        var metri_rochii = nr_tot1-nr_tot2
        if (p1 + 1 < 1 || p2 < 1 || p3 <= 0 || p4 < 1 || p5 < 1 || p6 <= 0 || nr_r === 0 || nr_r * metri_rochii < 0 || metri_rochii == 0)
        {
            rezultat = "input invalid";
        }
        else {
            var rezultat=parseFloat((metri_rochii/nr_r).toFixed(2));
        }
        return rezultat;
    }


    verificare(param) {
        let inp1 = parseInt(document.getElementById("nr-bluze1").value);
        let inp2 = parseInt(document.getElementById("nr-rochii1").value);
        let inp3 = parseFloat(document.getElementById("nr-metri1").value);
        let inp4 = parseInt(document.getElementById("nr-bluze2").value);
        let inp5 = parseInt(document.getElementById("nr-rochii2").value);
        let inp6 = parseFloat(document.getElementById("nr-metri2").value);

        let rasp_corect = this.rezolvare(inp1, inp2, inp3, inp4, inp5, inp6);
     
        if (param === rasp_corect) {
            alert("Raspuns corect!");
        }
        else if (param === "input invalid") {
            alert("Date invalide! Recititi restrictiile.");
        }
        else {
            alert("Raspuns gresit! Mai incearca :)");
        }
     
        return [inp1, inp2, inp3, inp4, inp5, inp6];
    }

    butoane() {
        const btn_trimite = document.getElementById("trimite");
        const btn_rasp = document.getElementById("rasp-corect");
        
        let inputuri;
        
        btn_trimite.addEventListener("click", function() {
            let inp7 = parseFloat(document.getElementById("rasp-pb1").value);
            const exercitiu = new Ex1();
            inputuri = exercitiu.verificare(inp7);
        });
        
        btn_rasp.addEventListener("click", function() {
            const exercitiu = new Ex1();
            let rasp_corect = exercitiu.rezolvare(inputuri[0], inputuri[1], inputuri[2], inputuri[3], inputuri[4], inputuri[5]);
            alert(`Raspunsul corect este ${rasp_corect}`);
        });
        
        function handleKeyPress(event) {
            if (event.keyCode === 13) {
            document.getElementById("trimite").click();
            document.getElementById("rasp-corect").click();
            }
        }
        
        document.onkeydown = handleKeyPress;

    }
    
}

module.exports = Ex1;
 
