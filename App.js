import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";

export default function App() {
  const [items, setItems] = useState([
    { id: 1, title: "Title 1", time: "12:00", description: "Description 1" },
    { id: 2, title: "Title 2", time: "12:00", description: "Description 2" },
    { id: 3, title: "Title 3", time: "12:00", description: "Description 3" },
    { id: 4, title: "Title 4", time: "12:00", description: "Description 4" },
    { id: 5, title: "Title 5", time: "12:00", description: "Description 5" },
    { id: 6, title: "Title 6", time: "12:00", description: "Description 6" },
    { id: 7, title: "Title 7", time: "12:00", description: "Description 7" },
  ]);

  return (
    <View style={styles.homeScreen}>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPress={() => {
              alert(item.title);
            }}
          >
            <View style={styles.item}>
              <View style={styles.image}></View>
              <View style={styles.text}>
                <Text>{item.title}</Text>
                <Text>{item.description}</Text>
                <Text>{item.time}</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingVertical: 30 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    backgroundColor: "white",
  },
  item: {
    backgroundColor: "white",
    overflow: "hidden",
    height: 250,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 6,
    elevation: 7,
  },
  image: {
    backgroundColor: "peachpuff",
    flex: 2,
  },
  text: {
    flex: 1.5,
    margin: 10,
  },
});
