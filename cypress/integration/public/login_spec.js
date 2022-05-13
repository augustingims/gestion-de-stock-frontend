describe('Login page', function () {

  beforeEach(function () {
    cy.visit('/login')
  })
  it('devrait bien s\'afficher', function () {
    cy.contains('S\'authentifier').should('be.visible')
    cy.get('input[type=email]').should('be.visible')
    cy.get('input[type=password]').should('be.visible')
    cy.get('button[type=submit]').should('be.visible')
    cy.get('button[type=button]').should('be.visible')
  })

  it('devrait afficher un message d\'erreur lorsqu\'un e-mail et un mot de passe vides sont soumis', function () {
    cy.get('button[type=submit]').click()
    cy.contains('Aucun utilisateur avec l\'email NONE_PROVIDED n\'a été trouvé dans la base de données').should('be.visible')
  })

  it('devrait afficher un message d\'erreur lorsque le mot de passe est vide et que l\'email n\'existe pas en BD', function () {
    cy.get('input[type=email]').type('test@test.com{enter}')
    cy.contains('Aucun utilisateur avec l\'email test@test.com n\'a été trouvé dans la base de données').should('be.visible')
  })

  it('devrait afficher un message d\'erreur lorsque le mot de passe est vide et que l\'email existe en BD', function () {
    cy.get('input[type=email]').type('Linwood.Boyle@gmail.com{enter}')
    cy.contains('Bad credentials').should('be.visible')
  })

  it('devrait afficher un message d\'erreur lorsque la connexion a échoué', function () {
    cy.get('input[type=email]').type('Linwood.Boyle@gmail.com')
    cy.get('input[type=password]').type('wrong{enter}')
    cy.contains('Bad credentials').should('be.visible')
  })

  it('devrait rediriger vers la page d\'accueil lorsque la connexion est réussie', function () {
    cy.get('input[type=email]').type('Linwood.Boyle@gmail.com')
    cy.get('input[type=password]').type('som3R@nd0mP@$$word{enter}')
    cy.url().should('contain','/')
    cy.contains('Gestion de stock v2.0').should('be.visible')
  })

});
