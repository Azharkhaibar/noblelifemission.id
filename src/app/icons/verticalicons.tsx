import { Stack, IconButton } from '@chakra-ui/react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function SocialMediaIcons() {
    return (
        <Stack
            spacing={4}  // Adjust spacing between icons as needed
            align="center"
        >
            <IconButton
                icon={<FaFacebookF />}
                aria-label="Facebook"
                variant="ghost"
                color="black"
                p="13" borderRadius="40" bgColor="white"
                _hover={{ color: 'blue.500' }}  // Change color on hover
            />
            <IconButton
                icon={<FaTwitter />}
                aria-label="Twitter"
                variant="ghost"
                color="black"
                p="13" borderRadius="40" bgColor="white"
                _hover={{ color: 'blue.400' }}  // Change color on hover
            />
            <IconButton
                icon={<FaInstagram />}
                aria-label="Instagram"
                variant="ghost"
                color="black"
                p="13" borderRadius="40" bgColor="white"
                _hover={{ color: 'pink.500' }}  // Change color on hover
            />
        </Stack>
    );
}

export default SocialMediaIcons;
