import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Splash = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>PARENTUNE</Text>
        </View>
    )
}
export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 50,
        color: "red",
        fontWeight:"bold"
    }
})