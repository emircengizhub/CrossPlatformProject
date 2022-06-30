import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { ListViewComponent, StyleSheet, Text, View, Button, TextInput, ScrollView , FlatList , TouchableOpacity

} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Header() {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>User List Page</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    header: {
        height:80,
        paddingTop:30,
        justifyContent: "center",
        backgroundColor: "coral"
    },
    title:{
        textAlign: "center",
        color: "#fff",
        fontSize:20,
        fontWeight:"bold"
        
    }
})