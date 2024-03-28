import { ICard } from './Card'

export interface KoiKoi {
  river: ICard[]
  users: {
    name: string
    hand: ICard[]
    points: number
  }
}
