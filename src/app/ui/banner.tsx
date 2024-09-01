"use client"
import React from 'react'
import {
    Box,
    Heading,
    Text,
} from '@chakra-ui/react'

const Banner = ({ bgImage, title, breadcrumbs }) => {
    return (
        <Box
            pos="relative"
            bgImage={`url(${bgImage})`}
            bgRepeat="no-repeat"
            bgSize="cover"
            w="100%"
            h="45vh"
        >
            {/* Gradient Overlay */}
            <Box
                pos="absolute"
                top="0"
                left="0"
                w="100%"
                h="100%"
                bg="linear-gradient(to right, black 0%, rgba(0, 0, 0, 0.6) 25%, rgba(255, 255, 255, 0.6) 50%, rgba(0, 0, 0, 0.6) 75%, black 100%)"
                zIndex="2"
            ></Box>

            {/* Black Overlay */}
            <Box pos="absolute" top="0" left="0" w="100%" h="100%" bg="black" opacity="0.3" zIndex="3"></Box>

            {/* Content */}
            <Box pos="relative" zIndex="4" h="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                <Heading textAlign="center" fontSize="65px" color="white" mb="0" fontFamily="Inter, sans-serif">
                    {title}
                </Heading>

                {/* Breadcrumb */}
                <Box display="flex" color="white" fontSize="20px" fontWeight="500" mt="2">
                    {breadcrumbs.map((breadcrumb, index) => (
                        <Text key={index} ml={index !== 0 ? 2 : 0} fontWeight="400">
                            {breadcrumb}
                        </Text>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

export default Banner
