import React, { useEffect, useState } from "react";
import GameOver from "./Components/GameOver";
import GameBoard from "./Components/GameBoard";
import game from './game'

export default function MemoryGame(props) {

    const [gameOver, setGameOver] = useState(false)
    const [cards, setCards] = useState([])

    useEffect(() => {
        setCards(game.creatCardsFromTechs())
    }, [])

    function restartGame() {
        game.clearCards()
        setCards(game.creatCardsFromTechs())
        setGameOver(false)
    }

    function handleFlip(card) {
        game.flipCard(card.id, () => {
            setGameOver(true)
        }, () => {
            setCards([...game.cards])
        })
        setCards([...game.cards])
    }

    return (
        <div>
            <GameBoard handleFlip={handleFlip} cards={cards}></GameBoard>
            <GameOver show={gameOver} restartGame={restartGame}></GameOver>
        </div>
    )
}