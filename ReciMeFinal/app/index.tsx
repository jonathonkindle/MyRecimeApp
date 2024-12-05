import { Link, useRouter } from "expo-router";
import { Text, View, StyleSheet, Pressable } from "react-native";

export default function Index() {

  const router = useRouter();

  const handlePress = () => {
    router.replace('./dashboard');
  }

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>ReciMe</Text>
      <Pressable onPress={handlePress}>
        <Text>Login</Text>
      </Pressable>
      {/* <Link href='./dashboard'>Login</Link> */}
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
