import { cyan } from "ansi-colors";

describe('React App Blog', function(){
    beforeEach(function(){

        cy.visit('/');
    });

    it('Check if exist Home message in <h1>', function() {
        cy.get('h1').should('contain', 'Home');
    });
});