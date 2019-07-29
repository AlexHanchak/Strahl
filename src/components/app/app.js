import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";

import {ToastsContainer, ToastsStore} from "react-toasts";
import {alert} from '../../services';
import 'bootswatch/dist/darkly/bootstrap.min.css';


//components import
import AppHeader from '../app-header'; //сделать кнопки через линк
import AppMain from '../app-main'; //отдельная страница информации о компаниях, либо ссылки на сайты компаний
// дописать фидбек отправка н почту
//сделать вывод всех содружествинных компаний
import AppDetailedInformationAboutUs from "../app-detailed-information-about-us";
import AppFooter from '../app-footer';

//css app

import '../../assets/css/main.css';
import '../../assets/css/fontawesome-all.min.css';
import './app.css';



export default class App extends Component {

    componentDidCatch(error) {
        console.log(error);
        alert(error.message, 'error');
    };

    render() {

        return (
            <div className="App">
                <header>
                    <Route path="/" component={AppHeader} />
                </header>

                <main className="main mx-auto mt-2">
                    <Switch>
                        <Route exact path="/" component={AppMain}/>
                        <Route path="/DetailedInfo" component={AppDetailedInformationAboutUs}/>
                    </Switch>
                </main>

                <footer>
                    <Route path="/" component={AppFooter}/>
                </footer>

                <ToastsContainer store={ToastsStore}/>
                {/*В БИЛД ИНДЕКС ПОМЕСТИТЬ*/}
                {/*<script src="/static/js/jquery.min.js"></script><script src="/static/js/jquery.dropotron.min.js"></script><script src="/static/js/browser.min.js"></script><script src="/static/js/breakpoints.min.js"></script><script src="/static/js/util.js"></script><script src="/static/js/main.js"></script>*/}
            </div>
        );
    }
}
