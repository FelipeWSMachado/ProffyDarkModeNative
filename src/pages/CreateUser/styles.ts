import {  StyleSheet  } from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#383A59',
    justifyContent: 'center',
    padding: 35,

  },
  content:{
    flex: 1,
    justifyContent: 'center',
    marginBottom: 0,
  },
  title: {
    fontFamily: 'Archivo_700Bold',
    color: '#fff',
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180,
  },
  description:{
    marginTop: 40,
    color: '#D4C2FF',
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Poppins_400Regular',
    maxWidth: 240,

},

description2:{
  marginTop: 40,
  color: '#D4C2FF',
  fontSize: 16,
  lineHeight: 26,
  fontFamily: 'Poppins_400Regular',
  maxWidth: 240,

},

okButton: {
  marginVertical: 16,
  backgroundColor: '#ff5050',
  height: 40,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,
  marginBottom: 0,
}, 

okButtonText: {
  color: '#fff',
  fontSize: 16,
  fontFamily: 'Archivo_700Bold',
  

},

input: {
  height: 54,
  backgroundColor:  '#fff',
  borderRadius: 8,
  justifyContent: 'center',
  paddingHorizontal: 26,
  marginTop: 20,
  marginBottom: 16,
},
label:{
  color: '#d4c2ff',
  fontFamily: 'Poppins_400Regular',
},

});

export default styles;