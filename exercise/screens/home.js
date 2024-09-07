import React from 'react';
import { Text, Image, View, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native';
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../components/config'
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function create() {
    addDoc(collection(db, "profile"), {
      email: email,
      password: password,
    }).then(() => {
      console.log('data submitted (บันทึกข้อมูลเรียบร้อย)')
      alert('เข้าสู่ระบบสำเร็จ!');
      navigation.navigate('bmi');
    }).catch((error) => {
      console.log(error)
      alert('เข้าสู่ระบบไม่สำเร็จ');
    })
  }

  /*const handleLogin = () => {
    // เพิ่มโค้ดตรวจสอบข้อมูลเข้าสู่ระบบที่นี่
    if (username === 'your_username' && password === 'your_password') {
      alert('เข้าสู่ระบบสำเร็จ!');
    } else {
      alert('เข้าสู่ระบบไม่สำเร็จ');
    }
  }; */

  return (
    /* <SafeAreaView style={styles.container}>
      <View style={styles.textboxs}>
        <Text>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    </SafeAreaView> */

    <SafeAreaView style={styles.container}>
      <Text style={{ fontWeight: '800', fontSize: 35 }}>Exercise with Meow</Text>

      <Image source={require('../assets/catmuscle.jpg')}
        style={{ width: 250, height: 250, margin: 20, borderRadius: 15 }} />

      <TextInput value={email} onChangeText={(email) => { setEmail(email) }}
        placeholder='Email' style={styles.textboxs} />

      <TextInput value={password} onChangeText={(password) => { setPassword(password) }}
        placeholder='Password' secureTextEntry style={styles.textboxs} />

      <View style={styles.button}>
        <Button title='Login' onPress={create}/>
      </View>
      <View style={styles.button}>
        <Button title='Skip' onPress={() => navigation.navigate('bmi')}/>
      </View>
        


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textboxs: {
    width: '90%',
    padding: 12,
    borderColor: '#CBF1F5',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    margin: 5,
  },
  button: {
    borderRadius: 20,
    margin: 10,
    width: '90%',
  },
  /* input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  }, */
});
