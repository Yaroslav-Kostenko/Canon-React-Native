import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'SF-Heavy': require('./assets/fonts/SFProDisplay-Heavy.ttf'),
  });

  return (
    <View style={styles.container}>
      <Image style={styles.menu} source={require('./assets/img/menu.png')} />
      <Text style={{ fontFamily: 'SF-Heavy', color: '#fff', fontSize: 24, top: -20 }}>CANON EOS 5D</Text>
      <Image style={styles.canon} source={require('./assets/img/canon.png')} />
      <TouchableOpacity style={styles.button}>
          <Text style={styles.text} >START TOUR</Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    top: 110,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 60,
    paddingBottom: 20,
    paddingTop: 20,
  },
  text: {
    color:'#222222',
    fontSize: 16,
    fontFamily: 'SF-Heavy',
  },
  menu: {
    bottom: 90,
    right: 150,
  },
  canon: {
    top: 50,
  },
});
