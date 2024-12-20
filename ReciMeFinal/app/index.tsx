import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {

  const router = useRouter();

  const handlePress = () => {
    router.replace('./profile');
  }

  return (
    <View
      style={styles.container}
    >
      <CustomButton label = "Login"
       onPress={handlePress}
       >
      </CustomButton>
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
