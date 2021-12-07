
const demoApiCall = require("./demoApiCall")

it("exists without crashing", () => {
    const response = demoApiCall.default.submit("aa","aa")
    expect(response).toBeInstanceOf(Promise)

});
