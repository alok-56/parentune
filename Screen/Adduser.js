import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { EvilIcons } from '@expo/vector-icons';

const Adduser = ({ navigation }) => {
    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [email, SetEmail] = useState('')

    const add = async () => {
        let data = await fetch(`https://reqres.in/api/users`, {
            method: 'post',
            body: JSON.stringify({ first_name, last_name, email }),
            headers: {
                'content-type': 'application/json'
            }
        })
        data = await data.json()
        if (data) {
            console.log(data)
            navigation.navigate('userlist')
            first_name('')
            last_name('')
            email('')
        }


    }
    return (
        <View>
            <View style={{ marginTop: 70, marginLeft: 20, flexDirection: "row" }}>
                <EvilIcons onPress={() => navigation.goBack()} style={{ marginTop: 8 }} name="close" size={44} color="red" />
                <Text style={{ fontSize: 35, fontWeight: "bold", marginLeft: 20 }}>Add Users</Text>
            </View>
            <View style={{ marginTop: 40 }}>
                <TextInput onChangeText={(text) => setFirst_name(text)} value={first_name} style={styles.input} placeholder="Enter First_name"></TextInput>
                <TextInput onChangeText={(text) => { setLast_name(text) }} value={last_name} style={styles.input} placeholder="Enter Last_name"></TextInput>
                <TextInput onChangeText={(text) => SetEmail(text)} value={email} style={styles.input} placeholder="Enter Email"></TextInput>
            </View>
            <View style={{ alignSelf: "center", marginTop: 30 }}>
                <TouchableOpacity style={styles.btn} onPress={add} ><Text style={styles.text}>Add</Text></TouchableOpacity>
            </View>

        </View>
    )
}

export default Adduser;
const styles = StyleSheet.create({
    input: {
        marginTop: 15,
        borderWidth: 1,
        padding: 10,
        marginLeft: 5,
        fontSize: 15,
        borderRadius: 5
    },
    btn: {
        backgroundColor: "red",
        width: 200,
        padding: 15,
        borderRadius: 8
    },
    text: {
        textAlign: "center", color: "#fff",
        fontSize: 20,
        fontWeight: "bold"
    }
})