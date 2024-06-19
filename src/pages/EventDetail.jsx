import { useParams } from "react-router-dom";
import { Box, Heading, Text, Button } from "@chakra-ui/react";

const events = [
  { id: 1, name: "Concert A", date: "2023-12-01", location: "Stadium X", description: "A great concert featuring popular bands." },
  { id: 2, name: "Theater B", date: "2023-12-05", location: "Theater Y", description: "A captivating theater performance." },
  { id: 3, name: "Festival C", date: "2023-12-10", location: "Park Z", description: "A fun festival with food, music, and games." },
];

const EventDetail = () => {
  const { id } = useParams();
  const event = events.find(event => event.id === parseInt(id));

  if (!event) {
    return <Text>Event not found</Text>;
  }

  return (
    <Box p={4}>
      <Heading as="h2" size="xl" mb={4}>{event.name}</Heading>
      <Text>Date: {event.date}</Text>
      <Text>Location: {event.location}</Text>
      <Text>Description: {event.description}</Text>
      <Button colorScheme="teal" mt={4}>Purchase Ticket</Button>
    </Box>
  );
};

export default EventDetail;