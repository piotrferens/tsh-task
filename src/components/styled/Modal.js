import glamorous from "glamorous";

export const modalStyle = {
    modal: {
        width: 400,
        borderRadius: 5,
        background: "whitesmoke",
        boxShadow: "rgba(0, 0, 0, 0.25) 10px 10px 10px 0px, rgb(125, 125, 125) 0px 0px 10px inset",
    },
    overlay: {
        background: "rgba(0, 0, 0, 0.5)",
    },
    closeButton: {
        cursor: "pointer",
    },
};

export const ModalInforamtion = glamorous.div({
    textAlign: "center",
    color: "#696969",
    padding: 15,
    fontFamily: "Helvetica",
    fontSize: 32,
    fontWeight: 900,
    textShadow: "1px 1px 1px #242838, 1px 1px 1px #000000",
});

export const ModalText = glamorous.div({
    padding: 10,
    color: "#696969",
    fontFamily: "Helvetica",
    fontSize: 16,
    fontWeight: 700,
    textShadow: "1px 1px 1px #b7adad, 1px 1px 1px #908f8f",
});
