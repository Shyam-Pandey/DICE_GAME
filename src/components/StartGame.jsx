import React from 'react'
import styled from 'styled-components'
// import image from '/../public/images/dices.png'

// import Buttons from '../button/Buttons'

const StartGame = ({toggle}) => {
  return (
    <section>
      <Container>
        <div><img src="/images/dices.png" alt="Dice" style={{ width: "550px" }} /></div>
        <div className='btn-text'>
          <h1>DICE GAME</h1>
          <Button onClick={toggle} className='btn'>Play Now</Button>
        </div>
      </Container>
    </section>
  )
}

export default StartGame;
const Container = styled.div`
  max-width: 1180px;
  display :  flex;
  margin: 0 auto;
  height: 95vh;
  align-items: center;
  .btn{
    margin-left: 300px;
  }
  .btn-text h1{
    font-size:96px ;
    white-space: nowrap;
  }
`;
const Button = styled.button`
    min-width: 220px;
    padding: 10px 18px;
    background-color: black;
    text-align: center;
    color: white;
    outline: none;
    border: 1px solid white;
    border-radius: 5px;
   
    &:hover{
      background-color: white;
      color: black;
      border: 1px solid black;
      transition: 0.3s ease-in-out;
    }
` 