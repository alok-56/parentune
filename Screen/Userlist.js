import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Alert } from "react-native";
import { AntDesign } from '@expo/vector-icons';


const Userlist = ({ navigation }) => {
    const [data, setData] = useState('');
    const getData = async () => {
        let res = await fetch(`https://reqres.in/api/users`);
        res = await res.json();
        setData(res.data)
    }

    const del = async (id) => {
        let res = await fetch(`https://reqres.in/api/users/${id}`, {
            method: 'delete'
        })
        res = await res.json()
        if(res){
            getData()
        }
    }

    const edit = async (id) => {
        navigation.navigate('edit', id)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <View>
            <View style={{ marginTop: 45, flexDirection: "row", justifyContent: "space-around" }}>
                <Text style={{
                    fontSize: 25,
                    fontWeight: "bold"
                }}>UserList</Text>
                <AntDesign onPress={() => navigation.navigate('add')} name="adduser" size={35} color="red" />
            </View>
            <View style={{ padding: 10, marginBottom: 150 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        data && data.length > 0 ?
                            data.map((item) => (
                                <View style={styles.container}>
                                    <View>
                                        <Image style={{ width: 200, height: 200 }} source={{ uri: item.avatar }}></Image>
                                    </View>
                                    <View style={styles.content}>
                                        <Text>{item.first_name}{item.last_name}</Text>
                                        <Text>{item.email}</Text>
                                        <TouchableOpacity style={styles.btn}><Text style={styles.edit} onPress={() => edit(item.id)}>Edit</Text></TouchableOpacity>
                                        <Text style={{
                                            position: "absolute",
                                            top: 12,
                                            right: 20
                                        }}><AntDesign onPress={() => del(item.id)} name="delete" size={24} color="red" /></Text>
                                    </View>
                                </View>

                            )) : <Text>No User</Text>
                    }
                </ScrollView>


            </View>
        </View>
    )
}

export default Userlist;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        height: 200,
        width: "100%",
        backgroundColor: "#fff",
        elevation: 20,
        marginTop: 15,
        borderRadius: 5
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    btn: {
        width: 50,
        backgroundColor: "red",
        padding: 3,
        borderRadius: 3,
        marginTop: 10
    },
    edit: {
        textAlign: "center",
        color: "#fff",
        fontWeight: "bold"
    }
})