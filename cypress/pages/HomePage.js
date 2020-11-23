export default class HomePage {
    constructor() {
        cy.visit("/");
    }

    _getTitleOfThePage() {
        return cy.get("h1")
    }

    _getSubsectionOfThePage() {
        return cy.get("h2")
    }

    expectTitleToBe(expectation) {
        this._getTitleOfThePage().should("have.text", expectation);
        return this;
    }

    expectSubsectionToBeEqualTo(expectation) {
        this._getSubsectionOfThePage().should("have.length", expectation)
        return this;
    }
}