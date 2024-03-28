import React from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 } from 'uuid'

export function KoiKoi() {
  const navigate = useNavigate()

  return (
    <>
      <header className="center">
        <h1>
          <img alt="" src="/favicon.svg" height={32} className="pink" /> Koi-Koi <small>[こいこい]</small>
        </h1>

        <p>Embrace the beauty, master the strategy</p>

        <button type="button" data-variant="primary" onClick={() => navigate(`/koi-koi/${v4()}`)}>
          Play now
        </button>
      </header>
      <main className="mx-auto max-width-4">
        <section>
          <h1>Objective</h1>
          <p>
            The goal of Koi-Koi is to accumulate points by creating specific card combinations, called Yaku [役]. The
            game is usually played in rounds, and the player with the highest score at the end of a certain number of
            rounds wins.
          </p>
        </section>

        <section>
          <h1>How to play</h1>

          <p>
            At the start of the game, each player is dealt eight cards. Eight cards are dealt to the table, face up.
          </p>

          <h3> Drawing and Discarding</h3>
          <p>On a player's turn, they draw a card from the deck and then discard one card face-up.</p>

          <h3>Creating Yaku</h3>
          <p>
            The main focus of the game is to create specific Yaku. Examples include getting a set of five Kô cards or a
            set of three Tankzaku cards. Each Yaku has a different point value.
          </p>

          <h3>Scoring</h3>
          <p>
            Players earn points based on the Yaku they have created. Some Yaku are worth more points than others. Points
            can be doubled or tripled if a player declares "Koi-Koi" and continues to play the next round without their
            opponent stopping them.
          </p>

          <h3>Declaring Koi-Koi</h3>
          <p>
            If a player completes a Yaku, they have the option to declare "Koi-Koi" and continue the round. The opponent
            can either accept or decline. If accepted, the player can accumulate more points in the extended round.
            However, if the opponent completes a Yaku during this extended round, the tables can turn, and the original
            player might lose points.
          </p>

          <h3>Winning</h3>
          <p>
            The game usually consists of a set number of rounds. The player with the highest total points at the end is
            the winner.
          </p>
        </section>
      </main>
    </>
  )
}
