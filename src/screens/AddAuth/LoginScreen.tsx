import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { MainParamList } from '../../navigation/AddAuth';

import Login from '../../functions/Login';
import { StatusBar } from 'expo-status-bar';

type ProfileScreenNavigationProp = StackNavigationProp<
  MainParamList,
  'Login'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export default function App(props: Props) {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const onRegister = () => {
    return Login(email, password).then((error) => {
      alert(JSON.stringify(error));
    });
  }

  const goRegister = () => {
    props.navigation.push('Register', {});
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView enabled={true} behavior="padding" style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          {/* <Image source={require('./assets/loginScreen.png')} style={{width: '100%', height: "100%", position: 'absolute'}} /> */}
          <View style={styles.container2}>
            <View style={styles.container3}>
              <Image source={require('../../../assets/codeofeverandlogo.png')} style={{width: 300, backgroundColor: 'transparent', resizeMode: 'contain'}} />
              <Text style={{fontSize: 18}}>EMAIL</Text>
              <TextInput textContentType="emailAddress" value={email} onChangeText={setEmail} style={{textAlign: 'center', padding: 10, borderWidth: 2, borderColor: 'black', borderRadius: 20, width: '20%', minWidth: 375, marginBottom: 10}} />
              <Text style={{fontSize: 18}}>PASSWORD</Text>
              <TextInput textContentType="password" value={password} onChangeText={setPassword} style={{textAlign: 'center', padding: 10, borderWidth: 2, borderColor: 'black', borderRadius: 20, width: '20%', minWidth: 375, marginBottom: 10}} />
              <Text style={{fontSize: 18, marginBottom: 20, backgroundColor: '#66D6D7', borderColor: '#2A7177', borderWidth: 2, paddingHorizontal: 20, paddingVertical: 5, borderRadius: 25, overflow: 'hidden'}} onPress={onRegister}>LOGIN</Text>
              <Text style={{fontSize: 18, marginBottom: 10}} onPress={goRegister}>CREATE AN ACCOUNT</Text>
              <Text style={{fontSize: 18}}>FORGOT YOUR PASSWORD?</Text>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
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
