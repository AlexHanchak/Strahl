import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import * as PropTypes from 'prop-types';

import React, { Component } from 'react';
import alert from './alert';

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/6.2.4/firebase-app.js"></script>
//
// <!-- TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#reserved-urls -->
//
// 	<!-- Initialize Firebase -->
// 	<script src="/__/firebase/init.js"></script>

const _conf = {
	apiKey: "AIzaSyA2oeDxnVDibwVAZaADmaleeyW-fhTzyGI",
	authDomain: "strahl-49561.firebaseapp.com",
	databaseURL: "https://strahl-49561.firebaseio.com",
	projectId: "strahl-49561",
	storageBucket: "",
	messagingSenderId: "842175797715",
	appId: "1:842175797715:web:76321cb67c594958"
};

class FirebaseApp extends Component {
	
	static propTypes = {
		app: PropTypes.func.isRequired
	};
	
	constructor(props) {
		
		super(props);
		
		firebase.initializeApp(_conf);
	}
	
	componentDidMount() {
		
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.setState({
					auth: true
				});
			} else {
				this.setState({
					auth: false
				});
			}
		});
	}
	
	render() {
		
		const App = this.props.app;
		
		return <App auth={ this.state.auth }/>;
	}
	
	state = {
		auth: false
	};
}

class FirebaseService {
	
	_app = firebase.app();
	_db = this._app.firestore();
	_users = this._db
		.collection('users');
		// .orderBy('last_name');//user-page not load with it;
	_messages = this._db.collection('messages');

	// _storage = this._app.storage();
	
	/**
	 * Добавление нового пользователя в базу данных
	 * @param user
	 * @returns {Promise<firebase.firestore.DocumentReference>}
	 */
	addUser = async user => {
		return await this._users.add(user)
			.catch((reason) => {
				throw new Error(reason.message);
			});
	};
	
	/**
	 * Добавление сообщения от пользователя в базу данных
	 * @param message
	 * @returns {Promise<firebase.firestore.DocumentReference>}
	 */
	addMessage = async message => {
		return await this._messages.add(message)
			.then(() => {
				console.log(message);
			})
			.catch((reason) => {
				alert(reason);
			});
	};

	delMessage = () => {
	console.log('sss')
		// this._messages.doc().delete()
		// 	.catch(function(error) {
		// 		console.error("Error removing document: ", error);
			// });
	};

	getUsers = async entry => await this._users
		.limit(5)
		.startAfter(entry)
		.get()
		.then(({ docs }) => {
			
			const lastEntry = docs[docs.length - 1];
			
			return {
				getNextUserEntries: () => this.getUsers(lastEntry),
				users: [
					...docs.map((doc) =>
						({ id: doc.id, ...doc.data() }))
				]
			};
		});
	
	/**
	 * Получение всех пользователей;
	 * @returns {Promise<{getNextUserEntries: Promise<*>, users: {id: string}[]}>} - возвращает массив с объектами пользовтелей
	 */
	getAllUsers = async () => await this._users
		.limit(5)
		.get()
		.then(({ docs }) => {
			
			const lastEntry = docs[docs.length - 1];
			
			return {
				getNextUserEntries: () => this.getUsers(lastEntry),
				users: [
					...docs.map((doc) =>
						({ id: doc.id, ...doc.data() }))
				]
			};
		}, (reason) => {
			alert(reason);
		});
	
	/**
	 * Получение пользователя по номеру телефона
	 * @param tel
	 * @returns {Promise<firebase.firestore.QuerySnapshot>}
	 */
	
	getUserByTel = async tel => await this._users
		.where('tel', '==', tel)
		.get()
		.then((QuerySnapshot) => {
			if (!QuerySnapshot.empty) {
				return QuerySnapshot.docs[ 0 ].data();
			} else if (QuerySnapshot.size > 1) {
				throw new Error('Знайдено дублікати! Будь ласка, зверніться до адмістратора!');
			} else {
				throw new Error('Користувача не знайдено!');
			}
		}, reason => {
			console.log(reason);
			throw new Error('Помилка зв\'язку з базою даних!');
		});
	
	/**
	 * Получение текущего пользователя
	 * @returns {firebase.User}
	 */
	getCurrentUser = () => firebase.auth().currentUser;
	
	/**
	 * Проверка, существует ли пользователь с заданным телефоном
	 * @param tel
	 * @returns {Promise<boolean>}
	 */
	checkIfUserExistsByTel = async tel => await this._users
		.where('tel', '==', tel)
		.get()
		.then(
			query => !query.empty,
			reason => {
				console.log(reason);
				throw new Error('Помилка зв\'язку з базою даних!');
			}
		);
	
	/**
	 * Получение всех сообщений от пользователей;
	 * @returns {Promise<...[]>} - возвращает массив с объектами сообщений
	 */
	getAllMessages = async () => await this._messages.get()
		.then(({ docs }) => {
			return [
				...docs.map((doc) =>
					({ id: doc.id, ...doc.data() }))
			];
		}, (reason) => {
			alert(reason);
		});
	
	/**
	 * Инициализация reCAPTCHA
	 * @param submitButtonId - контейнер
	 * @param successCallback - вызываеться, когда капча успешно пройдена
	 * @returns {Promise<number>} - на всякий случай возвращает widgetId
	 */
	setUpGoogleReCaptcha = (submitButtonId, successCallback) => {
		
		firebase.auth().useDeviceLanguage();
		
		window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(submitButtonId, {
			'size': 'invisible',
			'callback': successCallback
		});
		
		return window.recaptchaVerifier.render().then(
			widgetId => { window.recaptchaWidgetId = widgetId; },
			reason => { throw new Error(reason.message); }
		);
	};
	
	resetReCaptcha = () => {
		window.recaptchaVerifier.reset();
	};
	
	/**
	 * Вход в приложение по указанному телефону
	 * @param tel
	 * @returns {Promise<firebase.auth.ConfirmationResult>}
	 */
	signInUser = async (tel) => {
		return await firebase.auth().signInWithPhoneNumber(tel, window.recaptchaVerifier)
			.then(({ verificationId }) => {
				window.verificationId = verificationId;
			});
	};
	
	/**
	 * Проверка кода подтверждения и возврат объекта user
	 * @param code
	 * @returns {Promise<firebase.User>}
	 */
	confirmSignIn = async code => {
		
		const credential = await firebase.auth.PhoneAuthProvider.credential(window.verificationId, code);
		
		return firebase.auth().signInAndRetrieveDataWithCredential(credential)
			.catch(reason => {
					throw new Error(reason.message);
				}
			);
	};
	
	signOutUser = async () => await firebase.auth().signOut()
		.catch(error => {
			throw new Error(error.message);
		});

	/**
	 * Upload handler
	 * @param tel (user tel)
	 * @param  fileUp (file from form)
	 * @returns {Promise<firebase.storage.UploadTaskSnapshot>}
	 */

	uploadFile = (tel ,fileUp) => {
		const storageRef = firebase.storage().ref();
		const file = fileUp;
		storageRef.put(file).then(function(snapshot) {
			console.log('Uploaded a blob or file!');
		});
		// ???
	};
}

export {
	FirebaseService,
	FirebaseApp
};