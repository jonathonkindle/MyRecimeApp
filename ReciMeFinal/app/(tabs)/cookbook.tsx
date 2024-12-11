import { Text, View, StyleSheet} from "react-native";
import { useEffect, useState } from "react";
import { useSQLiteContext } from "expo-sqlite";
import CustomButton from "@/components/CustomButton";
import { getAllRecipes, RecipeInterface } from "@/utils/db";
import RecipeSlider from "@/components/RecipeSlider";

export default function Cookbook() {

  const db = useSQLiteContext();
  const [recipes, setRecipes] = useState<RecipeInterface[]>([]);

  useEffect(() => {
    async function setup() {
      const result = await getAllRecipes(db);
      setRecipes(result);
    }
    setup();
  }, []);

  // return (
  //   <View
  //     style={styles.container}
  //   >
  //     {recipes.map((recipe, index) => (
  //       <View style={styles.recipeItemContainer} key={index}>
  //         <Text>{`${recipe.title} - ${recipe.description}`}</Text>
  //       </View>
  //     ))}
  //   </View>
  // );
  return (
    <View
      style={styles.container}
    >
      <View 
      // style={styles.recipeItemContainer}
      >
        <RecipeSlider itemList = {recipes} />
      </View>
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
  // ,
  // recipeItemContainer: {
  //   backgroundColor: "red"
  // }
})
