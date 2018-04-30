import glamorous from "glamorous";

export const App = glamorous.div({
    width: 980,
    minHeight: 610,
    margin: "0 auto",
    backgroundColor: " #fdfdfd",
    boxShadow: "0 1px 4px rgba(0, 0, 0, 0.3)",
    borderRadius: 5,
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

export const LineContainer = glamorous.div({
    display: "flex",
    justifyContent: "center",
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

export const TableContainer = glamorous.div({
    width: 940,
    minHeight: 371,
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
    padding: 10,
    backgroundColor: "#e8e9ea",
    fontWeight: 700,
});

export const HeaderSupplier = glamorous.div({
    flex: 6,
    padding: "20px 15px",
});

export const HeaderRating = glamorous.div({
    flex: 2,
    padding: "20px 15px",
    textAlign: "center",
});

export const HeaderRefVal = glamorous.div({
    flex: 1,
    padding: "20px 15px",
    textAlign: "center",
});

export const Suppliers = glamorous.div({
    fontWeight: 400,
});

export const TableRow = glamorous.div({
    display: "flex",
    ":nth-child(even)": {
        background: "#f7f7f7",
    },
    cursor: "pointer",
});

export const SupplierName = glamorous.div({
    flex: 6,
    padding: 15,
    borderRight: "1px solid #e0e0e0",
});

export const Rating = glamorous.div({
    display: "flex",
    flex: 2,
    padding: 15,
    borderRight: "1px solid #e0e0e0",
});

export const RatingCircleContainer = glamorous.div(props => ({
    width: 24,
    height: 24,
    borderRadius: "50%",
    background: props.isActive
        ? "linear-gradient(to top, #3366cc 0%, #62bfea 100%)"
        : "linear-gradient(to top, #ffffff 0%, #efefef 100%)",
    color: props.isActive ? "#fdfdfd" : "#666666",
    fontFamily: "Source Sans Pro Black",
    fontSize: 15,
    border: "1px solid #848181",
    textAlign: "center",
    margin: 1.5,
    fontWeight: "bold",
}));
export const RatingCircle = glamorous.span({
    display: "inline-block",
    marginTop: 3,
});
export const Reference = glamorous.div({
    flex: 1,
    padding: 15,
    borderRight: "1px solid #e0e0e0",
    textAlign: "center",
});

export const Value = glamorous.div({
    flex: 1,
    padding: 15,
    textAlign: "center",
});

export const PaginationContainer = glamorous.div({
    display: "flex",
    justifyContent: "center",
    marginBottom: 10,
});
export const Pagination = glamorous.div({
    display: "flex",
});

export const PaginationButton = glamorous.div(props => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 12,
    fontFamily: "Helvetica",
    width: 25,
    height: 25,
    margin: "0 2px",
    border: " 1px solid #dcdcdc",
    borderRadius: 3,
    fontWeight: 700,
    background: props.isActive
        ? "#484848"
        : "linear-gradient(to top, rgba(218, 218, 218, 0.73) 0%, rgba(255, 255, 255, 0.73) 100%)",
    color: props.isActive ? "#f2f2f2" : "#717171",
    textShadow: props.isActive ? "0 1px 0 rgba(0, 0, 0, 0.13)" : "0 1px 0 #ffffff",
    boxShadow: props.isActive
        ? "0 1px 0 #ffffff, inset 0 1px 5px rgba(0, 0, 0, 0.4)"
        : "0 1px 0 #b9b5b5, inset 0 1px 5px rgba(255, 255, 255, 0.4)",
    cursor: "pointer",
}));

export const SpinnerWrapper = glamorous.div({
    display: "flex",
    justifyContent: "center",
    marginTop: 150,
});

export const ModalInforamtion = glamorous.div({
    padding: 15,
    fontFamily: "Helvetica",
    fontSize: 32,
    fontWeight: 700,
});

export const ModalText = glamorous.div({
    padding: 10,
    fontFamily: "Helvetica",
    fontSize: 16,
    fontWeight: 400,
});
