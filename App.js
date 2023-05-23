import { StatusBar } from 'expo-status-bar'
import { Text, View, ScrollView, Appearance, KeyboardAvoidingView } from 'react-native'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import { useState, useCallback } from 'react'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { getLocales } from 'expo-localization'

import WeightInput from './components/weightInput/WeightInput'
import PlatesPerSide from './components/platesPerSide/PlatesPerSide'
import Barbell from './components/barbell/Barbell'
import BuyMeACoffee from './components/buyMeACoffee/BuyMeACoffee'
import plateCounter from './utils/plateCounter'
import styles from './styles'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [units, setUnits] = useState('Kgs')
  const [barbellWeight, setBarbellWeight] = useState(20)
  const [totalWeight, setTotalWeight] = useState(20)
  const [loadedPlates, setLoadedPlates] = useState({
    red: 0,
    blue: 0,
    yellow: 0,
    green: 0,
    white: 0,
    partialRed: 0,
    partialBlue: 0,
    partialYellow: 0,
    partialGreen: 0,
    partialWhite: 0,
  })

  const [fontsLoaded] = useFonts({
    FCBold: require('./assets/fonts/FiraCode-Bold.ttf'),
    FCMedium: require('./assets/fonts/FiraCode-Medium.ttf'),
    FCRegular: require('./assets/fonts/FiraCode-Regular.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) return null

  let { languageCode } = getLocales()[0]
  languageCode = 'es'

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={styles.container}
        onLayout={onLayoutRootView}
      >
        <StatusBar backgroundColor='#00b4d8' />
        <ScrollView
          automaticallyAdjustKeyboardInsets={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
          style={{ minWidth: 310 }}
        >
          <View style={{ flex: 1 }}>
            <View style={{ marginTop: 8 }}>
              <Text style={styles.title}>{languageCode === 'es' ? 'Calculadora de Discos' : 'Plate Calculator'}</Text>
            </View>
            <WeightInput
              units={units}
              setUnits={setUnits}
              totalWeight={totalWeight}
              setTotalWeight={setTotalWeight}
              barbellWeight={barbellWeight}
              setBarbellWeight={setBarbellWeight}
              loadedPlates={loadedPlates}
              setLoadedPlates={setLoadedPlates}
              plateCounter={plateCounter}
              languageCode={languageCode}
            />
            <Barbell
              units={units}
              totalWeight={totalWeight}
              setTotalWeight={setTotalWeight}
              barbellWeight={barbellWeight}
              setBarbellWeight={setBarbellWeight}
              loadedPlates={loadedPlates}
              languageCode={languageCode}
            />
            <PlatesPerSide
              units={units}
              totalWeight={totalWeight}
              barbellWeight={barbellWeight}
              loadedPlates={loadedPlates}
              languageCode={languageCode}
            />
          </View>
          <BuyMeACoffee />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
