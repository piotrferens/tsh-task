import glamorous from "glamorous";

export const RatingCircleContainer = glamorous.div(props => ({
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
}));
export const RatingCircle = glamorous.span({
    display: "inline-block",
    marginTop: 2,
});
