function SubMenu(props){
   
     return(
         <div className="main-container">
         <div className="grid-item"><img src="/Images/India.svg"/>
         <div className="">
                     <h2>{props.heading}</h2>
                     
 
                 </div>
         </div>
         
         <div className="main">
             <div className="container">
                 
                { props.items.map(item => (<div className="grid-item"><img src={item.image} />
                 <h3>{item.title}</h3>
                 <div className="price">
                     <h3>${item.price}</h3>
                </div>
                       <input type="submit" value="add" onClick={(e) =>props.add(e,item)} />
                      
                      </div>) )}
 
 
             
         </div>
     </div>    
      </div>   
        
     );
 }
 
 export default SubMenu;