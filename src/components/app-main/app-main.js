import React, {Fragment} from 'react';
import './app-main.css';

import  AppBaner from '../app-baner';
import AppContent from '../app-content';


const AppMain = ({ buttons }) => (
	<Fragment>
		<AppBaner/>
		<AppContent/>
	</Fragment>

);

export default AppMain;