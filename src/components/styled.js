import glamorous from "glamorous";

export const App = glamorous.div({
    width: 980,
    height: 580,
    margin: "0 auto",
    backgroundColor: " #fdfdfd",
    boxShadow: "0 1px 4px rgba(0, 0, 0, 0.3)",
});

export const Header = glamorous.div({});

export const Title = glamorous.div({
    display: "flex",
    justifyContent: "center",
    color: "#2288b7",
    fontFamily: "Source Sans Pro",
    fontSize: 60,
    fontWeight: 300,
});

export const Subtitle = glamorous.div({
    display: "flex",
    justifyContent: "center",
    color: "#3b3b3b",
    fontFamily: "Source Sans Pro",
    fontSize: 17,
    fontWeight: 400,
});

export const Line = glamorous.hr({
    width: 940,
    height: 1,
    border: 0,
    borderTop: "1px solid #ccc",
    margin: "1em 0",
    padding: 0,
});

export const SearchBar = glamorous.div({
    display: "flex",
    justifyContent: "center",
    padding: "5px 0 5px 0",
});

export const Input = glamorous.input({
    width: 370,
    height: 30,
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

export const TableContainer = glamorous.div({
    width: 940,
    height: 310,
    marginLeft: 20,
});

export const Table = glamorous.div({
    margin: 10,
    fontFamily: "Helvetica",
    fontSize: 12,
    borderRadius: 5,
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08), inset 0 1px 1px #ffffff",
    border: "1px solid #dcdcdc",
});

export const TableHeader = glamorous.div({
    display: "flex",
    padding: 20,
    backgroundColor: "#e8e9ea",
    fontWeight: 700,
});

export const Suppliers = glamorous.div({
    fontWeight: 400,
});

export const TableRow = glamorous.div({
    display: "flex",
    padding: 15,
});

export const SupplierName = glamorous.div({
    flex: 6,
});

export const Rating = glamorous.div({
    flex: 2,
});

export const Reference = glamorous.div({
    flex: 1,
});

export const Value = glamorous.div({
    flex: 1,
});

export const PaginationContainer = glamorous.div({
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
});
export const Pagination = glamorous.div({
    width: 176,
    height: 25,
});
