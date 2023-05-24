import React, { useState } from "react";
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";


export default function App() {

    const [courseGoals, setCouserGoals] = useState([])
    const [modalIsVisible, setModalIsVisible] = useState(false)



    function addGoalHander(enteredGoalText) {
        setCouserGoals((currentCourseGoals) => [
            ...currentCourseGoals,
            { text: enteredGoalText, id: Math.random().toString() }


        ])

        console.log(courseGoals)
        endAddGoalHandler()

    }

    function deleteGoalHandler(id) {
        setCouserGoals(courseGoals.filter((goal) => goal.id != id))

    }

    function showAddNewGoalModal() {
        setModalIsVisible(true)
    }

    function endAddGoalHandler() {
        setModalIsVisible(false)
    }

    return (

        <View style={styles.appContainer}>
            <Button
                title="Add New Goal"
                color={"5e0acc"}
                onPress={showAddNewGoalModal}></Button>
            <GoalInput
                onAddGoal={(text => addGoalHander(text))}
                isModalVisible={modalIsVisible} 
                onCancel ={endAddGoalHandler}/>
            <View style={styles.goalsContainer}>
                <FlatList alwaysBounceVertical={false} data={courseGoals}
                    keyExtractor={
                        (item, index) => {
                            return item.id
                        }
                    }
                    renderItem={(item) => {
                        return (
                            <GoalItem
                                text={item.item.text}
                                onDeleteItem={deleteGoalHandler}
                                id={item.item.id} />
                        )
                    }}>

                </FlatList>

            </View>
        </View>
    )
}
// {
//     courseGoals.map((goal) =>
//    )
// }
const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20
    },


    goalsContainer: {
        flex: 4
    },




})