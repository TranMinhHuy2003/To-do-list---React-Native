import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>
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
