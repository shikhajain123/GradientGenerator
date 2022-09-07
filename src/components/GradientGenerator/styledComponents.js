// Style your elements here

import styled from 'styled-components'

export const MainContainer = styled.div`
  background-size: cover;
  background-image: linear-gradient(${props => props.gradientValue});
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Heading = styled.h1`
  color: white;
  font-size: 30px;
  font-weight: 700;
  font-family: 'Roboto';
`

export const DirectionPara = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto';
`

export const TextAndColor = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 15px;
  margin-left: 15px;
`

export const ParaInput1 = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto';
`

export const InputElement = styled.input`
  border: none;
  outline: none;
  width: 80px;
  height: 50px;
`
export const GenerateBtn = styled.button`
  color: #1e293b;
  background-color: #00c9b7;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 12px;
  padding-right: 12px;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
  border: none;
  margin-top: 30px;
  font-size: 15px;
  font-weight: 600;
  font-family: 'Roboto';
`
export const DirectionButton = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
