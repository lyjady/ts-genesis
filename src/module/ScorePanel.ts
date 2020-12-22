export default class ScorePanel {

  score: number = 0

  level: number = 1

  scoreElement: HTMLElement

  levelElement: HTMLElement

  maxLevel: number

  scoreStep: number

  constructor(maxLevel = 100, scoreStep = 2) {
    this.scoreElement = document.getElementById('score')!
    this.levelElement = document.getElementById('level')!
    this.maxLevel = maxLevel
    this.scoreStep = scoreStep
  }

  addScore(): void {
    this.score++
    this.scoreElement.innerHTML = this.score.toString()
    if (this.score % this.scoreStep === 0) {
      this.levelUp()
    }
  }

  levelUp(): void {
    if (this.level < this.maxLevel) {
      this.level++
      this.levelElement.innerText = this.level.toString()
    }
  }
}
