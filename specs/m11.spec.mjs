import Ex1 from "../mutanti/mutant11.js";
import { expect } from "chai";
var myObj = new Ex1();

describe("Testare functionala - Mutant11" , function (){
    // am pus cateva exemple din fiecare clasa, sunt mult mai multe teste
    
    it("Respecta toate constrangerile", function(){
        expect(myObj.rezolvare(1, 5, 10, 15, 2, 30)).to.be.equal(1.64);
    });

    it("Afiseaza \"input invalid\" (impartire la zero)", function() {
        expect(myObj.rezolvare(1, 1, 1, 1, 1, 1)).to.be.equal("input invalid");
    });

    it("Afiseaza \"input invalid\" (parametri negativi)", function() {
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

describe("Testare structurala - Mutant11", function() {
    
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
});

