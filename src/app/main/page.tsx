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
import StyledBox, { Pattern } from '../components/styledbox';
import '../design/webkit-scroll.scss'
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

        {/* ABOUT */}
        <Box w="100%" maxH="80vh" pos="relative" overflow="hidden">
          <StyledBox />
          <Pattern />
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
                
                fontSize="60px" // Increase the font size for better visibility
                fontWeight="bold" // Make the font weight bold for a more pronounced look
                zIndex="1"
                bgGradient="linear(to-r, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7))" // Enhanced gradient for a more visible effect
                bgClip="text" // Clip the gradient to the text // Add 'visible' class if needed
                
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

        {/* MEMBER */}
        <Box>
          <Box
            textAlign="center"
            pt="5%"
            bg="black" // Black background
            color="gray.100"
            boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" // Subtle shadow for depth
            borderRadius="md" // Rounded corners
          >
            <Text fontSize="18px" mb="2" fontWeight="medium">
              Know our team
            </Text>
            <Heading
              fontSize="50px"
              fontWeight="bold"
              letterSpacing="tight"
              bgGradient="linear(to-r, gray.200, gray.400)"
              bgClip="text"
            >
              MEMBER
            </Heading>
          </Box>
          {/* SLIDER ABOUT */}
          <Box w="100%" h="80vh">
            <Box display="flex" w="100%" h="100%" px="20">
              <Box w="30%" h="100%">
                <Heading color="white">Temui para ahli kami yang penuh dedikasi. Dengan keahlian dan inovasi, mereka siap membantu Anda mencapai kesuksesan.</Heading>
              </Box>
              <Box w="70%" h="100%"></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Main