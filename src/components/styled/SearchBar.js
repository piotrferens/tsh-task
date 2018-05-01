import glamorous from "glamorous";

export const SearchBar = glamorous.div({
    display: "flex",
    justifyContent: "center",
    padding: "5px 0 5px 0",
});

export const Input = glamorous.input({
    width: 370,
    height: 28,
    margin: 5,
    padding: "0 10px",
    borderRadius: 5,
    border: "1px solid #dcdcdc",
    backgroundColor: "#fafafa",
    boxShadow: "inset 0 1px 1px #ffffff",
    outline: "none",
    "::placeholder ": {
        color: "#999999",
        fontFamily: "Helvetica",
        fontSize: 12,
        fontWeight: 400,
    },
});
export const SelectContainer = glamorous.div({
    width: 161,
    height: 30,
    margin: 5,
    backgroundColor: "#eaeced",
    borderRadius: 5,
    border: "none",
    outline: "none",
});

export const Select = glamorous.select({
    width: 150,
    height: 18,
    margin: "6px 5.5px 6px 5.5px",
    backgroundColor: "#fdfdfd",
    color: "#000000",
    fontFamily: "Arial MT",
    fontSize: 11,
    fontWeight: 400,
    textAlignLast: "center",
    borderRadius: 5,
    border: "none",
    outline: "none",
    cursor: "pointer",
});

export const Reset = glamorous.button({
    width: 74,
    height: 30,
    margin: 5,
    fontFamily: "Helvetica",
    fontSize: 12,
    fontWeight: 700,
    background:
        "linear-gradient(to top, rgba(0, 0, 0, 0.22) 0%, rgba(0, 0, 0, 0.22) 1%, rgba(212, 212, 212, 0.22) 100%)",
    color: "#494949",
    borderRadius: 5,
    border: "none",
    outline: "none",
    cursor: "pointer",
});

export const Search = glamorous.button({
    width: 80,
    height: 30,
    margin: 5,
    fontFamily: "Helvetica",
    fontSize: 12,
    fontWeight: 700,
    background: "linear-gradient(to top, #1f76f0 0%, #6ba1f3 99%, #6ba1f3 100%)",
    color: "#fdfdfd",
    borderRadius: 5,
    border: "none",
    outline: "none",
    cursor: "pointer",
});
