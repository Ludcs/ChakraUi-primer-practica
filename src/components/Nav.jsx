import React from 'react';
import {Stack, Link, Button} from '@chakra-ui/react';

export const Nav = () => {
  return (
    <Stack
      color="neutral.white"
      alignItems="center"
      direction="row"
      spacing={10}
      fontFamily="body.barlow"
      fontSize="18px"
      fontWeight="600"
    >
      <Link
        _hover={{
          textDecoration: 'none',
        }}
      >
        About
      </Link>
      <Link
        _hover={{
          textDecoration: 'none',
        }}
      >
        Services
      </Link>
      <Link
        _hover={{
          textDecoration: 'none',
        }}
      >
        Projects
      </Link>
      <Button
        color="black"
        borderRadius="3xl"
        bg="white"
        fontFamily="body.fraunces"
        fontWeight="700"
      >
        Contact
      </Button>
    </Stack>
  );
};
