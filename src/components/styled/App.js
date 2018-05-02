import glamorous from "glamorous";

export const App = glamorous.div({
    width: 980,
    minHeight: 580,
    margin: "0 auto",
    backgroundColor: " #fdfdfd",
    boxShadow: "0 1px 30px rgba(0, 0, 0, 0.4)",
    borderRadius: 5,
    "@media (min-width: 768px) and (max-width: 992px)": {
        width: "100%",
    },
    "@media (max-width: 768px)": {
        height: "100%",
        width: "100%",
        boxShadow: "none",
        borderRadius: 0,
    },
});
