import React, {Fragment} from 'react';
import './app-baner.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const AppBaner = () => {

    const { t } = useTranslation();
    return(
    <Fragment>
        <section id="intro" className="wrapper style1">
            <div className="title">{t('aboutUs.AboutUs')}</div>
            <div className="container">
                <p className="style1">{t('aboutUs.subject')}</p>
                <p className="style2">
                    {t('aboutUs.objP.obj1p')}<br className="mobile-hide"/>
                    {t('aboutUs.objP.obj2p')}
                </p>
                <p className="style3">{t('aboutUs.title')}</p>
                <ul className="actions">
                    <li><Link to="/DetailedInfo" className="button style3 large">{t('aboutUs.more')}</Link></li>
                </ul>
            </div>
        </section>

    </Fragment>
    )
};

export default AppBaner;