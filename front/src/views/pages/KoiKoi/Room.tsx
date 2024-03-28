import React from 'react'
import { useSocket } from '../../../hooks/useSocket'

export function Room() {
  const game = useSocket()

  if (!game) {
    return null
  }

  console.log(game)

  return <div />
}
