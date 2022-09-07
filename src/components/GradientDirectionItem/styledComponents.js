// Style your elements here
import styled from 'styled-components'

export const DirectionButtons = styled.li`
  text-decoration: none;
`

export const Btns = styled.button`
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  background-color: #ffffff;
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
  margin-left: 5px;
  margin-right: 5px;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
