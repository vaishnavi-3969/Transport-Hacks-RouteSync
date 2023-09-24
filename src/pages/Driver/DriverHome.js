import React from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaMapMarker, FaCar, FaBell } from 'react-icons/fa';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '300px',
};

function DriverHome() {
  const { colorMode } = useColorMode();

  return (
    <Flex
      direction="column"
      align="center"
      minH="calc(100vh - 100px)"
      bg={colorMode === 'light' ? 'gray.100' : 'gray.900'}
      padding={{ base: 4, md: 10 }}
    >
      <Heading as="h1" size="xl" my={6} color="teal.500">
        Welcome, Driver!
      </Heading>

      <Box maxW="xl" p={6} rounded="lg" shadow="lg" bg="white" w="100%">
        <Stack spacing={4} mb={6}>
          <Text fontSize="lg">
            Ready to start driving and earn rewards? Get on the road now!
          </Text>
        </Stack>

        <Heading as="h2" size="lg" my={4} color="teal.500">
          Your Upcoming Trips
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          <TripCard
            title="Morning Commute"
            destination="Office"
            date="Oct 15, 2023"
          />
          <TripCard
            title="Evening Pickup"
            destination="Airport"
            date="Oct 20, 2023"
          />
        </SimpleGrid>
      </Box>

      <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={{ lat: 37.7749, lng: -122.4194 }}
          zoom={12}
        >
        </GoogleMap>
      </LoadScript>

      <Link to="/profile" style={{ textDecoration: 'none' }}>
        <Button mt={6} colorScheme="teal" size="lg">
          View Profile
        </Button>
      </Link>

      <Link to="/rider-notifications" style={{ textDecoration: 'none' }}>
        <Button
          mt={4}
          variant="outline"
          colorScheme="teal"
          leftIcon={<FaBell />}
        >
          Notifications
        </Button>
      </Link>

      <Link to="/create-pool" style={{ textDecoration: 'none' }}>
        <Button mt={4} colorScheme="teal" size="lg">
          Create New Pool
        </Button>
      </Link>

      <Link to="/subscribe" style={{ textDecoration: 'none' }}>
        <Button mt={4} colorScheme="teal" size="lg">
          Put your Car/Bike/Cab on subscription
        </Button>
      </Link>
    </Flex>
  );
}

function TripCard({ title, destination, date }) {
  return (
    <Box
      borderWidth="1px"
      rounded="md"
      p={4}
      shadow="md"
      bg="gray.50"
      textAlign="center"
    >
      <Text fontSize="lg">{title}</Text>
      <Text fontSize="md" color="gray.500">
        <FaMapMarker style={{ marginRight: '0.2em' }} /> Destination: {destination}
      </Text>
      <Text fontSize="md" color="gray.500">
        Date: {date}
      </Text>
      <Button
        colorScheme="teal"
        size="sm"
        width="100%"
        as={Link}
        to="/cancel-ride"
      >
        Cancel
      </Button>
    </Box>
  );
}

export default DriverHome;
