import React, { useState } from "react"
import { GestureResponderEvent, Pressable, TextInput, View } from "react-native";
import { useAppDispatch } from "../../hooks/redux";
import { add, selectTodos } from "../../reducers/todos";
import { useSelector } from 'react-redux'
import { inputStyles } from "./styles";
import { styles } from "../Home/styles";
import TextComponent from "../../StyledComponents/Text";

interface AddNewTodoProps {}
const AddNewTodo = ({
  ...props
}: AddNewTodoProps ) => {
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useAppDispatch();

  const todos = useSelector(selectTodos)
  const submit = (event: GestureResponderEvent) => {
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
        <Pressable style={styles.pressable} onPress={submit}>
          <TextComponent styleOption="buttonText" text="Add" />
        </Pressable>
      </View>
    </>
  )
};

export default AddNewTodo;
