
import { Text, SafeAreaView} from 'react-native';
import Sobrenome from './src/Telas/Sobrenome';

export default function App() {
  return (
    <SafeAreaView>
      <Text>Natalia Carolini Schiroff</Text>
      <Sobrenome sobrenome="Schiroff"/>
    </SafeAreaView>
  );
}

