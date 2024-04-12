import React, { useEffect, useState } from "react"
import { ScrollView, Text, ViewProps, FlatList, ListRenderItemInfo, Button, View, SafeAreaView } from "react-native";
import { Todo } from "../../types/todo";
import { TextInput } from "react-native-gesture-handler";
import TodoComponent from "./Todo";
import { NativeStackNavigatorProps } from "react-native-screens/lib/typescript/native-stack/types";
import { useSelector } from 'react-redux'
import { selectTodos } from "../../reducers/todos";
import { styles } from "./styles";

type RootStackParamList = {
  Home: undefined;
  AddNew: undefined;
};

interface HomeViewProps extends NativeStackNavigatorProps {}
const HomeView = ({
  navigation
}: { navigation: HomeViewProps } ) => {
  const todos = useSelector(selectTodos);
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>(todos);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (filter) {
      setFilteredTodos((prev) => [...prev?.filter((t) => JSON.stringify(t).toLowerCase().includes(filter))])
    }
  }, [filter, setFilteredTodos]);

  return (
    <>
      {/* <ScrollView> */}
      <View style={styles.container}>

        <TextInput style={styles.textInput} onChangeText={val => setFilter(val)} />
        {!todos?.length ? <Text>You have nothing to do today</Text> : (
          <>
          <SafeAreaView>
            <FlatList data={todos} 
            renderItem={(t) => <TodoComponent todo={t.item} />}
            />
            </SafeAreaView>
          </>
          
        )}
        <Button
          onPress={() => navigation.navigate('AddNew')}
          title="Add another item"
        />
      </View>
      {/* </ScrollView> */}
      </>
  )
};

export default HomeView;
