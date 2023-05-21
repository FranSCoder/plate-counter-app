import { StatusBar } from 'expo-status-bar'
import { Text, View, ScrollView, Appearance } from 'react-native'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import { useState, useCallback } from 'react'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

import WeightInput from './components/weightInput/WeightInput'
import styles from './styles'
import Barbell from './components/barbell/Barbell'
import PlatesPerSide from './components/platesPerSide/PlatesPerSide'
import plateCounter from './utils/plateCounter'

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

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={styles.container}
        onLayout={onLayoutRootView}
      >
        <StatusBar backgroundColor='#00b4d8' />
        <ScrollView style={styles.scrollView}>
          <View>
            <Text style={styles.title}>Plate Calculator</Text>
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
          />
          <Barbell
            units={units}
            totalWeight={totalWeight}
            setTotalWeight={setTotalWeight}
            barbellWeight={barbellWeight}
            setBarbellWeight={setBarbellWeight}
            loadedPlates={loadedPlates}
          />
          <PlatesPerSide
            units={units}
            totalWeight={totalWeight}
            barbellWeight={barbellWeight}
            loadedPlates={loadedPlates}
          />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
