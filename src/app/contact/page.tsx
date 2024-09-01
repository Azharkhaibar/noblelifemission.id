"use client"
import React from 'react'
import { 
  Box,
  Heading,
  Text,
  Container,
  Icon,
  Select,
  Input,
  Textarea,
  Button,
  Checkbox,
  Flex,
  Link,
  FormLabel
} from '@chakra-ui/react'
import Navbar from '../ui/navbar'
import { FaHome, FaChevronRight } from 'react-icons/fa'
const Contact: React.FC = () => {
  return (
    <Box w="100%" h="400vh" bg="black">
      <Navbar />
      <Box>
        <Box
          position="relative"
          textAlign="center"
          color="white"
          bg="linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.7)
        ), radial-gradient(
            black 55%,
            rgba(0, 0, 0, 0)
        ), linear-gradient(
            135deg,
            red,
            orange,
            yellow,
            lime,
            cyan,
            blue,
            indigo,
            deeppink
        )"
          bgSize="100% 0.5%, contain"
          bgBlendMode="multiply"
          w="100%"
          h="60vh"
        >
          <Box
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            bg="rgba(0, 0, 0, 0.5)" 
            zIndex="1"
          />
          <Box
            position="relative"
            zIndex="2"
            pt="11%"
          >
            <Heading
              fontSize="75px"
              fontFamily="Inter, sans-serif"
              letterSpacing="wider"
              bgClip="text"
              bgGradient="linear(to-r, #ffffff, #dcdcdc)"
              boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
              textShadow="1px 1px 3px rgba(0, 0, 0, 0.2)"
            >
              Get In Touch
            </Heading>
            <Text fontSize="20px" pt="1%" opacity="0.5">
              Connect with the NLM team. We're here to support your ideas with creativity and innovation.
            </Text>
            <Box
              display="flex"
              alignItems="center"
              color="white"
              fontSize="20px"
              fontWeight="500"
              mt="2%"
              mx="auto"
              justifyContent="center"
              w="100%"
              textAlign="center"
            >
              <Icon as={FaHome} mr="2" />
              {['Home', 'Contact'].map((breadcrumb, index) => (
                <React.Fragment key={index}>
                  {index !== 0 && (
                    <Icon as={FaChevronRight} mx="2" color="gray.400" />
                  )}
                  <Text
                    fontWeight="400"
                  >
                    {breadcrumb}
                  </Text>
                </React.Fragment>
              ))}
            </Box>
          </Box>
        </Box>
        (
        <Box w="100%" h="150vh" display="flex" justifyContent="center" mt="5%">
          <Box w="75%" borderWidth={0} borderRadius="md" boxShadow="sm">

            <Flex mb={4} justify="space-between">
              <Box w="30%">
                <Input
                  id="firstname"
                  placeholder="FIRST NAME *"
                  mt={2}
                  width="100%"
                  pb="5%"
                  border="none"
                  borderBottom="2px solid white"
                  borderRadius="0"
                  bg="transparent"
                  color="white"
                  textAlign="left"
                  paddingLeft="0"
                  _placeholder={{
                    color: "white",
                    textAlign: "left",
                    fontSize: "lg",
                    fontFamily: "Inter, sans-serif" // Add font family here
                  }}
                  _focus={{ boxShadow: "none", borderBottom: "2px solid #3182ce" }}
                />
              </Box>
              <Box w="30%">
                <Input
                  id="lastname"
                  placeholder="LAST NAME *"
                  mt={2}
                  width="100%"
                  pb="5%"
                  border="none"
                  borderBottom="2px solid white"
                  borderRadius="0"
                  bg="transparent"
                  color="white"
                  textAlign="left"
                  paddingLeft="0"
                  _placeholder={{
                    color: "white",
                    textAlign: "left",
                    fontSize: "lg",
                    fontFamily: "Inter, sans-serif" // Add font family here
                  }}
                  _focus={{ boxShadow: "none", borderBottom: "2px solid #3182ce" }}
                />
              </Box>
              <Box w="30%">
                <Input
                  id="email"
                  type="email"
                  placeholder="EMAIL *"
                  mt={2}
                  width="100%"
                  border="none"
                  pb="5%"
                  borderBottom="2px solid white"
                  borderRadius="0"
                  bg="transparent"
                  color="white"
                  textAlign="left"
                  paddingLeft="0"
                  _placeholder={{
                    color: "white",
                    textAlign: "left",
                    fontSize: "lg",
                    fontFamily: "Inter, sans-serif" // Add font family here
                  }}
                  _focus={{ boxShadow: "none", borderBottom: "2px solid #3182ce" }}
                />
              </Box>
            </Flex>

            <Flex mb={4} justify="space-between">
              <Box w="30%">
                <Input
                  id="jobTitle"
                  placeholder="SUBJECT"
                  mt="15%"
                  width="100%"
                  border="none"
                  pb="5%"
                  borderBottom="2px solid white"
                  borderRadius="0"
                  bg="transparent"
                  color="white"
                  textAlign="left"
                  paddingLeft="0"
                  _placeholder={{
                    color: "white",
                    textAlign: "left",
                    fontSize: "lg",
                    fontFamily: "Inter, sans-serif" // Add font family here
                  }}
                  _focus={{ boxShadow: "none", borderBottom: "2px solid #3182ce" }}
                />
              </Box>
              <Box w="30%">
                <Input
                  id="company"
                  placeholder="COMMUNITY"
                  mt="15%"
                  width="100%"
                  border="none"
                  borderBottom="2px solid white"
                  borderRadius="0"
                  pb="5%"
                  bg="transparent"
                  color="white"
                  textAlign="left"
                  paddingLeft="0"
                  _placeholder={{
                    color: "white",
                    textAlign: "left",
                    fontSize: "lg",
                    fontFamily: "Inter, sans-serif" // Add font family here
                  }}
                  _focus={{ boxShadow: "none", borderBottom: "2px solid #3182ce" }}
                />
              </Box>
              <Box w="30%">
                <Input
                  id="website"
                  placeholder="PURPOSE"
                  mt="15%"
                  width="100%"
                  border="none"
                  pb="5%"
                  borderBottom="2px solid white"
                  borderRadius="0"
                  bg="transparent"
                  color="white"
                  textAlign="left"
                  paddingLeft="0"
                  _placeholder={{
                    color: "white",
                    textAlign: "left",
                    fontSize: "lg",
                    fontFamily: "Inter, sans-serif" // Add font family here
                  }}
                  _focus={{ boxShadow: "none", borderBottom: "2px solid #3182ce" }}
                />
              </Box>
            </Flex>

            <Box width="100%" mt="6%">
              <FormLabel htmlFor="message" color="white">
                LEAVE A MESSAGE *
              </FormLabel>
              <Textarea
                id="message"
                h="150px"
                border="2px solid white"
                borderRadius="0"
                bg="transparent"
                color="white"
                _placeholder={{
                  color: "white",
                  fontSize: "lg",
                  fontFamily: "Inter, sans-serif" // Add font family here
                }}
                _focus={{ boxShadow: "none", borderBottom: "2px solid #3182ce" }}
              />
            </Box>

            <Flex mt={4} alignItems="center">
              <Button bg="white" w="200px" mr={4} borderRadius="md">
                SEND MESSAGE
              </Button>
              <Checkbox id="agreement" mr={2} />
              <Text fontSize="sm" color="white">
                I agree to be contacted by Hytech as outlined in the{" "}
                <Link href="#" color="orange" textDecoration="underline">
                  Privacy Policy
                </Link>{" "}
                &{" "}
                <Link href="#" color="orange" textDecoration="underline">
                  Terms
                </Link>
              </Text>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Contact
