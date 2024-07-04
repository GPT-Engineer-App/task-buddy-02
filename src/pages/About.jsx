import React from 'react';
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="start">
        <Heading as="h1" size="xl">About This App</Heading>
        <Text fontSize="lg">
          This is a simple to-do application built with React and Chakra UI. It allows users to add, complete, and delete tasks. The app is designed to be intuitive and easy to use, helping you manage your tasks efficiently.
        </Text>
        <Text fontSize="lg">
          Features:
        </Text>
        <VStack align="start" pl={4}>
          <Text>- Add new tasks</Text>
          <Text>- Mark tasks as completed</Text>
          <Text>- Delete tasks</Text>
        </VStack>
      </VStack>
    </Box>
  );
};

export default About;