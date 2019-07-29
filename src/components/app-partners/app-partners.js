import React from 'react';
// import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import './app-partners.css';
import {useTranslation} from 'react-i18next';
import img1 from '../../images/logo-1.png';
import img2 from '../../images/logo-2.png';
import img3 from '../../images/logo-3.png';


const AppPartners = ({buttons}) => {
    const {t} = useTranslation();
    return (
        <section id="highlights" className="wrapper style3">
            <div className="title">{t('Partners.Title')}</div>
            <div className="container">
                <div className="row aln-center">
                    <div className="col-4 col-12-medium">
                        <section className="highlight">
                            <HashLink to="#" className="image featured"><img src={img1} id='logoP' alt=""/></HashLink>
                            <h3><HashLink to="#">{t('Partners.p1.Title')}</HashLink></h3>
                            <p>{t('Partners.p1.Subject')}</p>
                            <ul className="actions">
                                <li><HashLink to="#" className="button style1">{t('Partners.p1.Button')}</HashLink></li>
                            </ul>
                        </section>
                    </div>
                    <div className="col-4 col-12-medium">
                        <section className="highlight">
                            <HashLink to="#" className="image featured"><img src={img2} id='logoP' alt=""/></HashLink>
                            <h3><HashLink to="#">{t('Partners.p2.Title')}</HashLink></h3>
                            <p>{t('Partners.p2.Subject')}</p>
                            <ul className="actions">
                                <li><HashLink to="#" className="button style1">{t('Partners.p2.Button')}</HashLink></li>
                            </ul>
                        </section>
                    </div>
                    <div className="col-4 col-12-medium">
                        <section className="highlight">
                            <HashLink to="#" className="image featured"><img src={img3} id='logoP' alt=""/></HashLink>
                            <h3><HashLink to="#">{t('Partners.p3.Title')}</HashLink></h3>
                            <p>{t('Partners.p3.Subject')}</p>
                            <ul className="actions">
                                <li><HashLink to="#" className="button style1">{t('Partners.p3.Button')}</HashLink></li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default AppPartners;