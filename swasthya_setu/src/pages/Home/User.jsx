import {
  Box,
  Stack,
  Flex,
  Card,
  Avatar,
  VStack,
  StackDivider,
  Heading,
  CardBody,
  Center,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const User = () => {
  return (
      <Flex>
        <Stack spacing={5}>
            <Box h="85px">
              <Card margin={2}
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
              >
                <Avatar marginTop={7} marginInline={2} name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                <Stack>
                  <CardBody>
                    <Heading p={1} as="h5" size="sm">
                      Welcome Back!
                    </Heading>
                    <Text p={1}>Kriti Derasadi</Text>
                  </CardBody>
                </Stack>
              </Card>
            </Box>
          <Box p={4}> 
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={5}
            align="stretch"
          >
            <Box h="40px">
              <Link>Dashboard</Link>
            </Box>
            <Box h="40px">
              <Link>Schedule Appointment</Link>
            </Box>
            <Box h="40px">
              <Link>Book Consultation</Link>
            </Box>
            <Box h="40px">
              <Link>Prescription Order</Link>
            </Box>
            <Box h="40px">
              <Link>Community</Link>
            </Box>
          </VStack>
          </Box> 
        </Stack>
      </Flex>
  );
};

export default User;
