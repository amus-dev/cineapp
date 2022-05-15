import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { MEDIUM_GRAY, WHITE } from '../../../theme/color'
import { fontSizes } from '../../../theme/fonts'

const index = ({ description, outstanding, onClick }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{description}</Text>
      <TouchableOpacity onPress={() => onClick()}>
        <Text style={styles.textBold}>{outstanding}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    color: MEDIUM_GRAY,
    fontSize: fontSizes.regular,
  },
  textBold: {
    color: WHITE,
    fontSize: fontSizes.regular,
    fontWeight: 'bold',
    paddingLeft: 6,
  },
})
