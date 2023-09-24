import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  Text,
  useColorMode,
  VStack,
} from '@chakra-ui/react';

import notificationSound from '../../assets/notifications.mp3';

const RiderNotifications = () => {
  const { colorMode } = useColorMode();
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const notificationMessages = [
      'Ride request confirmed',
      'New reward unlocked',
      'Upcoming ride reminder',
      'You earned 50 points',
    ];

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * notificationMessages.length);
      const randomMessage = notificationMessages[randomIndex];

      const audio = new Audio(notificationSound);
      audio.play();

      setNotifications([...notifications, randomMessage]);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [notifications]);

  return (
    <Box
      p={4}
      bg={colorMode === 'light' ? 'gray.100' : 'gray.900'}
      minH="calc(100vh - 100px)"
      textAlign="center"
    >
      <Heading as="h1" size="xl" my={6} color="teal.500">
        Rider Notifications
      </Heading>

      <VStack align="stretch" spacing={4}>
        {notifications.map((notification, index) => (
          <Box
            key={index}
            p={4}
            rounded="lg"
            shadow="lg"
            bg="white"
            textAlign="center"
          >
            <Text fontSize="lg">{notification}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default RiderNotifications;
