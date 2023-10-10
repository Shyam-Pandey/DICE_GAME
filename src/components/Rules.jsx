import React from 'react'
import styled from 'styled-components'

export const Rules = () => {
  return (
    <RulesContainer>
      <h3>Rules to play Dice Game</h3>
      <p>Select any number</p>
      <p>Click on dice image</p>
      <p>After click on  dice  if selected number is equal to dice number you will get same point as dice </p>
      <p>If you get wrong number 2 points will be deducted</p>
    </RulesContainer>
  )
}

const RulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 40px 0 40px 0;
  background-color: #FBF1F1;
  h3{
    font-size: 24px;
  }
  p{
    font-size: 16px;
  }
`