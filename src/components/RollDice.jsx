import React, { useState } from 'react'
import styled from 'styled-components'
import { OutlineButton, Button } from '../Buttons/Button'
import { Rules } from './Rules'

const RollDice = ({ currentDice, rolldice, resetScore }) => {
    const [showRules, setShowRules] = useState(false);

    return (
        <DiceContainer>
            <div>
                <img src={`/images/dice/dice_${currentDice}.png`} onClick={rolldice} alt="dice" width="200px"/>
            </div>
            <h3>Click Here to Play Game</h3>
            <div className='btn'>
                <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
                <Button onClick={() => setShowRules((prev) => (!prev))}>
                    {showRules ? "Hide" : "Show"}
                </Button>
                {showRules && <Rules />}
            </div>
        </DiceContainer>
    )
}

export default RollDice


const DiceContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;

.btn{
    max-width: 700px;
    display: flex;
    flex-direction: column;
    gap:10px;
    justify-content: center;
    align-items: center;
}

`