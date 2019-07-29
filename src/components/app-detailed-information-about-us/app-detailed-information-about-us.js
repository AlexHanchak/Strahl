import React from 'react';
import {Link} from 'react-router-dom';
import './app-detailed-information-about-us.css';
import {useTranslation} from 'react-i18next';

const AppDetailedInformationAboutUs = () => {
	const { t } = useTranslation();
	return (
        <div id="main" class="wrapper style2">
            <div class="title">{t('aboutUs.AboutUs')}</div>
            <div class="container">


                {/*Content*/}
                <div id="content">
                    <article class="box post">
                        <header class="style1">
                            <h2>{t('aboutUs.subject')}</h2>
                            <p>{t('aboutUs.detailedInf.Title')}</p>
                        </header>
                        <Link to="#" class="image featured">
                            <img src="images/pic01.jpg" alt=""/>
                        </Link>
                        <p>{t('aboutUs.detailedInf.obj1')}</p>
                        <p>{t('aboutUs.detailedInf.obj2')}</p>
                        <p>{t('aboutUs.detailedInf.obj3')}</p>
                        <p>{t('aboutUs.detailedInf.obj4')}</p>
                        <p>{t('aboutUs.detailedInf.obj5')}</p>
                        <p>{t('aboutUs.detailedInf.obj6')}</p>
                        <p>{t('aboutUs.detailedInf.p1')}</p>
                        <p>{t('aboutUs.detailedInf.p2')}</p>
                        <p>{t('aboutUs.detailedInf.p3')}</p>
                        <p>{t('aboutUs.detailedInf.p4')}</p>
                        <p>{t('aboutUs.detailedInf.p5')}</p>

                    </article>
                </div>

            </div>
        </div>
    )
};

export default AppDetailedInformationAboutUs;