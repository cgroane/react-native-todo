import React from "react"
import { Todo } from "../../types/todo";
import { Text, View } from "react-native";
import { todoStyle } from "./styles";
import { useAppDispatch } from "../../hooks/redux";
import { markComplete, remove } from "../../reducers/todos";
import { CheckBox, Icon } from 'react-native-elements';

type TodoProps = {
  todo: Todo
}
const TodoComponent = ({
  todo,
}: TodoProps ) => {
  const dispatch = useAppDispatch();
  const markAsComplete = (value: boolean, id: string) => {
    dispatch(markComplete({ id, complete: value }));
  };
  
  return (
    <>

      <View style={todoStyle.todo} >
      <Text>{todo.value}</Text>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }} >
        <Icon
            color="red"
            containerStyle={{}}
            disabledStyle={{}}
            iconStyle={{}}
            name="close"
            onLongPress={() => console.log("onLongPress()")}
            onPress={() => dispatch(remove(todo.id))}
            size={24}
            type="material"
          />
          <CheckBox
              onPress={() => markAsComplete(!todo.complete, todo.id)}
              checked={todo.complete}
              checkedColor="#048BA8"
          />
         </View>

      </View>
    </>
  )
};

export default TodoComponent;
