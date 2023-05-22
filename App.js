import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";


export default function App() {
    const [enteredGoalText,setEnteredGoalText] = useState("")

    function goalInputHandler(enteredText) {
        console.log(enteredText)
    }

    function addGoalHander() {

    }
    return (

        <View style={styles.appContainer}>

            <View style={styles.inputContainer}>
                <TextInput placeholder="Your course Goal!" style={styles.textInput} onChangeText={(text) => goalInputHandler(text)} />
                <Button title="Add Goal" />
            </View>
            <View style={styles.goalsContainer}>
                <Text> List of goals</Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20
    },
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        paddingBottom: 14,
        borderBottomWidth: 1,
        borderBottomColor: "#CCCCCC"
        ,
    },
    textInput: {
        marginLeft: 10,
        padding: 7,
        borderWidth: 1,
        borderColor: "#CCC",
        width: '70%',

    },

    goalsContainer: {
        flex: 4
    }


})