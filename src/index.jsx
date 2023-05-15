import { useFonts } from 'expo-font';
import { ActivityIndicator, View } from 'react-native';
import { styles } from './styles';
import Navigation from './navigation';

export default function App() {

  const [loaded] = useFonts({
    'black': require("../assets/fonts/Poppins-Black.ttf"),
    'bold': require("../assets/fonts/Poppins-Bold.ttf"),
    'italic': require("../assets/fonts/Poppins-Italic.ttf"),
    'light': require("../assets/fonts/Poppins-Light.ttf"),
    'medium': require("../assets/fonts/Poppins-Medium.ttf"),
    'regular': require("../assets/fonts/Poppins-Regular.ttf"),
    'semiBold': require("../assets/fonts/Poppins-SemiBold.ttf"),
    'thin': require("../assets/fonts/Poppins-Thin.ttf"),
  });

  if (!loaded) {
    return(
      <View style={styles.container}>
        <ActivityIndicator size='large' color="000" />
      </View>
    )
  }

  return (
    <Navigation/>
  )
};
