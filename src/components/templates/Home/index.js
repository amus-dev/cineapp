import { StyleSheet, SafeAreaView, View } from 'react-native'
import React from 'react'
// Organism
import NavFilters from '../../organism/NavFilters'
import Slider from '../../organism/Slider'
// Molecules
import InputSearch from '../../molecules/InputSearch'

const HomeTemplate = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <InputSearch />
        <NavFilters />
        <Slider />
      </View>
    </SafeAreaView>
  )
}

export default HomeTemplate

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    paddingVertical: 10,
  },
})
