import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutMe: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div style={{ padding: "0px 50px", marginBottom: "20px", paddingBottom: "90px", marginTop: "0px", paddingTop: "90px", backgroundColor: "#CFEBC2", color: "black" }} className='flex flex-col md:flex-row justify-center md:justify-between'>
            <p style={{ width: "60vw", fontSize: "20px" }}>{t("home.aboutMe.description")}</p>
            <div className="flex flex-col justify-center" style={{ minHeight: "100%" }}>
                <h3 style={{ fontSize: "80px", fontFamily: "Bebas Neue" }}>{t("home.aboutMe.title")}</h3>
            </div>
        </div>
    );
};

export default AboutMe;