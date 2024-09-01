"use client"
import React, { useState, useEffect, useRef } from 'react'
import {
  Box, Text, Flex, IconButton, Button, Heading
} from '@chakra-ui/react';
import Navbar from '../ui/navbar';
import BgPattern from '../ui/bgpattern'; // Note the uppercase B in BgPattern

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
    <Box bg="#000000" h="300vh">
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
            fontSize="65px"
            color="white"
            mb="0"
            fontFamily="Inter, sans-serif"
          >
            Portofolio
          </Heading>
          {/* Breadcrumb */}
          <Box
            display="flex"
            color="white"
            fontSize="20px"
            fontWeight="500"
            mt="2"
          >
            {['Home', 'Portfolio'].map((breadcrumb, index) => (
              <Text
                key={index}
                ml={index !== 0 ? 2 : 0}
                fontWeight="400"
              >
                {breadcrumb}
              </Text>
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
                  p="3"
                  px="6"
                  bg="linear-gradient(135deg, #282828, #633810)"
                  boxShadow="md"
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
                  p="3"
                  px="6"
                  bg="linear-gradient(135deg, #282828, #633810)"
                  boxShadow="md"
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
    </Box>
  )
}

export default Portfolio;
