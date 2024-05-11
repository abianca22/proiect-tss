import Ex1 from "../exercitii-testare.js";
import { expect } from "chai";
var myObj = new Ex1();

describe("Testare functionala" , function (){
    // am pus cateva exemple din fiecare clasa, sunt mult mai multe teste
    
    it("Respecta toate constrangerile", function() {      
        expect(myObj.rezolvare(1, 5, 10, 15, 2, 30)).to.be.equal(1.64);
    });

    it("Afiseaza \"input invalid\" (impartire la zero)", function() {
        expect(myObj.rezolvare(1, 1, 1, 1, 1, 1)).to.be.equal("input invalid");
    });

    it("Afiseaza \"input invalid\" (parametri negativi/nuli)", function() {
        expect(myObj.rezolvare(-1, -2, -3, -8, -7, -6)).to.be.equal("input invalid");
    });

    it("Afiseaza \"input invalid\" (rezultat negativ)", function() {
        expect(myObj.rezolvare(2, 3, 10, 2, 2, 12)).to.be.equal("input invalid");
    });

    it("Test frontiera - afiseaza \"input invalid\"", function() {
        expect(myObj.rezolvare(1, 1, 0, 1, 1, 0)).to.be.equal("input invalid");
        expect(myObj.rezolvare(0, 0, -1, 0, 0, -2)).to.be.equal("input invalid");
    });

});

describe("Testare structurala", function() {

    // functia "rezolvare"

    // acoperire la nivel de instructiune
    
    it("Respecta toate constrangerile (ramificare stanga)", function(){
        expect(myObj.rezolvare(5, 6, 20.3, 4, 5, 17.8)).to.be.equal(7.8);        
    });

    it("Afiseaza \"input invalid\" (impartire la zero, ramificare dreapta)", function() {
        expect(myObj.rezolvare(1, 1, 1, 1, 1, 1)).to.be.equal("input invalid");
    });

    // acoperire la nivel de decizie

    it("Afiseaza \"input invalid\" (raspuns nul, caz adevarat)", function() {
        expect(myObj.rezolvare(10, 5, 15, 20, 15, 30)).to.be.equal("input invalid");
    });
    
    it("Respecta toate constrangerile (raspuns nul, caz fals)", function() {
        expect(myObj.rezolvare(2, 6, 20, 10, 5, 17)).to.be.equal(3.32);
    });

    // acoperire la nivel de conditie

    // am pus cateva exemple, sunt mult mai multe conditii individuale

    it("Caz adevarat si caz fals - conditia 1 (idem 2-6)", function() {
        expect(myObj.rezolvare(10, 6, 20, 8, 5, 17)).to.be.equal(5);
        expect(myObj.rezolvare(0, 6, 20, 8, 5, 17)).to.be.equal("input invalid");
    });

    it("Caz adevarat si caz fals - conditia 7", function() {
         expect(myObj.rezolvare(1, 1, 1, 1, 1, 1)).to.be.equal("input invalid");
         expect(myObj.rezolvare(20, 12, 40, 16, 10, 34)).to.be.equal(5);
    });

    it("Caz adevarat si caz fals - conditia 8", function() {
        expect(myObj.rezolvare(6, 9, 30, 6, 6, 36)).to.be.equal("input invalid");
        expect(myObj.rezolvare(4, 6, 10, 6, 10, 17)).to.be.equal(2);
   });

    it("Caz adevarat si caz fals - conditia 9", function() {
        expect(myObj.rezolvare(4, 6, 10, 6, 3, 15)).to.be.equal("input invalid");
        expect(myObj.rezolvare(8, 12, 20, 12, 20, 34)).to.be.equal(2);
    });


    // functia "verificare"

    it("Statement coverage", function() {
        expect(myObj.verificare(5, 6, 20, 4, 5, 17, 5)).to.be.equal("Raspuns corect!");
        expect(myObj.verificare(1, 1, 1, 1, 1, 1, 1)).to.be.equal("Date invalide! Recititi restrictiile.");
        expect(myObj.verificare(5, 6, 20, 4, 5, 17, 10)).to.be.equal("Raspuns gresit! Mai incearca :)");
        
        const rasp_corect = 5;
        // setam rezultatele corecte anterioare pentru a simula mai multe incercari
        Ex1.rezultat_corect1 = 5;
        Ex1.rezultat_corect2 = 5;
        Ex1.rezultat_corect3 = 5;
        Ex1.count = 3;
        // setam un raspuns gresit pentru a provoca afisarea mesajului de alerta pentru depasirea numarului maxim de incercari
        const param = rasp_corect - 1;
        expect(myObj.verificare(5, 6, 20, 4, 5, 17, param)).to.equal('Ati depasit numarul maxim de incercari. Rezultatul corect este ' + rasp_corect);
    });

    it("Branch coverage", function() {
        expect(myObj.verificare(1, 5, 10, 15, 2, 30, 1.64)).to.be.equal("Raspuns corect!");
        expect(myObj.verificare(1, 1, 1, 1, 1, 1, 1)).to.be.equal("Date invalide! Recititi restrictiile.");
        expect(myObj.verificare(1, 5, 10, 15, 2, 30, 1)).to.be.equal("Raspuns gresit! Mai incearca :)");
    });

    it("Condition coverage", function() {
        expect(myObj.verificare(1, 5, 10, 15, 2, 30, 1.64)).to.be.equal("Raspuns corect!");
        expect(myObj.verificare(1, 1, 1, 1, 1, 1, 1)).to.be.equal("Date invalide! Recititi restrictiile.");
        
        // Conditiile (egalitate raspunsuri) sunt toate adevarate
        Ex1.rezultat_corect1 = 5;
        Ex1.rezultat_corect2 = 5;
        Ex1.rezultat_corect3 = 5;
        Ex1.count = 2;
        myObj.verificare(5, 6, 20, 4, 5, 17, 10);
        expect(Ex1.count).to.be.equal(3);
        
        // Conditiile (egalitate raspunsuri) sunt toate false
        Ex1.rezultat_corect1 = 1;
        Ex1.rezultat_corect2 = 2;
        Ex1.rezultat_corect3 = 5;
        Ex1.count = 2;
        myObj.verificare(5, 6, 20, 4, 5, 17, 10);
        expect(Ex1.count).to.be.equal(1);

        // Conditia (numarul de incercari) este adevarata
        Ex1.count = 4;
        expect(myObj.verificare(5, 6, 20, 4, 5, 17, 10)).to.be.equal('Ati depasit numarul maxim de incercari. Rezultatul corect este ' + myObj.rezolvare(5, 6, 20, 4, 5, 17));

        // Conditia (numarul de incercari) este falsa
        Ex1.count = 2;
        expect(myObj.verificare(5, 6, 20, 4, 5, 17, 10)).to.be.equal("Raspuns gresit! Mai incearca :)");
    });

    it('Circuits coverage', function() {
        // circuit - raspuns corect
        // 1, 2, 3, 4, 9, 10
        expect(myObj.verificare(1, 5, 10, 15, 2, 30, 1.64)).to.be.equal("Raspuns corect!");
        
        // circuit - date invalide
        // 1, 2, 3, 4, 11, 12
        expect(myObj.verificare(0, 0, 0, 0, 0, 0, 0)).to.be.equal("Date invalide! Recititi restrictiile.");
        
        // circuit - raspuns gresit
        // 1, 2, 3, 4, 13, 16, 21
        expect(myObj.verificare(1, 5, 10, 15, 2, 30, 10)).to.be.equal("Raspuns gresit! Mai incearca :)");
        
        // circuit - numar maxim de incercari depasit
        // 1, 2, 3, 4, 13, 14, 15, 19, 20
        const rasp_corect = 5;
        // setam rezultatele corecte anterioare pentru a simula mai multe incercari
        Ex1.rezultat_corect1 = 5;
        Ex1.rezultat_corect2 = 5;
        Ex1.rezultat_corect3 = 5;
        Ex1.count = 3;
        // setam un raspuns gresit pentru a provoca afisarea mesajului de alerta pentru depasirea numarului maxim de incercari
        const param = rasp_corect - 1;
        expect(myObj.verificare(5, 6, 20, 4, 5, 17, param)).to.equal('Ati depasit numarul maxim de incercari. Rezultatul corect este ' + rasp_corect);
    });
});

