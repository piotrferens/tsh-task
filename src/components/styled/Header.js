import glamorous from "glamorous";

export const Header = glamorous.div({
    "@media (max-width: 576px)": {
        marginTop: 25,
    },
});

export const Title = glamorous.div({
    display: "flex",
    justifyContent: "center",
    color: "#2288b7",
    fontFamily: "Source Sans Pro",
    fontSize: 60,
    fontWeight: 300,
    "@media (min-width: 576px) and (max-width: 768px)": {
        fontSize: 48,
    },
    "@media (max-width: 576px)": {
        fontSize: 36,
        textAlign: "center",
        marginTop: 20,
    },
});

export const Subtitle = glamorous.div({
    display: "flex",
    justifyContent: "center",
    color: "#3b3b3b",
    fontFamily: "Source Sans Pro",
    fontSize: 17,
    fontWeight: 400,

    "@media (min-width: 768px) and (max-width: 992px)": {
        fontSize: 16,
    },
    "@media (min-width: 576px) and (max-width: 768px)": {
        fontSize: 12,
    },
    "@media (max-width: 576px)": {
        textAlign: "center",
        fontSize: 12,
    },
});

export const LineContainer = glamorous.div({
    display: "flex",
    justifyContent: "center",
    "@media (max-width: 992px)": {
        width: "95%",
        margin: "0 auto",
    },
});
export const Line = glamorous.hr({
    width: 940,
    height: 1,
    border: 0,
    borderTop: "1px solid #ccc",
    margin: "1em 0",
    padding: 0,
});
