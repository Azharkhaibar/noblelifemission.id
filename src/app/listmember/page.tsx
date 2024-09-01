"use client"
import React from 'react'
import Navbar from '../ui/navbar'
import {
    Box,
    Text,
    Heading,
    Flex,
    Button,
    IconButton,
    Image,
    Icon,
    Input
} from '@chakra-ui/react'
import NextLink from 'next/link';
import '../design/webkit-scroll.scss'
import { MemberList } from '../data/memberlist'
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaHome, FaChevronRight } from 'react-icons/fa';

const ListMember = () => {
    return (
        <Box w="100%" h="500vh" bg="black">
            <Navbar />
            <Box w="100%" h="100vh" >
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
                    h="70vh"
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
                        pt="7%"
                    >
                        <Heading
                            fontSize="60px"
                            fontFamily="Inter, sans-serif"
                            letterSpacing="wider"
                            bgClip="text"
                            bgGradient="linear(to-r, #ffffff, #dcdcdc)"
                            boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
                            textShadow="1px 1px 3px rgba(0, 0, 0, 0.2)"
                        >
                            Meet the<br />
                            <span style={{ color: 'orange' }}>Visionaries</span> Behind <br />
                            NLM Our Exceptional Team
                        </Heading>
                        <Text fontSize="20px" pt="1%" opacity="0.5">
                            Discover the talented individuals who drive NLM forward, combining creativity and innovation to bring our vision to life.
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
                            {['Home', 'Listmembers'].map((breadcrumb, index) => (
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
                        <Text
                            textAlign="center"
                            color="black"
                            p="2"
                            bg="white"
                            borderRadius="20px"
                            m="auto"
                            w="300px"
                            fontSize="20px"
                            fontFamily="Inter, sans-serif"
                            mt="2%"
                        >
                            Contact Us
                        </Text>
                    </Box>
                </Box>
                <Box w="100%" h="200vh" mt="3%">
                    <Box display="flex" alignItems="center">
                        <Box display="flex" flexWrap="wrap" m="auto" alignItems="center">
                            {["/images/member/azharganteg.jpg", "/images/member/sidqi.jpg", "/images/member/sulthon.jpg"].map((pict, index) => (
                                <Box
                                    key={index}
                                    w="50px"
                                    h="50px"
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
                            <Box ml="30px">
                                <Text mb="0" color="white" fontSize="24px">Member</Text>
                            </Box>
                        </Box>

                    </Box>
                    <Box w="100%" display="flex" flexWrap="wrap" m="auto" justifyContent="center" gap="10px" pt="4%">
                        {MemberList.map((member, index) => (
                            <Box
                                key={index}
                                w="450px"
                                h="600px"
                                borderRadius="5px"
                                overflow="hidden"
                                pos="relative"
                            >
                                {/* Gambar */}
                                <Image
                                    src={member.url}
                                    alt="member"
                                    w="100%"
                                    h="75%"
                                    objectFit="cover"
                                    borderRadius="5px"
                                    transition="transform 0.3s ease-in-out"
                                />
                                {/* Overlay */}
                                <Box
                                    pos="absolute"
                                    top="0"
                                    left="0"
                                    w="100%"
                                    h="75%"
                                    opacity="0.1"
                                    bg="orange"
                                    borderRadius="5px"
                                    zIndex="1"
                                />
                                <Box
                                    color="white"
                                    textAlign="center"
                                    p="4"
                                    bgGradient="linear(to-r, #1a1a1a, #2b2b2b, #3c3c3c)"
                                    borderBottomRadius="5px"
                                    backdropFilter="blur(10px)"
                                    bg="rgba(0, 0, 0, 0.6)"
                                    border="1px solid rgba(255, 255, 255, 0.2)"
                                    zIndex="2"
                                    position="relative"
                                >
                                    <Heading
                                        fontSize="28px"
                                        fontWeight="bold"
                                        fontFamily="Inter, sans-serif"
                                    >
                                        {member.Nama}
                                    </Heading>
                                    <Text fontSize="15px" pt="1%" opacity="0.8">{member.role}</Text>
                                    <Box mt="2" display="flex" justifyContent="center" gap="10px">
                                        <a href={member.sosmed[0]} target="_blank" rel="noopener noreferrer">
                                            <FaWhatsapp
                                                size="30px"
                                                color="black"
                                                style={{
                                                    padding: "5px",
                                                    background: 'white',
                                                    borderRadius: '50%',
                                                    boxShadow: "0 0 8px rgba(0, 0, 0, 0.2)"
                                                }}
                                            />
                                        </a>
                                        <a href={member.sosmed[1]} target="_blank" rel="noopener noreferrer">
                                            <FaInstagram
                                                size="30px"
                                                color="black"
                                                style={{
                                                    padding: "5px",
                                                    background: 'white',
                                                    borderRadius: '50%',
                                                    boxShadow: "0 0 8px rgba(0, 0, 0, 0.2)"
                                                }}
                                            />
                                        </a>
                                        <a href={member.sosmed[2]} target="_blank" rel="noopener noreferrer">
                                            <FaLinkedin
                                                size="30px"
                                                color="black"
                                                style={{
                                                    padding: "5px",
                                                    background: 'white',
                                                    borderRadius: '50%',
                                                    boxShadow: "0 0 8px rgba(0, 0, 0, 0.2)"
                                                }}
                                            />
                                        </a>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Box>

                    <Box w="100%" h="50vh" mt="3%">
                        <Box
                            w="82%"
                            h="100%"
                            bg="purple"
                            m="auto"
                            borderRadius="25px"
                            display="flex"
                            border="1px solid rgba(255, 255, 255, 0.2)"
                            position="relative"
                        >
                            <Box w="60%" position="relative">
                                <Image
                                    src="/images/banner.jpg"
                                    alt="foto-bersama"
                                    w="100%"
                                    h="479px"
                                    objectFit="cover"
                                    borderRadius="25px 0px 0px 25px"
                                />
                                <Box
                                    position="absolute"
                                    top="0"
                                    right="0"
                                    w="35%"
                                    h="100%"
                                    bg="linear-gradient(to left, black, transparent)"
                                    borderRadius="25px 0px 0px 25px"
                                >
                                    {/* Tambahkan konten overlay di sini jika diperlukan */}
                                </Box>
                            </Box>
                            <Box
                                w="43%"
                                bg="black"
                                h="100%"
                                borderRadius="0px 25px 25px 0px"
                            >
                                <Box color="white" p="5%">
                                    <Text fontSize="18px" opacity="0.6" pt="18%">Lets Connect</Text>
                                    <Heading fontFamily="Inter, sans-serif" pt="3%"
                                        bgClip="text"
                                        bgGradient="linear(to-r, #ffffff, #dcdcdc)"
                                        boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
                                        textShadow="1px 1px 3px rgba(0, 0, 0, 0.2)"
                                    >We're here to listen and support you, so feel free to speak up</Heading>
                                    <Text p="2%" bg="white" color="black" w="300px" mt="4%" borderRadius="25px" textAlign="center">Get In Touch</Text>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    {/* CONTACT SECTION */}
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

export default ListMember