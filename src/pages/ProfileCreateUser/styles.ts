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
    height: '100%',
    width: '100%',
    marginBottom: 10,
  },
 description:{
    marginTop: 60,
    color: '#D4C2FF',
    fontSize: 20,
    lineHeight: 36,
    fontFamily: 'Poppins_600SemiBold',
    maxWidth: 340,
    marginBottom: -20,
    marginHorizontal: 38,

},

okButton: {
  marginVertical: 16,
  backgroundColor: '#ff5050',
  height: 40,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,
  marginBottom: 2,
  marginTop: 200, 
}, 

okButtonText: {
  color: '#fff',
  fontSize: 15,
  fontFamily: 'Archivo_700Bold',
  

},
okButton2:{
  backgroundColor: '#ff5050',
  height: 40,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,
  marginTop: 20,
},
checkIcon:{
  backgroundColor: '#383A59',
  justifyContent: 'center',
  alignItems: 'center',
  height: 100,
  width: 100,
  maxWidth: 240,  
  marginBottom: 30,
  marginHorizontal: 85,
  marginTop: 200,
}

});

export default styles;