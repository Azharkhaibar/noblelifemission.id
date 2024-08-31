import { Box, Heading, Image } from '@chakra-ui/react';
import '../design/shinetext.scss'

function ShinyHeading() {
    return (
        <Box w="70%" h="100%" position="relative">
            <Heading
                pt="5%"
                fontSize="55px"
                fontWeight="600"
                fontFamily="'Poppins', sans-serif"
                textAlign="center"
                color="transparent"
                background="linear-gradient(to right, #9f9f9f 0%, #fff 20%, #868686 40%)"
                backgroundClip="text"
                whiteSpace="nowrap"
                position="relative"
                display="inline-block"
                overflow="hidden"
                _before={{
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '200%',
                    height: '100%',
                    background: 'linear-gradient(to right, #9f9f9f 0%, #fff 20%, #868686 40%)',
                    backgroundSize: '200% 100%',
                    animation: 'shine 3s infinite linear',
                    zIndex: -1,
                }}
            >
                Meet the Team Driving <br /> Our Vision and Mission Forward
            </Heading>
            <Image src='/images/about.jpg' pt="3%" borderRadius="30px" />
        </Box>
    );
}

export default ShinyHeading;
