import { Box, Heading, VStack, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const events = [
  { id: 1, name: "Concert A", date: "2023-12-01", location: "Stadium X" },
  { id: 2, name: "Theater B", date: "2023-12-05", location: "Theater Y" },
  { id: 3, name: "Festival C", date: "2023-12-10", location: "Park Z" },
];

const Events = () => (
  <Box p={4}>
    <Heading as="h2" size="xl" mb={4}>Upcoming Events</Heading>
    <VStack spacing={4}>
      {events.map(event => (
        <Box key={event.id} p={4} borderWidth="1px" borderRadius="lg" w="100%">
          <Heading as="h3" size="md">{event.name}</Heading>
          <Text>Date: {event.date}</Text>
          <Text>Location: {event.location}</Text>
          <Button as={Link} to={`/events/${event.id}`} colorScheme="teal" mt={2}>Buy Tickets</Button>
        </Box>
      ))}
    </VStack>
  </Box>
);

export default Events;