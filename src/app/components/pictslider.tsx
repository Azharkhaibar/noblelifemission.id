import React from "react";
import { 
    Box,
    Heading,
    Text,
    Image,
    Button
} from "@chakra-ui/react";
import { MemberList } from "../data/memberlist";

const PictSlider: React.FC = () => {
    return(
        <Box
            display="flex"
            overflow="hidden"
            pt="4%"
            gap="20px"
            pos="relative"
            whiteSpace="nowrap"
            w="100%"
        >
            <Box display="inline-flex" animation="scroll 140s linear infinite" gap="30px">
                {MemberList.map((member, index) => (
                    <Box key={index}>
                        <Box
                            w="300px"
                            h="350px"
                            borderRadius="20px"
                            pos="relative"
                            overflow="hidden"
                        >
                            <Image
                                src={member.url}
                                alt="gambar"
                                w="100%"
                                h="100%"
                                objectFit="cover"
                                borderRadius="20px"
                            />
                            <Box
                                w="100%"
                                h="30%"
                                pos="absolute"
                                bottom="0"
                                bgGradient="linear(to-b, rgba(0, 0, 0, 0), black)"
                            ></Box>
                            <Heading
                                pos="absolute"
                                color="white"
                                bottom="5%"
                                left="5%"
                                fontSize="25px"
                                fontFamily="Inter, sans-serif"
                            >
                                {member.Nama}
                            </Heading>
                        </Box>
                    </Box>
                ))}

                {MemberList.map((member, index) => (
                    <Box key={index + MemberList.length}>
                        <Box
                            w="300px"
                            h="350px"
                            borderRadius="30px"
                            pos="relative"
                            overflow="hidden"
                        >
                            <Image
                                src={member.url}
                                alt="gambar"
                                w="100%"
                                h="100%"
                                objectFit="cover"
                                borderRadius="20px"
                            />
                            <Box
                                w="100%"
                                h="30%"
                                pos="absolute"
                                bottom="0"
                                bgGradient="linear(to-b, rgba(0, 0, 0, 0), black)"
                            ></Box>
                            <Heading
                                pos="absolute"
                                color="white"
                                bottom="5%"
                                left="5%"
                                fontSize="25px"
                                fontFamily="Inter, sans-serif"
                            >
                                {member.Nama}
                            </Heading>
                        </Box>
                    </Box>
                ))}

                {MemberList.map((member, index) => (
                    <Box key={index + MemberList.length}>
                        <Box
                            w="300px"
                            h="350px"
                            borderRadius="30px"
                            pos="relative"
                            overflow="hidden"
                        >
                            <Image
                                src={member.url}
                                alt="gambar"
                                w="100%"
                                h="100%"
                                objectFit="cover"
                                borderRadius="20px"
                            />
                            <Box
                                w="100%"
                                h="30%"
                                pos="absolute"
                                bottom="0"
                                bgGradient="linear(to-b, rgba(0, 0, 0, 0), black)"
                            ></Box>
                            <Heading
                                pos="absolute"
                                color="white"
                                bottom="5%"
                                left="5%"
                                fontSize="25px"
                                fontFamily="Inter, sans-serif"
                            >
                                {member.Nama}
                            </Heading>
                        </Box>
                    </Box>
                ))}
            </Box>
            <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .scroll {
          animation-duration: 140s;
        }
      `}</style>
        </Box>
    )
}

export default PictSlider