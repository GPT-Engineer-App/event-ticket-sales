import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to TicketMaster</Heading>
        <Text fontSize="xl">Your one-stop solution for buying tickets to the best events!</Text>
        <Button as={Link} to="/events" colorScheme="teal" size="lg">Browse Events</Button>
      </VStack>
    </Container>
  );
};

export default Index;