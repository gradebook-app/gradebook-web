import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    container: {
        transition: "250ms ease",
        width: "clamp(245px, calc(20vw - 30px), 320px)",
        height: "clamp(35px, 2vw, 100px)",
        backgroundColor: "#43a4ff83",
        margin: "15px 0px",
        borderRadius: 5,
        border: "2px solid #43a4ff83",
        padding: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: "pointer",
        "&:hover": {
            opacity: 0.75,
        }
    },
    link: {
        textDecoration: "none",
        cursor: "pointer",
    },
    text: {
        lineHeight: "1.5rem",
        color: "rgba(255, 255, 255, 0.9)",
        fontSize: "clamp(14px, 1vw, 19.5px)",
    }
}))