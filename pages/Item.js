import {Image,Text,StyleSheet,View,TextInput,TouchableOpacity} from "react-native";

export default function Item() {
  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={require("../assets/burger-3.jpg")}/>
        <View style={styles.rect}>
          <Text style={styles.textone}>Rating 4.7</Text>
          <Image
            style={{ width: "20%" }}
            source={require("../assets/Star-1.png")}
          />
        </View>
      </View>
      <View style={styles.lower}>
        <View style={styles.pricebox}>
          <Text style={styles.price}>R150.98</Text>
        </View>
        <Text style={styles.textone}>Smokey BBQ Beef Burger</Text>
        <Text style={styles.texttwo}>Description</Text>
        <Text style={styles.textthree}>this burger is super juicyr</Text>

        <View style={styles.bluey}>
          <View style={styles.halfie}>
            <Image
              style={{height: "120%" }}
              source={require("../assets/Clock.png")}
            />
            <Text style={styles.boldie}>15 mins</Text>
            <Text style={styles.textthree}>Delivery</Text>
          </View>
          <View style={styles.halfie}>
            <Image
              style={{ height: "100%" }}
              source={require("../assets/Chat.png")}
            />
            <Text style={styles.boldie}>1k</Text>
            <Text style={styles.textthree}>Review</Text>
          </View>
        </View>

        <View>
          <Text style={styles.textone}>Add On</Text>
          <TextInput />
          <Text style={styles.textone}>Drinks</Text>
          <TextInput />
        </View>
        <View style={styles.butt}>
          <TouchableOpacity style={styles.addto}>
            <Text>Add To Cart</Text>
          </TouchableOpacity>
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
    marginTop: 30
  },
  upper: {
    height: "40%",
    width: "100%",
  },
  imgstyle: {
    height: "100%",
  },
  rect: {
    height: 45,
    width: 166,
    backgroundColor: "#D9D9D9",
    position: "absolute",
    top: 250,
    justifyContent: "center",
    padding: 10,
    gap: 10,
    flexDirection: 'row'
  },
  pricebox: {
    height: 29,
    width: 100,
    backgroundColor: "#272727",
    position: "absolute",
    top: -20,
    left: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  price: {
    color: "white",
    fontSize: 16,
  },
  lower: {
    height: "60%",
    width: "100%",
    backgroundColor: "#D9D9D9",
    padding: 10,
    gap: 10,
  },
  bluey: {
    height: 55,
    width: "100%",
    shadowColor: "black",
    flexDirection: "row",
  },
  halfie: {
    height: "100%",
    width: "50%",
    backgroundColor: "#38B6FF",
    justifyContent: "center",
    padding: 10,
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textone: {
    fontSize: 16,
  },
  texttwo: {
    fontSize: 14,
  },
  textthree: {
    fontSize: 12,
  },
  boldie:{
    fontSize: 12,
    fontWeight: 'bold'
  },
  butt: {
    alignItems: "center",
  },
  addto: {
    backgroundColor: "#FAA813",
    width: 93,
    height: 29,
    alignItems: "center",
    justifyContent: "center",
  },
});
