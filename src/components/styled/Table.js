import glamorous from "glamorous";

const paddingTableCell = 20;

export const TableContainer = glamorous.div({
    width: 940,
    minHeight: 324,
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
    backgroundColor: "#e8e9ea",
    fontWeight: 700,
});

export const HeaderSupplier = glamorous.div({
    flex: 6,
    padding: paddingTableCell,
});

export const HeaderRating = glamorous.div({
    flex: 2,
    padding: paddingTableCell,
    textAlign: "center",
});

export const HeaderRefVal = glamorous.div({
    flex: 1,
    padding: paddingTableCell,
    textAlign: "center",
});

export const Suppliers = glamorous.div({
    fontWeight: 400,
});

export const TableRow = glamorous.div({
    maxHeight: 50,
    display: "flex",
    ":nth-child(even)": {
        background: "#f7f7f7",
    },
    cursor: "pointer",
});

export const SupplierName = glamorous.div({
    flex: 6,
    borderRight: "1px solid #e0e0e0",
    padding: paddingTableCell,
});

export const Rating = glamorous.div({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
    padding: paddingTableCell,
    borderRight: "1px solid #e0e0e0",
});

export const Reference = glamorous.div({
    flex: 1,
    padding: paddingTableCell,
    borderRight: "1px solid #e0e0e0",
    textAlign: "center",
});

export const Value = glamorous.div({
    flex: 1,
    padding: paddingTableCell,
    textAlign: "center",
});
