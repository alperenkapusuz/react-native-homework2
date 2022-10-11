import React,{useState} from "react";
import { View, Text,TextInput,StyleSheet } from "react-native";

const TextScreen = () => {
    const [password, setPassword] = useState('')
  return (
    <View>
      <Text>Enter password:</Text>  
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={newValue => setPassword(newValue)}
      />
      <Text>My password is {password}</Text>
      {password.length<4 ? <Text>password must be 4 characters</Text>:null}
    </View>
  );
};

const styles = StyleSheet.create({
    input:{
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 2,
        height: 30,
        fontSize: 25,
        paddingLeft: 5,
    }
})

export default TextScreen;
