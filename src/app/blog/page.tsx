"use client"
import React, { useState } from 'react'
import { 
  Box,
  Heading,
  Text,
  Image,
  IconButton,
  Flex,
  Icon,
  Input,
  Button
 } from '@chakra-ui/react'
 import { FaChevronRight, FaHome } from 'react-icons/fa'
 import Navbar from '../ui/navbar'
 import { dummyBlog } from '../data/blog'
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const Blog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = dummyBlog.slice(indexOfFirstCard, indexOfLastCard);
  const totalPagesBlogCard = Math.ceil(dummyBlog.length / cardsPerPage);
  const handleNextPagesBlog = () => {
    if (currentPage < totalPagesBlogCard) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
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
            <Box
              display="flex"
              alignItems="center"
              flexWrap="wrap"
              justifyContent="center"
              gap="19px"
            >
              {currentCards.map((dummy, index) => (
                <Box key={index}>
                  <Box w="430px" h="450px">
                    <Image src={dummy.url} alt="dummy" w="100%" h="290px" />
                    <Box color="white" p="3">
                      <Box display="flex" alignItems="center" justifyContent="space-between" mb="2">
                        <Text>{dummy.kategori}</Text>
                        <Text>{dummy.tanggal}</Text>
                      </Box>
                      <Heading fontSize="35px" mb="2">{dummy.Headline}</Heading>
                      <Text color="blue.400" cursor="pointer">Read more</Text>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>

            <Flex justifyContent="center" mt="6" alignItems="center">
              <IconButton
                icon={<ChevronLeftIcon />}
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                bg="orange"
                mr="4"
                aria-label="Previous Page"
              />
              <Text mx="2" color="white">{`${currentPage} / ${totalPagesBlogCard}`}</Text>
              <IconButton
                icon={<ChevronRightIcon />}
                onClick={handleNextPagesBlog}
                disabled={currentPage === totalPagesBlogCard}
                bg="orange"
                ml="4"
                aria-label="Next Page"
              />
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Blog