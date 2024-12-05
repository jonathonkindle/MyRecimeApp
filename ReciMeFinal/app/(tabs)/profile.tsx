import { Text, View, StyleSheet, Pressable } from "react-native";
import { Link, useRouter } from 'expo-router';


export default function Profile() {


  const router = useRouter();

  const handlePress = () => {
    router.replace('/');
  }

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Profile</Text>
      <Pressable onPress={handlePress}>
        <Text>Logout</Text>
      </Pressable>
      {/* <Link href="/">Logout</Link> */}
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
