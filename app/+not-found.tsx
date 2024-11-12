import { Link, Stack } from "expo-router";

import { Text, View, StyleSheet } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!! Screen Not Found" }} />
      <View style={styles.containernotFouScreen}>
        <Text style={styles.textabout}>Screen looking for not exists</Text>
        <Link href="/" style={styles.textabout}>
          Go back to home screen
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  containernotFouScreen: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  textabout: {
    color: "#fff",
  },
});
