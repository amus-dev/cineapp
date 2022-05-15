import { StyleSheet } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'

// Themes
import { GRAY, GOLD, MEDIUM_GRAY } from '../../../theme/color'

const index = ({ label, placeholder, onChange, value }) => {
  return (
    <TextInput
      label={label}
      placeholder={placeholder}
      style={styles.input}
      activeUnderlineColor={GOLD}
      theme={{
        colors: {
          placeholder: MEDIUM_GRAY,
          text: MEDIUM_GRAY,
        },
      }}
      value={value}
      onChangeText={text => onChange(text)}
    />
  )
}

export default index

index.defaultProps = {
  text: 'Volver',
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: GRAY,
    marginBottom: 20,
    color: MEDIUM_GRAY,
  },
})
