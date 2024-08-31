"use client"
import React, { useState, useEffect, useRef } from 'react'
import {
  Box,
  Text,
  Heading,
  Container,
  Image,
  Stack,
  Button
} from '@chakra-ui/react'
import '../design/shinetext.scss'
import SocialMediaIcons from '../icons/verticalicons';
import { PhoneIcon } from '@chakra-ui/icons';
import '../design/btn.scss'
import StyledBox from '../components/styledbox';
import useOnScreen from '../components/scrolldetection';
import AnimatedButton from '../components/btnmain';
import { Navbar } from '../ui/navbar'
const Main: React.FC = () => {
  const [isShining, setIsShining] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const isVisible = useOnScreen(headingRef);
  useEffect(() => {
    setIsShining(true);
  }, []);
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
                Get in Touch
              </Button>
            </Box>
          </Stack>
        </Box>
        <Box w="100%" maxH="80vh" pos="relative" overflow="hidden">
          <StyledBox /> {/* Positioned absolutely behind the content */}
          <Box
            w="100%"
            maxH="80vh"
            display="flex"
            px="20"
            position="relative"
            zIndex="1"
          >
            <Box w="70%" h="100%" display="flex" flexDirection="column">
              <Heading
                ref={headingRef}
                pt="5%"
                className={`shiny-text ${isVisible ? 'visible' : ''}`}
                color="white"
                fontSize="55px"
                zIndex="1"
              >
                Meet the Team Driving <br /> Our Vision and Mission Forward
              </Heading>
              <Image
                src='/images/about.jpg'
                pt="3%"
                w="95%"
                h="600px"
                objectFit="cover"
                borderRadius="30px"
                zIndex="1"
              />
            </Box>
            <Box
              w="30%"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              
              p="5%"
            >
              <Text
                pt="70%"
                color="white"
                w="350px"
                fontSize="18px"
                opacity="0.8"
                zIndex="1"
                mr="10"
              >
                We believe progress equals happiness. And no matter where you’re looking to excel, we’re here to help you forge your pathway to power. Meet the man who’s spent over 45 years creating breakthroughs and transforming lives.
              </Text>
              <button className="learn-more">
                <div className="circle">
                  <div className="icon arrow"></div>
                </div>
                <div className="button-text">Learn more</div>
              </button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Main