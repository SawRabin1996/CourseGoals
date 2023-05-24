import { useState } from "react"
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native"

function GoalInput(props) {

    const [enteredGoalText, setEnteredGoalText] = useState("")

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }
    return (
        <Modal visible={props.isModalVisible} animationType="fade">
            <View style={styles.inputContainer}>
                <Image source={require('../assets/images/goal.png')} style={styles.goalImage} />
                <TextInput placeholder="Your course Goal!"
                    style={styles.textInput}
                    onChangeText={(text) => goalInputHandler(text)}
                    value={enteredGoalText} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} color={"#FFFFFF"} />
                    </View>
                    <View style={styles.button} >
                        <Button title="Cancel" color={"white"} onPress={props.onCancel} />
                    </View>

                </View>

            </View>
        </Modal>
    )
}


export default GoalInput

const styles = StyleSheet.create(
    {
        inputContainer: {
            backgroundColor: "#311b6b",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: 'center',
            paddingBottom: 10,
            borderBottomWidth: 1,
            borderBottomColor: "#CCCCCC"
            ,
        },
        textInput: {
color : "white",
            padding: 7,
            borderWidth: 1,
            borderColor: "#CCC",
            width: '90%',

        },
        buttonContainer: {
            marginTop: 16,
            flexDirection: "row"
        },

        button: {
            borderRadius: 4,
            backgroundColor: "#5e0acc",
            width: "40%",
            marginHorizontal: 8
        },
        goalImage: {
            marginBottom: 5,
            width: 100,
            height: 100
        }

    }
)