import { gameService } from "../Services/GameService.js";


export class GameController {
  constructor(){
    console.log("hello from the game controller");
  }

  
  transactionTotal() {
    gameService.transactionTotal()
  }
}

