import './App.css';
import { useEffect, useState } from 'react';
import Element from "./Element";
import tijera from ".//images/tijera.png"
import lagarto from ".//images/lagarto.png"
import piedra from ".//images/piedra.png"
import spock from ".//images/spock.png"
import papel from ".//images/papel.png"
import interrogacion from ".//images/interrogacion.png"


const App = () => {

  const elementsGame = [tijera, lagarto,piedra,spock,papel]

  const [chosenItem, setChosenItem] = useState(interrogacion);
  const [machineItem, setMachineItem] = useState(interrogacion)


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
      }else{
          return "";
      }
  }


    function setElementChoosed(elem){ 
      setChosenItem(elem);
    }

    const executeGame = () => {
      setMachineItem(elementsGame[Math.floor(Math.random()*elementsGame.length)])
    }

  return (
    
    <div class="container">
        <div class="row row-cols-auto">
            <div class = "col-md-5">
              <div className="card-group">
                <div class="row row-cols-5 row-cols-md-1 g-5">
                  {elementsGame.map(elem => 
                  <Element onClick = {() => setElementChoosed(elem)} element= {elem} elementName = {selectName(elem)} message = "Elegir"/>)}
                </div>
              </div>
            </div>
      
        <div class="col-md-5"> 

          <Element element= {chosenItem} elementName = {`Has elegido: ${selectName(chosenItem)}`} />

          <div class="col-md-5">    
            <div class="text-center">
                  <h1>VERSUS</h1>
            </div>
          </div>

    

          <Element element= {machineItem} elementName = {`La maquina ha elegido: ${selectName(machineItem)}`} />

          <button onClick={() => executeGame()} class="btn btn-primary" type="button">Ejecutar juego!</button>
      

        </div>


        </div>
    </div>
  )
}

export default App;
