import React from 'react';
import { useStyles } from './style';
import GradeBookLogo from "../../assets/gradebook-logo.png";
import AppstoreBadge from "../../assets/appstore-badge.svg";

const Home = () => {
    const classes = useStyles();

    return (
        <section className={classes.container}>
            <h1 className={classes.header}>Genesus</h1>
            <p className={classes.author}>Developed & Designed by Mahit Mehta</p>
            <img className={classes.icon} src={GradeBookLogo} />
            <div className={classes.buttonGroup}>
                <a
                    className={classes.link}
                    rel="noopener noreferer"
                    target="_blank"
                    href="mailto:genesus@mahitm.com"
                >Contact</a>
                <span>|</span>
                 <a
                    className={classes.link}
                    rel="noopener noreferer"
                    target="_blank"
                    href="/privacy"
                >Privacy Policy</a>
            </div>
            <a href="https://apps.apple.com/us/app/genesus/id1594653519" target="_blank" rel="noopener noreferer">
                <img className={classes.appstoreBadge} src={AppstoreBadge} />
            </a>
            {/* <div className={classes.buttonGroup}>
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
            </div> */}
        </section>
    )
}

export default Home; 