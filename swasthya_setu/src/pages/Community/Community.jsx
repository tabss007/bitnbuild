import React from 'react'
import {
    Box,
    Stack,
    VStack,
    StackDivider,
    Flex,
    Card,
    Avatar,
    Heading,
    CardBody,
    CardHeader,
    Grid,
    GridItem,
    Center,
    IconButton,
    Image,
    CardFooter,
    Button,
  } from "@chakra-ui/react";
  import { Text } from "@chakra-ui/react";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import {
    faBookmark,
    faBookOpen,
  } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Calender from "../../components/Calender"

const Community = () => {
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
        <Box h="40px">
          <Link>Dashboard</Link>
        </Box>
        <Box h="40px">
          <Link to="/Appointment">Schedule Appointment</Link>
        </Box>
        <Box h="40px">
          <Link>Book Consultation</Link>
        </Box>
        <Box h="40px">
          <Link>Prescription Order</Link>
        </Box>
        <Box h="40px">
          <Link to="/Community">Community</Link>
        </Box>
      </VStack>
    </Box>
  </Stack>
  <Grid templateColumns="repeat(2, 1fr)" gap={2} marginTop={2}>
    <GridItem>
    <Card maxW='sm'>
  <CardHeader>
    <Flex spacing='4'>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar name='XYZ' src='https://bit.ly/sage-adebayo' />

        <Box>
          <Heading size='sm'>Segun Adebayo</Heading>
          <Text>HealthCare Expert</Text>
        </Box>
      </Flex>
      <IconButton
        variant='ghost'
        colorScheme='gray'
        aria-label='See menu'
        // icon={<BsThreeDotsVertical />}
      />
    </Flex>
  </CardHeader>
  <CardBody>
    <Text>
    Diabetes is a condition where the body struggles to regulate blood sugar levels. Type 2 diabetes, in particular, is often associated with lifestyle factors. Here are some steps you can take to prevent or delay its onset:
    </Text>
    <Text>...</Text>
  </CardBody>
  <Image
    objectFit='cover'
    src='data:image/jpeg;base64,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'
    alt='Chakra UI'
  />

  <CardFooter
    justify='space-between'
    flexWrap='wrap'
    sx={{
      '& > button': {
        minW: '136px',
      },
    }}
  >
    <Button flex='1' variant='ghost'><FontAwesomeIcon icon={faBookmark} style={{ marginRight: '0.5rem' }}/>
      BookMark
    </Button>
    <Button flex='1' variant='ghost'><FontAwesomeIcon icon={faBookOpen} style={{ marginRight: '0.5rem' }}/>
      ReadMore
    </Button>
  </CardFooter>
</Card>
    </GridItem>
    <GridItem>
    <Card maxW='sm'>
  <CardHeader>
    <Flex spacing='4'>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar name='XYZ' src='https://bit.ly/sage-adebayo' />

        <Box>
          <Heading size='sm'>Segun Adebayo</Heading>
          <Text>HealthCare Expert</Text>
        </Box>
      </Flex>
      <IconButton
        variant='ghost'
        colorScheme='gray'
        aria-label='See menu'
        // icon={<BsThreeDotsVertical />}
      />
    </Flex>
  </CardHeader>
  <CardBody>
    <Text fontWeight="bold">
    Asthma: Survey says 42% of primary care physicians are unfamiliar with biologic treatments
    </Text>
    <Text>A recent survey has shown a lack of familiarity among some primary care physicians regarding ...</Text>
  </CardBody>
  <Image
    objectFit='cover'
    src='https://th.bing.com/th/id/OIP.ksiTia4hTA2i1d8sCbVPjAHaEK?w=297&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    alt='Chakra UI'
  />

  <CardFooter
    justify='space-between'
    flexWrap='wrap'
    sx={{
      '& > button': {
        minW: '136px',
      },
    }}
  >
    <Button flex='1' variant='ghost'> <FontAwesomeIcon icon={faBookmark} style={{ marginRight: '0.5rem' }}/>
      BookMark
    </Button>
    <Button flex='1' variant='ghost'><FontAwesomeIcon icon={faBookOpen} style={{ marginRight: '0.5rem' }}/>
      ReadMore
    </Button>
  </CardFooter>
</Card>
    </GridItem>
  </Grid>
  <Box minH={726} marginLeft={2} flex="1" bg={"white"}>
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

export default Community;