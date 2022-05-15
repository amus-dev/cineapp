import React from 'react'
import { Text, View, SafeAreaView, Dimensions } from 'react-native'

import Carousel from 'react-native-snap-carousel'

const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4)

const Slider = () => {
  const carouselItems = [
    {
      title: 'Item 1',
      text: 'Text 1',
    },
    {
      title: 'Item 2',
      text: 'Text 2',
    },
    {
      title: 'Item 3',
      text: 'Text 3',
    },
    {
      title: 'Item 4',
      text: 'Text 4',
    },
    {
      title: 'Item 5',
      text: 'Text 5',
    },
  ]

  function _renderItem({ item, index }) {
    return (
      <View
        style={{
          backgroundColor: 'floralwhite',
          borderRadius: 5,
          height: ITEM_HEIGHT,
          padding: 50,
          marginHorizontal: 10,
        }}
        key={index}
      >
        <Text style={{ fontSize: 30 }}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    )
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'rebeccapurple',
        paddingTop: 50,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}
      >
        <Carousel
          layout={'default'}
          data={carouselItems}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          renderItem={_renderItem}
        />
      </View>
    </SafeAreaView>
  )
}

export default Slider
