export default class Food {

  element: HTMLElement

  constructor() {
    this.element = document.getElementById('food')!
  }

  get X(): number {
    return this.element.offsetLeft
  }

  get Y(): number {
    return this.element.offsetTop
  }

  refresh(): void {
    const offsetLeft = Math.round(Math.random() * 29) * 10
    const offsetTop = Math.round(Math.random() * 29) * 10
    this.element.style.left = offsetLeft + 'px'
    this.element.style.top = offsetTop + 'px'
  }
}
