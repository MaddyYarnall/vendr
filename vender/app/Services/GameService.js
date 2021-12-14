import { ProxyState } from "../AppState.js";


class GameService {
  constructor(){
    console.log("hello from the service");
  }

  transactionTotal(){
    let total = ProxyState.total += .25
    console.log("it is working", total)
  }
}





export const gameService = new GameService()