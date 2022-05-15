import React from 'react'
import 'react-native-gesture-handler'
import Navigation from './src/navigation/Navigation'
// Redux
import { Provider } from 'react-redux'
import { Store } from './src/redux/store'

const App = () => {
  return (
    <Provider store={Store}>
      <Navigation />
    </Provider>
  )
}

export default App
