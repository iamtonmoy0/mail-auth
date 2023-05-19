import {getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import app from "../../Firebase/Firebase.config";

const auth=getAuth(app);
const Login = () => {

const[error,setError]=useState('');
const[success,setSuccess]=useState('');

const handleLog=(e)=>{
	e.preventDefault();
	const email=e.target.email.value;
	const password =e.target.password.value;
          


	setError('')
	
	if(!/(?=.*[A-Z])/.test(password)){
			setError('please add at least one uppercase')
			return
		}else if(!/(?=.*[0-9].*[0-9])/.test(password)){
			setError('please add at east 2 numbers')
			return
		}else if(password.length<6){
			setError('please add at least 6  characters')
			return
		}
		signInWithEmailAndPassword(auth,email,password)
		.then(credentials=>{
			setError('')
			
			if(credentials.user.emailVerified){
				setSuccess('logged in successfully')
			}else{
				setError('your account is not verified')
			}

		})
		.catch(error=>{
			setError(error.message)
		})


	}


	return (
	
          <form onSubmit={handleLog}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                name='email'
            
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                name='password'
            
                required
              />
	<p>{error}</p>
	<p>{success}</p>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Login</button>
          </form>
      
	);
}

export default Login;
