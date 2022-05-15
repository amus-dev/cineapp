import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import ArrowLeft from '../../../assets/images/@icons/ArrowLeft'
import { fontSizes } from '../../../theme/fonts'

const index = ({ text }) => {
  const navigation = useNavigation()
  return (
    <View style={styles.contentBackNavigate}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ArrowLeft />
      </TouchableOpacity>
      <Text style={styles.backNavigateText}>{text}</Text>
    </View>
  )
}

export default index

index.defaultProps = {
  text: 'Volver',
}

const styles = StyleSheet.create({
  contentBackNavigate: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backNavigateText: {
    color: 'white',
    marginLeft: 20,
    fontSize: fontSizes.title,
    fontWeight: 'bold',
  },
})
