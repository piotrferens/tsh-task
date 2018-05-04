const env = Object.assign({}, process.env);

describe("http service", () => {
    afterEach(() => {
        jest.resetModules();
        process.env = env;
    });

    it("should prepend baseURL to every request in development", () => {
        process.env.NODE_ENV = "development";
        const { http } = require("../http");
        expect(http.defaults.baseURL).toEqual("http://test-api.kuria.tshdev.io/");
    });

    it("should prepend baseURL with CORS to every request in production", () => {
        process.env.NODE_ENV = "production";
        const { http } = require("../http");
        expect(http.defaults.baseURL).toEqual(
            "https://cors-anywhere.herokuapp.com/http://test-api.kuria.tshdev.io/",
        );
    });
});
