import { Text, View } from 'react-native'

import styles from './platesPerSide.style'
import { useEffect, useState } from 'react'

const PlatesPerSide = ({ units, totalWeight, barbellWeight, loadedPlates }) => {
  const [plateArray, setPlateArray] = useState([])

  useEffect(() => {
    const loadPlateText = () => {
      const plates = []
      for (const color in loadedPlates) {
        const count = loadedPlates[color]
        if (count > 0) {
          plates.push(
            <View
              style={styles.plateText}
              key={`${color}-${count}`}
            >
              <Text style={styles.weightText}>
                {units === 'Kgs'
                  ? color === 'red'
                    ? '25'
                    : color === 'blue'
                    ? '20'
                    : color === 'yellow'
                    ? '15'
                    : color === 'green'
                    ? '10'
                    : color === 'white'
                    ? '5'
                    : color === 'partialRed'
                    ? '2.5'
                    : color === 'partialBlue'
                    ? '2'
                    : color === 'partialYellow'
                    ? '1.5'
                    : color === 'partialGreen'
                    ? '1'
                    : '0.5'
                  : color === 'red'
                  ? '55'
                  : color === 'blue'
                  ? '45'
                  : color === 'yellow'
                  ? '35'
                  : color === 'green'
                  ? '25'
                  : color === 'white'
                  ? '10'
                  : color === 'partialRed'
                  ? none
                  : color === 'partialBlue'
                  ? '5'
                  : color === 'partialYellow'
                  ? none
                  : color === 'partialGreen'
                  ? '2.5'
                  : '1.25'}
                {units}
              </Text>
              <Text style={styles.amountText}>x {count}</Text>
            </View>
          )
        }
      }
      setPlateArray(plates)
    }

    loadPlateText()
  }, [loadedPlates])

  return (
    <View style={styles.wrapper}>
      <Text style={styles.titleText}>Plates Per Side</Text>
      {plateArray.length === 0 ? <Text style={styles.emptyBarText}>Plese, enter a desired weight</Text> : plateArray}
    </View>
  )
}
export default PlatesPerSide
