import { useState } from "react";
import React from 'react';


const Element = ({ element, onClick, elementName, message, disabled }) => {

    


    return(
        
                 <div class="col">
                     <div class="w-80 p-3">
                    <div class="cards"  >
                    
                        <img src={element} class="card-img-top" alt="..."/>
                    
                        <h2 class="card text-center">{elementName}</h2>
                        {message ? ( !disabled ? (<button onClick={onClick} class="btn btn-primary" type="button" disabled >{message}</button>) :
                        <button onClick={onClick} class="btn btn-primary" type="button" >{message}</button> ): undefined}
                    </div>
                </div>
                </div>

                    
            
    )
}
export default Element;