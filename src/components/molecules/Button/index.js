import React from 'react'
import { Button } from 'react-native-paper'

import { ORANGE, WHITE } from '../../../theme/color'

const ButtonMovit = ({ text, bgButton, textColor, handleClick }) => {
  return (
    <Button
      mode='contained'
      onPress={() => handleClick()}
      color={bgButton}
      labelStyle={{ color: textColor, fontWeight: 'bold' }}
      contentStyle={{ width: '100%' }}
    >
      {text}
    </Button>
  )
}

ButtonMovit.defaultProps = {
  text: '',
  bgButton: ORANGE,
  textColor: WHITE,
}

export default ButtonMovit
