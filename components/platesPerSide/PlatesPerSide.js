import { Text, View } from 'react-native'

import styles from './platesPerSide.style'

const PlatesPerSide = ({ units, totalWeight, barbellWeight }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.titleText}>Plates Per Side</Text>
      <View style={styles.plateText}>
        <Text style={styles.weightText}>25Kg</Text>
        <Text style={styles.amountText}>x1</Text>
      </View>
      <View style={styles.plateText}>
        <Text style={styles.weightText}>20Kg</Text>
        <Text style={styles.amountText}>x1</Text>
      </View>
      <View style={styles.plateText}>
        <Text style={styles.weightText}>15Kg</Text>
        <Text style={styles.amountText}>x1</Text>
      </View>
      <View style={styles.plateText}>
        <Text style={styles.weightText}>10Kg</Text>
        <Text style={styles.amountText}>x1</Text>
      </View>
      <View style={styles.plateText}>
        <Text style={styles.weightText}>5Kg</Text>
        <Text style={styles.amountText}>x1</Text>
      </View>
      <View style={styles.plateText}>
        <Text style={styles.weightText}>2.5Kg</Text>
        <Text style={styles.amountText}>x1</Text>
      </View>
      <View style={styles.plateText}>
        <Text style={styles.weightText}>2Kg</Text>
        <Text style={styles.amountText}>x1</Text>
      </View>
      <View style={styles.plateText}>
        <Text style={styles.weightText}>1.5Kg</Text>
        <Text style={styles.amountText}>x1</Text>
      </View>
      <View style={styles.plateText}>
        <Text style={styles.weightText}>1Kg</Text>
        <Text style={styles.amountText}>x1</Text>
      </View>
      <View style={styles.plateText}>
        <Text style={styles.weightText}>0.5Kg</Text>
        <Text style={styles.amountText}>x1</Text>
      </View>
    </View>
  )
}
export default PlatesPerSide
