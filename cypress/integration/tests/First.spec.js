import HomePage from "../../pages/HomePage";
Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    console.log("Cypress detected uncaught exception", err);
    return false;
});

context("FirstTest", () => {
    let page;

    before(() => {
        page = new HomePage();
    });

    it("my first test", () => {
        page.expectTitleToBe("Kitchen Sink")
            .expectSubsectionToBeEqualTo(3)
    });
});
