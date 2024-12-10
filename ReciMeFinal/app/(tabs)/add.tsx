import CustomButton from "@/components/CustomButton";
import { addRecipe } from "@/utils/db";
import { useSQLiteContext } from "expo-sqlite";
import { Text, View, StyleSheet } from "react-native";


export default function AddRecipe() {

  const db = useSQLiteContext();

  return (
    <View
      style={styles.container}
    >
      <CustomButton label = "Add Recipe"
       onPress={() => addRecipe(db, 'chicken', 'a chicken recipe')}
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
