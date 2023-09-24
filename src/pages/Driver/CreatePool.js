import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import Confetti from 'react-confetti';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

const CreatePool = () => {
  const { colorMode } = useColorMode();
  const [poolData, setPoolData] = useState({
    name: '',
    origin: '',
    destination: '',
    date: '',
    time: '',
  });
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPoolData({
      ...poolData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can send the poolData to your backend API for pool creation
    // If successful, set isSuccessModalOpen to true
    setIsSuccessModalOpen(true);
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
        Create a Pool
      </Heading>

      <Box maxW="xl" p={6} rounded="lg" shadow="lg" bg="white" w="100%">
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <Input
              type="text"
              name="name"
              placeholder="Pool Name"
              value={poolData.name}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              name="origin"
              placeholder="Origin"
              value={poolData.origin}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              name="destination"
              placeholder="Destination"
              value={poolData.destination}
              onChange={handleInputChange}
            />
            <Input
              type="date"
              name="date"
              placeholder="Date"
              value={poolData.date}
              onChange={handleInputChange}
            />
            <Input
              type="time"
              name="time"
              placeholder="Time"
              value={poolData.time}
              onChange={handleInputChange}
            />
            <Button colorScheme="teal" type="submit">
              Create Pool
            </Button>
          </Stack>
        </form>
      </Box>

      <Modal isOpen={isSuccessModalOpen} onClose={() => setIsSuccessModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Pool Created</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Your pool has been created successfully!</Text>
            <Confetti width={window.innerWidth} height={window.innerHeight} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" onClick={() => setIsSuccessModalOpen(false)}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default CreatePool;
