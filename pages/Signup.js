import { StyleSheet, Text, TouchableOpacity, TextInput, View } from "react-native";

export default function Signup() {
    return(
        <View style={styles.container}>
            <Text>Sign up</Text>
            <View style={styles.formcon}>
                
                <TextInput style={styles.textInput} placeholder="Fullname"/>
                <TextInput style={styles.textInput} placeholder="Email"/>
                <TextInput style={styles.textInput} placeholder="Password"/>
                <TextInput style={styles.textInput} placeholder="Confirm Password"/>
                <View style={styles.actionContainer}>
                        <TouchableOpacity style={styles.saveOpt} title="Sign Up">
                            <Text style={styles.saveText}>Sign up</Text>
                        </TouchableOpacity>
                </View>
                <Text>Already have an account? Login</Text>
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
    }
})