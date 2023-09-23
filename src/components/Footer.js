import React from 'react';
import {
  Box,
  Flex,
  Link,
  Text,
} from '@chakra-ui/react';

function Footer() {
  return (
    <Box as="footer" mt={8} py={4} bg="teal.500" color="white">
      <Flex direction="column" align="center">
        <Text fontSize="lg" mb={2}>
          Connect with us on social media:
        </Text>
        <Flex>
          <Link
            href="#"
            mr={4}
            _hover={{ textDecor: 'underline' }}
          >
            Facebook
          </Link>
          <Link
            href="#"
            mr={4}
            _hover={{ textDecor: 'underline' }}
          >
            Twitter
          </Link>
          <Link
            href="#"
            _hover={{ textDecor: 'underline' }}
          >
            Instagram
          </Link>
        </Flex>
        <Text fontSize="sm" mt={4}>
          © {new Date().getFullYear()} RouteSync. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
}

export default Footer;
