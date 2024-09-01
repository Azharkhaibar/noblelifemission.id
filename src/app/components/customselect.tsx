import React from 'react';
import { Box, Select } from '@chakra-ui/react';

const CustomSelect = ({ placeholder, options, maxW }) => (
    <Box
        borderRadius="30px"
        textAlign="center"
        flex="1"
        w="300px"
        gap="30px"
        maxW={maxW}
    >
        <Select
            placeholder={placeholder}
            borderRadius="20px"
            h="50px"
            fontSize="lg"
            color="white"
            bg="black"
            _placeholder={{ color: 'gray.400' }}
            _focus={{ borderColor: 'teal.500', boxShadow: '0 0 0 1px teal.500' }}
            _option={{ bg: 'black', color: 'white', _hover: { bg: 'gray.700' } }}
            sx={{
                'option': {
                    backgroundColor: 'black',
                    color: 'white',
                    _hover: {
                        backgroundColor: 'gray.700',
                    },
                },
                'select': {
                    backgroundColor: 'black',
                    color: 'white',
                },
            }}
        >
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </Select>
    </Box>
);

export default CustomSelect

