import { Tabs } from "expo-router";

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
      <Tabs.Screen name = "dashboard" options = {{ headerTitle: "ReciMe", }} />;
      <Tabs.Screen name = "profile" options = {{ headerTitle: "ReciMe", }} />;
    </Tabs>
  );
}
