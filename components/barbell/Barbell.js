import { View, Image, Text, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Asset } from 'expo-asset'

import styles from './barbell.style'
import { useEffect, useState } from 'react'

const Barbell = ({
  units,
  totalWeight,
  setTotalWeight,
  barbellWeight,
  setBarbellWeight,
  loadedPlates,
  languageCode,
}) => {
  const [plateImages, setPlateImages] = useState([])

  const handleBarbellChange = () => {
    setBarbellWeight((oldBarbellWeight) =>
      units === 'Kgs' ? (oldBarbellWeight === 20 ? 15 : 20) : oldBarbellWeight === 45 ? 35 : 45
    )
    setTotalWeight(units === 'Kgs' ? (barbellWeight === 20 ? 15 : 20) : barbellWeight === 45 ? 35 : 45)
  }

  useEffect(() => {
    const loadPlateImages = () => {
      const images = []
      const redPlateImage = require('../../assets/images/red.png')
      const bluePlateImage = require('../../assets/images/blue.png')
      const yellowPlateImage = require('../../assets/images/yellow.png')
      const greenPlateImage = require('../../assets/images/green.png')
      const whitePlateImage = require('../../assets/images/white.png')
      const partialRedPlateImage = require('../../assets/images/partialRed.png')
      const partialBluePlateImage = require('../../assets/images/partialBlue.png')
      const partialYellowPlateImage = require('../../assets/images/partialYellow.png')
      const partialGreenPlateImage = require('../../assets/images/partialGreen.png')
      const partialWhitePlateImage = require('../../assets/images/partialWhite.png')
      for (const color in loadedPlates) {
        const count = loadedPlates[color]
        if (count > 0) {
          for (let i = 0; i < count; i++) {
            let image
            color === 'red'
              ? (image = redPlateImage)
              : color === 'blue'
              ? (image = bluePlateImage)
              : color === 'yellow'
              ? (image = yellowPlateImage)
              : color === 'green'
              ? (image = greenPlateImage)
              : color === 'white'
              ? (image = whitePlateImage)
              : color === 'partialRed'
              ? (image = partialRedPlateImage)
              : color === 'partialBlue'
              ? (image = partialBluePlateImage)
              : color === 'partialYellow'
              ? (image = partialYellowPlateImage)
              : color === 'partialGreen'
              ? (image = partialGreenPlateImage)
              : (image = partialWhitePlateImage)

            images.push(
              <Image
                key={`${color}-${i}`}
                source={image}
                style={styles[color]}
              />
            )
          }
        }
      }
      setPlateImages(images)
    }

    loadPlateImages()
  }, [loadedPlates])

  return (
    <View style={styles.wrapper}>
      <View style={styles.imageWrapper}>
        <View style={styles.barbellWrapper}>
          <Image
            source={require('../../assets/images/grip.png')}
            style={styles.grip}
          />
          <Image
            source={require('../../assets/images/collar.png')}
            style={styles.collar}
          />
          <Image
            source={require('../../assets/images/sleeve.png')}
            style={styles.sleeve}
          />
        </View>
        <View style={styles.platesWrapper}>{plateImages}</View>
      </View>
      <View style={styles.textWrapper}>
        <TouchableOpacity
          style={styles.barbellButton}
          onPress={handleBarbellChange}
        >
          {languageCode === 'es' ? <Text style={styles.barbellButtonText}>Barra de</Text> : null}
          <Text style={styles.barbellButtonText}>
            {barbellWeight}
            {units}
          </Text>
          {languageCode !== 'es' ? <Text style={styles.barbellButtonText}>Barbell</Text> : null}
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default Barbell
