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
import NextLink from 'next/link';
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
        <Box w="100%" h="160vh" px="10%">
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
  )
}

export default Blog