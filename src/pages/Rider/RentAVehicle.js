import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useColorMode,
  FormControl,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react';

function RentAVehicle() {
  const { colorMode } = useColorMode();
  const [formData, setFormData] = useState({
    vehicleType: 'car',
    pickupLocation: '',
    pickupDate: '',
    returnDate: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <Flex
      direction="column"
      align="center"
      minH="calc(100vh - 100px)"
      bg={colorMode === 'light' ? 'gray.100' : 'gray.900'}
      padding={{ base: 4, md: 10 }}
    >
      <Heading as="h1" size="xl" my={6} color="teal.500">
        Rent a Vehicle
      </Heading>

      <Box maxW="xl" p={6} rounded="lg" shadow="lg" bg="white" w="100%">
        <Text fontSize="lg" mb={6}>
          Choose your preferred vehicle type and start your journey.
        </Text>

        <form onSubmit={handleSubmit}>
          <FormControl mb={4}>
            <FormLabel>Vehicle Type</FormLabel>
            <Select
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleInputChange}
            >
              <option value="car">Car</option>
              <option value="bike">Bike</option>
              <option value="ev">Electric Vehicle (EV)</option>
            </Select>
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Pickup Location</FormLabel>
            <Input
              type="text"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Pickup Date</FormLabel>
            <Input
              type="date"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleInputChange}
            />
          </FormControl>

          {formData.vehicleType === 'car' && (
            <FormControl mb={4}>
              <FormLabel>Return Date</FormLabel>
              <Input
                type="date"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleInputChange}
              />
            </FormControl>
          )}

          <Button type="submit" colorScheme="teal" size="lg">
            {formData.vehicleType === 'car' ? 'Book a Car' : 'Rent'}
          </Button>
        </form>
      </Box>
    </Flex>
  );
}

export default RentAVehicle;
