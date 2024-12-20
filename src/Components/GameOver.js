import React, { Fragment } from "react";

export default function GameOver(props) {
    return (props.show ?
        <div id="gameOver">
            <div>
                Parabéns , você completou o Game !
            </div>
            <button id="restart" onClick={props.restartGame}>Jogue novamente</button>
        </div> : <Fragment />
    )
}