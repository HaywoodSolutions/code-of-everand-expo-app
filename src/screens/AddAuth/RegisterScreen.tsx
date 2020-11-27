import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView } from 'react-native';
// import * as ScreenOrientation from 'expo-screen-orientation';

import { Ionicons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';

import { MainParamList } from '../../navigation/AddAuth';
import Register from '../../functions/Register';

type ProfileScreenNavigationProp = StackNavigationProp<
  MainParamList,
  'Register'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export default function App(props: Props) {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const onRegister = () => {
    if (!/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email))
      alert("Invalid Email");
    else if (password.length < 5)
      alert("Password must have length of 6");
    else 
      return Register(email, password).then((error) => {
        if (error.error)
          alert(JSON.stringify(error));
      });
  }

  const goLogin = () => {
    props.navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView enabled={true} behavior="padding" style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <View style={styles.container2}>
            <View style={styles.container3}>
              <Image source={require('../../../assets/codeofeverandlogo.png')} style={{width: 300, backgroundColor: 'transparent', resizeMode: 'contain'}} />
              <Text style={{fontSize: 18}}>EMAIL</Text>
              <TextInput textContentType="emailAddress" value={email} onChangeText={setEmail} style={{textAlign: 'center', padding: 10, borderWidth: 2, borderColor: 'black', borderRadius: 20, width: '20%', minWidth: 375, marginBottom: 10}} />
              <Text style={{fontSize: 18}}>PASSWORD</Text>
              <TextInput textContentType="password" value={password} onChangeText={setPassword} style={{textAlign: 'center', padding: 10, borderWidth: 2, borderColor: 'black', borderRadius: 20, width: '20%', minWidth: 375, marginBottom: 20}} />
              <Text style={{fontSize: 18, marginBottom: 20, backgroundColor: '#66D6D7', borderColor: '#2A7177', borderWidth: 2, paddingHorizontal: 20, paddingVertical: 5, borderRadius: 25, overflow: 'hidden'}} onPress={onRegister}>REGISTER</Text>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
      <View style={{position: 'absolute', top: 15, left: 15, paddingVertical: 7.5, paddingHorizontal: 10}}>
        <Ionicons name="md-arrow-back" size={35} color="black" onPress={goLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: 'lightblue'
  },
  container3: {
    position: 'relative',
    textAlign: 'center',
    alignItems: 'center'
  },
  container2: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '5%'
  },
});
