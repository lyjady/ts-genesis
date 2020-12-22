export default class Snake {

  element: HTMLElement

  head: HTMLElement

  bodies: HTMLCollection

  constructor() {
    this.element = document.getElementById('snake')!
    this.head = document.querySelector('#snake>div') as HTMLElement
    this.bodies = this.element.getElementsByTagName('div')
  }

  get X(): number {
    return this.element.offsetLeft
  }

  get Y(): number {
    return this.element.offsetTop
  }

  set X(value: number) {
    this.element.style.left = value + 'px'
  }

  set Y(value: number) {
    this.element.style.top = value + 'px'
  }

  addBody(): void {
    this.element.insertAdjacentHTML('beforeend', '<div></div>')
  }
}
