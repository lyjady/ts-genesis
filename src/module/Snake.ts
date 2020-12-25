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
    return this.head.offsetLeft
  }

  get Y(): number {
    return this.head.offsetTop
  }

  set X(value: number) {
    if (value < 0 || value > 290) {
      throw new Error('撞墙了')
    }
    this.moveBody()
    this.head.style.left = value + 'px'
  }

  set Y(value: number) {
    if (value < 0 || value > 290) {
      throw new Error('撞墙了')
    }
    this.moveBody()
    this.head.style.top = value + 'px'
  }

  addBody(): void {
    this.element.insertAdjacentHTML('beforeend', '<div></div>')
  }

  moveBody(): void {
    for (let i = this.bodies.length - 1; i > 0; i--) {
      console.log((this.bodies[i] as HTMLElement).style.top, (this.bodies[i] as HTMLElement).style.left);
      (this.bodies[i] as HTMLElement).style.top = (this.bodies[i - 1] as HTMLElement).offsetTop + 'px';
      (this.bodies[i] as HTMLElement).style.left = (this.bodies[i - 1] as HTMLElement).offsetLeft + 'px';
    }
  }
}
