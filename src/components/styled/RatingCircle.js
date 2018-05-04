import glamorous from "glamorous";

export const RatingCircle = glamorous.div(props => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 24,
    height: 24,
    borderRadius: "50%",
    background: props.isActive
        ? "linear-gradient(to top, #6b92e0 0%, #62bfea 100%)"
        : "linear-gradient(to top, #c7c7c7 0%, #ffffff 100%)",
    color: props.isActive ? "#fdfdfd" : "#666666",
    fontFamily: "Source Sans Pro Black",
    fontSize: 15,
    border: "1.25px solid #696969",
    textAlign: "center",
    margin: 1.5,
    boxShadow: props.isActive
        ? "0 1px 1px rgba(0, 0, 0, 0.15)"
        : "0 1px 1px rgba(0, 0, 0, 0.15), inset 0 1px 1px #ffffff",
    "@media (min-width: 829px) and (max-width: 880px)": {
        width: 22,
        height: 22,
        fontSize: 13,
    },
    "@media (min-width: 576px) and (max-width: 829px)": {
        width: 21,
        height: 21,
        fontSize: 13,
    },
    "@media (max-width: 576px)": {
        width: 14,
        height: 14,
        fontSize: 8,
    },
}));
