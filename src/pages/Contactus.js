import React from "react";

function Contactus (){
    const handleClick = () =>
	{ alert("Thank you")}
    return(
        
        <div className="contact">
        <div className="contact-container" >
        
          <h1>Contact us</h1>
        <h4>Location address: 20B, Shopping Arcade, Porirua, Wellington</h4>
        <h4>Email id: maharajak01@gmail.com </h4>
        <h4>Contact numbers: +64223719864, +64214508765</h4>
        <div className="inputBox">
            <span className="fa fa-user">
                <input type="text" placeholder="name"></input>
                
            </span>

        </div>

        <div className="inputBox">
            <span className="fa fa-envelope">
                <input type="email" placeholder="email"></input>
                
            </span>

        </div>


        <div className="inputBox">
            <span className="fa fa-phone">
                <input type="number" placeholder="number"></input>
                
            </span>

        </div>

        <div className="inputBox">
            <span className="fa fa Address Card">
                <input type="text" placeholder="Address"></input>
                
            </span>

        </div>
        <div className="button-contact">
        
        <a href="#" className="">submit</a>
                 
        </div>
        
      </div>
      </div>
     
     
     

    );
};

                    
               
	        
		

export default Contactus;