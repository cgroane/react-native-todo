import React, { useState } from "react"
import { ScrollView, Text } from "react-native";
import { Todo } from "../../types/todo";

interface HomeViewProps {}
const HomeView = ({
  ...props
}: HomeViewProps ) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <>
      {/* <ScrollView>
        {todos?.map((t, ind) => <Text key={`${ind}-${t.id}`}>{t.value}</Text>)}
      </ScrollView> */}
    </>
  )
};

export default HomeView;
