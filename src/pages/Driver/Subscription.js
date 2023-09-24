import React, { useState } from 'react';
import {
  Box,
  Button,
  Heading,
  Input,
  Select,
  Text,
  useColorMode,
  VStack,
} from '@chakra-ui/react';

const Subscription = () => {
  const { colorMode } = useColorMode();
  const [carDetails, setCarDetails] = useState({
    make: '',
    model: '',
    year: '',
    price: '',
    availability: 'available',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarDetails({
      ...carDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      alert('Car subscription details submitted:', carDetails);
  };

  return (
    <Box
      p={4}
      bg={colorMode === 'light' ? 'gray.100' : 'gray.900'}
      minH="calc(100vh - 100px)"
      textAlign="center"
    >
      <Heading as="h1" size="xl" my={6} color="teal.500">
        Offer Your Car for Subscription
      </Heading>

      <Box maxW="xl" p={6} rounded="lg" shadow="lg" bg="white" mx="auto">
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <Input
              type="text"
              name="make"
              placeholder="Car Company"
              value={carDetails.make}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              name="model"
              placeholder="Car Model"
              value={carDetails.model}
              onChange={handleChange}
              required
            />
            <Input
              type="number"
              name="year"
              placeholder="Manufacturing Year"
              value={carDetails.year}
              onChange={handleChange}
              required
            />
            <Input
              type="number"
              name="price"
              placeholder="Daily Subscription Price (in Rs)"
              value={carDetails.price}
              onChange={handleChange}
              required
            />
            <Select
              name="availability"
              value={carDetails.availability}
              onChange={handleChange}
              required
            >
              <option value="available">Available for Subscription</option>
              <option value="unavailable">Not Available</option>
            </Select>
            <Button
              type="submit"
              colorScheme="teal"
              size="lg"
              width="100%"
            >
              Submit
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
};

export default Subscription;
