import CustomButton from "@/components/CustomButton";
import { getAllRecipes } from "@/utils/db";
import { useSQLiteContext } from "expo-sqlite";
import { useEffect, useState } from "react";
import { Text, View, StyleSheet} from "react-native";

interface Recipe {
  title: string;
  description: string;
}

export default function Cookbook() {

  const db = useSQLiteContext();
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    async function setup() {
      const result = await getAllRecipes(db);
      setRecipes(result);
    }
    setup();
  }, []);

  return (
    <View
      style={styles.container}
    >
      {recipes.map((recipe, index) => (
        <View style={styles.recipeItemContainer} key={index}>
          <Text>{`${recipe.title} - ${recipe.description}`}</Text>
        </View>
      ))}
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
  },
  recipeItemContainer: {
    backgroundColor: "red"
  }
})
