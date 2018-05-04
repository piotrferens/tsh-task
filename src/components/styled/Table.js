import glamorous from "glamorous";

const marginTableHeader = "5px 0";

export const TableContainer = glamorous.div({
    width: 940,
    minHeight: 324,
    margin: "0 auto",
    "@media (min-width: 768px) and (max-width: 992px)": {
        width: "100%",
        minHeight: 285,
    },
    "@media (max-width: 768px)": {
        overflowX: "auto",
        width: "100%",
        minHeight: 285,
    },
    "@media (max-width: 334px)": {
        minHeight: 275,
    },
});

export const Table = glamorous.div({
    width: "100%",
    fontFamily: "Helvetica",
    fontSize: 12,
    borderRadius: 5,
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08), inset 0 1px 1px #ffffff",
    border: "1px solid #dcdcdc",
    "@media (min-width: 576px) and (max-width: 768px)": {
        width: 768,
    },
    "@media (max-width: 576px)": {
        width: 576,
        fontSize: 11,
    },
});

export const TableHeader = glamorous.div({
    display: "flex",
    backgroundColor: "#e8e9ea",
    fontWeight: 700,
});

export const HeaderSupplier = glamorous.div({
    flex: 6,
    padding: 20,
    margin: marginTableHeader,
    "@media (max-width: 576px)": {
        padding: 15,
    },
});

export const HeaderRating = glamorous.div({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
    padding: 5,
    margin: marginTableHeader,
    textAlign: "center",
    "@media (max-width: 576px)": {
        padding: 0,
    },
});

export const HeaderRefVal = glamorous.div({
    display: "flex",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    margin: marginTableHeader,
    textAlign: "center",
    "@media (max-width: 576px)": {
        padding: 0,
    },
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
    padding: 20,
    "@media (max-width: 576px)": {
        padding: 15,
    },
});

export const Rating = glamorous.div({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
    padding: 5,
    borderRight: "1px solid #e0e0e0",
    "@media (max-width: 576px)": {
        padding: 0,
    },
});

export const Reference = glamorous.div({
    display: "flex",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    borderRight: "1px solid #e0e0e0",
    textAlign: "center",
    "@media (max-width: 576px)": {
        padding: 0,
        fontSize: 11,
    },
});

export const Value = glamorous.div({
    display: "flex",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    textAlign: "center",
    "@media (max-width: 576px)": {
        padding: 0,
    },
});

export const Error = glamorous.div({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: "Helvetica",
    fontSize: 38,
    minHeight: 324,
});
