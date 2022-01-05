import React, {useState} from 'react';
import {Button, FlatList, StyleSheet, TextInput, View} from 'react-native';
import TaskComponent from './src/components/TaskComponent';

export interface Task {
  task: string;
  completed: boolean;
}

const App = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState<Task[]>([]);

  const createTask = () => {
    if(!task.trim()) return
    setTaskList([
      ...taskList,
      {
        task,
        completed: false,
      },
    ]);
    setTask('');
  }

  return (
    <>
      <View
        style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          value={task}
          onChangeText={setTask}
        />
        <Button
          title="send"
          color="#9191E9"
          onPress={createTask}
        />
      </View>
      <View
        style={styles.listContainer}>
        <FlatList
          data={taskList}
          renderItem={({item}) => (
            <TaskComponent
            item={item}
            setTaskList={setTaskList}
            />
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  searchInput: {
    borderBottomWidth: 2,
    width: 250,
    height: 35,
  },
  listContainer: {
    flex: 1,
    marginLeft: 50,
    justifyContent: 'flex-start',
  }
})

export default App;
