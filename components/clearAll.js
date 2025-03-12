import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';



export default function ClearAll({removeAll}) {
    return(
        <View style ={styles.clearAllContainer}>
            <TouchableOpacity  style ={styles.button} onPress={removeAll}>
                <Text style={styles.text}>Clear All TODOS</Text>
            </TouchableOpacity> 
        </View>
        
    )
}

const styles = StyleSheet.create({
    clearAllContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 20,
    },
    button: {
        backgroundColor: 'coral',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    text: {
        color: 'white',
        fontSize: 17.5,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})