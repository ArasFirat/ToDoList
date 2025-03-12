import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import { Menu, Button } from 'react-native-paper'; // Import Menu and Button
import React, { useState } from 'react';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import ClearAll from './components/clearAll';
import MyComponent from './components/myComponent';

export default function App() {

  const MyComponent = () =>{

  }
  const [todos, setTodos] = useState([
    { text: 'ders calis', key: '1' },
    { text: 'spora git', key: '2' },
    { text: 'pasta yap', key: '3' },
    { text: 'test', key: '4' }
  ]);

  const [menuVisible, setMenuVisible] = useState(false);

  // Handlers for menu open/close
  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key !== key);
    });
  };

  const removeAll = () => {
    setTodos([]); // Clears the entire list
  };

  const myComponent = () => (
    <Menu
      visible={menuVisible}
      onDismiss={closeMenu}
      anchor={<Button onPress={openMenu}>Show Menu</Button>} // Button to trigger the menu
    >
      <Menu.Item icon="redo" onPress={() => {}} title="Redo" />
      <Menu.Item icon="undo" onPress={() => {}} title="Undo" />
      <Menu.Item icon="content-cut" onPress={() => {}} title="Cut" disabled />
      <Menu.Item icon="content-copy" onPress={() => {}} title="Copy" disabled />
      <Menu.Item icon="content-paste" onPress={() => {}} title="Paste" />
    </Menu>
  );

  const submitHandler = (text) => {
    if (text.length > 0) {
      setTodos((prevTodos) => {
        return [
          { text: text, key: `${Date.now().toString()}-${Math.random().toString(36).substr(2, 9)}`},
          ...prevTodos
        ];
      });
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0} // Adjust if needed
    >
      <StatusBar style="auto" />
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodoItem item={item} pressHandler={pressHandler} />
          )}
          keyExtractor={(item) => item.key}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
      <View style={styles.clearAllContainer}>
        <ClearAll removeAll={removeAll} />
      </View>

      <View style={styles.menuContainer}>
        <MyComponent />
      </View>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  flatListContent: {
    flexGrow: 1, // Ensures the list grows as needed
  },
  clearAllContainer: {
    padding: 20,
    // Ensure the button is always at the bottom
    justifyContent: 'center',
  },

  menuContainer: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: 'red',
    backgroundColor: '#f9f9f9', // Light background to separate the menu visually
  },
});
