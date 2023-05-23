import { Image, Linking, TouchableOpacity } from 'react-native'

const url = 'https://www.buymeacoffee.com/franscoder'

const BuyMeACoffeeButton = () => {
  const onPress = () =>
    Linking.canOpenURL(url).then(() => {
      Linking.openURL(url)
    })

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ alignSelf: 'flex-end', marginVertical: 24 }}
    >
      <Image
        source={require('../../assets/images/white-button.png')}
        style={{ width: 121, height: 34, resizeMode: 'contain' }}
      />
    </TouchableOpacity>
  )
}

export default BuyMeACoffeeButton
