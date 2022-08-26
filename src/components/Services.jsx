import React from 'react';
import {Heading, Image, Link, Stack, Text} from '@chakra-ui/react';
import edge from '../assets/images/desktop/image-transform.jpg';
import cup from '../assets/images/desktop/image-stand-out.jpg';
import cherry from '../assets/images/desktop/image-graphic-design.jpg';
import mandarine from '../assets/images/desktop/image-photography.jpg';

export const Services = () => {
  return (
    <>
      <Stack direction="row" w="100%" maxW="1440px" margin="auto">
        <Stack
          bg="neutral.white"
          direction="column"
          align="flex-start"
          justify="center"
          p="24"
          spacing={6}
          w="50%"
          m="0"
        >
          <Heading
            fontFamily="body.fraunces"
            fontWeight="900"
            color="neutral.verydarkblue"
            textAlign="start"
            w="100%"
          >
            Transform your <br /> brand
          </Heading>
          <Text
            fontFamily="body.barlow"
            color="neutral.verydarkgrayishblue"
            fontSize="18px"
          >
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients throug compelling visuals that do
            most of the marketing for you.
          </Text>
          <Link
            fontFamily="body.fraunces"
            fontWeight="900"
            color="neutral.verydarkblue"
            borderBottom="5px solid hsl(51, 100%, 75%)"
            _hover={{
              borderBottom: '5px solid hsl(51, 100%, 49%)',
            }}
          >
            LEARN MORE
          </Link>
        </Stack>
        <Stack
          align="center"
          justify="center"
          w="50%"
          marginInlineStart="0rem !important"
        >
          <Image src={edge} objectFit="contain" />
        </Stack>
      </Stack>
      <Stack direction="row" w="100%" maxW="1440px" margin="auto">
        <Stack
          align="center"
          justify="center"
          w="50%"
          marginInlineStart="0rem !important"
        >
          <Image src={cup} />
        </Stack>
        <Stack
          bg="neutral.white"
          direction="column"
          align="flex-start"
          justify="center"
          p="24"
          spacing={6}
          w="50%"
          marginInlineStart="0rem !important"
        >
          <Heading
            fontFamily="body.fraunces"
            fontWeight="900"
            color="neutral.verydarkblue"
            textAlign="start"
            w="100%"
          >
            Stand out to the right <br /> audience
          </Heading>
          <Text
            fontFamily="body.barlow"
            color="neutral.verydarkgrayishblue"
            fontSize="18px"
          >
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we'll build and
            extend your brand in digital places.
          </Text>
          <Link
            fontFamily="body.fraunces"
            fontWeight="900"
            color="neutral.verydarkblue"
            borderBottom="5px solid hsl(7, 99%, 85%)"
            _hover={{
              borderBottom: '5px solid hsl(7, 99%, 70%)',
            }}
          >
            LEARN MORE
          </Link>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        w="100%"
        maxW="1440px"
        margin="auto"
        bg="green.600"
        h="600px"
      >
        <Stack
          w="50%"
          marginInlineStart="0rem !important"
          bgImage={cherry}
          bgSize="auto"
          bgRepeat="no-repeat"
          bgPosition="top"
        >
          <Stack
            direction="column"
            w="100%"
            h="100%"
            align="center"
            justify="end"
            px="40"
            pb="14"
            spacing={8}
          >
            <Heading
              fontFamily="body.fraunces"
              color="primary.darkdesaturated"
              fontWeight="900"
            >
              Graphic Design
            </Heading>
            <Text
              color="primary.darkdesaturated"
              fontFamily="body.barlow"
              fontWeight="600"
              textAlign="center"
              fontSize="18px"
            >
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential client's
              attention.
            </Text>
          </Stack>
        </Stack>
        <Stack
          w="50%"
          marginInlineStart="0rem !important"
          bgImage={mandarine}
          bgSize="auto"
          bgRepeat="no-repeat"
          bgPosition="top"
        >
          <Stack
            direction="column"
            w="100%"
            h="100%"
            align="center"
            justify="end"
            px="40"
            pb="14"
            spacing={8}
          >
            <Heading
              fontFamily="body.fraunces"
              color="primary.darkblue"
              fontWeight="900"
            >
              Photography
            </Heading>
            <Text
              color="primary.darkblue"
              fontFamily="body.barlow"
              fontWeight="600"
              textAlign="center"
              fontSize="18px"
            >
              Increase your credibility by getting the most stuning high-quality
              photos that improve your business image.
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
