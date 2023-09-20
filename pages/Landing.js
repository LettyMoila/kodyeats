import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import StepperDesign from "../components/StepperDesign";
import { FontAwesome } from "@expo/vector-icons";

export default function Landing() {
  return (
    <View style={styles.container}>
      <View style={styles.childone}>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={require("../assets/burgerchips.jpg")}
        />
      </View>
      <View style={styles.childtwo}>
        
          <Text style={styles.textthree}>Welcome to</Text>
          <Text style={styles.textone}>Kody Eats</Text>
          <Text style={styles.textthree}>get 50% off on your first order on the app</Text>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <FontAwesome name="circle" size={24} color="#38B6FF" />
            <FontAwesome name="circle-o" size={24} color="#38B6FF" />
            <FontAwesome name="circle-o" size={24} color="#38B6FF" />
          </View>
          <TouchableOpacity style={styles.butt}>
            <Text style={styles.texttwo}>Next</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", gap: 3 }}>
            <Text>Already have an account?</Text>
            <Text>Sign in</Text>
          </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  childone: {
    flex: 1,
    marginTop: 30,
    justifyContent: "center",
    flexDirection: "row",
  },
  childtwo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D9D9D9",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: -10,
    elevation: 3,
    gap: 10
  },
  textone:{
    fontSize: 20
  },
  texttwo:{
    fontSize: 14
  },
  textthree:{
    fontSize: 12
  },
  butt:{
    backgroundColor: "#38B6FF",
    borderRadius: 5, 
    width: 132,
    height: 29,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
