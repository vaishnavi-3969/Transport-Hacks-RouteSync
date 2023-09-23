import React from 'react';
import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Text,
    useColorMode,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.gif';
import { useAuth0 } from '@auth0/auth0-react';

function Landing() {
    const { colorMode } = useColorMode();
    const { loginWithRedirect, loginWithPopup } = useAuth0();

    const handleGetStarted = () => {
        loginWithPopup();
    };

    return (
        <Flex
            align="center"
            justify="center"
            minH="100vh"
            bg={colorMode === 'light' ? 'gray.100' : 'gray.900'}
        >
            <Box p={6} rounded="lg" shadow="lg" bg="white" maxW="md">
                <Image src={Logo} height={200} alt="RouteSync Logo" mx="auto" mb={4} />

                <Heading as="h1" size="xl" mb={4} textAlign="center">
                    Welcome to RouteSync
                </Heading>

                <Text fontSize="lg" mb={6} textAlign="center">
                    Your Sustainable Multi-Modal Transportation Solution
                </Text>

                <Button
                    colorScheme="teal"
                    size="lg"
                    width="100%"
                    onClick={handleGetStarted}
                >
                    Get Started
                </Button>

                <Text mt={4} fontSize="sm" color="gray.600" textAlign="center">
                    Already have an account?{' '}
                    <Link to="/login" style={{ textDecoration: 'underline' }}>
                        Log in here
                    </Link>
                </Text>
            </Box>
        </Flex>
    );
}

export default Landing;
