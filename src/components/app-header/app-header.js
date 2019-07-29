import React from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import './app-header.css';
import {useTranslation} from 'react-i18next';
import i18n from '../../i18n';

import logo from '../../images/strahl.png'

const AppHeader = () => {
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const {t} = useTranslation();
    return (
        <section id="header" className="wrapper">

            {/*logo*/}
            <div id="logo">
                <h1 className="App-title"><Link to={'/'}><img alt='' id='logoC' src={logo}/></Link></h1>
                <p>{t('nav.subject1')}</p>
                <p>{t('nav.subject2')}</p>
            </div>

            {/*nav*/}

            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="header-nav-bar">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03"
                        aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarColor03">
                    <ul className="navbar-nav" id="buttons-nav-top">
                        <li className="current nav-item m-2"  ><HashLink className="nav-link secondary" to={'/#header'}>{t('nav.home')}</HashLink></li>
                        <li className="nav-item m-2" ><HashLink className="nav-link secondary" to="/#main">{t('nav.Service')}</HashLink></li>
                        <li className="nav-item m-2"  ><HashLink className="nav-link secondary" to="/#highlights">{t('nav.PartnersAndCustomers')}</HashLink></li>
                        <li className="nav-item m-2"  ><HashLink className="nav-link secondary" to="/#footer">{t('nav.ContactUs')}</HashLink></li>
                        <li className="nav-item m-2" onClick={() => changeLanguage('de')}><Link className="nav-link secondary" to={'#'}>{t('nav.German')}</Link></li>
                        <li className="nav-item m-2"  onClick={() => changeLanguage('en')}><Link className="nav-link secondary" to={'#'}>{t('nav.English')}</Link></li>
                        <li className="nav-item m-2"  onClick={() => changeLanguage('ru')}><Link className="nav-link secondary" to={'#'}>{t('nav.Russian')}</Link></li>
                        <li className="nav-item m-2"  onClick={() => changeLanguage('ua')}><Link className="nav-link secondary" to={'#'}>{t('nav.Ukrainian')}</Link></li>
                    </ul>
                </div>
            </nav>
        </section>
    )
};

export default AppHeader;