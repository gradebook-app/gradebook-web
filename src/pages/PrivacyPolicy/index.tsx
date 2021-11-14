import React, { ReactChild } from 'react';
import { useStyles } from './style';

type SubHeaderProps = {
    children: string | ReactChild
};

const SubHeader : React.FC<SubHeaderProps> = ({ children }) => {
    const classes = useStyles();

    return (
        <h2 className={classes.subHeader}>
            { children }
        </h2>
    )
};

type ParagraphHeaderProps = {
    children: string | ReactChild
};

const ParagraphHeader : React.FC<ParagraphHeaderProps> = ({ children }) => {
    const classes = useStyles();

    return (
        <h2 className={classes.paragraphHeader}>
            { children }
        </h2>
    )
};

type ParagraphProps = {
    children: string | ReactChild
};

const Paragraph : React.FC<ParagraphProps> = ({ children }) => {
    const classes = useStyles();

    return (
        <p className={classes.paragraph}>
            { children }
        </p>
    )
};

const PrivacyPolicy = () => {
    const classes = useStyles();

    return (
        <section className={ classes.container }>
            <h1 className={ classes.header }>
                Privacy Policy 
            </h1>
            <SubHeader>Introduction</SubHeader>
           <Paragraph>
                <>
                    Thank you for choosing to be part of our Community at Genesus 
                    ("Company", "we", "us", or "our"). We are committed to protecting 
                    your personal information and your right to privacy. If you have any questions
                    or concerns please contact us at <a target="_blank" className={classes.link} href="mailto:genesus@mahitm.com">genesus@mahitm.com</a>.
                </>
            </Paragraph>
            <Paragraph>
                This privacy notice describes how we might use your information if you
                download or use our mobile application -- Genesus.
            </Paragraph>
            <Paragraph>
                    In this privacy notice if we refer to "App" we are refering to any application
                    of ours that references or links to this policy, including any listed above. 
            </Paragraph>
            <Paragraph>
                The purpose of this privacy notice is to explain to you in the clearest way 
                possible what information we collect, how we use it, and what rights you have in relatiom to it.
            </Paragraph>
            <SubHeader>
                What Information do we Collect?
            </SubHeader>
            <ParagraphHeader>
                1. Personal Information You Disclose
            </ParagraphHeader>
            <Paragraph>
                In Short: We collect and store everything you provide.
            </Paragraph>
            <Paragraph>
                We collect personal information that you voluntarily provide to us when you login on 
                the App and when you participate in activities on the App or otherwise when you contact us.
            </Paragraph>
            <Paragraph>
                We collect personal information such as your email addresses and passwords provided by you.
            </Paragraph>
            <ParagraphHeader>
                2. Information Automatically Collected
            </ParagraphHeader>
            <Paragraph>
                    In Short: Some information -- such as your grades, assignments, GPA, and Genesis account details may be 
                    automatically collected.
            </Paragraph>
            <ParagraphHeader>
                3. Information Collected Through the App
            </ParagraphHeader>
           <Paragraph>
            In Short: We collect information regarding your mobile device and push notifications, when you use our App.
           </Paragraph>
           <Paragraph>
                Push Notifications: We may request to send you push notifications regarding your account or certain features of the App.
                If you wish to opt-out from receiving these types of communications, you may turn them off in your device's settings.
           </Paragraph>
           <ParagraphHeader>
            4. Information Collected from other Sources
           </ParagraphHeader>
           <Paragraph>
           In Short: We collect information from Genesis Parent Portal.
           </Paragraph>
           <Paragraph>
                We collect current grades, assignments, GPA, and other account data 
                from your Genesis Parent Portal.
           </Paragraph>
           <SubHeader>
           How do we use your Information?
           </SubHeader>
           <Paragraph>
           We use your information to send notifications, show realtime grades, assignments, GPA, and account details.
           </Paragraph>
           <SubHeader>
           Will your information be shared with anyone?
           </SubHeader>
           <Paragraph>
           We only share information with your consent, to comply with laws, to provide you with services, to protect your rights,
                        or to fulfill business obligations.
           </Paragraph>
           <SubHeader>
           How long do we keep your information?
           </SubHeader>
           <Paragraph>
           We keep your information for as long as necessary to fulfill the purposes outlined in this privacy
                        notice unless otherwise required by laws.
           </Paragraph>
           <SubHeader>
           How do we keep your information safe?
           </SubHeader>
            <Paragraph>
            We aim to protect your personal information through a system of organizational and technical security measures.
                       We have implemented appropriate technical and organizational security measures designed to protect the security 
                       of any personal information we process. However, despite our safeguards and efforts to secure your information,
                       no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot
                       promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security, and improperly 
                       collect, access, steal, or modify your information. Although we will do our best to protect your personal information, the transmission of personal information to 
                       and from our App is at your own risk. You should only access the App within a secure environment.
            </Paragraph>
            <SubHeader>
            Do we make updates to this Notice?
            </SubHeader>
            <Paragraph>
            Yes, we will update this notice as neccessary to stay compliant with relevant laws.
                       As such, we encourage you to review this privacy notice frequently to be informed of how we
                       are protecting your information.
            </Paragraph>
            <SubHeader>
            How can you review, update, or delete the data we collect from you?
            </SubHeader>
            <Paragraph>
            <>
            Based on the applicable law of your country, you may have the right to request access to 
                        your personal information we collect from you, change that information, or delete it in some
                        circumstances. To request to review, update, or delete your personal information, please submit 
                        a request form by contacting us at <a target="_blank" className={classes.link} href="mailto:genesus@mahitm.com">genesus@mahitm.com</a>.
            </>
            </Paragraph>
        </section>
    )
}

export default PrivacyPolicy; 