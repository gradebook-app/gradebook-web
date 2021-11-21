import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    container: {
        width: "100vw",
        minHeight: "100vh",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    header: {
        color: "#fff",
        fontSize: 35,
        fontWeight: 700,
    },
    iconContainer: { 
        width: "clamp(275px, 20vw, 350px)",
        height: "clamp(275px, 20vw, 350px)",
        boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.35), 0px 0px 10px 0px rgba(0, 0, 0, 0.35)",
        borderRadius: 5,
        backgroundColor: "rgba(255, 255, 255, 0.01)",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconSections: {
        display: 'flex',
        transform: "rotateX(35deg)",
        transformStyle:"preserve-3d",
    },
    icon: {
        width: "clamp(175px, 13.5vw, 245px)",
        height: "clamp(175px, 13.5vw, 245px)",
        // filter: "drop-shadow(30px 10px 4px #4444dd)",
    },
    author: {
        color: "rgba(255, 255, 255, 0.5)",
        margin: "10px 0px",
        marginBottom: 25,
    },
    button: {
        minWidth: 100,
        transition: "200ms ease",
        textDecoration: "none",
        margin: "20px 10px",
        color: "#fff",
        height: 45,
        backgroundColor: "#43A4FF",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        padding: "5px 10px",
        boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.35)",
        "&:hover": {
            opacity: 0.75,
        }
    },
    buttonGroup: {
        display:'flex',
        color: "rgba(255, 255, 255, 0.35)",
        margin: "10px 0px",
    },
    link: {
        margin: "0px 10px",
        color: "rgba(255, 255, 255, 0.35)",
    },
    appstoreBadge: {
        margin: 15,
        width: 175,
        height: "auto",
    }
}));