function Starters(){
   let items=[ {image:"/Images/vegetable-samosa.webp", title:"Vegetable-samosa",price:10},{image:"/Images/Onionpakoda.jpg", title:"Onion Pakoda",price:10},{image:"/Images/VadaPav.jpg", title:"VadaPav",price:10}]
    return(
        <div className="main-container">
        <div className="grid-item"><img src="/Images/India.jpg"/>
        <div className="">
                    <h1>Maharaja Kitchen</h1>
					

				</div>
        </div>
		
        <div className="main">
	        <div className="container">
                
               { items.map(item => (<div className="grid-item"><img src={item.image} />
				<h2>{item.title}</h2>
                <div className="price">
                    <h2>${item.price}</h2>

                </div>
                     <a href="#" className="btn">add to cart</a>
				
					 
					 
					 </div>) )}


	        
		</div>
	</div>    
	 </div>   
       
    );
}

export default Starters;