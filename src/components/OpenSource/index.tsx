import React from "react";
import { useStyles } from "./styles";

const OpenSource = () => {
    const classes = useStyles();

    return (
        <a 
            target="_blank"
            className={classes.link} 
            rel="noopener noreferrer" 
            href="https://github.com/gradebook-app/gradebook">
            <div className={classes.container}>
                <p className={classes.text}>
                    This is an Open Source Project. 
                    <u> Develop, Collaborate, and View Here.</u>
                </p>
            </div>
        </a>
    )
}

export default OpenSource ;