import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Name: {name}</Text>
      <TextInput
        multiline
        autoCapitalize="words"
        onChangeText={(value) => setName(value)}
        style={{
          borderColor: "green",
          borderWidth: 1,
          width: 200,
          padding: 15
        }}
      >
      </TextInput>

      <Text>Age: {name}</Text>
      <TextInput
        onChangeText={(value) => setAge(value)}
        style={{
          borderColor: "green",
          borderWidth: 1,
          width: 200,
          padding: 15
        }}
        keyboardType="numeric"
        maxLength={2}
      >
      </TextInput>

      <Text style={{ color: "pink", fontSize: 40, fontWeight: "bold" }}>
        count = {count}
      </Text>
      <View>
        <Button title="press me" onPress={() => setCount(count + 1)}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
