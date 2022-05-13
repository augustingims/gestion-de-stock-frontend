describe('Article page', function () {

  context.only('In an authenticated context', function () {

    beforeEach(function () {
      cy.login('Linwood.Boyle@gmail.com','som3R@nd0mP@$$word')
      cy.server()
      cy.route('/sockjs-node/**', {})
      cy.route('/gestiondestock/v1/utilisateurs/account', 'fixture:/user/user-data.json').as('getAccount')
      cy.route('/gestiondestock/v1/articles/all', 'fixture:/article/article-data-list.json').as('getAllArticles')
      cy.visit('/articles')
    })

    it('devrait afficher la list des articles', function () {



      cy.contains('Liste des articles').should('be.visible')

    })

  })

})
