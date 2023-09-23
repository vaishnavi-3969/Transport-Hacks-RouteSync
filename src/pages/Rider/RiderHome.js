import React from 'react';
import {
    Box,
    Button,
    Flex,
    Heading,
    SimpleGrid,
    Stack,
    Text,
    Icon,
    useColorMode,
    Divider,
    Image,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { FaMapMarker, FaBell } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function RiderHome() {
    const { user } = useAuth0();

    return (
        <Flex
            direction="column"
            align="center"
            minH="calc(100vh - 100px)"
            bg={'gray.100'}
            padding={{ base: 4, md: 10 }}
        >
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                <Image src={user.picture} fallbackSrc='https://via.placeholder.com/150' />
                <Heading as="h1" size="xl" my={6} color="teal.500">
                    Welcome, {user ? user.name : 'Rider'}!
                </Heading>
            </SimpleGrid>
            <MapCard />
            <Divider p={4} orientation='horizontal' />
            <Box maxW="xl" p={6} rounded="lg" shadow="lg" bg="white">
                <Stack spacing={4} mb={6}>
                    <Text fontSize="lg">
                        Ready to start your eco-friendly journey? Find a ride now!
                    </Text>
                    <Button
                        colorScheme="teal"
                        size="lg"
                        width="100%"
                        as={Link}
                        to="/find-ride"
                    >
                        Find a Ride
                    </Button>
                </Stack>

                <Heading as="h2" size="lg" my={4} color="teal.500">
                    Your Upcoming Rides
                </Heading>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                    <RideCard
                        title="Ride to Work"
                        destination="Office"
                        date="Oct 15, 2023"
                    />
                    <RideCard
                        title="Weekend Adventure"
                        destination="Nature Park"
                        date="Oct 20, 2023"
                    />
                </SimpleGrid>
                <SimpleGrid columns={{ base: 1, md: 2 }} mt={6} spacing={4}>
                    <Heading as="h2" size="lg" color="teal.500">
                        Rewards and Achievements
                    </Heading>
                    <RewardCard
                        title="Eco-Warrior Badge"
                        description="You've saved 100 kg of CO2 emissions!"
                    />
                    <RewardCard
                        title="Robin Hood"
                        description="You've saved 50 kg of CO2 emissions!"
                    />
                    <RewardCard
                        title="Env-Saviour"
                        description="You've saved 25 kg of CO2 emissions!"
                    />
                </SimpleGrid>
            </Box>

            <Link to="/rider-profile" style={{ textDecoration: 'none' }}>
                <Button mt={6} colorScheme="teal" size="lg">
                    View Profile
                </Button>
            </Link>

            <Link to="/rider-notifications" style={{ textDecoration: 'none' }}>
                <Button
                    mt={4}
                    variant="outline"
                    colorScheme="teal"
                    leftIcon={<Icon as={FaBell} />}
                >
                    Notifications
                </Button>
            </Link>

            <Link to="/rent-vehicle" style={{ textDecoration: 'none' }}>
                <Button
                    mt={4}
                    colorScheme="teal"
                    size="lg"
                >
                    Rent a Vehicle
                </Button>
            </Link>
        </Flex>
    );
}

function RideCard({ title, destination, date }) {
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
                <Icon as={FaMapMarker} mr={1} /> Destination: {destination}
            </Text>
            <Text fontSize="md" color="gray.500">
                Date: {date}
            </Text>
            <Link to="/cancel-ride">
                <Button
                    colorScheme="teal"
                    size="sm"
                    width="100%"
                    as="a"
                >
                    Cancel
                </Button>
            </Link>
        </Box>
    );
}

function RewardCard({ title, description }) {
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
                {description}
            </Text>
            <Link to="/rider-rewards">
                <Button
                    colorScheme="teal"
                    size="sm"
                    width="100%"
                >
                    View Rewards
                </Button>
            </Link>
        </Box>
    );
}
function MapCard() {
    return (
        <Box
            maxW="xl"
            p={6}
            rounded="lg"
            shadow="lg"
            bg="white"
            w="80%"
            h="270px"
        >
            <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>Your current location</Popup>
                </Marker>
            </MapContainer>
        </Box>
    );
}
export default RiderHome;
