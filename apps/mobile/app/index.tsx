import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Zakath Online</Text>
      <Text style={styles.body}>Home screen placeholder.</Text>
      <Link href="/login" style={styles.link}>
        Sign in
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", gap: 12, padding: 24 },
  title: { fontSize: 24, fontWeight: "700" },
  body: { color: "#525252" },
  link: { color: "#047857", fontWeight: "600" },
});
