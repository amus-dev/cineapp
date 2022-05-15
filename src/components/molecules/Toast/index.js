import React from 'react'
import Toast from 'react-native-easy-toast'

const index = ({ toastRef, position, backgroundColor, colorText }) => {
  return (
    <Toast
      ref={toastRef}
      position={position}
      opacity={0.9}
      style={{ backgroundColor }}
      textStyle={{ color: colorText }}
      fadeOutDuration={1000}
    />
  )
}

export default index
