import React, { useState, useEffect } from 'react'
import {
    Box,
    Heading,
    Text,
    Flex,
} from '@chakra-ui/react'
import ManualAccordion from '../components/faqaccordion'
import Navbar from '../ui/navbar'

const Faq = () => {
    return (
        <Box bg="black">
            <Navbar />
            <Box w="100%"
                h="500vh"
            >
                <Box w="100%"
                    h="70vh"
                    bgColor="grey"
                    textAlign="center"
                >
                    <Heading
                        fontSize="120px"
                        fontWeight="bold"
                        color="white"
                        pt="16%"
                        fontFamily="Inter, sans-serif"
                    >
                        FAQ
                    </Heading>
                    <Text fontSize="20px" 
                        opacity="0.6" 
                        textAlign="center"
                        fontFamily="Inter, sans-serif"
                    >Halaman ini berindikasi untuk menjawab pertanyaan</Text>
                </Box>
                <Box w="100%"
                    h="200vh"
                >
                    <Box 
                    h="100%"
                    w="100%"
                    px="10%"
                    >
                        <ManualAccordion />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Faq