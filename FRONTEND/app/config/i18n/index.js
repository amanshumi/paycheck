// TODO: figure out t is not a function on import translation

import { I18nManager } from 'react-native'
import i18n from 'i18n-js'
import { flags, defaultFlagId } from '../Settings/settings.json'
import AsyncStorage from '@react-native-async-storage/async-storage'

import en from '../i18n/locales/en'

const I18n = {
  setI18nConfig: async (flagId = null) => {
    const translationGetters = {
      en,
      // Add other locales as needed
    }

    I18nManager.forceRTL(false)

    let newFlag = flagId
    if (newFlag === null) {
      newFlag = await AsyncStorage.getItem('flagId')
    }
    if (newFlag === null) {
      newFlag = defaultFlagId
    }

    const flag = flags.find((f) => Number(f.flagId) === Number(newFlag))
    if (flag === undefined) {
      throw new Error('Language not found - flagId: ' + newFlag)
    }

    i18n.translations = { [flag.langFile]: translationGetters[flag.langFile] }
    i18n.locale = flag.langFile
  },
}

export default I18n
