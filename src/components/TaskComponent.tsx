import React, { Dispatch, SetStateAction } from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { Task } from '../../App';

interface Props {
    item: Task;
    setTaskList: Dispatch<SetStateAction<Task[]>>
}

const TaskComponent = ({ item, setTaskList }: Props) => {

  const toggleTaskCompleted = (item: Task) => {
    setTaskList(taskList => (
      taskList.map(task =>
        task.task === item.task
          ? {
              ...task,
              completed: !task.completed,
            }
          : task,
      )
    ))
  }

  const deleteTask = (item: Task) => {
    setTaskList(taskList => taskList.filter(({task}) => task !== item.task))
  }

  return (
    <View style={styles.taskContainer}>
      <Text
        onPress={() => toggleTaskCompleted(item)}
        style={{
          ...styles.task,
          textDecorationLine: item.completed ? 'line-through' : 'none',
        }}>
        {item.task}
      </Text>
      <Button title="delete" color="#ff0000" onPress={() => deleteTask(item)} />
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 10,
  },
  task: {
    marginRight: 10,
    fontSize: 30
  },
});

export default TaskComponent;
