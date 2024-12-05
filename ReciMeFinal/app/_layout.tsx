import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#25292e"
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
    }}>
      <Stack.Screen name = "index" options = {{ headerTitle: "Login to ReciMe", }} />;
      <Stack.Screen name = "(tabs)" options = {{ headerShown: false }} />
    </Stack>
  );
}
