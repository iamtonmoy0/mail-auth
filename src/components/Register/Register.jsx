import  {getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import app from '../../Firebase/Firebase.config';
import { useState } from 'react';
const auth=getAuth(app)
const Register = () => {
	const[error,setError]=useState('')
	const[success,setSuccess]=useState('')

	const handleSubmit=(e)=>{
		e.preventDefault();
		const email=e.target.email.value;
		const password=e.target.password.value;
		setError('')
		setSuccess('')
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
		
		createUserWithEmailAndPassword(auth,email,password)
		.then(userCredential=>{
			const loggedUser=userCredential.user;
			console.log(loggedUser)
			e.target.reset();
			setError('')
			setSuccess('user registered success')
			handleUserVerify(loggedUser)

			
		})
		.catch(error=>{
		
			setError(error.message)
			setSuccess('')
		})
		

              
	}
	const handleUserVerify=(user)=>{
		sendEmailVerification(user)
		.then(result=>{
			console.log(result)
			alert('check you main inbox to verify your account')
		})
                
	}

	return (
		<div>
			<h3>Register here</h3>
			<form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email1" aria-describedby="emailHelp" name="email" required/>
 
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name="password" required/>
    <p>{error}</p>
    <p>{success}</p>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary"  value="register">Submit</button>
</form>
		</div>
	);
}

export default Register;
