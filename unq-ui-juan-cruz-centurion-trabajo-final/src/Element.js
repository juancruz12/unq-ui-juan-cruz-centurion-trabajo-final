import { useState } from "react";
import React from 'react';


const Element = ({ element, onClick, elementName, message, disabled }) => {

    


    return(
        
                 
                    <div class="cards bg-light"  >
                    
                        <img src={element} class="card-img-top" alt="..."/>
                    
                        <h2 class="card text-center">{elementName}</h2>
                        {message ? ( (<button onClick={onClick} class="btn btn-primary" type="button" disabled = {!disabled} >{message}</button>) ): undefined}
                    </div>
               

                    
            
    )
}
export default Element;