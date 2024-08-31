// components/StyledBox.tsx
import React from 'react';
import { Box } from '@chakra-ui/react';

const StyledBox: React.FC = () => {
    return (
        <Box
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            backgroundColor="#000000"
            zIndex="0"
            sx={{
                '--gap': '5em',
                '--line': '1px',
                '--color': 'rgba(255, 255, 255, 0.2)',
                backgroundImage: `
          linear-gradient(
            -90deg,
            transparent calc(var(--gap) - var(--line)),
            var(--color) calc(var(--gap) - var(--line) + 1px),
            var(--color) var(--gap)
          ),
          linear-gradient(
            0deg,
            transparent calc(var(--gap) - var(--line)),
            var(--color) calc(var(--gap) - var(--line) + 1px),
            var(--color) var(--gap)
          )
        `,
                backgroundSize: 'var(--gap) var(--gap)',
            }}
        />
    );
};

export default StyledBox;
