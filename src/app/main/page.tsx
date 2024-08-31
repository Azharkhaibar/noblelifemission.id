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
import SocialMediaIcons from '../icons/verticalicons';
import { PhoneIcon } from '@chakra-ui/icons';
import '../design/webkit-scroll.scss'
import AnimatedButton from '../components/btnmain';
import { Navbar } from '../ui/navbar'
const Main = () => {
  return (
    <Box bg="#000000" className='content'>
        <Navbar />
      <Box w="98%" h="300vh" bg="#000000" m="auto">
        <Box
          w="100%"
          h="85vh"
          bgImage="url('/images/banner.jpg')"
          bgRepeat="no-repeat"
          bgSize="cover"
          display="flex"
          mt="8"
          borderRadius="20px 20px 20px 20px"
          pos="relative"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          p={4}
        >
          <Box
            position="absolute"
            bottom="0"
            left="0"
            w="100%"
            h="20%"
            bgGradient="linear(to-t, black, transparent)"
            zIndex="1"
          />
          <Stack spacing={6} maxW="lg" mb="5%">
            <Heading
              as="h1"
              fontSize={{ base: '3xl', md: '5xl', lg: '70px' }}
              color="white"
              fontWeight="bold"
              letterSpacing="wide"
            >
              We Are <Text as="span" bgGradient="linear(to-r, orange.300, yellow.400)" bgClip="text">NLM</Text>
            </Heading>
            <Text
              fontSize={{ base: 'md', md: 'lg', lg: 'xl' }} 
              color="whiteAlpha.800"
            >
              We Dont Do Basic Here, Join if Youre Brave Enough to Be Different!.
            </Text>
            <Box pos="absolute" right="3" top="285px">
              <SocialMediaIcons />
            </Box>
            <Box gap="4" display="flex" justifyContent="center" pt="5">
              <AnimatedButton />
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