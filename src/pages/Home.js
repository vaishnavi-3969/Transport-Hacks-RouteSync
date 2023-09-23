import React from 'react';
import {
    Box,
    Button,
    Flex,
    Heading,
    Text,
} from '@chakra-ui/react';

function Home() {

    return (
        <Box p={4}>
            <Flex
                p={10}
                align="center"
                justify="center"
                minH="calc(100vh - 100px)"
                bg={'gray.100'}
            >
                <Box p={6} rounded="lg" shadow="lg" bg="white" maxW="md">
                    <Heading as="h1"
                        size="xl"
                        mb={4}
                        textAlign="center"
                        color="teal.500">
                        Welcome to RouteSync
                    </Heading>

                    <Text fontSize="lg" mb={6} textAlign="center">
                        Your Sustainable Multi-Modal Transportation Solution
                    </Text>

                    <Button
                        colorScheme="teal"
                        size="lg"
                        width="100%"
                        as="a"
                        href="rider-home"
                    >
                        Log in as Rider
                    </Button>

                    <Button
                        colorScheme="teal"
                        size="lg"
                        width="100%"
                        as="a"
                        href="driver-home"
                        mt={4}
                    >
                        Log in as Driver
                    </Button>

                    <Box mt={8}>
                        <Heading as="h2" size="lg" mb={4} color="teal.500">
                            Key Features
                        </Heading>
                        <Box
                            p={4}
                            borderWidth="1px"
                            rounded="md"
                            shadow="md"
                            bg="gray.50"
                            mb={4}
                        >
                            <Heading as="h3" size="md" mb={2} color="teal.500">
                                Carpooling
                            </Heading>
                            <Text>
                                Share rides with friends, colleagues, or neighbors, and save on
                                commuting expenses.
                            </Text>
                        </Box>
                        <Box
                            p={4}
                            borderWidth="1px"
                            rounded="md"
                            shadow="md"
                            bg="gray.50"
                            mb={4}
                        >
                            <Heading as="h3" size="md" mb={2} color="teal.500">
                                Ridesharing
                            </Heading>
                            <Text>
                                Customize one-way trips with drivers acting like taxis for
                                flexibility.
                            </Text>
                        </Box>
                        <Box
                            p={4}
                            borderWidth="1px"
                            rounded="md"
                            shadow="md"
                            bg="gray.50"
                            mb={4}
                        >
                            <Heading as="h3" size="md" mb={2} color="teal.500">
                                Subscription Services
                            </Heading>
                            <Text>
                                Access cars, bikes, e-bikes, and more with convenient
                                subscription plans.
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
}

export default Home;
