"use client"
import React, { useState, useEffect, useRef } from 'react'
import {
  Box,
  Text,
  Heading,
  Container,
  Image,
  Stack,
  IconButton,
  Flex,
  Button,
  Input
} from '@chakra-ui/react'
import { motion, useAnimation, useInView } from 'framer-motion'
import '../design/shinetext.scss'
import SocialMediaIcons from '../icons/verticalicons';
import { PhoneIcon } from '@chakra-ui/icons';
import '../design/btn.scss'
import axios, { AxiosError } from 'axios'
import StyledBox, { Pattern } from '../components/styledbox';
import '../design/webkit-scroll.scss'
import { MemberShow } from '../data/member';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { blogDummy } from '../data/blog';
import NextLink from 'next/link';
import Slider from 'react-slick';
import useOnScreen from '../components/scrolldetection';
import AnimatedButton, { AnimatedButtonStyled, AnimatedButtonStyled2 } from '../components/btnmain';
import Navbar from '../ui/navbar';
import IncrementText from '../components/incrementtext'
const Main: React.FC = () => {
  const [isShining, setIsShining] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const isVisible = useOnScreen(headingRef);
  const [ firstnameContact, setFirstnameContact ] = useState('')
  const [ emailContact, setEmailContact ] = useState('')
  const [ numberMotion, setNumberMotion ] = useState(0);
  const controlsAnimation = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  })
  const handleSubmitHomeContact = async (e: React.FormEvent) => {
    try {
      console.log('sending data:', {
        firstnameContact,
        emailContact
      });

      const PostResponse = await axios.post('http://127.0.0.1:5001/create_home_contact', {
        firstname: firstnameContact,
        emailContact
      });

      console.log('data succesfully sent:', PostResponse.data);
      alert('Message sent successfully');
      setFirstnameContact('')
      setEmailContact("")
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        const data = error.response?.data
        console.error('Axios error Occured', {
          status,
          data,
          message: error.message
        });
        alert(`Failed to send message, Status " ${status}. please try again`)
      } else {
        console.error('Unexpected error occured :', error);
        alert('An unexpected error occurred. Please try again.');
      }
    }
  }
  useEffect(() => {
    setIsShining(true);
  }, []);
  
  const MemberSliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          backgroundColor: "white",
          borderRadius: "50%"
        }}
      ></div>
    ),
  };

  return (
    <Box bg="black" 
      className="content"
    >
      <Navbar />
      <Box w="98%" h="700vh" bg="#000000" m="auto">
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
          <Stack spacing={6} maxW="900px" mb="5%">
            <Heading
              as="h1"
              textShadow="lg"
              fontSize={{ base: '3xl', md: '5xl', lg: '100px' }}
              color="white"
              fontWeight="bold"
              letterSpacing="wide"
              fontFamily="Inter, sans-serif"
            >
              We Are <Text as="span" bgGradient="linear(to-r, orange.300, yellow.400)" bgClip="text">NobleLifeMission</Text>
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
                
                fontSize="60px" 
                fontWeight="bold" 
                zIndex="1"
                bgGradient="linear(to-r, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7))" 
                bgClip="text" 
                fontFamily="Inter, sans-serif"
              >
                Meet the Team Driving <br /> Our Vision and Mission Forward
              </Heading>
              <Image
                src='/images/about.jpg'
                pt="3%"
                w="95%"
                alt='gambar'
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
        <Box pos="relative">
          <Box
            w="600px"
            h="200px"  
            right="17px"
            top="40px"
            transform="rotate(-30deg)"
            filter="blur(70px)"
            opacity="0.2"
            bgGradient="conic-gradient(from 0deg, orange, orangered, orange)"
            pos="absolute"
            borderRadius="50%" 
            fontFamily="Inter, sans-serif"
          >
          </Box>


          <Box
            textAlign="center"
            pt="5%"
            bg="black"
            color="gray.100"
            boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" 
            borderRadius="md" 
            mb="0"
          >
            <Text fontSize="18px" mb="2" fontWeight="medium" opacity="0.6">
              Know our team
            </Text>
            <Box position="relative" display="inline-block">
              <Heading
                fontSize="50px"
                fontWeight="bold"
                letterSpacing="tight"
                bgGradient="linear(to-r, gray.200, gray.400)"
                bgClip="text"
                mb="6"
                position="relative"
                zIndex="1"
              >
                Member
              </Heading>
              <Box
                position="absolute"
                bottom="-10px"
                left="50%"
                transform="translateX(-50%)"
                width="120%"
                height="20px"
                backgroundImage="url('/path-to-your-brush-image.png')"
                backgroundRepeat="no-repeat"
                backgroundSize="contain"
                zIndex="0"
              />
            </Box>
          </Box>
          {/* SLIDER ABOUT */}
          <Box
            w="100%"
            h="69vh"
            px="20"
          >
            <Box
              w="200px"
              h="200px"
              bottom="58%"
              opacity="0.6"
              filter="blur(50px)"
              bgGradient="conic-gradient(from 0deg, white, orangered, orange)"
              pos="absolute"
              borderTopRightRadius="100%"
              borderBottomLeftRadius="0"
              borderTopLeftRadius="0"
              borderBottomRightRadius="0"
            >
            </Box>

            <Box h="80vh" overflow="hidden" gap="10" pt="4">
              <Slider {...MemberSliderSettings}>
                {MemberShow.map((member, index) => (
                  <Box
                    key={index}
                    h="50vh"
                  >
                    <Box w="100%"
                      maxH="420px"
                      p="10px"
                      position="relative">
                      <Image
                        src={member.url}
                        w="100%"
                        maxH="420px"
                        alt='gambar'
                        objectFit="cover"
                        borderRadius="10px"
                      />
                      <Box w="20%"
                        h="300px"
                        borderRadius="full"
                        pos="absolute"
                        bg="#ffba08"
                        top="0"
                        opacity="0.2"
                        transform="rotate(45deg)"
                        filter="blur(20px)"
                      >

                      </Box>

                      <Box
                        position="absolute"
                        bottom="-3"
                        color="white"
                        bg="black"
                        p="8px"
                        textAlign="left"
                        w="150px"
                        borderRadius="0px 20px 0px 5px"
                      >
                        <Text fontSize="14" opacity="0.5">{member.role}</Text>
                        <Text fontWeight="bold" fontSize="lg">
                          {member.nama}
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Slider>
                <Box textAlign="center">
                  <AnimatedButtonStyled />
                </Box>
            </Box>
          </Box>
        </Box>

        {/* PICT SECTION */}

        <Box w="100%" h="65vh" bgImage="url('/images/banner.jpg')" pos="relative">
        <Box w="100%" h='100%' bg="black" opacity="0.1"></Box>
          <Box
            w="100%"
            h="30%"
            bgGradient="linear(to-b, transparent, black)"
            opacity="1"  
            bottom="0"
            pos="absolute"
          />
          <Box pos="absolute" m="auto" textAlign="center" bottom="50%" left="20%">
            <Heading fontSize="65px" color="orange">We dont do basic here</Heading>
            <Text fontSize="20px" color="white" opacity="0.7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie lectus ac vulputate porttitor. Nulla facilisi.</Text>
          </Box>
        </Box>

        {/* MEET TEAM */}

        <Box w="100%" h="110vh">
          <Box m="auto" textAlign="center" color="white">
            <Heading fontFamily="Inter, sans-serif" fontSize="50px">Meet the team driving Our Vision and <br />Mission forward</Heading>
          </Box>
          <Box w="100%" h="80%" display="flex" m="auto" justifyContent="center" pt="4%" pos="relative">
            <Image
              src='/images/bg/pngwing.com (7).png'
              w="100%"
              h="100%"
              pos="absolute"
              top="0"
              zIndex="0"
              opacity="0.1"
              alt='png'
              filter="invert(10%) sepia(100%) saturate(100%) hue-rotate(360deg) brightness(100%)"
            />

            <Box display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="50px"
              textAlign="center"
              h="68%"
              zIndex="999"
              w={"20%"}>
              <Box color="white" zIndex="999">
                <Heading fontSize="60px">
                  <IncrementText endNumber={10} />+
                </Heading>
                <Text fontSize="20px">Reviews</Text>
              </Box>
              <Box color="white" zIndex="999">
                <Heading fontSize="60px">
                  <IncrementText endNumber={5} />+
                </Heading>
                <Text fontSize="20px">Client <br />Colaboration</Text>
              </Box>
              <Box color="white" zIndex="999">
                <Heading fontSize="60px">
                  <IncrementText endNumber={700} />+
                </Heading>
                <Text fontSize="20px">Certification</Text>
              </Box>
            </Box>

            <Box w="55%" h="68%" zIndex="999">
              <Box w="100%" h="100%" bg="gray" borderRadius="lg" overflow="hidden">
                <Box
                  display="flex"
                  flexWrap="wrap"
                  justifyContent="center"
                  h="100%"
                  w="100%"
                >
                  <Image
                    src='/images/member/azharganteg.jpg'
                    objectFit="cover"
                    boxSize="50%"
                    alt='tes' 
                  />
                  <Image
                    src='/images/member/nopal.jpg'
                    objectFit="cover"
                    boxSize="50%"
                    alt='tes'
                  />
                  <Image
                    src='/images/member/alfath.jpg'
                    objectFit="cover"
                    boxSize="50%"
                    alt='tes'
                  />
                  <Image
                    src='/images/member/azharganteg.jpg'
                    objectFit="cover"
                    boxSize="50%"
                    alt='tes'  
                  />
                </Box>
              </Box>
              <Text fontSize="18px" p="3%" pt="3%" opacity="0.7" color="white" zIndex="999" textAlign="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie lectus ac vulputate porttitor. Nulla facilisi. Morbi id orci at turpis luctus tempor. Pellentesque consectetur eget ipsum id euismod. Vivamus vel risus ultricies, cursus tortor quis, semper mauris. </Text>
              <AnimatedButtonStyled2 />
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="50px"
              textAlign="center"
              
              h="68%"
              w={"20%"}
              
            >
              <Box color="white" mb={4} textAlign="center">
                <Heading fontSize="60px">
                  <IncrementText endNumber={10} />+
                </Heading>
                <Text fontSize="20px">Contribution</Text>
              </Box>

              <Box
                display="flex"
                flexWrap="wrap"
                justifyContent="center"
                alignItems="center"
                borderRadius="md"
                
              >
                {["/images/member/azharganteg.jpg", "/images/member/sidqi.jpg", "/images/member/sulthon.jpg"].map((pict, index) => (
                  <Box
                    key={index}
                    w="70px"
                    h="70px"
                    borderRadius="50%"
                    overflow="hidden"
                    border="3px solid white"
                    mx="-15px"
                    
                  >
                    <Image
                      src={pict}
                      alt={`Member ${index}`}
                      objectFit="cover"
                      w="100%"
                      h="100%"
                    />
                  </Box>
                ))}
              </Box>

              <Box color="white">
                <Heading fontSize="60px">
                  <IncrementText endNumber={500} />+
                </Heading>
                <Text fontSize="20px">Creation</Text>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box w="100%" h="50vh" bg="blue">
          <Box></Box>
        </Box>

        <Box w="100%" h="60vh" px="4%" pt="8%">
          <Box w="280px" p="2">
            <Heading p="3" fontSize="45px" fontFamily="Inter, sans-serif" color="white">
              Read This
            </Heading>
          </Box>
          <Box w="100%" h="30vh" display="flex" justifyContent="center" gap="30px" px="4%"
          
          >
            {blogDummy.map((blog, index) => (
              <Box key={index} display="flex">
                <Box w="467px" h="400px">
                  <Image src={blog.url} w="100%" alt="gambar" />
                  <Box>
                    <Text pt="2%" fontSize="18px" color="white">{blog.kategori}</Text>
                    <Heading color="white" fontSize="28px" fontFamily="Inter, sans-serif">{blog.Headline}</Heading>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <Box 
          bgImage="url('/images/about.jpg')" w="100%" h="65vh"
          bgAttachment="fixed"
          bgRepeat="no-repeat"
          bgSize="cover"
          mt="4%"
          >

        </Box>

        {/* FOOTER */}
        <Box w="100%" h="55vh" m="auto" p={4}>
          <Box
            w="100%"
            h="100%"
            display="flex"
            px="10%"
            py="7%"
            gap={8}
            justifyContent="space-between"
          >
            <Box
              display="flex"
              flexDirection="column"
              p={4}
              w="40%"
              h="100%"
              bg="rgba(0, 0, 0, 0.5)"
              borderRadius="md"
              boxShadow="md"
            >
              <Heading as="h2" fontSize="40px" mb={2} color="white" fontFamily="Inter, sans-serif">
                Become an NLM Insider
              </Heading>
              <Text mb={4} color="white" fontSize="23px" opacity="0.5" fontFamily="Inter, sans-serif">
                Subscribe to the newsletter
              </Text>
              <Box as="form" display="flex" flexDirection="column" gap={4}>
                <Input
                  placeholder="Your First Name"
                  type="text"
                  p="6%"
                  color="white"
                  borderRadius="10px"
                  required
                />
                <Input
                  placeholder="Your Email Address"
                  type="email"
                  p="6%"
                  color="white"
                  borderRadius="10px"
                  required
                />
                <Button colorScheme="teal" type="submit" borderRadius="md">
                  Subscribe
                </Button>
              </Box>
            </Box>

            <Box w="30%" h="100%" bg="rgba(0, 0, 0, 0.5)" borderRadius="md" p={4}>
              <Box display="flex" flexDirection="column" pl="40%">
                <Heading as="h2" size="lg" mb={4} color="white" fontFamily="Inter, sans-serif">
                  Menu
                </Heading>
                <Box color="white">
                  <NextLink href="/" passHref>
                    <Text as="a" fontSize="lg" mb={2} display="block">
                      Home
                    </Text>
                  </NextLink>
                  <NextLink href="/portfolio" passHref>
                    <Text as="a" fontSize="lg" mb={2} display="block">
                      Portfolio
                    </Text>
                  </NextLink>
                  <NextLink href="/shop" passHref>
                    <Text as="a" fontSize="lg" mb={2} display="block">
                      Shop
                    </Text>
                  </NextLink>
                  <NextLink href="/donasi" passHref>
                    <Text as="a" fontSize="lg" mb={2} display="block">
                      Donasi
                    </Text>
                  </NextLink>
                  <NextLink href="/contact" passHref>
                    <Text as="a" fontSize="lg" mb={2} display="block">
                      Contact
                    </Text>
                  </NextLink>
                </Box>
              </Box>
            </Box>

            <Box w="30%" h="100%" bg="rgba(0, 0, 0, 0.5)" borderRadius="md" p={4}>
              <Box display="flex" flexDirection="column">
                <Heading as="h2" size="lg" mb={4} color="white" fontFamily="Inter, sans-serif">
                  Additional Menu
                </Heading>
                <Box color="white">
                  <NextLink href="/" passHref>
                    <Text as="a" fontSize="lg" mb={2} display="block">
                      Sertifikasi
                    </Text>
                  </NextLink>
                  <NextLink href="/portfolio" passHref>
                    <Text as="a" fontSize="lg" mb={2} display="block">
                      Visi dan Misi
                    </Text>
                  </NextLink>
                  <NextLink href="/shop" passHref>
                    <Text as="a" fontSize="lg" mb={2} display="block">
                      Blog
                    </Text>
                  </NextLink>
                </Box>
              </Box>
            </Box>
          </Box>
          <Heading textAlign="center" color="white" fontSize="170px" fontFamily="Inter, sans-serif">
            NobleLifeMission
          </Heading>
          <Box
            borderTop="1px solid #3d3019"
            w="1375px"
            m="auto"
            h="20vh"
            p={4}
            textAlign="center"
            color="white"
            bg="rgba(0, 0, 0, 0.7)"
          >
            <Box display="flex" justifyContent="space-between" alignItems="center" gap={2}>
              <Text fontSize="sm">Copyright © 2024 • noblelifemission</Text>
              <Text>Build with: <span style={{color: "orange"}}>Next, typescript, express, flask, react</span></Text>
              <Text fontSize="sm">Made with ❤ by Someone</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Main