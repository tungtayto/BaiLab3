import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import  { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Manager from './Manager';
import About from './About';

const Stack = createNativeStackNavigator();

const Home = (props) => {
  const nav = props.navigation;
  const list = [
    {id: 0, name: 'tung',msv: 'PH27675'},
    {id: 1, name: 'hao',msv: 'PH20001'},
    {id: 2, name: 'trung',msv: 'PH20002'},
    {id: 3, name: 'tien',msv: 'PH20003'},
    
  ];
  return(
    <View>
      <Image
        source={
          require('./assets/a8.png')
        }
        style={style.productImage}
      />
      <Button
        title='Manager'
        onPress={()=> nav.navigate('Manager',{list})}
        style={style.buttonStyle}
      />
      <Button
        title='About'
        onPress={()=> nav.navigate('About', {name: 'Kiều Thanh Tùng'}, {msv: 'PH27675'})}
        style={style.buttonStyle}
      />
    </View>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}
        />
        <Stack.Screen name='Manager' component={Manager}
        />
        <Stack.Screen name='About' component={About}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const style = StyleSheet.create({
    productImage:{
      width: 100,
      height: 100,
      alignSelf: 'center',
      margin: 10,
    },
    buttonStyle: {
      
    },
});

export default App;
