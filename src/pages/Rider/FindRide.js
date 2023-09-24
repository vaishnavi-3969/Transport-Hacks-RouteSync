import React, { useState } from 'react';
import {
  Box,
  Button,
  Divider,
  Input,
  Select,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Confetti from 'react-confetti';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react"; // Import Chakra UI modal components

const containerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

const FindRide = () => {
  const [markers, setMarkers] = useState([]);
  const [filter, setFilter] = useState('');
  const [selectedRide, setSelectedRide] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const addMarker = (event) => {
    const newMarker = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    setMarkers([...markers, newMarker]);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleRideClick = (ride) => {
    setSelectedRide(ride);
  };

  const handleBookRide = () => {
    setShowConfetti(true);
    setIsBookingModalOpen(true);
  };

  const handleCloseConfirmation = () => {
    setShowConfetti(false);
    setIsBookingModalOpen(false);
  };

  return (
    <>
      <Box p={4}>
        <h1>Find a Ride</h1>
        <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
            onClick={addMarker}
          >
            {markers.map((marker, index) => (
              <Marker key={index} position={marker} />
            ))}
          </GoogleMap>
        </LoadScript>
        <Box mt={4}>
          <Text fontSize="lg" mb={2}>
            Filter Rides:
          </Text>
          <Stack direction="row" spacing={4}>
            <Select
              placeholder="Select a filter"
              value={filter}
              onChange={handleFilterChange}
            >
              <option value="all">All Rides</option>
              <option value="car">Cars</option>
              <option value="bike">Bikes</option>
              <option value="ev">Electric Vehicles</option>
            </Select>
            <Input
              placeholder="Search by location..."
            />
            <Button colorScheme="teal">Apply</Button>
          </Stack>
        </Box>
        <Box mt={4}>
          <Text fontSize="lg" mb={2}>
            Available Rides:
          </Text>
          {selectedRide ? (
            <Box borderWidth="1px" p={4} rounded="md" shadow="md" bg="gray.50">
              <Text fontSize="lg">{selectedRide.title}</Text>
              <Text fontSize="md" color="gray.500">
                Destination: {selectedRide.destination}
              </Text>
              <Text fontSize="md" color="gray.500">
                Date: {selectedRide.date}
              </Text>
              <Button
                colorScheme="teal"
                size="sm"
                onClick={handleBookRide}
              >
                Book Ride
              </Button>
              <Divider />
              <Button
                colorScheme="teal"
                size="sm"
                onClick={() => setSelectedRide(null)}
              >
                Close
              </Button>
            </Box>
          ) : (
            <Stack spacing={4}>
              {[
                {
                  title: 'Ride to Work',
                  destination: 'Office',
                  date: 'Oct 15, 2023',
                  type: 'car',
                  price: 200,
                },
                {
                  title: 'City Bike Ride',
                  destination: 'Park',
                  date: 'Oct 17, 2023',
                  type: 'bike',
                  price: 50,
                },
                {
                  title: 'Eco-Friendly Commute',
                  destination: 'Downtown',
                  date: 'Oct 20, 2023',
                  type: 'ev',
                  price: 150,
                },
              ]
                .filter((ride) => filter === 'all' || ride.type === filter)
                .map((ride, index) => (
                  <Box
                    key={index}
                    borderWidth="1px"
                    p={4}
                    rounded="md"
                    shadow="md"
                    bg="gray.50"
                    onClick={() => handleRideClick(ride)}
                    cursor="pointer"
                  >
                    <Text fontSize="lg">{ride.title}</Text>
                    <Text fontSize="md" color="gray.500">
                      Destination: {ride.destination}
                    </Text>
                    <Text fontSize="md" color="gray.500">
                      Date: {ride.date}
                    </Text>
                    <Text fontSize="md" color="gray.500">
                      Price: Rs {ride.price}
                    </Text>
                  </Box>
                ))}
            </Stack>
          )}
        </Box>
        {showConfetti && <Confetti />}
        <Modal isOpen={isBookingModalOpen} onClose={handleCloseConfirmation}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Booking Confirmation</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Congratulations! Your ride has been booked successfully.
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="teal" onClick={handleCloseConfirmation}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export default FindRide;
