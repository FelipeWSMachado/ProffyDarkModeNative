import {  StyleSheet  } from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#383A59',
    justifyContent: 'center',
    padding: 40,

  },
  content:{
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Archivo_700Bold',
    color: '#fff',
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180,
  },
  description:{
    marginTop: 24,
    color: '#D4C2FF',
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Poppins_400Regular',
    maxWidth: 240,

},
okButton: {
  marginVertical: 40,
  backgroundColor: '#ff5050',
  height: 58,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8
}, 

okButtonText: {
  color: '#fff',
  fontSize: 16,
  fontFamily: 'Archivo_700Bold',
  

},


});

export default styles;