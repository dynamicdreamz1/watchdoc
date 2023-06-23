import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";


const NoMatch = () => {

    const {t}=useTranslation();
    let navigate=useNavigate();

    const handleClick=()=>{
        navigate('/')
    }
    
    return (
    <React.Fragment>
        <center>
        <h3>{t('NoMatchPage.mainPage.a1')}</h3> <br/>
        <button onClick={handleClick}>{t('NoMatchPage.mainPage.a2')}</button>
        </center>
    </React.Fragment>
    );
    }
    
export default NoMatch;