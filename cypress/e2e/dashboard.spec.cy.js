describe('Open BTech Website Test', () => {
    it('should open the BTech website', () => {
        cy.visit('/');
        cy.get('#search').should('be.visible').clear().type("iphone15").type('{enter}')
        cy.get('.product-image-wrapper > .product-image-photo').should('be.visible').click()
        cy.get('#product-addtocart-button').should('be.visible').click()
        cy.get('.minicart-wrapper-custom > .action').should('be.visible').click()
    });
});