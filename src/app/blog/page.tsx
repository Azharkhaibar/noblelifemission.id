"use client"
import React from 'react'
import { 
  Box,
  Heading,
  Text,
  Image,
  IconButton,
  Flex,
  Icon,
  Input
 } from '@chakra-ui/react'
 import { FaChevronRight, FaHome } from 'react-icons/fa'
 import Navbar from '../ui/navbar'

const Blog: React.FC = () => {
  return (
    <Box w="100%" bg="black">
      <Navbar />
      <Box w="100%" h="300vh">
        <Box w="100%" px="10%" bg="purple">
          <Box display="flex" alignItems="center" color="white" fontSize="20px" fontWeight="500" mt="2" pt="8%">
            <Icon as={FaHome} mr="2" />
            {['Home', 'Blog'].map((breadcrumb, index) => (
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
          <Heading pt="2%" color="white" fontSize="80px">
            Noblelifemission<br /> Blog
          </Heading>
        </Box>
        <Box w="100%" h="50vh" bg="grey">

        </Box>
        <Box w="100%" h="120vh" px="10%">
          <Box display="flex" pos="relative" 
            borderBottom="1px solid white"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              display="flex" alignItems="center"
              pt="3%"
              gap="50px"
              py="2%"
              opacity="0.6"
            >
              {["ALL", "TECH", "POEM", "JOURNAL", "TIPS", "FINANCE"].map((blog, index) => (
                <Box key={index}>
                  <Box>
                    <Text fontSize="20px" fontWeight="500"
                      color="white"
                    >{blog}</Text>
                  </Box>
                </Box>
              ))}
            </Box>
            <Input
              placeholder="Your First Name"
              type="text"
              p="2%"
              w="400px"
              color="white"
              borderRadius="5px"
              required
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Blog