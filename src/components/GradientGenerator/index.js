import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  MainContainer,
  Heading,
  DirectionPara,
  TextAndColor,
  InputContainer,
  ParaInput1,
  InputElement,
  GenerateBtn,
  DirectionButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    direction: gradientDirectionsList[0].value,
    colorInput1: '#8ae323',
    colorInput2: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onClickGenerateBtn = () => {
    const {colorInput1, colorInput2, direction} = this.state

    this.setState({
      gradientValue: `to ${direction}, ${colorInput1}, ${colorInput2}`,
    })
  }

  onChangeColor1 = event => {
    this.setState({colorInput1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({colorInput2: event.target.value})
  }

  clickGradientDirectionItem = activeDirection => {
    this.setState({direction: activeDirection})
  }

  render() {
    const {colorInput1, colorInput2, direction, gradientValue} = this.state
    return (
      <MainContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <DirectionPara>Choose Direction</DirectionPara>
        <DirectionButton>
          {gradientDirectionsList.map(eachDirection => (
            <GradientDirectionItem
              key={eachDirection.directionId}
              directionDetails={eachDirection}
              clickGradientDirectionItem={this.clickGradientDirectionItem}
              isActive={direction === eachDirection.value}
            />
          ))}
        </DirectionButton>

        <DirectionPara>Pick the Colors</DirectionPara>
        <TextAndColor>
          <InputContainer>
            <ParaInput1>{colorInput1}</ParaInput1>
            <InputElement
              type="color"
              onChange={this.onChangeColor1}
              value={colorInput1}
            />
          </InputContainer>
          <InputContainer>
            <ParaInput1>{colorInput2}</ParaInput1>
            <InputElement
              type="color"
              onChange={this.onChangeColor2}
              value={colorInput2}
            />
          </InputContainer>
        </TextAndColor>
        <GenerateBtn type="button" onClick={this.onClickGenerateBtn}>
          Generate
        </GenerateBtn>
      </MainContainer>
    )
  }
}

export default GradientGenerator
