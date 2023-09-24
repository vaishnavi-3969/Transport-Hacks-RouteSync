import React, { useContext } from 'react';
import { Box, Heading, Text, useColorMode } from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { colorMode } = useColorMode();
  const { user } = useAuth0();

  return (
    <Box
      p={4}
      bg={colorMode === 'light' ? 'gray.100' : 'gray.900'}
      minH="calc(100vh - 100px)"
      textAlign="center"
    >
      <Heading as="h1" size="xl" my={6} color="teal.500">
        User Profile
      </Heading>

      <Box maxW="xl" p={6} rounded="lg" shadow="lg" bg="white" mx="auto">
        <Text fontSize="lg" mb={4}>
          Welcome, {user ? user.nickname : 'Guest'}!
        </Text>
        <Text fontSize="lg" mb={4}>
          Email: {user ? user.email : 'N/A'}
        </Text>
      </Box>
    </Box>
  );
};

export default Profile;
