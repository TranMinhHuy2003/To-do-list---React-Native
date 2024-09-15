import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

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
      <Text>Students List</Text>
      <FlatList 
        data={students}
        keyExtractor={item => item.id + ""}
        renderItem={(data) => {
          return (
            <View style={{
              padding: 20,
              backgroundColor: "pink",
              marginVertical: 20,
              marginRight: 20
            }}>
              <Text>{data.item.name}</Text>
            </View>
          )
        }} 
      />
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
