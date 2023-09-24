import React from 'react';
import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  useColorMode,
  Icon,
} from '@chakra-ui/react';
import { FaMedal, FaStar, FaTrophy } from 'react-icons/fa';

const RiderRewards = () => {
  const { colorMode } = useColorMode();
  
  // dummy rewards data
  const rewards = [
    {
      title: 'Eco-Warrior Badge',
      description: 'You\'ve saved 100 kg of CO2 emissions!',
      icon: FaMedal,
    },
    {
      title: 'Super Saver',
      description: 'You\'ve taken 50 rides and counting!',
      icon: FaStar,
    },
    {
      title: 'Champion Rider',
      description: 'You\'re the top rider of the month!',
      icon: FaTrophy,
    },
  ];

  return (
    <Box
      p={4}
      bg={colorMode === 'light' ? 'gray.100' : 'gray.900'}
      minH="calc(100vh - 100px)"
      textAlign="center"
    >
      <Heading as="h1" size="xl" my={6} color="teal.500">
        Your Rewards 
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {rewards.map((reward, index) => (
          <Box
            key={index}
            p={6}
            rounded="lg"
            shadow="lg"
            bg="white"
            textAlign="center"
          >
            <Icon as={reward.icon} w={10} h={10} color="teal.500" />
            <Heading as="h2" size="lg" my={4} color="teal.500">
              {reward.title}
            </Heading>
            <Text fontSize="md" color="gray.500">
              {reward.description}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default RiderRewards;
