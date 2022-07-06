import React from 'react';


const Element = ({ element, onClick, elementName, message, disabled }) => {

    return(                 
        <div className="cards bg-light"  >        
            <img src={element} className="card-img-top" alt="..."/>    
            <h2 className="card text-center">{elementName}</h2>
            {message ? ( (<button onClick={onClick} className="btn btn-primary" type="button" disabled = {!disabled} >{message}</button>) ): undefined}
        </div>
    )
}
export default Element;