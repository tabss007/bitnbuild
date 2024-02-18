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
  HStack,
  Grid,
  GridItem,
  Center,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Calender from "../../components/Calender";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faTablets,
  fa5x,
} from "@fortawesome/free-solid-svg-icons";
const User = () => {
  return (
    <Flex>
      <Stack w={400} spacing={2}>
        <Card
          margin={2}
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Avatar
            marginTop={7}
            marginInline={2}
            name="Kent Dodds"
            src="https://bit.ly/kent-c-dodds"
          />
          <Stack>
            <CardBody>
              <Heading p={1} size={"lg"}>
                Welcome Back!
              </Heading>
              <Text p={1}>Kriti Derasadi</Text>
            </CardBody>
          </Stack>
        </Card>

        <Box p={2}>
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={5}
            align="stretch"
          >
            <Box
              _hover={{
                color: "teal.500",
              }}
              h="40px"
            >
              <Link>Dashboard</Link>
            </Box>
            <Box
              _hover={{
                color: "teal.500",
              }}
              h="40px"
            >
              <Link to="/Appointment">Schedule Appointment</Link>
            </Box>
            <Box
              _hover={{
                color: "teal.500",
              }}
              h="40px"
            >
              <Link>Book Consultation</Link>
            </Box>
            <Box
              _hover={{
                color: "teal.500",
              }}
              h="40px"
            >
              <Link>Prescription Order</Link>
            </Box>
            <Box
              _hover={{
                color: "teal.500",
              }}
              h="40px"
            >
              <Link to="/Community">Community</Link>
            </Box>
          </VStack>
        </Box>
      </Stack>
      <Grid height={300} templateColumns="repeat(2,1fr)" gap={2} margin={2}>
        <GridItem>
          <Box w={352}>
            <Card minH="300px" borderWidth="1px">
              <CardBody>
                <Stack>
                  <Center>
                    <FontAwesomeIcon icon={faCalendarCheck} fontSize="40px" />{" "}
                  </Center>
                  <Heading marginTop={5} textAlign={"center"}>
                    Appointments
                  </Heading>
                  <Center>
                    <Text marginTop={10} textAlign="justify">
                      Previously Booked Appointments: 4
                    </Text>
                    </Center>
                    <Center>
                    <Text>
                      <Link color={"1C7293"}>
                        Click
                      </Link>
                       {" "}To see your past appointments
                    </Text>
                    </Center>
                </Stack>
              </CardBody>
            </Card>
          </Box>
        </GridItem>
        <GridItem>
          <Box w={350}>
            <Card minH="300px" borderWidth="1px">
              <CardBody>
                <Center>
                  <FontAwesomeIcon icon={faTablets} fontSize="40px" />
                </Center>
                <Heading px={10} textAlign={"center"}>
                  Your Prescriptions
                </Heading>
                <Center>
                  <UnorderedList>
                    <ListItem>Prescription 1</ListItem>
                    <ListItem>Prescription 2</ListItem>
                    <ListItem>Prescription 3</ListItem>
                    <ListItem>Prescription 4</ListItem>
                  </UnorderedList>
                </Center>
              </CardBody>
            </Card>
          </Box>
        </GridItem>
        <GridItem flex={1} colSpan={2}>
            <Text textAlign={"center"}>Map</Text>
        </GridItem>
      </Grid>
      <Box minH={726}  flex="1" bg={"white"}>
        <Stack>
          <Heading textAlign={"center"} p={2} color={"black"} size={"md"}>
            Appointments Dates
          </Heading>
          <Calender />
        </Stack>
      </Box>
    </Flex>
  );
};

export default User;
