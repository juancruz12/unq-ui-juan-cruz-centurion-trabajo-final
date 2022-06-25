import './App.css';
import { useEffect, useState } from 'react';
import Element from "./Element";
import tijera from ".//images/tijera.png"
import lagarto from ".//images/lagarto.png"
import piedra from ".//images/piedra.png"
import spock from ".//images/spock.png"
import papel from ".//images/papel.png"
import blanco from ".//images/blanco.png"
import nada from ".//images/blanco.png"


const elements = [tijera, lagarto,piedra,spock,papel]
const asd = blanco

const App = () => {

  const [elementsGame, setElements ] = useState([]);
  const [chosenItem, setChosenItem] = useState(asd);

  useEffect(() => {
      setElements(elements);
    })

    function selectName(element) {
      if (element.includes("tijera")) {
        return "TIJERA";
      } else if(element.includes("piedra")) {
          return "PIEDRA";
      }else if(element.includes("papel")) {
          return "PAPEL";
      }else if(element.includes("lagarto")) {
          return "LAGARTO";
      }else if(element.includes("spock")) {
          return "SPOCK";
      }else if(element.includes("blanco")) {
          return "Elige una opcion!";
      }
  }


    function setElementChoosed(elem){ 
      setChosenItem(elem);
    }

    {console.log(chosenItem)}
  return (
    
    <div class="container">
        <div class="row row-cols-auto">
            <div class = "col-md-5">
              <div className="card-group">
                <div class="row row-cols-5 row-cols-md-1 g-5">
                  {elementsGame.map(elem => 
                  <Element onClick = {() => setElementChoosed(elem)} element= {elem} elementName = {selectName(elem)}/>)}
                </div>
              </div>
            </div>
      
        <div class="col-md-5">
           <div class="w-50 p-3">
              <div class="card text-center" >
                  <img src={chosenItem}   class="card-img-top" alt="..."/>
                  <h2 class="card text-center">{`Has elegido: ${selectName(chosenItem)}`}</h2>
              </div>
            </div>
                 
            <div class="col-md-5">    
            <div class="text-center">
                  <h1>VERSUS</h1>
            </div>
            </div>

         </div>


         </div>
    </div>
  )
}

export default App;
