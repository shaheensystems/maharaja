import {Routes, Route, Link} from "react-router-dom";

function Navbar(){
    function toggleNav() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
    return(
        <>
        <div className="topnav" id="myTopnav">
  <Link to="/" className="active">Home</Link>
 
 
  
  
  <Link to="/Menu">Menu</Link>
  <Link to="/Yourorder">Yourorder</Link>
  <Link to="/Contactus">Contactus</Link>
  <Link to="/sign-up">Sign-up</Link>
  
  

  <a href="javascript:void(0);" class="icon" onClick={toggleNav}>

    <i class="fa fa-bars"></i>
    
  </a>
</div>

        </>
    );

}


function NoMatch(){
    return(
      <div>
        <h2>Nothing to see here!</h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
    );
  }
export default Navbar;