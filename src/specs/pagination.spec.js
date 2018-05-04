import { mapLinks } from "../reducers/pagination";

describe("pagination query", () => {
    it("should map string queries into objects with page and query", () => {
        const input = [
            "query=a&rating=4&page=0",
            "query=a&rating=4&page=1",
            "query=a&rating=4&page=2",
            "query=a&rating=4&page=3",
        ];

        const output = [
            {
                page: 0,
                query: {
                    page: "0",
                    query: "a",
                    rating: "4",
                },
            },
            {
                page: 1,
                query: {
                    page: "1",
                    query: "a",
                    rating: "4",
                },
            },
            {
                page: 2,
                query: {
                    page: "2",
                    query: "a",
                    rating: "4",
                },
            },
            {
                page: 3,
                query: {
                    page: "3",
                    query: "a",
                    rating: "4",
                },
            },
        ];

        expect(mapLinks(input)).toEqual(output);
    });
});
