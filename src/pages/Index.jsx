import React, { useState } from 'react';
import { Container, VStack, HStack, Input, Button, Checkbox, Text, Link } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom"; // Import RouterLink

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) => i === index ? { ...task, completed: !task.completed } : task);
    setTasks(newTasks);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <HStack width="100%">
          <Input 
            placeholder="Add a new task" 
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)} 
          />
          <Button onClick={addTask} colorScheme="teal" leftIcon={<FaPlus />}>Add</Button>
        </HStack>
        <VStack spacing={2} width="100%">
          {tasks.map((task, index) => (
            <HStack key={index} width="100%" justifyContent="space-between">
              <Checkbox isChecked={task.completed} onChange={() => toggleTaskCompletion(index)}>
                <Text as={task.completed ? "s" : ""}>{task.text}</Text>
              </Checkbox>
              <Button onClick={() => deleteTask(index)} colorScheme="red" leftIcon={<FaTrash />}>Delete</Button>
            </HStack>
          ))}
        </VStack>
        <Link as={RouterLink} to="/about" color="teal.500">About</Link> {/* Add navigation link to About page */}
      </VStack>
    </Container>
  );
};

export default Index;