// Write your code here

import {DirectionButtons, Btns} from './styledComponents'

const GradientDirectionItem = props => {
  const {key, directionDetails, isActive, clickGradientDirectionItem} = props
  const {directionId, value, displayText} = directionDetails

  const isClickButtonActive = () => {
    clickGradientDirectionItem(value)
  }

  return (
    <DirectionButtons>
      <Btns type="button" isActive={isActive} onClick={isClickButtonActive}>
        {displayText}
      </Btns>
    </DirectionButtons>
  )
}

export default GradientDirectionItem
