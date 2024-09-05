import React, { useState, useEffect } from 'react'
import { 
    Box,
    Heading,
    Text,
    Flex,
} from '@chakra-ui/react'
import Navbar from '../ui/navbar'

const Faq = () => {
  return (
    <Box bg="black">
        <Navbar />
        <Box w="100%"
            h="400vh"
        >
            <Heading
                fontSize="75px"
                fontWeight="bold"
            >
                FAQ
            </Heading>
        </Box>
    </Box>
  )
}

export default Faq