"use client"
import React, { useState } from 'react'
import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  Button,
  IconButton,
  Tab,
  TabPanel,
  Tabs
  
} from '@chakra-ui/react'
import Navbar from '../ui/navbar'
import { MemberList } from '../data/memberlist'
import PictSlider from '../components/pictslider'
import { FaLightbulb, FaLeaf, FaCheckCircle, FaRocket, FaUserTie, FaShieldAlt, FaHandshake, FaEye, FaRedo } from 'react-icons/fa';

const About: React.FC = () => {
  const [ activeTab, setActiveTab ] = useState('Vision')
  return (
    <Box w="100%" bg="black">
      <Navbar />
      <Box w="100%" h="100%" bg="black" pos="relative">
        <Box
          w="500px"
          h="500px"
          left="35%"
          top="17%"
          filter="blur(300px)"
          bg="#906b12"
          pos="absolute"
        ></Box>
        <Box textAlign="center" w="70%" m="auto" pt="7%" color="white">
          <Heading fontSize="80px" fontFamily="Inter, sans-serif"
            zIndex="99"
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
            right="3%"
          >Vision & Mission</Heading>
        </Box>

        <Box bg="white" w="100%" h="105vh" borderRadius="80px 0px 0px 0px" overflow="hidden">
          <Box w="100%" h="auto" m="auto"

          >
            <Box color="white" display="flex"
              justifyContent="center" gap="20px"
              mt='12%'
             
            >
              <Box display="flex" bg="beige" w="20%"
                borderRadius="20px"
                bgColor="black"
              >
                <Button
                  p="28px"
                  px="6%"
                  w="50%"
                  boxShadow="md"
                  fontSize="20px"
                  bg={activeTab === 'Vision' ? 'orange' : 'black'}
                  color="white"
                  _hover="none"
                  textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
                  onClick={() => setActiveTab('Vision')}
                >
                  Vision
                </Button>
                <Button
                  p="28px"
                  px="6%"
                  w="50%"
                  boxShadow="md"
                  fontSize="20px"
                  bg={activeTab === 'Mission' ? 'orange' : 'black'}
                  color="white"
                  textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
                  _hover="none"
                  onClick={() => setActiveTab('Mission')}
                >
                  Mission
                </Button>
              </Box>
            </Box>
            <Heading
              fontFamily="Inter, sans-serif"
              textAlign="center"
              w="70%"
              m="auto"
              pt="4%"
            >
              {activeTab === 'Vision' && (
                <>
                  Menjadi platform kreatif terdepan yang menghubungkan dan memberdayakan para kreator untuk menghasilkan karya-karya unggulan yang dikenal luas, berdampak positif pada masyarakat, serta mendorong kolaborasi lintas sektor guna menciptakan perubahan yang berkelanjutan dan inovatif.
                  <Box display="flex" flexWrap="wrap"
                    justifyContent="center"
                    mt="6%"
                    bg="#eaeaea"
                    borderRadius="10px"
                    h="auto"
                    w="100%"
                    p="15px"
                    gap="10px"
                    mb="0"
                  >
                    {[
                      { label: "Creativity", icon: FaLightbulb },
                      { label: "Sustainability", icon: FaLeaf },
                      { label: "Quality", icon: FaCheckCircle },
                      { label: "Innovation", icon: FaRocket },
                      { label: "Client-Centric", icon: FaUserTie },
                      { label: "Integrity", icon: FaShieldAlt },
                      { label: "Collaboration", icon: FaHandshake },
                      { label: "Attention to Detail", icon: FaEye },
                      { label: "Flexibility", icon: FaRedo }
                    ].map((value, index) => (
                      <Box key={index} mb="0" w="370px">
                        <Box
                          bg="black"
                          borderRadius="8px"
                          color="white"
                          boxShadow="md"
                          p="4%"
                          display="flex"
                          alignItems="center"
                        >
                          <Box mr="12px" fontSize="24px" color="orange">
                            <value.icon /> {/* Menampilkan ikon */}
                          </Box>
                          <Text fontSize="18px" textAlign="left">{value.label}</Text>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </>
              )}
            </Heading>

            <Heading
              fontFamily="Inter, sans-serif"
              textAlign="left"
              w="70%"
              m="auto"
              pt="4%"
            >
              {activeTab === 'Mission' && (
                <>
                  <Box textAlign="center" mb="0">
                    <Box mb="4" display="flex" alignItems="center" justifyContent="center">
                      <Box
                        bg="orange"
                        color="white"
                        fontSize="24px"
                        fontWeight="bold"
                        w="70px"
                        h="40px"
                        borderRadius="50%"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        mr="25px"
                      >
                        1
                      </Box>
                      <Box textAlign="left">
                        <strong>Mengangkat Karya</strong>
                        <br />
                        Mengembangkan dan memperkenalkan karya-karya inovatif yang mencerminkan nilai-nilai budaya dan kreativitas.
                      </Box>
                    </Box>

                    <Box mb="4" display="flex" alignItems="center" justifyContent="center">
                      <Box
                        bg="orange"
                        color="white"
                        fontSize="24px"
                        fontWeight="bold"
                        w="70px"
                        h="40px"
                        borderRadius="50%"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        mr="25px"
                      >
                        2
                      </Box>
                      <Box textAlign="left">
                        <strong>Memberi Manfaat</strong>
                        <br />
                        Menyediakan solusi dan kontribusi nyata yang berdampak positif pada masyarakat luas melalui inisiatif dan proyek sosial.
                      </Box>
                    </Box>

                    <Box mb="4" display="flex" alignItems="center" justifyContent="center">
                      <Box
                        bg="orange"
                        color="white"
                        fontSize="24px"
                        fontWeight="bold"
                        w="90px"
                        h="40px"
                        borderRadius="50%"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        mr="25px"
                      >
                        3
                      </Box>
                      <Box textAlign="left">
                        <strong>Membangun Koneksi</strong>
                        <br />
                        Mendorong terciptanya jaringan kolaboratif yang kuat antara kreator, profesional, dan masyarakat untuk menghasilkan karya-karya yang relevan dan bermanfaat.
                      </Box>
                    </Box>
                  </Box>

                </>
              )}
            </Heading>
          </Box>
        </Box>
      </Box>

      <Box
        w="100%"
        h="70vh"
        bg="grey"
      >
      </Box>

      <Box w="100%"
        h="100vh"
        bg="black"
        pos="relative"
      >
        <Heading fontSize="100px" color="orange" pos="absolute"
          bottom="0"
          mx="2%"
          my="-1.5%"
        >OUR FOUNDER
        </Heading>
      </Box>

      <Box w="100%" h="100vh"
        bg="orange"
      >

      </Box>
    </Box>
  )
}

export default About
