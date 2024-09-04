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
 import { dummyBlog } from '../data/blog'

const Blog: React.FC = () => {
  return (
    <Box w="100%" bg="black">
      <Navbar />
      <Box w="100%" h="500vh">
        <Box w="100%" px="10%">
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
        <Box w="100%" h="300vh" px="10%">
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

          <Box w="100%" h="100%" pt="3%">
            <Box display="flex" alignItems="center"
              flexWrap="wrap" justifyContent="center"
              gap="19px"
            >
              {dummyBlog.map((dummy, index) => (
                <Box key={index}>
                  <Box
                    w="430px"
                    h="400px"
                  >
                    <Image src={dummy.url} alt='dummy'
                      w="100%"
                      h="290px"
                    />
                    <Box color="white">
                      <Box display="flex" alignItems="center">
                        <Text>{dummy.kategori}</Text>
                        <Text>{dummy.tanggal}</Text>
                      </Box>
                      <Heading>{dummy.Headline}</Heading>
                      <Text>Read more</Text>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Blog