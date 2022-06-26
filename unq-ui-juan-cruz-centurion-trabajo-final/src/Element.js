import { useState } from "react";
import React from 'react';


const Element = ({ element, onClick, elementName, message }) => {


    return(
        
                 <div class="col">
                     <div class="w-50 p-3">
                    <div class="card text-center" >
                    
                        <img src={element} class="card-img-top" alt="..."/>
                    
                        <h2 class="card text-center">{elementName}</h2>
                        {message ? (<button onClick={onClick} class="btn btn-primary" type="button">{message}</button>): undefined}
                    </div>
                </div>
                </div>

                    
            
    )
}
export default Element;