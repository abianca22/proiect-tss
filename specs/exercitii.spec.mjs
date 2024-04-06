import Ex1 from "../exercitii-testare.js";
import { expect } from "chai";
var myObj = new Ex1();

describe("Test suit" , function (){
    it("Test the function rezolvare", function(){
        expect(myObj.rezolvare(5,6,20,4,5,17)).to.be.equal(5);
    });

    it("Test input invalid - impartire la 0", function() {
        expect(myObj.rezolvare(1, 1, 1, 1, 1, 1)).to.be.equal("input invalid - impartire la 0");
    });

    it("Test input invalid - parametri negativi", function() {
        expect(myObj.rezolvare(-1, -2, -3, -8, -7, -6)).to.be.equal("input invalid - parametri negativi");
    });

    it("Test input invalid - rezultat negativ", function() {
        expect(myObj.rezolvare(2, 3, 10, 2, 2, 12)).to.be.equal("input invalid - rezultat negativ");
    });

});