import { Image, StyleSheet,Text, View } from "react-native";

export default function Home() {
    return(
        <View style={styles.container}>
           {/* <Image style={styles.polyone} source={require('../assets/Polygon.png')}/>
            <Image style={styles.polytwo} source={require('../assets/Polygon.png')}/>*/}
            <Image style={styles.carticon} source={require('../assets/Shoppingcart.png')}/>
                <View style={styles.searchcon}>
                    <Image style={styles.searchicon} source={require('../assets/Search.png')}/>
                    <Text>Search our menu</Text>
                    <Image style={styles.searchicon} source={require('../assets/Menu.png')}/>
                </View>
                <View style={styles.categories}>
                    <View style={styles.catitemone}>
                        <Text style={styles.textone}>burger</Text>
                    </View>
                    <View style={styles.catitem}>
                        <Text style={styles.textone}>pizza</Text>
                    </View>
                    <View style={styles.catitem}>
                        <Text style={styles.textone}>drinks</Text>
                    </View>
                </View>
                <View style={styles.specialone}>
                    <Image style={{ width: "100%", height: "100%" }} source={require('../assets/feast.jpg')}/>
                </View>
                <View style={styles.specialone}>
                    <Image style={{ width: "100%", height: "100%" }} source={require('../assets/restuarant-seating.jpg')}/>
                </View>
                <View style={styles.specialities}>
                    <Text>Our specialities</Text>
                    <View style={styles.speciality}>
                        <Image style={{ width: "30%", height: "80%" }} source={require('../assets/alfredo-pasta.jpg')}/>
                        <View>
                            <Text>Alfredo pasta</Text>
                            <View style={styles.price}>
                                <Text style={{ color: 'white' }}>R600</Text>
                            </View>
                        </View>
                        <View style={styles.plus}>
                            <Image style={{ width: "100%", height: "100%" }} source={require('../assets/Plus.png')}/>
                        </View>
                    </View>
                    <View style={styles.speciality}>
                        <Image style={{ width: "30%", height: "80%" }} source={require('../assets/japan-sushi.jpg')}/>
                        <View>
                            <Text>Japan sushi</Text>
                            <View style={styles.price}>
                                <Text style={{ color: 'white' }}>R900</Text>
                            </View>
                        </View>
                        <View style={styles.plus}>
                            <Image style={{ width: "100%", height: "100%" }} source={require('../assets/Plus.png')}/>
                        </View>
                    </View>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#D9D9D9",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
      padding: 10,
      gap: 10
    },
    carticon:{
        alignItems: 'flex-end'
    },
    polyone:{
        position: 'absolute',
        top: 10
    },
    polytwo:{
        position: 'absolute',
        top: 200,
    },
    searchcon:{
        backgroundColor: '#F5F5F5',
        width: 276,
        height: 39,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        gap: 5
    },
    categories:{
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
    
    },
    catitemone:{
        height: 45,
        width: 100,
        backgroundColor: '#FAA813',
        alignItems: 'center',
        justifyContent: 'center'
    },
    catitem:{
        height: 45,
        width: 100,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textone:{
        fontSize: 20
    },
    specialone:{
        height: 114,
        width: 340,
    },
    specialities:{
        padding: 10,
        gap: 10
    },
    speciality:{
        backgroundColor: '#F5F5F5',
        width: 280,
        height: 70,
        justifyContent: 'center',
        padding: 5,
        flexDirection: 'row',
        gap: 10
    },
    price:{
        backgroundColor: '#272727',
        alignItems: 'center',
        width: 45
    },
    plus:{
        backgroundColor: '#FAA813',
        height: 20,
        width: 20
    }
});