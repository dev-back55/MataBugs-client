describe("Render the Login", () => {
    beforeEach(() => {
        cy.visit("/login");
    });
    
    it("Renders correctly component Login", () => {
        cy.get(".LogInLogUp_container__JYEzn").should("exist");
    })
    it("Email input: Check exist input", () => {
        cy.get('input[name=email]').type('testbug@gmail.com')
    })
    it("Email input: Check correct email input", () => {
        cy.get('input[name=email]').type('testbutmail.com')
        cy.findAllByText("Insert a valid email adress").should("exist");
    })
    it("Nickname input: Check exist input", () => {
        cy.get('input[name=nickname]').type('testbugnickname')
    })
    it("Nickname input: Check length's nickname input", () => {
        cy.get('input[name=nickname]').type('testb')
        cy.findAllByText("Minimum of 6 characters").should("exist");
    })
    it("Nickname input: Check nickname input without special caracters", () => {
        cy.get('input[name=nickname]').type('testbugs%')
        cy.findAllByText("Add nickname without Symbols").should("exist");
    })
    it("Password input: Check exist input", () => {
        cy.get('input[name=password]').type('pass12345')
    })
    it("Password input: Check length's password input", () => {
        cy.get('input[name=password]').type('pass1')
        cy.findAllByText("Minimum of 6 characters").should("exist");
    })
    it("Password input: Check password input without special caracters", () => {
        cy.get('input[name=password]').type('pass$123')
        cy.findAllByText("Add password without Symbols").should("exist");
    })
    it("Avatar input: Check exist input", () => {
        cy.get('input[name=avatar]').type('https://www.imdb.com/title/tt0499549/mediaviewer/rm371527425/?ref_=tt_ov_i')
    })
    it("Avatar input: Check correct link input", () => {
        cy.get('input[name=avatar]').type('https/title/tt0499549/mediaviewer/rm37152ef_=tt_ov_i')
        cy.findAllByText("Add a correct link").should("exist");
    })
})