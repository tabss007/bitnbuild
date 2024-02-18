import React, { useState } from "react";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Alert,
  AlertIcon,
  AlertTitle,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  VStack,
  useColorMode,
  CircularProgress,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const { colorMode } = useColorMode();

  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [contact, setContact] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    fetch("http://localhost:5000/signup",{
      "method":"POST",
      "headers":{
        "Accept":"*/*",
        "Content-Type":"application/json"
      },
      "body":JSON.stringify({email,password,fname,lname,contact})
    }).then(res=> res.json()).then(data => {if(data.status === 'ok'){navigate("/user");}}).catch(err => {console.log(err)})
    // try {
    //   await userLogin({ email, password });
    //   setSuccess("Signed in successfully!");
    //   setIsLoading(false);
    //   setIsSignedIn(true);
    // } catch (error) {
    //   setError("Invalid username or password!");
    //   setIsLoading(false);
    //   setEmail("");
    //   setPassword("");
    // }
  };

  const navigate = useNavigate();
  const userLogin = async ({password }) => {
    return new Promise((reject) => {
      if ( password === confirmPassword) {
        navigate("/");
      } else {
        reject();
      }
      
    });
  };

  return (
    <Box>
      <Flex justify="center" align="center" height="80vh">
        <Center>
          <Stack spacing="4">
            <VStack spacing="6">
              <Heading fontWeight="500" fontSize="30px" letterSpacing="-0.5px">
                Signup
              </Heading>
            </VStack>

            <Card
              bg="#f6f8fa"
              variant="outline"
              borderColor="#d8dee4"
              w="308px"
              size="lg"
              borderRadius={8}
              boxShadow="lg"
              marginTop={20}
            >
              <CardBody>
                <form onSubmit={handleSubmit}>
                  {error && !isSignedIn && (
                    <Alert status="error" variant="solid">
                      <AlertIcon />
                      <AlertTitle>{error}</AlertTitle>
                    </Alert>
                  )}
                  {isSignedIn && (
                    <Alert status="success" variant="solid">
                      <AlertIcon />
                      <AlertTitle>{success}</AlertTitle>
                    </Alert>
                  )}

                  <Stack spacing="4">
                    <FormControl isRequired>
                      <FormLabel
                        size="sm"
                        color={colorMode === "dark" ? "black" : "black"}
                      >
                        First Name
                      </FormLabel>
                      <Input
                        type="text"
                        bg="white"
                        borderColor="#d8dee4"
                        size="sm"
                        borderRadius="6px"
                        color={colorMode === "dark" ? "black" : "black"}
                        value={fname}
                        onChange={(e) => {
                          setFname(e.target.value);
                        }}
                      />
                    </FormControl>
                      <FormControl isRequired>
                      <FormLabel
                        size="sm"
                        color={colorMode === "dark" ? "black" : "black"}
                      >
                        Last Name
                      </FormLabel>
                      <Input
                        type="text"
                        bg="white"
                        borderColor="#d8dee4"
                        size="sm"
                        borderRadius="6px"
                        color={colorMode === "dark" ? "black" : "black"}
                        value={lname}
                        onChange={(e) => {
                          setLname(e.target.value);
                        }}
                      />
                    </FormControl>
                      <FormControl isRequired>
                      <FormLabel
                        size="sm"
                        color={colorMode === "dark" ? "black" : "black"}
                      >
                        Email Address
                      </FormLabel>
                      <Input
                        type="text"
                        bg="white"
                        borderColor="#d8dee4"
                        size="sm"
                        borderRadius="6px"
                        color={colorMode === "dark" ? "black" : "black"}
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel
                          size="sm"
                          color={colorMode === "dark" ? "black" : "black"}
                        >
                          Password
                        </FormLabel>
                      <Input
                        type="password"
                        bg="white"
                        borderColor="#d8dee4"
                        size="sm"
                        borderRadius="6px"
                        color={colorMode === "dark" ? "black" : "black"}
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel
                          size="sm"
                          color={colorMode === "dark" ? "black" : "black"}
                        >
                          Confirm Password
                        </FormLabel>
                      <Input
                        type="password"
                        bg="white"
                        borderColor="#d8dee4"
                        size="sm"
                        borderRadius="6px"
                        color={colorMode === "dark" ? "black" : "black"}
                        value={confirmPassword}
                        onChange={(e) => {
                            setConfirmPassword(e.target.value);
                        }}
                      />
                    </FormControl>
            
                      <FormControl isRequired>
                      <FormLabel
                        size="sm"
                        color={colorMode === "dark" ? "black" : "black"}
                      >
                        Contact
                      </FormLabel>
                      <Input
                        type="number"
                        bg="white"
                        borderColor="#d8dee4"
                        size="sm"
                        borderRadius="6px"
                        color={colorMode === "dark" ? "black" : "black"}
                        value={contact}
                        onChange={(e) => {
                          setContact(e.target.value);
                        }}
                      />
                    </FormControl>

                    <Button
                      type="submit"
                      bg="#2da44e"
                      color="white"
                      size="sm"
                      _hover={{ bg: "#2c974b" }}
                      _active={{ bg: "#298e46" }}
                    >
                      {isLoading ? (
                        <CircularProgress
                          isIndeterminate
                          size="24px"
                          color="teal"
                        />
                      ) : (
                        "Signup"
                      )}
                    </Button>
                  </Stack>
                </form>
              </CardBody>
            </Card>
          </Stack>
        </Center>
      </Flex>
    </Box>
  );
}

export default Signup;