import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Button, View, Touchable, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';





export default function AddTodo({submitHandler}) {
    const[text, setText] = useState('');

    const changeHandler = (val) =>{
        setText(val)
      }

      const handleAddTodo = () => {
        submitHandler(text);
        setText('');  // Clear the text input after adding the todo
    }

    return(
        <View style ={styles.flex}>
            <TextInput 
                style ={styles.input} 
                placeholder='add' 
                onChangeText={changeHandler}
                value={text}  // Bind the value of TextInput to the state
            
            />
                <TouchableOpacity onPress={handleAddTodo} style={styles.button}>
                <Text style={styles.text} numberOfLines={1} adjustsFontSizeToFit={true}>AddTodo!</Text>
                </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({

    flex:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    input:{
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        marginBottom: 10,
        width: 200,
    },
    button: {
        backgroundColor: 'coral',
        height: 40,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        marginLeft: 30,
    },
    text: {
        color: 'white',
        fontSize: 17.5,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
    },

  
});