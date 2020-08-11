import {  StyleSheet  } from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#383A59',
    justifyContent: 'center',
    padding: 50,

  },
  content:{
    flex: 1,
    justifyContent: 'center',
    marginBottom: 19,
  },
  title: {
    fontFamily: 'Archivo_700Bold',
    color: '#fff',
    fontSize: 30,  
    marginHorizontal: 50,
  },
  description:{
    marginTop: 60,
    color: '#D4C2FF',
    fontSize: 17,
    lineHeight: 36,
    fontFamily: 'Poppins_400Regular',
    maxWidth: 340,
    marginHorizontal: 30,
},
okButton: {
  marginVertical: 16,
  backgroundColor: '#ff5050',
  height: 40,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,
  marginBottom: 20,
}, 
okButtonText: {
  color: '#fff',
  fontSize: 15,
  fontFamily: 'Archivo_700Bold',
},
checkIcon:{
  justifyContent: 'center',
  height: 100,
  width: 100,
  maxWidth: 240,  
  marginBottom: 30,
  marginHorizontal: 78,
}
});

export default styles;