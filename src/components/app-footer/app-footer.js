import React from 'react';
import { Link } from 'react-router-dom';

import './app-footer.css';
import {useTranslation} from 'react-i18next';

const AppFooter = () => {
    const {t} = useTranslation();
    return (
        <section id="footer" className="wrapper">
            <div className="title">{t('CONTACT US.CONTACT US')}</div>
            <div className="container">
                <header className="style1">
                    <h2>{t('CONTACT US.Title')}</h2>
                    <p>{t('CONTACT US.Subject')}</p>
                </header>
                <div className="row">
                    <div className="col-6 col-12-medium">

                        {/*Contact Form*/}
                        <section>
                            {/*method="post" action="#"*/}
                            <form>
                                <div className="row gtr-50">
                                    <div className="col-6 col-12-small">
                                        <input type="text" name="name" id="contact-name" placeholder={t('CONTACT US.Name')}/>
                                    </div>
                                    <div className="col-6 col-12-small">
                                        <input type="text" name="email" id="contact-email" placeholder={t('CONTACT US.Email')}/>
                                    </div>
                                    <div className="col-12">
									<textarea name="message" id="contact-message" placeholder={t('CONTACT US.Message')}
                                              rows="4"/>
                                    </div>
                                    <div className="col-12">
                                        <ul className="actions">
                                            <li><input type="submit" className="style1" value={t('CONTACT US.Send')}/></li>
                                            <li><input type="reset" className="style2" value={t('CONTACT US.Reset')}/></li>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                        </section>

                    </div>
                    <div className="col-6 col-12-medium">

                        {/*Contact*/}
                        <section className="feature-list small">
                            <div className="row">
                                <div className="col-6 col-12-small">
                                    <section>
                                        <h3 className="icon solid fa-home">{t('CONTACT US.Mailing Address')}</h3>
										<p>{t('CONTACT US.Address')}</p>
                                    </section>
                                </div>
                                <div className="col-6 col-12-small">
                                    <section>
                                        <h3 className="icon solid fa-comment">{t('CONTACT US.Social')}</h3>
                                        <p>
                                            <Link to="#">{t('CONTACT US.@untitled-corp')}</Link><br/>
                                            <Link to="#">{t('CONTACT US.linkedincom/untitled')}</Link><br/>
                                            <Link to="#">{t('CONTACT US.facebookcom/untitled')}</Link>
                                        </p>
                                    </section>
                                </div>
                                <div className="col-6 col-12-small">
                                    <section>
                                        <h3 className="icon solid fa-envelope">{t('CONTACT US.Email')}</h3>
                                        <p>
                                            <Link to="#">info@untitled.tld</Link>
                                        </p>
                                    </section>
                                </div>
                                <div className="col-6 col-12-small">
                                    <section>
                                        <h3 className="icon solid fa-phone">{t('CONTACT US.Phone')}</h3>
                                        <p>
                                            (000) 555-0000
                                        </p>
                                    </section>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
                <div id="copyright">
                    <ul>
                        <li><Link to='https://hanchakweb.web.app/'>HanchakWeb.web.app</Link></li>
                        <li>any content</li>
                    </ul>
                </div>
            </div>
        </section>
    )
};
export default AppFooter;