import React from 'react';
import {Image, Link, Stack} from '@chakra-ui/react';
import logo2 from '../assets/logo/logo2.svg';
import facebook from '../assets/icons/icon-facebook.svg';
import instagram from '../assets/icons/icon-instagram.svg';
import twitter from '../assets/icons/icon-twitter.svg';
import pinterest from '../assets/icons/icon-pinterest.svg';

export const Footer = () => {
  return (
    <>
      <Stack
        bg="#9cdacb"
        direction="column"
        maxW="1440px"
        h="360px"
        m="auto"
        justify="center"
        align="center"
      >
        <Image
          src={logo2}
          color="primary.darkmoderate"
          w="154px"
          h="54px"
          objectFit={'contain'}
        />

        <Stack
          direction="row"
          spacing="16"
          mt="40px !important"
          mb="80px !important"
        >
          <Link
            fontFamily="body.barlow"
            fontSize="18px"
            color="primary.darkmoderate"
            _hover={{
              textDecoration: 'none',
              color: 'neutral.white',
            }}
          >
            About
          </Link>
          <Link
            fontFamily="body.barlow"
            fontSize="18px"
            color="primary.darkmoderate"
            _hover={{
              textDecoration: 'none',
              color: 'neutral.white',
            }}
          >
            Services
          </Link>
          <Link
            fontFamily="body.barlow"
            fontSize="18px"
            color="primary.darkmoderate"
            _hover={{
              textDecoration: 'none',
              color: 'neutral.white',
            }}
          >
            Projects
          </Link>
        </Stack>
        <Stack direction="row" spacing={8}>
          <Image
            src={facebook}
            _hover={{
              cursor: 'pointer',
            }}
          />
          <Image
            src={instagram}
            _hover={{
              cursor: 'pointer',
            }}
          />
          <Image
            src={twitter}
            _hover={{
              cursor: 'pointer',
            }}
          />
          <Image
            src={pinterest}
            _hover={{
              cursor: 'pointer',
            }}
          />
        </Stack>
      </Stack>
    </>
  );
};
