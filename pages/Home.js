import { Image, StyleSheet,Text, View } from "react-native";

export default function Home() {
    return(
        <View style={styles.container}>
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
                    <View style={styles.speciality}></View>
                    <View style={styles.speciality}></View>
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
    }
});