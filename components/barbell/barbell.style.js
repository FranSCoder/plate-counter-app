import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: '3%',
  },
  imageWrapper: {
    height: 175,
    width: 230,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  barbellWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  platesWrapper: {
    height: 160,
    position: 'relative',
    right: 150,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWrapper: {
    flex: 1,
  },
  barbellButtonText: {
    fontFamily: 'FCMedium',
    fontSize: 14,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  barbellButton: {
    borderRadius: 10,
    backgroundColor: '#90e0ef',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '10%',
    elevation: 8,
  },
  grip: {
    width: 55,
    height: 8,
    resizeMode: 'stretch',
  },
  collar: {
    width: 9,
    height: 30,
    resizeMode: 'stretch',
  },
  sleeve: {
    width: 150,
    height: 15,
    resizeMode: 'stretch',
  },
  red: {
    width: 14,
    height: 148,
    resizeMode: 'stretch',
  },
  blue: {
    width: 13,
    height: 148,
    resizeMode: 'stretch',
  },
  yellow: {
    width: 10,
    height: 148,
    resizeMode: 'stretch',
  },
  green: {
    width: 10,
    height: 148,
    resizeMode: 'stretch',
  },
  white: {
    width: 9,
    height: 148,
    resizeMode: 'stretch',
  },
  partialRed: {
    width: 6,
    height: 74,
    resizeMode: 'stretch',
  },
  partialBlue: {
    width: 6,
    height: 64,
    resizeMode: 'stretch',
  },
  partialYellow: {
    width: 6,
    height: 54,
    resizeMode: 'stretch',
  },
  partialGreen: {
    width: 5,
    height: 44,
    resizeMode: 'stretch',
  },
  partialWhite: {
    width: 5,
    height: 38,
    resizeMode: 'stretch',
  },
})

export default styles
