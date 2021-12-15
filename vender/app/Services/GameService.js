import { ProxyState } from "../AppState.js";


class GameService {
  constructor(){
    console.log("hello from the service");
  }

  transactionTotal(){
    let total = ProxyState.total += .25
    console.log("it is working", total)
    document.getElementById("totalMoney").innerHTML = total.toString()
  }


  
}

// function buyTools(){
//   if(money >= clickUpgrades.tools.price){
//     money -= clickUpgrades.tools.price



export const gameService = new GameService()