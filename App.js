import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Landing from "./pages/Landing";
import Cart from "./pages/Cart";
import Item from "./pages/Item";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";


export default function App() {
  return (
    <View style={styles.container}>
      <Signup />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
  },
});
