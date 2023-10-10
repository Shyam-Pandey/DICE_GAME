import React from 'react'
import styled from 'styled-components'

const NumberSelector = ({selectednumber, setselectednumber,error}) => {
  const arrNum = [1, 2, 3, 4, 5, 6];

  return (
    <NumberSelectorContainer>
      <p>{error}</p>
      <div className='flex'>
        {
          arrNum.map((val, id) =>
            <Box
              style={{
                background: `${val === selectednumber ? "black" : "white"}`,
                color: `${val === selectednumber ? "white" : "black"}`
              }}
              key={id + val}
              onClick={() => { setselectednumber(val) }}
            >
              {val}
            </Box>
          )
        }
      </div>
      <span> <h1>Selected Number</h1> </span>
    </NumberSelectorContainer>
  )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`
text-align: end;
  .flex{
    display: flex;
    gap: 10px;
    margin: 20px 5px 0;
  }
`

const Box = styled.div`
    width: 55px;
    height: 55px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
`