import React, { useState } from 'react';
import {
  Box,
  Button,
  Heading,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const CancelRide = () => {
  const { colorMode } = useColorMode();
  const [rideCancelled, setRideCancelled] = useState(false);

  function handleCancel() {
    setRideCancelled(true);
  }

  return (
    <Box
      p={4}
      bg={colorMode === 'light' ? 'gray.100' : 'gray.900'}
      minH="calc(100vh - 100px)"
      textAlign="center"
    >
      <Heading as="h1" size="xl" my={6} color="teal.500">
        Cancel Ride
      </Heading>

      <Box maxW="xl" p={6} rounded="lg" shadow="lg" bg="white" mx="auto">
        {!rideCancelled ? (
          <>
            <Text fontSize="lg" mb={6}>
              Are you sure you want to cancel this ride?
            </Text>

            <Button colorScheme="teal" size="lg" width="100%" onClick={handleCancel}>
              Confirm Cancellation
            </Button>
          </>
        ) : (
          <>
            <Text fontSize="lg" mb={6}>
              Ride Cancelled
            </Text>

            <Link to="/rider-home">
              <Button colorScheme="teal" size="lg" width="100%">
                Back to Rider Home
              </Button>
            </Link>
          </>
        )}
      </Box>
    </Box>
  );
};

export default CancelRide;
