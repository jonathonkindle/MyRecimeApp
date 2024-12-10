import { migrateDbIfNeeded } from "@/utils/db";
import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";

export default function RootLayout() {
  return (
    <SQLiteProvider databaseName = "recime.db" onInit={migrateDbIfNeeded}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#25292e"
          },
          headerShadowVisible: false,
          headerTintColor: "#fff",
      }}>
        <Stack.Screen name = "index" options = {{ headerTitle: "Welcome to ReciMe", }} />;
        <Stack.Screen name = "(tabs)" options = {{ headerShown: false }} />
      </Stack>
    </SQLiteProvider>
  );
}
