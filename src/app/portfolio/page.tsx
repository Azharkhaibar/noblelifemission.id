"use client"
import React, { useState, useEffect, useRef } from 'react'
import {
  Box,
  Image,
  Container,
  Text,
  Heading,
  InputGroup, InputLeftElement, Icon,
  Input,
  Select,
  Button,
  IconButton,
  Flex
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons';
import Navbar from '../ui/navbar';
import NextLink from 'next/link';
import '../design/webkit-scroll.scss'
import CustomSelect from '../components/customselect';
import { featuredPortofolio } from '../data/portfolios';
import { FaHome, FaChevronRight } from 'react-icons/fa';

const Portfolio = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 0.5;
    const animateScroll = () => {
      if (container) {
        scrollAmount += scrollSpeed;
        container.scrollLeft = scrollAmount;
        if (scrollAmount >= container.scrollWidth / 2) {
          scrollAmount = 0;
        }
      }
      requestAnimationFrame(animateScroll);
    };
    animateScroll();
    return () => {
      cancelAnimationFrame(animateScroll);
    };
  }, []);
  return (
    <Box bg="#000000" h="360vh">
      <Navbar />
      <Box
        pos="relative"
        w="100%"
        h="70vh"
        bg="#191a1a"
        bgImage={`linear-gradient(
          -90deg,
          transparent calc(5em - 1px),
          rgba(255, 255, 255, 0.2) calc(5em - 1px),
          rgba(255, 255, 255, 0.2) 5em
        ),
        linear-gradient(
          0deg,
          transparent calc(5em - 1px),
          rgba(255, 255, 255, 0.2) calc(5em - 1px),
          rgba(255, 255, 255, 0.2) 5em
        )`}
        bgSize="5em 5em"
      >
        <Box
          pos="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bgImage="radial-gradient(circle, rgba(0, 0, 0, 0.6) 0%, transparent 0%, black 80%)"
          zIndex="15"
        ></Box>

        <Box
          pos="absolute"
          bottom="0"
          left="0"
          w="100%"
          h="10%" 
          bg="linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)"
          zIndex="5"
        ></Box>
        <Box
          pos="relative"
          zIndex="10"
          h="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Heading
            textAlign="center"
            fontSize="80px"
            color="white"
            mb="0"
            fontFamily="Inter, sans-serif"
          >
            Portofolios
          </Heading>
          {/* Breadcrumb */}
          <Box display="flex" alignItems="center" color="white" fontSize="20px" fontWeight="500" mt="2">
            <Icon as={FaHome} mr="2" />
            {['Home', 'Portfolio'].map((breadcrumb, index) => (
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
          <Box
            ref={scrollContainerRef}
            display="flex"
            overflowX="hidden"
            whiteSpace="nowrap"
            w="100%"
            h="20vh"
            zIndex="0"
            pos="relative"
            pt="2%"
          >
            {["Mahdy", "Hamid", "Maman", "Azhar", "Sulthon", "Sidqi", "Haris", "Afaw", "Qolbun", "Willi", "Alfath", "Nelem", "Alfiansyah"].map((name, index) => (
              <Box
                key={index}
                mx="2"
                display="inline-block"
                alignItems="center"
                justifyContent="center"
              >
                <Box
                  p="2"
                  px="6"
                  bg= 'radial-gradient(circle, rgba(40,40,40,1) 0%, rgba(89,37,7,1) 0%, rgba(22,11,2,1) 100%)'
                  boxShadow="5px"
                  borderRadius="10px"
                >
                  <Text
                    textAlign="center"
                    color="white"
                    fontFamily="Inter, sans-serif"
                    fontWeight="bold"
                  >
                    {name}
                  </Text>
                </Box>
              </Box>
            ))}
            {["Mahdy", "Hamid", "Maman", "Azhar", "Sulthon", "Sidqi", "Haris", "Afaw", "Qolbun", "Willi", "Alfath", "Nelem", "Alfiansyah"].map((name, index) => (
              <Box
                key={`duplicate-${index}`}
                mx="2"
                display="inline-block"
                alignItems="center"
                justifyContent="center"
              >
                <Box
                  p="2"
                  px="6"
                  bg="radial-gradient(circle, rgba(40,40,40,1) 0%, rgba(89,37,7,1) 0%, rgba(22,11,2,1) 100%)"
                  boxShadow="5px"
                  borderRadius="10px"
                >
                  <Text
                    textAlign="center"
                    color="white"
                    fontFamily="Inter, sans-serif"
                    fontWeight="bold"
                  >
                    {name}
                  </Text>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box w="100%" h="200vh">
        <Box px="10%">
          <Heading
            color="white"
            fontFamily="Inter, sans-serif"
            fontSize="35px"
            fontWeight="bold"
            bgGradient="linear(to-r, #ffffff, #dcdcdc)"
            bgClip="text"
            boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
            textShadow="1px 1px 3px rgba(0, 0, 0, 0.2)"
            letterSpacing="wider"
            mb="0"
          >
            Featured Portfolios
          </Heading>
          <Box display="flex" justifyContent="center" gap="3%" pt="3%" h="60vh">
            {featuredPortofolio.map((port, index) => (
              <Box key={index}>
                <Box w="416px" height="300px" bg="white">
                  <Image src={port.url} alt="nyam" w="100%" h="100%" />
                  <Box color="white">
                    <Text pt="2%" opacity="0.6">{port.kategori}</Text>
                    <Heading fontFamily="Inter, sans-serif">{port.headline}</Heading>
                    <Text>{port.deskripsi}</Text>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
          <Box w="100%" h="100vh">
            {/* Search Input */}
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Flex mb="4" display="flex" justifyContent="space-between">
                <InputGroup width="500px" maxWidth="600px">
                  <InputLeftElement pointerEvents="none" height="100%" pl={3}>
                    <Icon as={SearchIcon} color="gray.300" boxSize={6} />
                  </InputLeftElement>
                  <Input
                    type="search"
                    placeholder="Search..."
                    borderRadius="30px"
                    p="6"
                    pl="12"
                    color="white"
                    borderColor="gray.300"
                    focusBorderColor="teal.500"
                  />
                </InputGroup>
              </Flex>

              <Box display="flex" justifyContent="center" mb="4">
                <Box display="flex" alignItems="center">
                  <CustomSelect
                    placeholder="Nama"
                    options={[
                      { value: 'azhar', label: 'Azhar' },
                      { value: 'mahdi', label: 'Mahdi' },
                      { value: 'bali', label: 'Bali' },
                      { value: 'ntt', label: 'NTT' },
                      { value: 'kalimantan', label: 'Kalimantan' },
                      { value: 'sumatra', label: 'Sumatra' },
                      { value: 'papua', label: 'Papua' },
                      { value: 'maluku', label: 'Maluku' },
                    ]}
                    maxW="200px"
                  />
                  <CustomSelect
                    placeholder="Default sorting"
                    options={[
                      { value: 'low-price', label: 'Sort by price: low' },
                      { value: 'high-price', label: 'Sort by price: high' },
                      { value: 'average-rating', label: 'Sort by average rating' },
                    ]}
                    maxW="250px"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          {/* CARD PORTOFS */}


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
                <Text>Build with: <span style={{ color: "orange" }}>Next, typescript, express, flask, react</span></Text>
                <Text fontSize="sm">Made with ❤ by Someone</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>  
    </Box>
  )
}

export default Portfolio;
