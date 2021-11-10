import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    container: {
        padding: 25,
    },
    header: {
        color: "#fff",
        fontWeight: 700,
        fontSize: 35,
        margin: "25px 0px",
    },
    subHeader: {
        color: "#fff",
        fontWeight: 500,
        fontSize: 25,
        margin: "25px 0px",
    },
    paragraphHeader: {
        color: "rgba(255, 255, 255, 0.5)",
        fontWeight: 500,
        fontSize: 20,
        margin: "25px 0px",
    },
    paragraph: {
        color: "rgba(255, 255, 255, 0.5)",
        width: "75vw",
        minWidth: 350,
    },
    link: {
        color: '#43A4FF',
    }
}));