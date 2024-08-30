"use client";

import React from 'react';
import {
    Box,
    Flex,
    Heading,
    Link,
    HStack,
    Button,
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

export const Navbar = () => {
    return (
        <Box w="100%" h="8vh" bgGradient="linear(to left, black, #202020)" px="85">
            <Flex alignItems="center" justifyContent="space-between" h="100%">
                <Heading size="lg" color="white">
                    NLM
                </Heading>
                <HStack spacing={8}>
                    <Box
                        position="relative"
                        display="inline-block"
                        _hover={{ color: 'teal.200' }} 
                    >
                        <NextLink href="/" passHref>
                            <Link
                                color="black"
                                fontSize="lg"
                                fontWeight="medium"
                                bg="white"
                                py="6"
                                px="5"
                                _hover={{ textDecoration: 'none' }} 
                            >
                                Home
                            </Link>
                        </NextLink>
                        <Box
                            position="absolute"
                            bottom={0}
                            left={0}
                            width="100%"
                            height="2px"
                            bg="teal.200"
                            transform="scaleX(0)"
                            transformOrigin="bottom left" 
                            transition="transform 0.3s ease" 
                        />
                    </Box>
                    <Menu>
                        <MenuButton
                            as={Button}
                            variant="link"
                            colorScheme="white"
                            fontWeight="bold"
                            color="white"
                            rightIcon={<ChevronDownIcon />}
                            _hover={{ textDecoration: 'none', color: 'teal.200' }}
                            _active={{ bg: 'transparent' }}
                        >
                            About Us
                        </MenuButton>
                        <MenuList
                            bg="blue"
                            border="none"
                            borderRadius="md"
                            boxShadow="md"
                            color="white"
                            minW="200px"
                            p={0} // Remove padding to control padding on MenuItems
                        >
                            <NextLink href="/about/list-member" passHref>
                                <MenuItem
                                    _hover={{ bg: 'teal.700', color: 'white', borderBottom: '2px solid teal.200' }}
                                    _focus={{ bg: 'teal.700' }}
                                    bg="white"
                                    p={4} // Add padding for better spacing
                                    border="none"
                                    color="black"
                                    fontWeight="600"
                                    _active={{ bg: 'teal.600' }} // Optional: Different color when active
                                >
                                    List Member
                                </MenuItem>
                            </NextLink>
                            <NextLink href="/about/visi-misi" passHref>
                                <MenuItem
                                    _hover={{ bg: 'teal.700', color: 'white', borderBottom: '2px solid teal.200' }}
                                    _focus={{ bg: 'teal.700' }}
                                    p={4} // Add padding for better spacing
                                    border="none"
                                    bg="white"
                                    color="black"
                                    fontWeight="600"
                                    _active={{ bg: 'teal.600' }} // Optional: Different color when active
                                >
                                    Visi Misi
                                </MenuItem>
                            </NextLink>
                        </MenuList>
                    </Menu>

                    {['portfolio', 'shoppage', 'donasi', 'information'].map((path) => (
                        <Box
                            key={path}
                            position="relative"
                            display="inline-block"
                            _hover={{ color: 'teal.200' }} 
                        >
                            <NextLink href={`/${path}`} passHref>
                                <Link
                                    color="white"
                                    fontSize="lg"
                                    fontWeight="medium"
                                    _hover={{ textDecoration: 'none' }} 
                                >
                                    {path.charAt(0).toUpperCase() + path.slice(1)}
                                </Link>
                            </NextLink>
                            <Box
                                position="absolute"
                                bottom={0}
                                left={0}
                                width="100%"
                                height="2px"
                                bg="teal.200"
                                transform="scaleX(0)" 
                                transformOrigin="bottom left" 
                                transition="transform 0.3s ease" 
                            />
                        </Box>
                    ))}
                </HStack>
                <Box display="flex" gap="4" alignItems="center">
                    <Text
                        color="white"
                        cursor="pointer"
                        _hover={{ color: 'teal.200' }}
                    >
                        Login
                    </Text>
                    <Button
                        bg="white"
                        color="black"
                        _hover={{ bg: 'teal.200', color: 'white' }}
                        borderRadius="full"
                        px="6"
                    >
                        Register
                    </Button>
                </Box>
            </Flex>
        </Box>
    );
};

export default Navbar;
