import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './app-header.css';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

const AppHeader = () => {
	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};

	const { t } = useTranslation();
	return(
	<section id="header" className="wrapper">

		{/*logo*/}
		<div id="logo">
			<h1 className="App-title"><Link to={'/'}>{t('nav.cName') }</Link></h1>
			<p>{t('nav.subject')}</p>
		</div>

		{/*nav*/}
		<nav id="nav">
			<ul>
				<li className="current"><Link to={'/'}>{t('nav.home')}</Link></li>
				<li>
					<a href="#">{t('nav.Language')}</a>
					<ul>
						<li onClick={() => changeLanguage('de')}><Link to={'#'}>de</Link></li>
						<li onClick={() => changeLanguage('en')}><Link to={'#'}>en</Link></li>
						<li onClick={() => changeLanguage('ru')}><Link to={'#'}>ru</Link></li>
						<li onClick={() => changeLanguage('ua')}><Link to={'#'}>ua</Link></li>
					</ul>
				</li>
				<li><HashLink to="/#main">{t('nav.Service')}</HashLink></li>
				<li><HashLink to="/#highlights">{t('nav.PartnersAndCustomers')}</HashLink></li>
				<li><HashLink to="/#footer">{t('nav.ContactUs')}</HashLink></li>
			</ul>
		</nav>

	</section>
	)
};

export default AppHeader;