import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
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
}) => {
  useEffect(() => {
    const getData = setTimeout(() => {
      const plates = plateCounter(totalWeight, barbellWeight, units)
      setLoadedPlates(
        units === 'Kgs'
          ? {
              red: plates[25] || 0,
              blue: plates[20] || 0,
              yellow: plates[15] || 0,
              green: plates[10] || 0,
              white: plates[5] || 0,
              partialRed: plates[2.5] || 0,
              partialBlue: plates[2] || 0,
              partialYellow: plates[1.5] || 0,
              partialGreen: plates[1] || 0,
              partialWhite: plates[0.5] || 0,
            }
          : {
              red: plates[55] || 0,
              blue: plates[45] || 0,
              yellow: plates[35] || 0,
              green: plates[25] || 0,
              white: plates[10] || 0,
              partialRed: 0,
              partialBlue: plates[5] || 0,
              partialYellow: 0,
              partialGreen: plates[2.5] || 0,
              partialWhite: plates[1.25] || 0,
            }
      )
    }, 1000)

    return () => clearTimeout(getData)
  }, [totalWeight])

  useEffect(() => {
    setTotalWeight(units === 'Kgs' ? 20 : 45)
    setBarbellWeight(units === 'Kgs' ? 20 : 45)
  }, [units])

  return (
    <View style={styles.wrapper}>
      <Text style={{ fontFamily: 'FCMedium' }}>Desired weight:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={String(totalWeight)}
          onChangeText={(text) => setTotalWeight(text)}
          style={styles.weightInput}
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
