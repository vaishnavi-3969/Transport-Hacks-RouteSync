import React from 'react';
import {
    Box,
    Flex,
    Spacer,
    Button,
    useColorMode,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function Header() {
    const { logout } = useAuth0();
    return (
        <Box as="header" bg={'gray.100'} py={4} px={8}>
            <Flex align="center">
                <Box>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Button
                            colorScheme="teal"
                            variant="ghost"
                            size="lg"
                            fontSize="xl"
                            fontWeight="bold"
                        >
                            RouteSync
                        </Button>
                    </Link>
                </Box>
                <Spacer />
                <Spacer>
                <Button
                    colorScheme="teal"
                    size="lg"
                    width="50%"
                    onClick={() => logout({ returnTo: window.location.origin })} // Logout and return to the current page
                >
                    Log Out
                </Button>
                </Spacer>
            </Flex>
        </Box>
    );
}

export default Header;
