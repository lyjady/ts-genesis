import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";

export default class GameController {

  food: Food

  scorePanel: ScorePanel

  snake: Snake

  direction: string = ''

  isAlive: boolean = true

  constructor() {
    this.food = new Food()
    this.scorePanel = new ScorePanel(10, 1)
    this.snake = new Snake()
    this.init()
  }

  init(): void {
    addEventListener('keydown', this.keydownHandler.bind(this))
    this.run()
  }

  keydownHandler(event: KeyboardEvent): void {
    this.direction = event.key
  }

  run(): void {
    let X = this.snake.X
    let Y = this.snake.Y
    switch (this.direction) {
      case 'ArrowUp':
        Y -= 10
        break
      case 'ArrowLeft':
        X -= 10
        break
      case 'ArrowDown':
        Y += 10
        break
      case 'ArrowRight':
        X += 10
        break
    }
    this.isEat(X, Y)
    try {
      this.snake.X = X
      this.snake.Y = Y
    } catch (e) {
      this.isAlive = false
      alert('Game Over')
    }
    this.isAlive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
  }

  isEat(X: number, Y: number): void {
    const {X: foodX, Y: foodY} = this.food
    if (X === foodX && Y === foodY) {
      console.log('eat')
      this.scorePanel.addScore()
      this.food.refresh()
      this.snake.addBody()
    }
  }
}
