import React from 'react';
import { useTranslation } from 'react-i18next';

const OurStory: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div style={{ padding: "0px 50px", marginBottom: "0px", paddingBottom: "90px", marginTop: "0px", paddingTop: "90px", backgroundColor: "#F8635E", color: "#F2EDB6" }} className='flex flex-row justify-between'>
            <div className="flex flex-col justify-center" style={{ minHeight: "100%" }}>
                <h3 style={{ fontSize: "80px", fontFamily: "Bebas Neue" }}>{t("home.ourStory.title")}</h3>
            </div>
            <p style={{ width: "60vw", fontSize: "20px" }}>{t("home.ourStory.description")}</p>
        </div>
    );
};

export default OurStory;