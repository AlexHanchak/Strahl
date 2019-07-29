import React, {Fragment} from 'react';
import './app-main.css';

import  AppBaner from '../app-baner';
import AppContent from '../app-content';
import AppPartners from "../app-partners";


const AppMain = ({ buttons }) => (
	<Fragment>
		<AppBaner/>
		<AppContent/>
		<AppPartners/>
	</Fragment>

);

export default AppMain;