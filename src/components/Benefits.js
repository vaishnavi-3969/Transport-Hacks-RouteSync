import { Box, Heading,Text } from '@chakra-ui/react'
import React from 'react'

const Benefits = () => {
    return (
        <Box>
            <Box mt={8}>
                <Heading as="h2" size="lg" mb={4} color="teal.500">
                    Benefits of RouteSync
                </Heading>
                {/* Benefit 1 */}
                <Box
                    p={4}
                    borderWidth="1px"
                    rounded="md"
                    shadow="md"
                    bg="gray.50"
                    mb={4}
                >
                    <Heading as="h3" size="md" mb={2} color="teal.500">
                        Eco-Friendly Commuting
                    </Heading>
                    <Text>
                        Reduce your carbon footprint and contribute to a cleaner environment by choosing sustainable transportation options.
                    </Text>
                </Box>
                {/* Benefit 2 */}
                <Box
                    p={4}
                    borderWidth="1px"
                    rounded="md"
                    shadow="md"
                    bg="gray.50"
                    mb={4}
                >
                    <Heading as="h3" size="md" mb={2} color="teal.500">
                        Cost Savings
                    </Heading>
                    <Text>
                        Save money on fuel, maintenance, and parking expenses by sharing rides or opting for cost-effective subscription plans.
                    </Text>
                </Box>
                {/* Benefit 3 */}
                <Box
                    p={4}
                    borderWidth="1px"
                    rounded="md"
                    shadow="md"
                    bg="gray.50"
                    mb={4}
                >
                    <Heading as="h3" size="md" mb={2} color="teal.500">
                        Community Engagement
                    </Heading>
                    <Text>
                        Connect with like-minded individuals, attend transportation-related events, and participate in challenges and competitions.
                    </Text>
                </Box>
            </Box>
        </Box>
    )
}

export default Benefits