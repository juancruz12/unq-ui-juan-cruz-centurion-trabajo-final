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
  const [pointsPlayer, setPointsPlayer] = useState(0)
  const [pointsComputer, setPointsComputer] = useState(0)




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
      let elementSelectedByComputer = elementsGame[Math.floor(Math.random()*elementsGame.length)]
      setMachineItem(elementSelectedByComputer)

      compareElements(elementSelectedByComputer)
    }

    const compareElements = (elementSelectedByComputer) => {
      setWinner(selectWinner(selectName(chosenItem), selectName(elementSelectedByComputer)))
    }

    const selectWinner = (elementPlayer, elementMachine) =>{

      setInGame(false)

      if (elementPlayer == "TIJERA" && elementMachine == "PAPEL"){
        return playerIsTheWinner()
      }else if (elementPlayer == "PAPEL" && elementMachine == "PIEDRA"){
        return playerIsTheWinner()
      }else if (elementPlayer == "PIEDRA" && elementMachine == "LAGARTO"){
        return playerIsTheWinner()
      }else if (elementPlayer == "LAGARTO" && elementMachine == "SPOCK"){
        return playerIsTheWinner()
      }else if (elementPlayer == "SPOCK" && elementMachine == "TIJERA"){
        return playerIsTheWinner()
      }else if (elementPlayer == "TIJERA" && elementMachine == "LAGARTO"){
        return playerIsTheWinner()
      }else if (elementPlayer == "PAPEL" && elementMachine == "PIEDRA"){
        return playerIsTheWinner()
      }else if (elementPlayer == "LAGARTO" && elementMachine == "PAPEL"){
        return playerIsTheWinner()
      }else if (elementPlayer == "PAPEL" && elementMachine == "SPOCK"){
        return playerIsTheWinner()
      }else if (elementPlayer == "SPOCK" && elementMachine == "PIEDRA"){
        return playerIsTheWinner()
      }else if (elementPlayer == "PIEDRA" && elementMachine == "TIJERA"){
        return playerIsTheWinner()
      }else if (elementPlayer == elementMachine){
        return  "NINGUNO"}else {return computerIsTheWinner()}
    }

    const playerIsTheWinner = () => {
      setPointsPlayer(pointsPlayer + 1 )
      return "JUGADOR"
    }

    const computerIsTheWinner = () => {
      setPointsComputer(pointsComputer + 1)
      return "COMPUTADORA"
    }


    const reset = () => {
      setChosenItem(interrogacion)
      setMachineItem(interrogacion)
      setWinner("")
      setInGame(true)
    }

    useEffect(() => { 

    }, [pointsComputer])

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

        <div class="col-md-3">
          <Element element= {chosenItem} elementName = {`Has elegido: ${selectName(chosenItem)}`} />
        </div>
        
          <div class="col-md-4 align-self-center">    
          
            <div class="text-center">
              
                  <h1> GANADOR:</h1>
                  <h1>{winner}</h1>
                  <h2>PUNTOS:</h2>
                  
                  <h4> JUGADOR - {pointsPlayer} </h4>
                  <h4> COMPUTADORA - {pointsComputer} </h4>
                  
            </div>
          </div>
         

    
          <div class="col-md-3">
          <Element element= {machineItem} elementName = {`Adversario ha elegido: ${selectName(machineItem)}`} />
          </div>

          <div class="d-grid gap-2 col-1 mx-auto">
          <button onClick={() => computerPlay()} class="btn btn-primary" type="button" disabled = {!inGame}>Ejecutar juego!</button>
          <button onClick={() => reset()} class="btn btn-primary" type="button">Volver a Jugar!</button>
          </div>
      



        </div>
    </div>
  )
}

export default App;
