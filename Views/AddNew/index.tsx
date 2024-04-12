import React, { useState } from "react"
import { Alert, GestureResponderEvent, Pressable, SafeAreaView, Text, TextInput, View } from "react-native";
import { useAppDispatch } from "../../hooks/redux";
import { add, selectTodos } from "../../reducers/todos";
import { useSelector } from 'react-redux'
import { inputStyles } from "./styles";

interface AddNewTodoProps {}
const AddNewTodo = ({
  ...props
}: AddNewTodoProps ) => {
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useAppDispatch();

  const todos = useSelector(selectTodos)
  const submit = (event: GestureResponderEvent) => {
    // todo redux or some other state management
    event.preventDefault();
    dispatch(add({
      value: newTodo,
      title: newTodo,
      id: `todo-${todos?.length + 1}`,
      complete: false,
    }))
    setNewTodo('');
  }
  return (
    <>
      <View>
        <TextInput value={newTodo} style={inputStyles.textField} onChangeText={text => setNewTodo(text)}/>
        <Pressable onPress={submit}><Text>Add</Text></Pressable>
      </View>
    </>
  )
};

export default AddNewTodo;
