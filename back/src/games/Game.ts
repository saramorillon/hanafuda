import months from '../../../cards.json'

export interface ICard {
  tags: string[]
  type: string
  name: string
  href: string
  src: string
  alt: string
  credit: string
}

export abstract class Game {
  protected stack: ICard[]

  constructor() {
    this.stack = months.flatMap((month) => month.cards)
  }

  abstract addPlayer(socketId: string): void

  abstract removePlayer(socketId: string): void

  abstract isEmpty(): boolean

  abstract getData(socketId: string): unknown

  protected draw(n: number) {
    const result: ICard[] = []
    for (let i = 0; i < n; i++) {
      const index = Math.floor(Math.random() * this.stack.length)
      const [card] = this.stack.splice(index, 1)
      result.push(card)
    }
    return result
  }
}
