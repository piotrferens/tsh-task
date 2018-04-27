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

export const Line = glamorous.div({
    display: "flex",
    justifyContent: "center",
});

export const SearchBar = glamorous.div({
    display: "flex",
    justifyContent: "center",
    padding: "5px 0 5px 0",
});

export const Input = glamorous.input({});

export const Select = glamorous.select({});

export const Reset = glamorous.button({
    fontFamily: "Helvetica",
    fontSize: 12,
});

export const Search = glamorous.button({
    fontFamily: "Helvetica",
    fontSize: 12,
});

export const Table = glamorous.div({
    border: "1px solid red",
    margin: 10,
    fontFamily: "Helvetica",
    fontSize: 12,
});

export const TableHeader = glamorous.div({
    display: "flex",
    padding: 10,
    backgroundColor: "#e8e9ea",
    fontWeight: 700,
});

export const Suppliers = glamorous.div({
    fontWeight: 400,
});

export const TableRow = glamorous.div({
    display: "flex",
    padding: 10,
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

export const Pagination = glamorous.div({});
