import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem(props) {
    return (

        <Pressable 
        android_ripple={{color : "#dddddd"}}
        onPress={props.onDeleteItem.bind(this,props.id)}
        style ={({pressed})=> pressed && styles.pressItem}>
            <View style={styles.goalItem}>
                <Text style={ styles.goalText}>
                    {props.text}
                </Text>
            </View>
        </Pressable>
    )
}



export default GoalItem;


const styles = StyleSheet.create(
    {
        goalItem: {
            margin: 8,
            padding: 8,
            borderRadius: 6,
            backgroundColor: "#5e0acc",
            color: 'white'
        },
        goalText: {
            color: "white",
            padding : 8
        },
        pressItem:{
            opacity : 0.5
        }
    }
)