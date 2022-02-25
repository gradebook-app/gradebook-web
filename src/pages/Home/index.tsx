import React, { useCallback, useEffect, useRef } from 'react';
import { useStyles } from './style';
import GradeBookLogoLeft from "../../assets/gradebook-left.svg";
import GradeBookLogoRight from "../../assets/gradebook-right.svg";
import AppstoreBadge from "../../assets/appstore-badge.svg";
import OpenSource from '../../components/OpenSource';
import gsap from "gsap";

interface IHomeProps {};

const Home : React.FC<IHomeProps> = () => {
    const classes = useStyles();

    const iconLeftRef = useRef<HTMLImageElement | null>(null);
    const iconRightRef = useRef<HTMLImageElement | null>(null);

    const handleIconAnimation = useCallback(() => {
        gsap.fromTo(
            iconLeftRef.current,
            { rotateY: 90, transformOrigin: "right" },
            { rotateY: 10, duration: 1 },
        )
        gsap.fromTo(
            iconRightRef.current,
            { rotateY: -90, transformOrigin: "left" },
            { rotateY: -10, duration: 1 },
        )
    }, []);

    useEffect(handleIconAnimation, [ handleIconAnimation ]);

    return (
        <section className={classes.container}>
            <h1 className={classes.header}>Genesus</h1>
            <p className={classes.author}>Developed & Designed by Mahit Mehta</p>
            <div className={classes.iconContainer}>
                <div className={classes.iconSections}>
                    <img 
                        ref={iconLeftRef}
                        className={classes.icon} 
                        src={GradeBookLogoLeft} 
                        alt="app-icon-left"
                    />
                    <img 
                        ref={iconRightRef}
                        className={classes.icon} 
                        src={GradeBookLogoRight} 
                        alt="app-icon-right"
                    />
                </div>
            </div>
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
                    href="/privacy"
                >Privacy Policy</a>
            </div>
            <a href="https://apps.apple.com/us/app/genesus/id1594653519" target="_blank" rel="noopener noreferrer">
                <img className={classes.appstoreBadge} src={AppstoreBadge} alt="appstore-badge"/>
            </a>
            <div>
                <a 
                    style={{ textDecoration: "none" }}
                    className={classes.link}
                    href="https://gradebook-apks.s3.us-east-2.amazonaws.com/genesus.apk" 
                    target="_blank" 
                    rel="noopener noreferrer">
                        Download Android<sup className={classes.beta}>beta</sup> APK.
                </a>
            </div>
        </section>
    )
}

export default Home; 