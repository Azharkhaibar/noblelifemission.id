"use client"
import React from 'react'
import { 
    Box,
    Text,
    Heading,
    Container,
    Image,
    Stack,
    Button
} from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons';
import { Navbar } from '../ui/navbar'
const Main = () => {
  return (
    <Box>
        <Navbar />
      <Box w="100%" h="300vh" bg="#000000">
        <Box
          w="100%"
          h="80vh" 
          bgGradient="linear(to-r, teal.400, pink.400)" 
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          p={4}
        >
          <Stack spacing={6} maxW="lg">
            <Heading
              as="h1"
              fontSize={{ base: '3xl', md: '5xl', lg: '70px' }} 
              color="white"
              fontWeight="bold"
              letterSpacing="wide"
            >
              We Are <span style={{color: 'orange'}}>Jomok</span> Community
            </Heading>
            <Text
              fontSize={{ base: 'md', md: 'lg', lg: 'xl' }} 
              color="whiteAlpha.800"
            >
              We Dont Do Basic Here, Join if Youre Brave Enough to Be Different!.
            </Text>
            <Box gap="4" display="flex" justifyContent="center">
              <Button
                size="lg"
                colorScheme="teal"
                bg="white"
                color="teal.500"
                _hover={{ bg: 'teal.100', color: 'teal.700' }}
                borderRadius="full"
                px={8}
              >
                Portfolio
              </Button>
              <Button
                size="lg"
                colorScheme="teal"
                bg="transparent"
                border="2px solid white"
                color="white"
                _hover={{ bg: 'teal.100', color: 'teal.700' }}
                borderRadius="full"
                px={8}
                leftIcon={<PhoneIcon color="white" />}
              >
                Contact Us
              </Button>
            </Box>
          </Stack>
        </Box>
        </Box>
    </Box>
  )
}

export default Main