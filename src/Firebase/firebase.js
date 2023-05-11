import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/storage'

const firebaseConfig = {
	apiKey: 'AIzaSyDDjkUoY5LcMclTyJ55RWGatOwOeHMGRxw',
	authDomain: 'myproject-90db1.firebaseapp.com',
	databaseURL: 'https://myproject-90db1-default-rtdb.firebaseio.com',
	projectId: 'myproject-90db1',
	storageBucket: 'myproject-90db1.appspot.com',
	messagingSenderId: '1090188054113',
	appId: '1:1090188054113:web:e9979b345e91555fb6a420',
	measurementId: 'G-Q5L7E07JEW',
}

class Firebase {
	constructor() {
		const firebaseApp = firebase.initializeApp(firebaseConfig)

		this.storage = firebaseApp.storage()
		this.auth = firebaseApp.auth()
		this.db = firebaseApp.database()
	}

createUser = (email,password) => this.auth.createUserWithEmailAndPassword(email,password)
}

