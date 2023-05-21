import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  wrapper: {
    padding: '3%',
  },
  inputContainer: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  weightInput: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    height: '100%',
    paddingHorizontal: 16,
    backgroundColor: 'linen',
    flex: 1,
    fontFamily: 'FCMedium',
    fontSize: 20,
  },
  unitButton: {
    width: 75,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#90e0ef',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
})

export default styles
