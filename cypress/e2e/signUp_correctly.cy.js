describe('Sign Up Page', () => {
  it('Fill the form fields correctly to register a new user', () => {
    cy.visit('http://localhost:4200/#/home')
    cy.contains('a', 'Register now').click()
    cy.get('[data-test="email"]').type('jimhalpert@email.com')
    cy.get('[data-test="fullName"]').type('Jim Halpert') //the get is grabing an element from the page that is tagged 
    cy.get('[data-test="registerUserName"]').type('jimbo') //type write in the field
    cy.get('[data-test="registerPassword"]').type('jimbo1234')
    cy.contains('button', 'Register').click()

  })
})