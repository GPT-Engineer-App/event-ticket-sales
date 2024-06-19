import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => (
  <Box bg="teal.500" px={4} py={2}>
    <Flex h={16} alignItems="center" justifyContent="space-between">
      <Box>
        <Link as={RouterLink} to="/" color="white" fontSize="xl" fontWeight="bold">TicketMaster</Link>
      </Box>
      <Flex alignItems="center">
        <Link as={RouterLink} to="/events" color="white" mr={4}>Events</Link>
        <Button as={RouterLink} to="/contact" colorScheme="teal" variant="outline">Contact</Button>
      </Flex>
    </Flex>
  </Box>
);

export default Navbar;