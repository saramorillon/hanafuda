import yakus from '../../../koikoi.json'
import { Game, ICard } from './Game'

type User = {
  name: string
  hand: ICard[]
  points: number
}

type Tag =
  | 'plain'
  | 'light'
  | 'curtain'
  | 'full_moon'
  | 'ono_no_michigaze'
  | 'ribbon'
  | 'poetry'
  | 'blue'
  | 'animal'
  | 'boar'
  | 'deer'
  | 'butterfly'
  | 'sake'

type Yaku = {
  name: string
  points: number
  cards: { quantity: number; tag: Tag }[]
  '+'?: Tag
}

export class KoiKoi extends Game {
  private river: ICard[] = []
  private users: Record<string, User> = {}
  private started = false

  addPlayer(socketId: string) {
    if (!this.started && !this.users[socketId]) {
      this.users[socketId] = { name: socketId, hand: [], points: 0 }
      if (Object.values(this.users).length === 2) {
        this.startGame()
      }
    }
  }

  removePlayer(socketId: string) {
    if (this.users[socketId]) {
      delete this.users[socketId]
    }
  }

  isEmpty() {
    return Object.keys(this.users).length === 0
  }

  getData(socketId: string) {
    const users: User[] = []

    for (const [key, value] of Object.entries(this.users)) {
      if (key === socketId) {
        users[0] = value
      } else {
        users[1] = value
      }
    }

    return { river: this.river, users }
  }

  private startGame() {
    if (!this.started) {
      this.started = true
      for (const user of Object.values(this.users)) {
        user.hand = this.draw(8)
      }
      this.river = this.draw(8)
    }
  }

  private getPoints(cards: Tag[]) {
    const result: { yakus: string[]; points: number } = {
      yakus: [],
      points: 0,
    }
    for (const yaku of yakus) {
      if (yaku.cards.every(({ quantity, tag }) => cards.filter((card) => card === tag).length === quantity)) {
        result.points += yaku.points
        result.yakus.push(yaku.name)
        if (yaku['+']) {
        }
      }
    }
    return result
  }
}
