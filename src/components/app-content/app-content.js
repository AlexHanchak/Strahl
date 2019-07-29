import React from 'react';
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import './app-content.css';
import {useTranslation} from 'react-i18next';

import imgTop from "../../images/pic01.jpg";

const AppContent = ({buttons}) => {
    const {t} = useTranslation();
    return (
        <section id="main" className="wrapper style2">
            <div className="title">{t('Service.Service')}</div>
            <div className="container">

                {/*Image */}
                <Link to="#" className="image featured">
                    <img id='imgTop' src={imgTop} alt=""/>
                </Link>

                {/*Features */}
                <section id="features">
                    <header className="style1">
                        <h2>{t('Service.Title')}</h2>
                        <p>{t('Service.Subject')}</p>
                    </header>
                    <div className="feature-list">
                        <div className="row">
                            <div className="col-6 col-12-medium">
                                <section>
                                    <h3 className="icon fa-comment">{t('Service.obj1.Title')}</h3>
                                    <p>{t('Service.obj1.Subject')}</p>
                                </section>
                            </div>
                            <div className="col-6 col-12-medium">
                                <section>
                                    <h3 className="icon solid fa-sync">{t('Service.obj2.Title')}</h3>
                                    <p>{t('Service.obj2.Subject')}</p>
                                </section>
                            </div>
                            <div className="col-6 col-12-medium">
                                <section>
                                    <h3 className="icon fa-image">{t('Service.obj3.Title')}</h3>
                                    <p>{t('Service.obj3.Subject')}</p>
                                </section>
                            </div>
                            <div className="col-6 col-12-medium">
                                <section>
                                    <h3 className="icon solid fa-cog">{t('Service.obj4.Title')}</h3>
                                    <p>{t('Service.obj4.Subject')}</p>
                                </section>
                            </div>
                            <div className="col-6 col-12-medium">
                                <section>
                                    <h3 className="icon solid fa-wrench">{t('Service.obj5.Title')}</h3>
                                    <p>{t('Service.obj5.Subject')}</p>
                                </section>
                            </div>
                            <div className="col-6 col-12-medium">
                                <section>
                                    <h3 className="icon solid fa-check">{t('Service.obj6.Title')}</h3>
                                    <p>{t('Service.obj6.Subject')}</p>
                                </section>
                            </div>
                        </div>
                    </div>
                    <ul className="actions special">
                        <li><HashLink to="/#footer" className="button style1 large">{t('Service.Contact Us')}</HashLink>
                        </li>
                        <li><Link to="#" className="button style2 large">{t('Service.More Info')}</Link></li>
                    </ul>
                </section>

            </div>
        </section>
    )
};

export default AppContent;