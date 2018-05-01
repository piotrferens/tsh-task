import glamorous from "glamorous";

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
