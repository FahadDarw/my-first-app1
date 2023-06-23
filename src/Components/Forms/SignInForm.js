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

const SignInForm = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    
 auth.signInWithEmailAndPassword(email, password)
 .then((response)=> {
  console.log('Response ', response)
props.setUser(response.email)
})
 //.error(error)=> console.log(error);
    // try {
    //   const userCredential = await;
    //   // Login successful
    //   console.log('Signed In successfully', userCredential);
    //   //  redirect the user or perform additional actions here
    // } catch (error) {
    //   // Login failed
    //   console.error('Sign In failed', error);
    //   // Handle the error appropriately
    // }
  };

  return (
    <div>
      <h1>Login Form</h1>

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

        <input type="submit" value="SignIn" />
      </form>
    </div>
  );
};

export default SignInForm;

