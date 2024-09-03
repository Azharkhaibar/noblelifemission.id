"use client"
import React from 'react'
import { 
  Box,
  Heading,
  Text,
  Flex,
  Image,
  Button,
  IconButton
} from '@chakra-ui/react'
import Navbar from '../ui/navbar'
import { MemberList } from '../data/memberlist'
import PictSlider from '../components/pictslider'

const About: React.FC = () => {
  return (
    <Box w="100%" h="300vh" bg="black">
      <Navbar />
      <Box w="100%" h="100%" bg="black">
        <Box textAlign="center" w="70%" m="auto" pt="7%" color="white">
          <Heading fontSize="80px" fontFamily="Inter, sans-serif"
            zIndex="1"
            bgGradient="linear(to-r, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7))"
            bgClip="text" 
          >Building community can be tough, but you don’t need to do it alone</Heading>
          <Text fontSize="px" pt="4%" w="70%" m="auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet magna at orci tristique sagittis. Morbi justo sem, iaculis ac efficitur gravida, mollis a massa. Nunc consectetur venenatis augue, id sagittis massa convallis in. Phasellus tempor ipsum fringilla faucibus</Text>
        </Box>
        <PictSlider />
        <Box w="100%" h="70vh" mt="9%" pos="relative">
          <Box display="flex" px="8%" alignItems="center">
            <Box w="50%" h="100%" color="white">
              <Heading fontSize="48px" fontFamily="Inter, sans-serif"
                zIndex="1"
                bgGradient="linear(to-r, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7))"
                bgClip="text" 
              >Noble Life Mission adalah sebuah komunitas yang lahir dari ikatan persahabatan</Heading>
              <Text pt="6%" opacity="0.8" w="650px
              ">Di sini, setiap individu dihargai dan diangkat, bukan hanya sebagai teman, tetapi sebagai bagian dari keluarga besar yang saling menginspirasi dan memperkuat. Noble Life Mission berkomitmen untuk membangun sebuah ekosistem di mana nilai-nilai kebajikan, empati, dan kolaborasi menjadi fondasi dari setiap interaksi. </Text>
            </Box>
            <Box w="50%" h="100%" m="auto">
              <Image src='/images/banner.jpg' alt='ganteng-lanang' w="800px" h="auto" m="auto" />
            </Box>
          </Box>
          <Heading
            fontFamily="Inter, sans-serif"
            pos="absolute"
            color="white"
            bottom="-5%"
            fontSize="130px"
            right="10%"
          >Vision</Heading>
        </Box>

        <Box bg="white" w="100%" h="100vh" borderRadius="80px 0px 0px 0px">
          <Box>

          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default About
