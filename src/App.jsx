import {Box, Image, Stack, Text} from '@chakra-ui/react';
import OrangeHeader from './assets/images/desktop/image-header.jpg';
import logo from './assets/logo/logo.svg';
import arrow from './assets/icons/icon-arrow-down.svg';
import milk from './assets/images/desktop/image-gallery-milkbottles.jpg';
import orange from './assets/images/desktop/image-gallery-orange.jpg';
import cone from './assets/images/desktop/image-gallery-cone.jpg';
import sugar from './assets/images/desktop/image-gallery-sugarcubes.jpg';
import {Nav} from './components/Nav';
import {Services} from './components/Services';
import {Testimonials} from './components/Testimonials';
import {Footer} from './components/Footer';

export const App = () => {
  return (
    <>
      <Box
        as="main"
        maxW="1440px"
        margin="auto"
        h="100vh"
        bgImage={OrangeHeader}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        pos="relative"
      >
        <Stack
          align="center"
          bg="transparent"
          direction="row"
          justify="space-between"
          w="full"
          h="20"
          py={8}
          px={10}
        >
          <Image src={logo} w="154px" h="54px" objectFit={'contain'} />
          <Nav />
        </Stack>
        <Stack
          display="flex"
          justify="center"
          align="center"
          w="full"
          my="40px"
        >
          <Text
            fontFamily="body.fraunces"
            fontWeight="900"
            fontSize="5xl"
            color="neutral.white"
            textTransform="uppercase"
            letterSpacing="12px"
          >
            we are creatives
          </Text>
          <Image src={arrow} h="24" pos="absolute" bottom="96" />
        </Stack>
      </Box>
      <Services />
      <Testimonials />

      <Stack
        direction="row"
        maxW="1440px"
        h="500px"
        m="auto"
        justify="center"
        align="center"
      >
        <Image src={milk} objectFit="cover" w="360px" h="500px" />
        <Image
          src={orange}
          objectFit="cover"
          w="360px"
          h="500px"
          marginInlineStart="0px !important"
        />
        <Image
          src={cone}
          objectFit="cover"
          w="360px"
          h="500px"
          marginInlineStart="0px !important"
        />
        <Image
          src={sugar}
          objectFit="cover"
          w="360px"
          h="500px"
          marginInlineStart="0px !important"
        />
      </Stack>
      <Footer />
    </>
  );
};
