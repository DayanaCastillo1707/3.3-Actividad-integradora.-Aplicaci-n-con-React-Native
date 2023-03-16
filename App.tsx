/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * import { Text, View} from 'react-native';
 * const App = () => {
 * return(
 * <View>
 * <Text>Me llamo Dayana Castillo </Text>
 * <Text>
 * Y no puedo comprobar si es que esto funciona y mejor dejo este enlace
 * https://docs.google.com/document/d/11ZxtRE5ogS-EjV060_PCPUQ-sulamO1k/edit?usp=share_link&ouid=110705372405681883428&rtpof=true&sd=true
 * y en resumen no solo tarde en tanto en querer crearlo y areglando un "error" 
 * que el cual era mi internet pero funciaba por mi pc y que al pareser al poder 
 * instalar y reparar el emulador de andriod no funciona para estos 
 * proyectos porque se tarda una barbaridad en enviar y probar el proyecto en 
 * android fisico anque funcia es muy lento y para colmo profe no se nesesitaba 
 * el emulador para crear los poryectos mi tablet de windows 8 podo con el trabajo y 
 * no mi windos 10 estas vacasiones voy a reformatear mi pc que esta super lenta
 * perdon ocupaba desagorme finalmente termino 13-14/03/23
 * </Text>
 * </View>)
 * }
 * export deafult App;
 */

import React from 'react';
import { Text, View, Linking, Button} from 'react-native';
const handleOpenURL = (url: string) => {
  Linking.openURL(url);
};
const App = () => {
  return(
  <View>
    <Text>Me llamo Dayana Castillo </Text>
    <Text>
      Y no puedo comprobar si es que esto funciona y mejor dejo este enlace
      https://docs.google.com/document/d/11ZxtRE5ogS-EjV060_PCPUQ-sulamO1k/edit?usp=share_link&ouid=110705372405681883428&rtpof=true&sd=true adelante hay un boton
      y en resumen no solo tarde en tanto en querer crearlo y areglando un "error" 
      que el cual era mi internet pero funciaba por mi pc y que al pareser al poder
      instalar y reparar el emulador de andriod no funciona para estos 
      proyectos porque se tarda una barbaridad en enviar y probar el proyecto en 
      android fisico anque funcia es muy lento y para colmo profe no se nesesitaba 
      el emulador para crear los poryectos mi tablet de windows 8 podo con el trabajo y 
      perdon ocupaba desagorme finalmente termino 13-14/03/23
    </Text>
    <Button
  title="Abrir enlace"
  onPress={() => handleOpenURL('https://docs.google.com/document/d/11ZxtRE5ogS-EjV060_PCPUQ-sulamO1k/edit?usp=share_link&ouid=110705372405681883428&rtpof=true&sd=true')}/>
    </View>
  )
}

export default App;
