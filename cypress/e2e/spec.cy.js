describe('empty spec', () => {
  beforeEach('',()=>{
    cy.visit('/')
  })
  it('frontpag can be opened', () => {
    cy.contains('thor')
  }),
  it('Detailpage can be opened', () => {
    cy.contains('Details').click()
    cy.url().should('include','/player/2')
    cy.contains('Editar Perfil')
  })
})