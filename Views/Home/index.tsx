import React, { useEffect, useState } from "react"
import { ScrollView, Text, ViewProps, FlatList, ListRenderItemInfo, Button, View, SafeAreaView, Pressable } from "react-native";
import { Todo } from "../../types/todo";
import { TextInput } from "react-native-gesture-handler";
import TodoComponent from "./Todo";
import { NativeStackNavigatorProps } from "react-native-screens/lib/typescript/native-stack/types";
import { useSelector } from 'react-redux'
import { selectTodos } from "../../reducers/todos";
import { styles } from "./styles";
import TextComponent from "../../StyledComponents/Text";

type RootStackParamList = {
  Home: undefined;
  AddNew: undefined;
};

interface HomeViewProps extends NativeStackNavigatorProps {}
const HomeView = ({
  navigation
}: { navigation: HomeViewProps } ) => {
  const todos = useSelector(selectTodos);
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState('');
  useEffect(() => {
    if (todos) {
      
    }
  }, [todos])

  useEffect(() => {
    if (!!filter) {
      const filt = [...todos].filter((t) => JSON.stringify(Object.values({
        value: t.value, title: t.title
      })).toLowerCase().includes(filter.toLowerCase()));
      setFilteredTodos(filt);
    } else {
      setFilteredTodos([...todos].sort((a, b) => a.complete ? 1 : -1))
    }
  }, [filter, setFilteredTodos, todos]);
  return (
    <>
      <View style={styles.container}>

        <TextInput style={styles.textInput} onChangeText={val => setFilter(val)} />
        <View style={{ backgroundColor: '#E4DFDA' }} >
        {!todos?.length ? <TextComponent text="You have nothing to do today" styleOption="todoText" /> : (
          <>
          <SafeAreaView>
            <FlatList data={filteredTodos}
            renderItem={(t) => <TodoComponent todo={t.item} />}
            />
            </SafeAreaView>
          </>
          
        )}
        </View>
        <Pressable style={styles.pressable} onPress={() => navigation.navigate('AddNew')}>
          <TextComponent text="Add another item" styleOption={'buttonText'} />
        </Pressable>
      </View>
      </>
  )
};

export default HomeView;
