import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
    screenOptions={{
      headerStyle: {
        backgroundColor: "#25292e"
      },
      headerShadowVisible: false,
      headerTintColor: "#fff",
  }}>
      <Tabs.Screen name = "profile" options = {{ 
        title: "Profile", tabBarIcon: ({ focused }) => (
          <FontAwesome name = "user" size={24} color = { focused ? "black" : "gray" }/>
        )
        }}
      />
      <Tabs.Screen name = "cookbook" options = {{ 
        title: "Cookbook", tabBarIcon: ({ focused }) => (
          <FontAwesome name = "book" size={24} color = { focused ? "black" : "gray" }/>        
        )
        }} />;
      <Tabs.Screen name = "favorites" options = {{ 
        title: "Favorites", tabBarIcon: ({ focused }) => (
          <FontAwesome name = "heart" size={24} color = { focused ? "black" : "gray" }/>        
        )
        }} />;
      <Tabs.Screen name = "add" options = {{ 
        title: "Add Recipe", tabBarIcon: ({ focused }) => (
          <FontAwesome name = "plus" size={24} color = { focused ? "black" : "gray" }/>        
        )
        }} />;
      <Tabs.Screen name = "edit" options = {{ 
        title: "Edit Recipe", tabBarIcon: ({ focused }) => (
          <FontAwesome name = "edit" size={24} color = { focused ? "black" : "gray" }/>        
        )
        }} />;
      <Tabs.Screen name = "planner" options = {{ 
        title: "Meal Planner", tabBarIcon: ({ focused }) => (
          <FontAwesome name = "calendar" size={24} color = { focused ? "black" : "gray" }/>        
        )
        }} />;
    </Tabs>
  );
}


// options={{
//   title: 'Login',
//   tabBarIcon: ({ color, size }) => (
//     <Ionicons name="log-in-outline" size={size} color={color} />
//   ),
// }}