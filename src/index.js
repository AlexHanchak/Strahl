import React, {Suspense} from 'react';
import {render} from 'react-dom';

import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';

import {FirebaseApp} from "./services/firebase-service";


import "./i18n";

render(
    <ErrorBoundry>
        <Router>
            <Suspense fallback={(<div>Loading</div>)}>
                <FirebaseApp app={App}/>
            </Suspense>
        </Router>
    </ErrorBoundry>,
    document.getElementById('root'));

