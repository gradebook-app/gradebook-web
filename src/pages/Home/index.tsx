import React from 'react';
import { useStyles } from './style';
import GradeBookLogo from "../../assets/gradebook-logo.png";
import AppstoreBadge from "../../assets/appstore-badge.svg";
import OpenSource from '../../components/OpenSource';

const Home = () => {
    const classes = useStyles();

    return (
        <section className={classes.container}>
            <h1 className={classes.header}>Genesus</h1>
            <p className={classes.author}>Developed & Designed by Mahit Mehta</p>
            <img className={classes.icon} src={GradeBookLogo} alt="app-icon"/>
            <OpenSource />
            <div className={classes.buttonGroup}>
                <a
                    className={classes.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    href="mailto:genesus@mahitm.com"
                >Contact</a>
                <span>|</span>
                 <a
                    className={classes.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    href="/privacy"
                >Privacy Policy</a>
            </div>
            <a href="https://apps.apple.com/us/app/genesus/id1594653519" target="_blank" rel="noopener noreferrer">
                <img className={classes.appstoreBadge} src={AppstoreBadge} alt="appstore-badge"/>
            </a>
        </section>
    )
}

export default Home; 