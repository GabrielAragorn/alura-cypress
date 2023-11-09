describe('Sign Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/#/home')
    })
    it('Field the required fields to login successfully', () => {
        cy.login('jimbo', 'jimbo1234')
    });
})