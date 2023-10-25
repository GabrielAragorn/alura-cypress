describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/#/home')
    cy.contains('a', 'Register now').click()
    cy.get('[formcontrolname="email"]').type('jimhalpert@email.com')
    cy.get('[formcontrolname="fullName"]').type('Jim Halpert')
    cy.get('[formcontrolname="userName"]').type('jimhalp')
    cy.get('[formcontrolname="password"]').type('jimbo321')
    cy.contains('button', 'Register').click()

  })
})