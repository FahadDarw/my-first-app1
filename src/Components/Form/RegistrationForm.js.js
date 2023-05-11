import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

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

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      // Registration successful
      console.log('Registration successful', userCredential);
      //  redirect the user or perform additional actions here
    } catch (error) {
      // Registration failed
      console.error('Registration failed', error);
      // Handle the error appropriately hello
    }
  };

  return (
    <div>
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br/><br/>

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br/><br/>

        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default RegistrationForm;

