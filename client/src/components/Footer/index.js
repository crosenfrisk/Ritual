import React from 'react';
import { Box, Center, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <footer>
      <div>
        <Center minWidth="max-content" alignItems="center" gap="2" bg="#2C7A7B">
          <Box p="5">
              <Text fontSize='xl' color='#FFFFFF'>
              From the CRMMMM developers &copy;{new Date().getFullYear()}
              </Text>
          </Box>
        </Center>
      </div>
    </footer>
  );
};

export default Footer;
