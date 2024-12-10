import { Text, View, StyleSheet } from "react-native";
import { Link, useRouter } from 'expo-router';
import CustomButton from "@/components/CustomButton";
import { useSQLiteContext } from "expo-sqlite";


export default function Profile() {
  const db = useSQLiteContext();

  const router = useRouter();

  const handlePress = () => {
    router.replace('/');
  }

  return (
    <View
      style={styles.container}
    >
      <CustomButton label = "Logout"
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
