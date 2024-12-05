import { Text, View, StyleSheet, Pressable } from "react-native";
import { Link, useRouter } from 'expo-router';


export default function Dashboard() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Dashboard</Text>
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
