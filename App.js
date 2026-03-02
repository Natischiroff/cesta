
import { SafeAreaView} from 'react-native';
import Cesta from './src/Telas/Cesta'
import { Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { SafeAreaView, View } from 'react-native-web';
import {
  UseFontes,
  Montserrat_400Regular,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';

import {
  UseFontes,
  lato_400Regular,
  lato_700Bold,
} from '@expo-google-fonts/lato';

export default function App() {
const [fontCarregada] = useFontes({
  "MontserratRegular": Montserrat_400Regular,
  "MontserratBold": Montserrat_700Bold
});

const [fontCarregada2] = useFontes({
  "LatoRegular": Lato_400Regular,
  "LatoBold": Lato_700Bold,
});



if(!fontCarregada){
  return<View />
}

  return (
    <SafeAreaView>
      <Cesta />
      
    </SafeAreaView>
  )
}

