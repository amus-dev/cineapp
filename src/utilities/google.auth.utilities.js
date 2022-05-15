/* eslint-disable no-useless-catch */
import * as Google from 'expo-google-app-auth'
import { googleConfig } from '../services'

export const signInAuthGoogle = async () => {
  try {
    const result = await Google.logInAsync(googleConfig)
    const { type, user } = result
    if (type === 'success') {
      return user
    } else {
      const message = '¡Inicio sesión Google cancelado!'
      throw message
    }
  } catch (error) {
    throw error
  }
}
