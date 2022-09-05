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