import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";

export default class GameController {

  food: Food

  scorePanel: ScorePanel

  snake: Snake

  direction: string = ''

  constructor() {
    this.food = new Food()
    this.scorePanel = new ScorePanel()
    this.snake = new Snake()
    this.init()
  }

  init(): void {
    addEventListener('keydown', this.keydownHandler.bind(this))
  }

  keydownHandler(event: KeyboardEvent): void {
    this.direction = event.key
  }
}
