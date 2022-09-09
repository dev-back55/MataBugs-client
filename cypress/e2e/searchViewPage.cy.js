describe("Render Search View:", () => {
    // before(() => {
    //     cy.visit("/search");
    // });
    xit("Renders correctly Loading View", () => {
        cy.get("#loadingView").should("exist");
    })
    xit("Renders correctly NavBar", () => {
        cy.get("#componentNavBar").should("exist");
    })
    xit("Renders correctly Logo", () => {
        cy.get("#componentLogo").should("exist");
    })
    xit("Renders correctly Links", () => {
        cy.get("#componentLinks").should("exist");
    })
    xit("Renders correctly SideBar", () => {
        cy.get("#componentSidebar").should("exist");
    })
    xit("Renders correctly Filters", () => {
        cy.get("#componentFilters").should("exist");
    })
    xit("Renders correctly Cards", () => {
        cy.get("#componentCards").should("exist");
    }) 
    xit("Card Player: Renders correctly Card", () => {
        cy.get("#componentCard").should("exist");
    })
})

describe("Check Correct Search Player:", () => {
    beforeEach(() => {
        cy.visit("/search");
    });
    it("Renders correctly Player Searched N°1", () => {
        cy.get('input[name=searchbar]').should("exist");
        cy.get('input[name=searchbar]').type('1000');
        cy.get('#buttonSearch').click();
        cy.get("#componentCards").should("exist");
        cy.get('#componentCards').children().should('have.length', 1)
    })
    it("Renders correctly Player Searched N°2", () => {
        cy.get('input[name=searchbar]').should("exist");
        cy.get('input[name=searchbar]').type('1300');
        cy.get('#buttonSearch').click();
        cy.get("#componentCards").should("exist");
        cy.get('#componentCards').children().should('have.length', 1)
    })
})