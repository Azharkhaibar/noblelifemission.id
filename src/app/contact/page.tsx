"use client"
import React, { useState, useEffect } from 'react'
import {
  Box,
  Heading,
  Text,
  Container,
  Icon,
  Select,
  Input,
  Textarea,
  Button,
  Checkbox,
  Flex,
  Link,
  FormLabel
} from '@chakra-ui/react'
import Navbar from '../ui/navbar'
import NextLink from 'next/link';
import { FaHome, FaChevronRight } from 'react-icons/fa'
import axios, { AxiosError } from 'axios'
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    subject: '',
    community: '',
    purpose: '',
    messages: '',  
    agreement: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: checked,
    }));
  };

  const handleSubmitContactTouch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreement) {
      alert('You must agree to the terms and privacy policy.');
      return;
    }

    try {
      console.log('Sending data:', formData);

      const postResponse = await axios.post(
        'http://127.0.0.1:5001/create_intouch',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Data successfully sent:', postResponse);
      alert('Message sent successfully');

      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        subject: '',
        community: '',
        purpose: '',
        messages: '', 
        agreement: false,
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        const data = error.response?.data;
        console.error('Axios error occurred:', {
          status,
          data,
          message: error.message,
        });
        alert(`Failed to send message. Status ${status}. Please try again.`);
      } else {
        console.error('Unexpected error occurred:', error);
        alert('An unexpected error occurred. Please try again.');
      }
    }
  };


  // /create_home_contact
  return (
    <Box w="100%" h="400vh" bg="black">
      <Navbar />
      <Box>
        <Box
          position="relative"
          textAlign="center"
          color="white"
          bg="linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.7)
        ), radial-gradient(
            black 55%,
            rgba(0, 0, 0, 0)
        ), linear-gradient(
            135deg,
            red,
            orange,
            yellow,
            lime,
            cyan,
            blue,
            indigo,
            deeppink
        )"
          bgSize="100% 0.5%, contain"
          bgBlendMode="multiply"
          w="100%"
          h="60vh"
        >
          <Box
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            bg="rgba(0, 0, 0, 0.5)"
            zIndex="1"
          />
          <Box
            position="relative"
            zIndex="2"
            pt="11%"
          >
            <Heading
              fontSize="75px"
              fontFamily="Inter, sans-serif"
              letterSpacing="wider"
              bgClip="text"
              bgGradient="linear(to-r, #ffffff, #dcdcdc)"
              boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
              textShadow="1px 1px 3px rgba(0, 0, 0, 0.2)"
            >
              Get In Touch
            </Heading>
            <Text fontSize="20px" pt="1%" opacity="0.5">
              Connect with the NLM team. We're here to support your ideas with creativity and innovation.
            </Text>
            <Box
              display="flex"
              alignItems="center"
              color="white"
              fontSize="20px"
              fontWeight="500"
              mt="2%"
              mx="auto"
              justifyContent="center"
              w="100%"
              textAlign="center"
            >
              <Icon as={FaHome} mr="2" />
              {['Home', 'Contact'].map((breadcrumb, index) => (
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
          </Box>
        </Box>
        <Box w="100%" h="50vh" display="flex" justifyContent="center" mt="5%">
          <Box w="75%" borderWidth={0} borderRadius="md" boxShadow="sm">
            <form onSubmit={handleSubmitContactTouch}>
              <Flex mb={4} justify="space-between">
                <Box w="30%">
                  <Input
                    id="firstname"
                    placeholder="FIRST NAME *"
                    mt={2}
                    width="100%"
                    pb="5%"
                    value={formData.firstname}
                    onChange={handleInputChange}
                    border="none"
                    borderBottom="2px solid white"
                    borderRadius="0"
                    bg="transparent"
                    color="white"
                    textAlign="left"
                    paddingLeft="0"
                    _placeholder={{
                      color: 'white',
                      textAlign: 'left',
                      fontSize: 'lg',
                      fontFamily: 'Inter, sans-serif',
                    }}
                    _focus={{ boxShadow: 'none', borderBottom: '2px solid #3182ce' }}
                  />
                </Box>
                <Box w="30%">
                  <Input
                    id="lastname"
                    placeholder="LAST NAME *"
                    mt={2}
                    width="100%"
                    pb="5%"
                    value={formData.lastname}
                    onChange={handleInputChange}
                    border="none"
                    borderBottom="2px solid white"
                    borderRadius="0"
                    bg="transparent"
                    color="white"
                    textAlign="left"
                    paddingLeft="0"
                    _placeholder={{
                      color: 'white',
                      textAlign: 'left',
                      fontSize: 'lg',
                      fontFamily: 'Inter, sans-serif',
                    }}
                    _focus={{ boxShadow: 'none', borderBottom: '2px solid #3182ce' }}
                  />
                </Box>
                <Box w="30%">
                  <Input
                    id="email"
                    type="email"
                    placeholder="EMAIL *"
                    mt={2}
                    width="100%"
                    pb="5%"
                    value={formData.email}
                    onChange={handleInputChange}
                    border="none"
                    borderBottom="2px solid white"
                    borderRadius="0"
                    bg="transparent"
                    color="white"
                    textAlign="left"
                    paddingLeft="0"
                    _placeholder={{
                      color: 'white',
                      textAlign: 'left',
                      fontSize: 'lg',
                      fontFamily: 'Inter, sans-serif',
                    }}
                    _focus={{ boxShadow: 'none', borderBottom: '2px solid #3182ce' }}
                  />
                </Box>
              </Flex>

              <Flex mb={4} justify="space-between">
                <Box w="30%">
                  <Input
                    id="subject"
                    placeholder="SUBJECT"
                    mt="15%"
                    width="100%"
                    pb="5%"
                    value={formData.subject}
                    onChange={handleInputChange}
                    border="none"
                    borderBottom="2px solid white"
                    borderRadius="0"
                    bg="transparent"
                    color="white"
                    textAlign="left"
                    paddingLeft="0"
                    _placeholder={{
                      color: 'white',
                      textAlign: 'left',
                      fontSize: 'lg',
                      fontFamily: 'Inter, sans-serif',
                    }}
                    _focus={{ boxShadow: 'none', borderBottom: '2px solid #3182ce' }}
                  />
                </Box>
                <Box w="30%">
                  <Input
                    id="community"
                    placeholder="COMMUNITY"
                    mt="15%"
                    width="100%"
                    pb="5%"
                    value={formData.community}
                    onChange={handleInputChange}
                    border="none"
                    borderBottom="2px solid white"
                    borderRadius="0"
                    bg="transparent"
                    color="white"
                    textAlign="left"
                    paddingLeft="0"
                    _placeholder={{
                      color: 'white',
                      textAlign: 'left',
                      fontSize: 'lg',
                      fontFamily: 'Inter, sans-serif',
                    }}
                    _focus={{ boxShadow: 'none', borderBottom: '2px solid #3182ce' }}
                  />
                </Box>
                <Box w="30%">
                  <Input
                    id="purpose"
                    placeholder="PURPOSE"
                    mt="15%"
                    width="100%"
                    pb="5%"
                    value={formData.purpose}
                    onChange={handleInputChange}
                    border="none"
                    borderBottom="2px solid white"
                    borderRadius="0"
                    bg="transparent"
                    color="white"
                    textAlign="left"
                    paddingLeft="0"
                    _placeholder={{
                      color: 'white',
                      textAlign: 'left',
                      fontSize: 'lg',
                      fontFamily: 'Inter, sans-serif',
                    }}
                    _focus={{ boxShadow: 'none', borderBottom: '2px solid #3182ce' }}
                  />
                </Box>
              </Flex>

              <Box width="100%" mt="6%">
                <FormLabel htmlFor="messages" color="white">
                  LEAVE A MESSAGE *
                </FormLabel>
                <Textarea
                  id="messages"  
                  h="150px"
                  border="2px solid white"
                  borderRadius="0"
                  bg="transparent"
                  color="white"
                  value={formData.messages}
                  onChange={handleInputChange}
                  _placeholder={{
                    color: 'white',
                    fontSize: 'lg',
                    fontFamily: 'Inter, sans-serif',
                  }}
                  _focus={{ boxShadow: 'none', borderBottom: '2px solid #3182ce' }}
                />
              </Box>

              <Flex mt={4} alignItems="center">
                <Button
                  type="submit"
                  bg="white"
                  w="200px"
                  mr={4}
                  borderRadius="md"
                  isDisabled={!formData.agreement}  
                >
                  SEND MESSAGE
                </Button>
                <Checkbox
                  id="agreement"
                  mr={2}
                  isChecked={formData.agreement}
                  onChange={handleCheckboxChange}
                />
                <Text fontSize="sm" color="white">
                  I agree to be contacted by Hytech as outlined in the{' '}
                  <Link href="#" color="orange" textDecoration="underline">
                    Privacy Policy
                  </Link>{' '}
                  &{' '}
                  <Link href="#" color="orange" textDecoration="underline">
                    Terms
                  </Link>
                </Text>
              </Flex>
            </form>
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

export default Contact
