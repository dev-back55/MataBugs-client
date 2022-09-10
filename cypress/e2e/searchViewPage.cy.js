describe("Render Search View:", () => {
    before(() => {
        cy.visit("/search");
    });
    it("Renders correctly Loading View", () => {
        cy.get("#loadingView").should("exist");
    })
    it("Renders correctly NavBar", () => {
        cy.get("#componentNavBar").should("exist");
    })
    it("Renders correctly Logo", () => {
        cy.get("#componentLogo").should("exist");
    })
    it("Renders correctly Links", () => {
        cy.get("#componentLinks").should("exist");
    })
    it("Renders correctly SideBar", () => {
        cy.get("#componentSidebar").should("exist");
    })
    it("Renders correctly Filters", () => {
        cy.get("#componentFilters").should("exist");
    })
    it("Renders correctly Cards", () => {
        cy.get("#componentCards").should("exist");
    }) 
    it("Card Player: Renders correctly Card", () => {
        cy.get("#componentCard").should("exist");
    })
})

describe("Check Correct Search Player:", () => {
    beforeEach(() => {
        cy.visit("/search");
    });
    it("Renders correctly Player Searched N°1", () => {
        cy.get('input[name=searchbar]').should("exist");
        cy.get('input[name=searchbar]').type('4050');
        cy.get('#buttonSearch').click();
        cy.get("#componentCards").should("exist");
        cy.get('#componentCards').children().should('have.length', 1)
    })
    it("Renders correctly Player Searched N°2", () => {
        cy.get('input[name=searchbar]').should("exist");
        cy.get('input[name=searchbar]').type('4200');
        cy.get('#buttonSearch').click();
        cy.get("#componentCards").should("exist");
        cy.get('#componentCards').children().should('have.length', 1)
    })
})