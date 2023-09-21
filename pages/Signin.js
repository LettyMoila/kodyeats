import { StyleSheet, Text, TouchableOpacity, TextInput, View,Image } from "react-native";

export default function Signin() {
    return(
        <View style={styles.container}>
            <Text>Sign in</Text>
            <View style={styles.formcon}>
                
                <TextInput style={styles.textInput} placeholder="Email/Username"/>
                <TextInput style={styles.textInput} placeholder="Password"/>
                <View style={styles.actionContainer}>
                        <TouchableOpacity style={styles.saveOpt} title="Sign Up">
                            <Text style={styles.saveText}>Sign in</Text>
                        </TouchableOpacity>
                </View>
                    
            </View>
            <Text>Don't have an account? Signup</Text>
                    <Text>or continue with</Text>
                    <View style={styles.icons }>
                    <Image style={{  width: "20%" }}
                            source={require("../assets/Google.png")}/>
                            <Image style={{ width: "20%" }}
                            source={require("../assets/WhatsApp.png")}/>
                            <Image style={{ width: "20%"}}
                            source={require("../assets/Facebook.png")}/>
                    </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      marginTop: 30
    },
    textInput:{
        borderRadius: 15,
        borderColor:'#1EA0E5',
        borderWidth: 1,
        padding: 10,
        height: 46,
        marginVertical: 10,
        backgroundColor: 'white' 
    },
    formcon:{
        height: 380,
        borderRadius: 25,
        padding: 20,
        width: 320
    },
    saveOpt:{
        backgroundColor: '#38B6FF',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        height: 46,
        width: 280
    },
    saveText:{
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'
    },
    actionContainer:{
        height: 60,
        marginTop: 10,
        justifyContent: 'center'
    },
    icons:{
        height: 250,
        flexDirection: 'row',
        padding: 20,
        width: 320,
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})