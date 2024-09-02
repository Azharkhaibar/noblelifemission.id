import { useState } from 'react';
import { Button, Box, Text, useStyleConfig } from '@chakra-ui/react';

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

const AnimatedButtonStyled = () => {
    return (
        <Button
            sx={{
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid #18181a',
                color: '#18181a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                lineHeight: '15px',
                px: '70px',
                py: '25px',
                m: 'auto',
                mt: '12',
                textDecoration: 'none',
                cursor: 'pointer',
                background: '#fff',
                userSelect: 'none',
                touchAction: 'manipulation',
                overflow: 'hidden',
                borderRadius: '50px', // Add this line to make the button more rounded
                '&:after': {
                    content: `""`,
                    position: 'absolute',
                    bottom: '-50%',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'black',
                    transformOrigin: 'bottom center',
                    transition: 'transform 600ms cubic-bezier(0.48, 0, 0.12, 1)',
                    transform: 'skewY(9.3deg) scaleY(0)',
                    zIndex: '5',
                },
                '&:hover:after': {
                    transform: 'skewY(9.3deg) scaleY(2)',
                },
                '&:hover span:last-of-type': {
                    transform: 'translateY(0%) translateX(-50%)',
                    opacity: 1,
                    transition: 'all 900ms cubic-bezier(0.48, 0, 0.12, 1)',
                },
            }}
        >
            <Box
                as="span"
                sx={{
                    position: 'relative',
                    transition: 'color 600ms cubic-bezier(0.48, 0, 0.12, 1)',
                    zIndex: '10',
                }}
            >
                Details
            </Box>
            <Box
                as="span"
                sx={{
                    color: 'white',
                    display: 'block',
                    position: 'absolute',
                    bottom: '37%',
                    left: '52%',
                    transform: 'translateY(50%) translateX(-50%)',
                    transition: 'all 500ms cubic-bezier(0.48, 0, 0.12, 1)',
                    zIndex: '20',
                    opacity: 0,
                    height: '14px',
                    lineHeight: '13px',
                    whiteSpace: 'nowrap',
                }}
            >
                All Member
            </Box>
        </Button>
    );
};

const AnimatedButtonStyled2 = () => {
    return (
        <Button
            sx={{
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid #18181a',
                color: '#18181a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                lineHeight: '15px',
                px: '70px',
                py: '25px',
                m: 'auto',
                mt: '12',
                textDecoration: 'none',
                cursor: 'pointer',
                background: '#fff',
                userSelect: 'none',
                touchAction: 'manipulation',
                overflow: 'hidden',
                borderRadius: '50px', // Add this line to make the button more rounded
                '&:after': {
                    content: `""`,
                    position: 'absolute',
                    bottom: '-50%',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'black',
                    transformOrigin: 'bottom center',
                    transition: 'transform 600ms cubic-bezier(0.48, 0, 0.12, 1)',
                    transform: 'skewY(9.3deg) scaleY(0)',
                    zIndex: '5',
                },
                '&:hover:after': {
                    transform: 'skewY(9.3deg) scaleY(2)',
                },
                '&:hover span:last-of-type': {
                    transform: 'translateY(0%) translateX(-50%)',
                    opacity: 1,
                    transition: 'all 900ms cubic-bezier(0.48, 0, 0.12, 1)',
                },
            }}
        >
            <Box
                as="span"
                sx={{
                    position: 'relative',
                    transition: 'color 600ms cubic-bezier(0.48, 0, 0.12, 1)',
                    zIndex: '10',
                }}
            >
                Learn more
            </Box>
            <Box
                as="span"
                sx={{
                    color: 'white',
                    display: 'block',
                    position: 'absolute',
                    bottom: '37%',
                    left: '52%',
                    transform: 'translateY(50%) translateX(-50%)',
                    transition: 'all 500ms cubic-bezier(0.48, 0, 0.12, 1)',
                    zIndex: '20',
                    opacity: 0,
                    height: '14px',
                    lineHeight: '13px',
                    whiteSpace: 'nowrap',
                }}
            >
                About us
            </Box>
        </Button>
    );
};

export default AnimatedButton;
export {AnimatedButtonStyled, AnimatedButtonStyled2};
