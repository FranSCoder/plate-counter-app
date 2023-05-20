import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: '10%',
    paddingVertical: '3%',
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
    backgroundColor: '#f3f3f3',
    flex: 1,
    fontFamily: 'FCRegular',
    fontSize: 20,
  },
  unitButton: {
    width: 75,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#f3f3f3',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default styles
