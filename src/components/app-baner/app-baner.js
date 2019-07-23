import React, {Fragment} from 'react';
import './app-baner.css';
import { useTranslation } from 'react-i18next';


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
                <p className="style3">It's <strong>responsive</strong>, built
                    on <strong>HTML5</strong> and <strong>CSS3</strong>, and released for use it for any of
                    your personal or commercial projects &ndash; just be sure to credit us!</p>
                <ul className="actions">
                    <li><a href="#" className="button style3 large">Proceed</a></li>
                </ul>
            </div>
        </section>

    </Fragment>
    )
};

export default AppBaner;