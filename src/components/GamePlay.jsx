import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'


const GamePlay = () => {
  const [error, setError] = useState("");
  const [selectednumber, setselectednumber] = useState();
  const [currentDice, setcurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  console.log(selectednumber)


  const getRandomNumber = (min, max) => {
    // console.log(Math.floor(Math.random() * (max - min + 1)) + min);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const rolldice = () => {
    if (!selectednumber) {
      setError("Please Select a Numebr")
      return;
    }
    setError("");
    const randomNumber = getRandomNumber(1, 6);
    setcurrentDice((prev) => randomNumber);
    if (selectednumber === currentDice) {
      setScore((prev) => prev + randomNumber);
    }
    else {
      setScore((prev) => prev - 2);
    }
    setselectednumber(undefined);
  }
  const resetScore = () => {
    setScore(0)
  };
  return (
    <>
      <GameSection>
        <TotalScore score={score} />
        <NumberSelector selectednumber={selectednumber} setselectednumber={setselectednumber} error={error} />
      </GameSection>
      <RollDice currentDice={currentDice} rolldice={rolldice} resetScore = {resetScore} />
    </>
  )
}

export default GamePlay

const GameSection = styled.div`
  display: flex;
  justify-content: space-around;
.btn{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}
`

