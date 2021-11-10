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
    icon: { 
        width: "clamp(200px, 30vw, 300px)",
        height: "clamp(200px, 30vw, 300px)",
        boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.35), 0px 0px 10px 0px rgba(0, 0, 0, 0.35)",
        borderRadius: 5,
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
    }
}));