import { Container, Box, Input, ButtonGroup, Button } from '@chakra-ui/react'
import React, { useReducer, useState } from 'react';

const initialState = {
  tasks: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case 'EDIT_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? action.payload : task
        )
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    default:
      return state;
  }
};

const TodoApp = () => {
  const [taskText, setTaskText] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  const AddTask = () => {
    if (taskText.trim() !== '') {
      let id = taskText.length+1
      const newTask = {
        id: id,
        text: taskText
      };
      dispatch({ type: 'ADD_TASK', payload: newTask });
      setTaskText('');
    }
  };

  const EditTask = (id, newText) => {
    const updatedTask = {
      id,
      text: newText
    };
    dispatch({ type: 'EDIT_TASK', payload: updatedTask });
  };

  const DeleteTask = id => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  return (
    <Container w='500px' h='400px' m={10} boxShadow='dark-lg' mx="auto">
      <Box w='100%' p={4} color='black' display="flex" alignItems="center" justifyContent="space-between">
        <Input
          type="text"
          value={taskText}
          onChange={e => setTaskText(e.target.value)}
        />
        &nbsp;&nbsp;&nbsp;
        <Button onClick={AddTask}>Add Task</Button>
      </Box>


      {state.tasks.map(task => (
        <Box key={task.id} w='100%' p={4} color='green' display="flex" alignItems="center" justifyContent="space-between">

        <Input
          type="text"
          value={task.text}
          onChange={e => EditTask(task.id, e.target.value)}
        />
        &nbsp;&nbsp;&nbsp;
        <Button onClick={() => DeleteTask(task.id)}>Delete</Button>
      </Box >
          
          ))
}
     

    </Container >
  );
};

export default TodoApp;