import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { EvilIcons } from '@expo/vector-icons';
const Edit = ({ navigation, route }) => {
    const id = route.params;
    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [email, SetEmail] = useState('')
    const getData = async () => {
        let res = await fetch(`https://reqres.in/api/users/${id}`);
        res = await res.json();
        setFirst_name(res.data.first_name)
        setLast_name(res.data.last_name)
        SetEmail(res.data.email)
    }
    const Edit = async () => {
        let res = await fetch(`https://reqres.in/api/users/${id}`, {
            method: "put",
            body: JSON.stringify({ email, first_name, last_name }),
            headers: {
                'content-type': 'application/json'
            }
        })
        res = await res.json();
        if (res) {
            console.log(res)
            navigation.navigate('userlist')
        }
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <View>
            <View style={{ marginTop: 70, marginLeft: 20, flexDirection: "row" }}>
                <EvilIcons onPress={() => navigation.goBack()} style={{ marginTop: 8 }} name="close" size={44} color="red" />
                <Text style={{ fontSize: 35, fontWeight: "bold", marginLeft: 20 }}>Edit</Text>
            </View>
            <View style={{ marginTop: 40 }}>
                <TextInput onChangeText={(text) => setFirst_name(text)} value={first_name} style={styles.input} placeholder="Enter First_name"></TextInput>
                <TextInput onChangeText={(text) => { setLast_name(text) }} value={last_name} style={styles.input} placeholder="Enter Last_name"></TextInput>
                <TextInput onChangeText={(text) => SetEmail(text)} value={email} style={styles.input} placeholder="Enter Email"></TextInput>
            </View>
            <View style={{ alignSelf: "center", marginTop: 30 }}>
                <TouchableOpacity style={styles.btn} onPress={Edit}><Text style={styles.text}>Edit</Text></TouchableOpacity>
            </View>

        </View>
    )
}

export default Edit;
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