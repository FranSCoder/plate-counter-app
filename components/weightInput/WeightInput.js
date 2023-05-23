import { Image, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

import styles from './weightInput.style'
import { useEffect } from 'react'

const WeightInput = ({
  units,
  setUnits,
  totalWeight,
  setTotalWeight,
  barbellWeight,
  setBarbellWeight,
  loadedPlates,
  setLoadedPlates,
  plateCounter,
  languageCode,
}) => {
  function showToast(msg) {
    ToastAndroid.showWithGravity(msg, ToastAndroid.LONG, ToastAndroid.CENTER)
  }

  useEffect(() => {
    setLoadedPlates({
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
    const getData = setTimeout(() => {
      const plates = plateCounter(totalWeight, barbellWeight, units, languageCode)
      setLoadedPlates(
        units === 'Kgs'
          ? {
              red: plates[0][25] || 0,
              blue: plates[0][20] || 0,
              yellow: plates[0][15] || 0,
              green: plates[0][10] || 0,
              white: plates[0][5] || 0,
              partialRed: plates[0][2.5] || 0,
              partialBlue: plates[0][2] || 0,
              partialYellow: plates[0][1.5] || 0,
              partialGreen: plates[0][1] || 0,
              partialWhite: plates[0][0.5] || 0,
            }
          : {
              red: plates[0][55] || 0,
              blue: plates[0][45] || 0,
              yellow: plates[0][35] || 0,
              green: plates[0][25] || 0,
              white: plates[0][10] || 0,
              partialRed: 0,
              partialBlue: plates[0][5] || 0,
              partialYellow: 0,
              partialGreen: plates[0][2.5] || 0,
              partialWhite: plates[0][1.25] || 0,
            }
      )
      plates[1].unallocated !== undefined &&
        showToast(
          `${languageCode === 'es' ? 'No fue posible colocar' : 'Unable to allocate:'} ${plates[1].unallocated.toFixed(
            2
          )} ${units}. ${languageCode === 'es' ? 'Consejo: inténtalo con' : 'Advice: try with'} ${
            totalWeight - plates[1].unallocated
          } ${units}`
        )
      plates[1].error !== undefined && showToast(plates[1].error)
    }, 1000)

    return () => clearTimeout(getData)
  }, [totalWeight])

  useEffect(() => {
    setTotalWeight(units === 'Kgs' ? 20 : 45)
    setBarbellWeight(units === 'Kgs' ? 20 : 45)
  }, [units])

  return (
    <View style={styles.wrapper}>
      <Text style={{ fontFamily: 'FCMedium', color: 'linen' }}>
        {languageCode === 'es' ? 'Peso a levantar:' : 'Desired weight:'}
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={String(totalWeight)}
          onChangeText={(text) => setTotalWeight(text)}
          style={styles.weightInput}
          inputMode='decimal'
        />
        <TouchableOpacity
          style={styles.unitButton}
          onPress={() => setUnits((oldUnits) => (oldUnits === 'Kgs' ? 'Lbs' : 'Kgs'))}
        >
          <Text style={{ fontFamily: 'FCMedium', fontSize: 16, textDecorationLine: 'underline' }}>{units}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default WeightInput
