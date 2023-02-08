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
    cy.get('#react-burger-cross-btn')
    .click()
    // Filter products by price (low to high)
    cy.get('[data-test="product_sort_container"]')
    .select('Price (low to high)')
    // Validate price filter (low to high)

    // Filter products by price (high to low)

    // Validate price filter (high to low)

    // Add product to cart

    // Validate product in cart

  })
})