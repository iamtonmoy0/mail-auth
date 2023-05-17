import  {getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../../Firebase/Firebase.config';
const auth=getAuth(app)
const Register = () => {
	

	const handleSubmit=(e)=>{
		e.preventDefault();
		const email=e.target.email.value;
		const password=e.target.password.value;
		
		createUserWithEmailAndPassword(auth,email,password)
		.then(userCredential=>{
			const loggedUser=userCredential.user;
			console.log(loggedUser)
			
		})
		.catch(error=>{
			console.log(error)
		})
              
	}

	return (
		<div>
			<h3>Register here</h3>
			<form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email1" aria-describedby="emailHelp" name="email"/>
 
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name="password /"/>
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
