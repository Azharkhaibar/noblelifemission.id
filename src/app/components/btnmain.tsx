import { useState } from 'react';
import { Button, Box, Text } from '@chakra-ui/react';

function AnimatedButton() {
    const [hovered, setHovered] = useState(false);

    return (
        <Button
            size="lg"
            bg="white"
            color="black"
            borderRadius="2rem"
            px={8}
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="relative"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Box
                className="span-mother"
                display="flex"
                justifyContent="center"
                overflow="hidden"
                position="relative"
                width="100%"
            >
                <Text
                    as="span"
                    transform={hovered ? 'translateY(1.2em)' : 'translateY(0)'}
                    transition="transform 0.2s"
                >
                    P
                </Text>
                <Text
                    as="span"
                    transform={hovered ? 'translateY(1.2em)' : 'translateY(0)'}
                    transition="transform 0.3s"
                >
                    o
                </Text>
                <Text
                    as="span"
                    transform={hovered ? 'translateY(1.2em)' : 'translateY(0)'}
                    transition="transform 0.4s"
                >
                    r
                </Text>
                <Text
                    as="span"
                    transform={hovered ? 'translateY(1.2em)' : 'translateY(0)'}
                    transition="transform 0.5s"
                >
                    t
                </Text>
                <Text
                    as="span"
                    transform={hovered ? 'translateY(1.2em)' : 'translateY(0)'}
                    transition="transform 0.6s"
                >
                    f
                </Text>
                <Text
                    as="span"
                    transform={hovered ? 'translateY(1.2em)' : 'translateY(0)'}
                    transition="transform 0.7s"
                >
                    o
                </Text>
                <Text
                    as="span"
                    transform={hovered ? 'translateY(1.2em)' : 'translateY(0)'}
                    transition="transform 0.7s"
                >
                    l
                </Text>
                <Text
                    as="span"
                    transform={hovered ? 'translateY(1.2em)' : 'translateY(0)'}
                    transition="transform 0.7s"
                >
                    i
                </Text>
                <Text
                    as="span"
                    transform={hovered ? 'translateY(1.2em)' : 'translateY(0)'}
                    transition="transform 0.7s"
                >
                    o
                </Text>
            </Box>
            <Box
                className="span-mother2"
                display="flex"
                justifyContent="center"
                position="absolute"
                overflow="hidden"
                left={0}
                width="100%"
            >
                <Text
                    as="span"
                    transform={hovered ? 'translateY(0)' : 'translateY(-1.2em)'}
                    transition="transform 0.2s"
                >
                    P
                </Text>
                <Text
                    as="span"
                    transform={hovered ? 'translateY(0)' : 'translateY(-1.2em)'}
                    transition="transform 0.3s"
                >
                    o
                </Text>
                <Text
                    as="span"
                    transform={hovered ? 'translateY(0)' : 'translateY(-1.2em)'}
                    transition="transform 0.4s"
                >
                    r
                </Text>
                <Text
                    as="span"
                    transform={hovered ? 'translateY(0)' : 'translateY(-1.2em)'}
                    transition="transform 0.5s"
                >
                    t
                </Text>
                <Text
                    as="span"
                    transform={hovered ? 'translateY(0)' : 'translateY(-1.2em)'}
                    transition="transform 0.6s"
                >
                    f
                </Text>
                <Text
                    as="span"
                    transform={hovered ? 'translateY(0)' : 'translateY(-1.2em)'}
                    transition="transform 0.7s"
                >
                    o
                </Text>
                <Text
                    as="span"
                    transform={hovered ? 'translateY(0)' : 'translateY(-1.2em)'}
                    transition="transform 0.7s"
                >
                    l
                </Text>
                <Text
                    as="span"
                    transform={hovered ? 'translateY(0)' : 'translateY(-1.2em)'}
                    transition="transform 0.7s"
                >
                    i
                </Text>
                <Text
                    as="span"
                    transform={hovered ? 'translateY(0)' : 'translateY(-1.2em)'}
                    transition="transform 0.7s"
                >
                    o
                </Text>
            </Box>
        </Button>
    );
}

export default AnimatedButton;
