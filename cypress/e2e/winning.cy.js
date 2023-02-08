describe('Winning Automation Exercise', () => {
  it('Login, Filter, Add to cart & Validate ', () => {
    // Visit site    
    cy.visit('https://www.saucedemo.com/')
    // Validate site
    cy.url()
    .should('include', 'https://www.saucedemo.com')
    // Login
    cy.get('[data-test="username"]')
    .type('standard_user')
    cy.get('[data-test="password"]')
    .type('secret_sauce{enter}')
    // Validate login
    cy.get('#react-burger-menu-btn')
    .click()
    cy.get('#logout_sidebar_link')
    .should('be.visible')
  })
})