describe('Sign In Page', () => {
    it('Verify the message of required fields', () => {
        cy.visit('http://localhost:4200/#/home')
        cy.contains('User name is required!').should('be.visible')
        cy.contains('Password is required!').should('be.visible')
    });
})