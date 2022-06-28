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
  const [machineItem, setMachineItem] = useState(interrogacion);
  const [winner, setWinner] = useState("")
  const [inGame, setInGame] = useState(true)



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
    const computerPlay = () => {
      
      
      setMachineItem(elementsGame[Math.floor(Math.random()*elementsGame.length)])
      compareElements()
    }

    const compareElements = () => {
      let winner = ""
      winner = setWinner(selectWinner(selectName(chosenItem), selectName(machineItem)))
    }

    const selectWinner = (elementPlayer, elementMachine) =>{
      console.log(elementPlayer)
      console.log(elementMachine)

      setInGame(false)

      if (elementPlayer == "TIJERA" && elementMachine == "PAPEL"){
        console.log("sdasdasd")
        return  "JUGADOR"
      }else if (elementPlayer == "PAPEL" && elementMachine == "PIEDRA"){
        return  "JUGADOR"
      }else if (elementPlayer == "PIEDRA" && elementMachine == "LAGARTO"){
        return  "JUGADOR"
      }else if (elementPlayer == "LAGARTO" && elementMachine == "SPOCK"){
        return  "JUGADOR"
      }else if (elementPlayer == "SPOCK" && elementMachine == "TIJERA"){
        return  "JUGADOR"
      }else if (elementPlayer == "TIJERA" && elementMachine == "LAGARTO"){
        return  "JUGADOR"
      }else if (elementPlayer == "PAPEL" && elementMachine == "PIEDRA"){
        return  "JUGADOR"
      }else if (elementPlayer == "LAGARTO" && elementMachine == "PAPEL"){
        return  "JUGADOR"
      }else if (elementPlayer == "PAPEL" && elementMachine == "SPOCK"){
        return  "JUGADOR"
      }else if (elementPlayer == "SPOCK" && elementMachine == "PIEDRA"){
        return  "JUGADOR"
      }else if (elementPlayer == "PIEDRA" && elementMachine == "TIJERA"){
        return  "JUGADOR"
      }


    }

    const reset = () => {
      setChosenItem(interrogacion)
      setMachineItem(interrogacion)
      setWinner("")
      setInGame(true)
    }

    useEffect(() => { 

    }, [machineItem])

  return (

    
    <div class="container">

        <div>
            <div className="card-group">
                  {elementsGame.map(elem => (
                      <Element onClick = {() => setChosenItem(elem)} element= {elem} elementName = {selectName(elem) } message = "Elegir" disabled = {inGame}/>
                  ))}
            </div>
        </div>

        <div class="row row-cols-auto">
            
          <Element element= {chosenItem} elementName = {`Has elegido: ${selectName(chosenItem)}`} />

          <div class="col-md-5">    
            <div class="text-center">
                  <h1>VERSUS</h1>
            </div>
            <div class="text-center">
                  <h1>{winner}</h1>
            </div>
          </div>

    

          <Element element= {machineItem} elementName = {`La maquina ha elegido: ${selectName(machineItem)}`} />

          <button onClick={() => computerPlay()} class="btn btn-primary" type="button">Ejecutar juego!</button>
          <button onClick={() => reset()} class="btn btn-primary" type="button">Reset</button>
      



        </div>
    </div>
  )
}

export default App;
