import { Text, View, StyleSheet, Pressable } from "react-native";


export default function EditRecipe() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Edit Reccipe</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  text: {
    color: "white",
  }
})
