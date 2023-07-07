
const handleClick = () =>
	{ alert("Thank you")}
  
function Yourorder(){
    return(



            <div className="main-container">
             <div className="aside">
             <div className="">
                    <h2>Your order is ready</h2>
                    <h2>Make your payment here</h2>
                    </div>
                    </div>
                    <br/>
                    <form>
                      Card holder name
		<input type="text" placeholder=''/>
		<br/>
		
		
    Credit Card Number:
    <input type="number" placeholder=''/>

      
      
      <br />
      Card Expiry:
      <input class="inputCard" name="expiry" id="expiry" type="month" required/>
    <br/>
    
    CCV
    <input type="number" placeholder=''/>

		<button onClick={handleClick}>Submit</button>

		

		</form>

                
                
            
                
            

               </div>
            
            
            
           

        
                
          
                   
          );
}

export default Yourorder;