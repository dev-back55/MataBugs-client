describe("Render Search View:", () => {
    it("Renders correctly NavBar", () => {
        cy.visit("/search");
        cy.get(".NavBar_container__bSMZq").should("exist");
    })
    it("Renders correctly Cards", () => {
        cy.get(".SearchView_container__vxpme").should("exist");
    }) 
    it("Renders correctly Filters", () => {
        cy.get(".Sidebar_container__4yRe1").should("exist");
    })
    it("Card Player: Renders correctly Card", () => {
        cy.get(".Card_cardContainer__A9uIr").should("exist");
    })
    it("Card Player: Renders correctly Card Image", () => {
        cy.get(".ImageLoader_image__gd8v1", { timeout: 10000 }).should("exist");
    })
    it("Card Player: Renders correctly Card Details", () => {
        cy.get(".Card_detailsContainer__Q97Pa").should("exist");
    })
    it("Card Player: Renders correctly Card Title", () => {
        cy.get(".Card_title__h0BBL").should("exist");
    })
    it("Card Player: Renders correctly Card Status", () => {
        cy.get(".Card_containerRibbon__AltBp").should("exist");
    })
    it("Card Player: Renders correctly Card ID", () => {
        cy.get(".Card_containerTag__CyLW2").should("exist");
    })
    
    
})