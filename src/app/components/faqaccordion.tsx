"use client";

import React, { useState } from 'react';
import { Box, Text, Button, Collapse, useDisclosure } from '@chakra-ui/react';

const ManualAccordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const items = [
        { title: "Accordion Item 1", content: "This is the content for Accordion Item 1. This is the content for Accordion Item 1. This is the content for Accordion Item 1. This is the content for Accordion Item 1." },
        { title: "Accordion Item 2", content: "This is the content for Accordion Item 2." },
        { title: "Accordion Item 3", content: "This is the content for Accordion Item 3." },
        { title: "Accordion Item 4", content: "This is the content for Accordion Item 3." },
        { title: "Accordion Item 5", content: "This is the content for Accordion Item 3." },
        { title: "Accordion Item 6", content: "This is the content for Accordion Item 3." },
    ];

    return (
        <Box w="100%" h="200vh" px="10%" p={4} pt="8%">
            {items.map((item, index) => (
                <Box key={index} mb={8} borderRadius="md" overflow="hidden">
                    <Button
                        onClick={() => toggleAccordion(index)}
                        w="100%"
                        py="3%"
                        justifyContent="space-between"
                        bg={openIndex === index ? "#2D3639" : "#2D3639"}
                        color={openIndex === index ? "white" : "white"}
                        _hover={{ bg: "#322A0B", color: "white" }}
                    >
                        <Text fontSize="lg">{item.title}</Text>
                    </Button>
                    <Collapse in={openIndex === index}>
                        <Box
                            p={4}
                            mt={2}
                            color="white"
                            bg="#322A0B"
                            transition="all 0.3s ease-in-out"
                        >
                            <Text>{item.content}</Text>
                        </Box>
                    </Collapse>
                </Box>
            ))}
        </Box>
    );
};

export default ManualAccordion;
