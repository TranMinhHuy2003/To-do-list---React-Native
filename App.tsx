import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Huyhihi</Text>
      </View>
      <Text style={styles.hello1}>Hello world1</Text>
      <Text>Hello world2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hello1: { 
    color: "red",
    fontSize: 30,
    borderColor: "green",
    borderWidth: 1,
    padding: 10
  },
  header: {
    fontSize: 60,
    fontWeight: "bold"
  }
});
