import React, { ChangeEvent, ChangeEventHandler } from "react"
import { Todo } from "../../types/todo";
import { Switch, Text, View } from "react-native";
import { todoStyle } from "./styles";
import { useAppDispatch } from "../../hooks/redux";
import { markComplete } from "../../reducers/todos";

type TodoProps = {
  todo: Todo
}
const TodoComponent = ({
  todo,
}: TodoProps ) => {
  const dispatch = useAppDispatch();
  const markAsComplete = (value: boolean, id: string) => {
    dispatch(markComplete({ id, complete: value }));
  }
  return (
    <>

      <View style={todoStyle.todo} >
      <Text >{todo.value}</Text>
        <Switch 
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={todo.complete ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => markAsComplete(!todo.complete, todo.id)}
            value={todo.complete}
         />
      </View>
    </>
  )
};

export default TodoComponent;
