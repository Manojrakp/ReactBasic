import { Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.containerabout}>
      <Text style={styles.textabout}>About Screen primal</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerabout: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  textabout: {
    color: "#fff",
  },
});
