import * as React from 'react';
import { StyleSheet, Button, View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',  backgroundColor: '#222222' }}>
      <Image style={{bottom: 90, right: 150}} source={require('./assets/img/menu.png')} />
      <Text style={{color: '#fff', fontSize: 24, top: -20, fontFamily: 'St-Heavy' }}>CANON EOS 5D</Text>
      <Image style={{ top: 50}} source={require('./assets/img/canon.png')} />
        <TouchableOpacity style={{top: 110, alignItems: "center", backgroundColor: "#fff", padding: 60, paddingBottom: 20, paddingTop: 20}}
                          onPress={() => navigation.navigate('Details')}>
            <Text style={{fontFamily: 'St-Heavy'}} >START TOUR</Text>
        </TouchableOpacity>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#222222'  }}>
      <TouchableOpacity style={styles.touchab}>
      <Text style={styles.button}>Phase Detection</Text>
      <Text style={styles.lip}>Duis habitant convallis.</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchab}>
      <Text style={styles.button}>Up to 60fps</Text>
      <Text style={styles.lip}>Duis habitant convallis.</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchab}>
      <Text style={styles.button}>Sports</Text>
      <Text style={styles.lip}>Duis habitant convallis.</Text>
      </TouchableOpacity>
      <Image style={styles.img} source={require('./assets/img/img.png')} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {

    const [fontsLoaded] = useFonts({
        'St-Heavy': require('./assets/fonts/SFProDisplay-Heavy.ttf'),
    });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  button: {
    textAlign: 'center',
    width: 120,
    fontSize: 24,
    color: '#fff'
  },
  lip: {
    textAlign: 'center',
    fontSize: 14,
    color: '#fff'
  },
  touchab: {
    top: 89,
    borderColor: '#fff',
    borderRadius: 22,
    paddingTop: 30,
    paddingBottom: 30,
    paddingRight: 100,
    paddingLeft: 100,
    backgroundColor: "#222222",
    borderWidth:2,
    marginTop: 22
  },
  img: {
    top: 90
  }
});

export default App;

