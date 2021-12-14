import { GameController } from "./Controllers/GameController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  valuesController = new ValuesController();
  GameController = new GameController();
}

window["app"] = new App();

