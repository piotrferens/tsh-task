import glamorous from "glamorous";

export const PaginationContainer = glamorous.div({
    display: "flex",
    justifyContent: "center",
    marginTop: 20,
    "@media (max-width: 768px)": {
        marginTop: 5,
    },
    "@media (max-width: 334px)": {
        marginTop: 0,
        marginBottom: 5,
    },
});
export const Pagination = glamorous.div({
    display: "flex",
    maxWidth: 372,
    "@media (max-width: 576px)": {
        maxWidth: 324,
    },
    "@media (max-width: 334px)": {
        maxWidth: 320,
    },
});

export const PaginationButtonContainer = glamorous.div(props => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 12,
    fontFamily: "Helvetica",
    width: 25,
    height: 25,
    minWidth: props.leftEnd || props.rightEnd ? 25 : null,
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
    "@media (max-width: 576px)": {
        width: 21,
        height: 21,
        minWidth: props.leftEnd || props.rightEnd ? 21 : null,
    },
}));

export const PaginationButton = glamorous.span({
    marginTop: 2,
});
