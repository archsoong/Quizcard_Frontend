//import Link from "next/link"

import Deck from "../component/deck"
import Question from "../component/question"
import Card from "../component/card"
import { getCards } from "../lib/module"

export default async function Home() {

  return (
    <div>
      <div class="flex flex-row p-8 space-x-4">
        <Deck>Deck 1 </Deck>
        <Deck>Deck 2 </Deck>
        <Deck>Deck 3 </Deck>
        <Deck>Deck 4 </Deck>
      </div>
      { getCards }



      <Question />
    </div>
  )
}