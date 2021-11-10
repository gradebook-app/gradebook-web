import React from 'react';
import { useStyles } from './style';
import GradeBookLogo from "../../assets/gradebook-logo.png";
import { Link } from "react-router-dom";

const Home = () => {
    const classes = useStyles();

    return (
        <section className={classes.container}>
            <h1 className={classes.header}>Genesus</h1>
            <p className={classes.author}>Developed & Designed by Mahit Mehta</p>
            <img className={classes.icon} src={GradeBookLogo} />
           <div className={classes.buttonGroup}>
                <a 
                    target="_blank"
                    href="mailto:genesus@mahitm.com"
                    className={classes.button}
                    // style={{ backgroundColor: "#a2d2ff" }}
                >Contact</a>
                <Link 
                    to="/privacy"
                    className={classes.button}
                >Privacy Policy</Link>
           </div>
        </section>
    )
}

export default Home; 