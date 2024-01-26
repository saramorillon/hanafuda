import React from 'react'
import months from '../../../../cards.json'

export function Home(): JSX.Element {
  return (
    <>
      <header className="center">
        <h1>
          <img alt="" src="/favicon.svg" height={32} className="pink" />{' '}
          <span className="courgette">Hanafuda Cards</span>
        </h1>
        <p>Discover the beauty of a traditional japanese card game</p>
      </header>
      <main className="mx-auto max-width-4">
        <section>
          <p>
            <a href={months[2].cards[3].href} target="_blank" rel="noreferrer">
              <img alt={months[2].cards[3].alt} src={months[2].cards[3].src} height={120} className="left mr2" />
            </a>
            <span className="courgette">Hanafuda</span> [花札], translated as "flower cards" in Japanese, is a
            traditional set of playing cards that originated in Japan. These cards are known for their vibrant
            illustrations, which typically depict flowers, plants, animals, and other seasonal motifs. Hanafuda cards
            have a rich history, dating back to the 18th century, and cultural significance in Japan.
          </p>
          <p>
            Hanafuda represents a beautiful fusion of art, nature, and gaming in Japanese culture. The cards are not
            only used for entertainment but also serve as a reflection of the changing seasons and the beauty found in
            the natural world.
          </p>
          <p>
            <a href={months[1].cards[0].href} target="_blank" rel="noreferrer">
              <img alt={months[1].cards[0].alt} src={months[1].cards[0].src} height={120} className="right ml2" />
            </a>
            A standard Hanafuda deck consists of 48 cards, divided into 12 suits. Each suit is associated with a
            specific month of the year and is represented by a particular plant or flower.
          </p>
          <p>
            The cards are intricately designed to reflect the changing seasons. The themes of the cards are deeply
            rooted in nature and Japanese symbolism. For example, cherry blossoms may represent spring, while maple
            leaves symbolize autumn.
          </p>
          <p>
            <a href={months[11].cards[0].href} target="_blank" rel="noreferrer">
              <img alt={months[11].cards[0].alt} src={months[11].cards[0].src} height={120} className="left mr2" />
            </a>
            Hanafuda cards are used to play a variety of traditional Japanese card games. One of the most popular games
            is "Koi-Koi," where players try to match cards based on their suits and combinations, earning points for
            specific sets.
          </p>
          <p>
            Hanafuda has cultural significance in Japan and is often associated with New Year's celebrations and other
            traditional events. The cards are also used in gambling and have been a part of Japanese gaming culture for
            centuries.
          </p>
          <p>
            The cards are not only functional but also appreciated as works of art. The illustrations are detailed and
            colorful, showcasing the skill of the artists who create them.
          </p>
        </section>

        <section>
          <div className="cards-grid">
            {months.map((month) => (
              <article style={{ flex: 1 }}>
                <h4 className="center mb2">
                  {month.flower}
                  <br />
                  <small>{month.name}</small>
                </h4>
                <div>
                  {month.cards.map((card) => (
                    <div className="flex">
                      <a href={card.href} target="_blank" rel="noreferrer">
                        <img alt={card.alt} src={card.src} height={100} className="mr2" />
                      </a>
                      <p>
                        <small>{card.type}</small>
                        <br />
                        {card.name}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
