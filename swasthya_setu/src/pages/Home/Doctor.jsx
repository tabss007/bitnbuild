import React from 'react'
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
import { Link } from "react-router-dom";
import Calender from "../../components/Calender";

const Doctor = () => {
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
              <Text p={1}>Isha Mistry</Text>
            </CardBody>
          </Stack>
        </Card>

        <Box p={2}>
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={5}
            align="stretch"
          >
            <Box h="40px">
              <Link>Dashboard</Link>
            </Box>
            <Box h="40px">
              <Link to="/Appointment">Scheduled Appointments</Link>
            </Box>
            <Box h="40px">
              <Link>Consultation Dates</Link>
            </Box>
            <Box h="40px">
              <Link>Patient Records</Link>
            </Box>
          </VStack>
        </Box>
      </Stack>
      
      <Box minH={726} marginLeft={2} flex="1" bg={"white"}>
        <Stack>
          <Heading textAlign={"center"} p={2} color={"black"} size={"md"}>
            Appointments Dates
          </Heading>
          <Calender />
        </Stack>
      </Box>
    </Flex>
  )
}

export default Doctor