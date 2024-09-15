import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [students, setStudents] = useState([
    {id: 1, name: "Huy1", age: 21},
    {id: 2, name: "Huy2", age: 21},
    {id: 3, name: "Huy3", age: 21},
    {id: 4, name: "Huy4", age: 21},
    {id: 5, name: "Huy5", age: 21},
    {id: 6, name: "Huy6", age: 21},
    {id: 7, name: "Huy7", age: 21},
    {id: 8, name: "Huy8", age: 21},
    {id: 9, name: "Huy9", age: 21},
    {id: 10, name: "Huy10", age: 21}
  ])

  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
      <ScrollView>
        {students.map(item => {
          return (
            <View key={item.id} style={{
              padding: 20,
              backgroundColor: "pink",
              marginVertical: 30,
              marginRight: 30
            }}>
              <Text>{item.name}</Text>
            </View>
          )
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 30,
    paddingTop: 100
    // alignItems: 'center',
    // justifyContent: 'center',
  }
});
