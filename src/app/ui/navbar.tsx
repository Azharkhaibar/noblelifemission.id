import React from 'react';
import { Box, Flex, Heading, Text, Link, HStack } from '@chakra-ui/react';
import NextLink from 'next/link';

export const Navbar = () => {
    return (
        <Box w="100%" h="10vh" bg="pink" px={8}>
            <Flex alignItems="center" justifyContent="space-between" h="100%">
                <Heading size="md">NLM</Heading>
                <HStack spacing={8}>
                    <NextLink href="/" passHref>
                        <Link _hover={{ textDecoration: 'none', color: 'gray.700' }} fontWeight="bold">
                            Home
                        </Link>
                    </NextLink>
                    <NextLink href="/information" passHref>
                        <Link _hover={{ textDecoration: 'none', color: 'gray.700' }} fontWeight="bold">
                            Information
                        </Link>
                    </NextLink>
                    <NextLink href="/shoppage" passHref>
                        <Link _hover={{ textDecoration: 'none', color: 'gray.700' }} fontWeight="bold">
                            Shop
                        </Link>
                    </NextLink>
                    <NextLink href="/donasi" passHref>
                        <Link _hover={{ textDecoration: 'none', color: 'gray.700' }} fontWeight="bold">
                            Donasi
                        </Link>
                    </NextLink>
                </HStack>
                <Box display="flex" gap="6" alignItems="center">
                    <Text>Login</Text>
                    <Text p="2" borderRadius="20" bg="brown">Register</Text>
                </Box>
            </Flex>
        </Box>
    );
};
