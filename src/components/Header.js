import React from 'react';
import {
  Box,
  Flex,
  Spacer,
  Button,
  useColorMode,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

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
      </Flex>
    </Box>
  );
}

export default Header;
