import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Cart() {
    
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.firsth}>
                    <TouchableOpacity style={styles.actButton} title="Back">
                            <Text style={styles.textone}>Back</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.secondh}>
                    <Text style={styles.textone}>My Cart</Text>
                </View>
                
                
            </View>
            <View style={styles.body}>
                <Text>this is the body</Text>
            </View>
            <View style={styles.bottom}>
            <TouchableOpacity style={styles.proButton} title="Back">
                        <Text style={styles.textone}>Proceed to checkout</Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      padding: 10,
      width: '100%'
    },
    header:{
    height: 60,
    width: '100%',
    flexDirection: 'row'
    },
    firsth:{
        width: '50%',
        height: '100%',
    },
    secondh:{
        width: '50%',
        height: '100%',
    },
    actButton:{
        backgroundColor: '#FAA813',
        height: 29,
        width: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    body:{
        height: 400,
        justifyContent: 'center'
    },
    bottom:{
        height: 60
    },
    proButton:{
        backgroundColor: '#FAA813',
        height: 29,
        width: 172,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textone: {
        fontSize: 16,
        fontWeight: 'bold'
    }
  });