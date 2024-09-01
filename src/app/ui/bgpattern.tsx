"use client"
import React from 'react'
import {
    Box,
    Heading,
    Text,
} from '@chakra-ui/react'

const BgPattern = ({ title, breadcrumbs }) => {
    return (
        <Box
            pos="relative"
            w="100%"
            h="100vh"
            bg="#191a1a"
            bgImage={`
        linear-gradient(0deg, transparent 24%, rgba(114, 114, 114, 0.3) 25%, rgba(114, 114, 114, 0.3) 26%, transparent 27%, transparent 74%, rgba(114, 114, 114, 0.3) 75%, rgba(114, 114, 114, 0.3) 76%, transparent 77%, transparent),
        linear-gradient(90deg, transparent 24%, rgba(114, 114, 114, 0.3) 25%, rgba(114, 114, 114, 0.3) 26%, transparent 27%, transparent 74%, rgba(114, 114, 114, 0.3) 75%, rgba(114, 114, 114, 0.3) 76%, transparent 77%, transparent)
      `}
            bgSize="55px 55px"
        >
            {/* Overlay */}

            {/* Content */}
            <Box pos="relative" zIndex="10" h="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
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
};

export default BgPattern;
