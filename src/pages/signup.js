import React from 'react';













const SignUp = () => {
	const handleClick = () =>
	{ alert("Thank you")}
return (
	<div className="Contact">
		<h1>SignUp</h1>
		<form>
		<input type="text" placeholder='Username'/>
		<br/>
		
		<input type="password" placeholder='Password'/>
		<br/>
		<button onClick={handleClick}>Submit</button>

		

		</form>


		
		


	

	
	</div>
	
		
		
	
);
};

export default SignUp;
