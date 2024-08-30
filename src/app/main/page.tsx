import React from 'react'
import { 
    Box,
    Text,
    Heading,
    Container,
    Image
} from '@chakra-ui/react'
import { Navbar } from '../ui/navbar'
const Main = () => {
  return (
    <Box>
        <Navbar />
      <Box w="100%" h="300vh" bg="#000000">
            <Heading>HALOOOO SAYNG</Heading>
        </Box>
    </Box>
  )
}

export default Main