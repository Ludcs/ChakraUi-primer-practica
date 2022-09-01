import React from 'react';
import {Heading, Image, Link, Stack, Text} from '@chakra-ui/react';
import edge from '../assets/images/desktop/image-transform.jpg';
import cup from '../assets/images/desktop/image-stand-out.jpg';
import cherry from '../assets/images/desktop/image-graphic-design.jpg';
import cherryMobile from '../assets/images/mobile/image-graphic-design.jpg';
import mandarine from '../assets/images/desktop/image-photography.jpg';
import mandarineMobile from '../assets/images/mobile/image-photography.jpg';
import {useMediaQuery} from '@chakra-ui/react';

export const Services = () => {
  const [isNotSmallerScreen] = useMediaQuery('(min-width: 600px)');

  return (
    <>
      <Stack
        direction={isNotSmallerScreen ? 'row' : 'column'}
        w="100%"
        maxW="1440px"
        margin="auto"
      >
        {isNotSmallerScreen ? (
          <>
            <Stack
              bg="neutral.white"
              direction="column"
              align={isNotSmallerScreen ? 'flex-start' : 'center'}
              justify="center"
              p={isNotSmallerScreen ? '24' : '12'}
              spacing={6}
              w={isNotSmallerScreen ? '50%' : '100%'}
              m="0"
              h={isNotSmallerScreen ? '' : '50vh'}
            >
              <Heading
                fontFamily="body.fraunces"
                fontWeight="900"
                color="neutral.verydarkblue"
                textAlign={isNotSmallerScreen ? 'start' : 'center'}
                w="100%"
              >
                Transform your <br /> brand
              </Heading>
              <Text
                fontFamily="body.barlow"
                color="neutral.verydarkgrayishblue"
                fontSize="18px"
                textAlign={isNotSmallerScreen ? '' : 'center'}
              >
                We are a full-service creative agency specializing in helping
                brands grow fast. Engage your clients throug compelling visuals
                that do most of the marketing for you.
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
              w={isNotSmallerScreen ? '50%' : '100%'}
              marginInlineStart="0rem !important"
            >
              <Image src={edge} objectFit="contain" />
            </Stack>
          </>
        ) : (
          <>
            <Stack
              align="center"
              justify="center"
              w={isNotSmallerScreen ? '50%' : '100%'}
              marginInlineStart="0rem !important"
            >
              <Image src={edge} objectFit="contain" />
            </Stack>
            <Stack
              bg="neutral.white"
              direction="column"
              align={isNotSmallerScreen ? 'flex-start' : 'center'}
              justify="center"
              p={isNotSmallerScreen ? '24' : '12'}
              spacing={6}
              w={isNotSmallerScreen ? '50%' : '100%'}
              m="0"
              h={isNotSmallerScreen ? '' : '50vh'}
            >
              <Heading
                fontFamily="body.fraunces"
                fontWeight="900"
                color="neutral.verydarkblue"
                textAlign={isNotSmallerScreen ? 'start' : 'center'}
                w="100%"
              >
                Transform your <br /> brand
              </Heading>
              <Text
                fontFamily="body.barlow"
                color="neutral.verydarkgrayishblue"
                fontSize="18px"
                textAlign={isNotSmallerScreen ? '' : 'center'}
              >
                We are a full-service creative agency specializing in helping
                brands grow fast. Engage your clients throug compelling visuals
                that do most of the marketing for you.
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
          </>
        )}
      </Stack>
      <Stack
        direction={isNotSmallerScreen ? 'row' : 'column'}
        w="100%"
        maxW="1440px"
        margin="auto"
      >
        <Stack
          align="center"
          justify="center"
          w={isNotSmallerScreen ? '50%' : '100%'}
          marginInlineStart="0rem !important"
        >
          <Image src={cup} />
        </Stack>
        <Stack
          bg="neutral.white"
          direction="column"
          align={isNotSmallerScreen ? 'flex-start' : 'center'}
          justify="center"
          p={isNotSmallerScreen ? '24' : '12'}
          spacing={6}
          w={isNotSmallerScreen ? '50%' : '100%'}
          marginInlineStart="0rem !important"
          h={isNotSmallerScreen ? '' : '50vh'}
        >
          <Heading
            fontFamily="body.fraunces"
            fontWeight="900"
            color="neutral.verydarkblue"
            textAlign={isNotSmallerScreen ? 'start' : 'center'}
            w="100%"
          >
            Stand out to the right <br /> audience
          </Heading>
          <Text
            fontFamily="body.barlow"
            color="neutral.verydarkgrayishblue"
            fontSize="18px"
            textAlign={isNotSmallerScreen ? '' : 'center'}
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
        direction={isNotSmallerScreen ? 'row' : 'column'}
        w="100%"
        maxW="1440px"
        margin="auto"
        bg="green.600"
        h={isNotSmallerScreen ? '600px' : '150vh'}
      >
        <Stack
          w={isNotSmallerScreen ? '50%' : '100%'}
          h={isNotSmallerScreen ? '' : '100vh'}
          marginInlineStart="0rem !important"
          bgImage={isNotSmallerScreen ? cherry : cherryMobile}
          bgSize="cover"
          bgRepeat="no-repeat"
          bgPosition="top"
        >
          <Stack
            direction="column"
            w="100%"
            h="100%"
            align="center"
            justify="end"
            px="8"
            pb={isNotSmallerScreen ? '14' : '10'}
            spacing={isNotSmallerScreen ? '8' : '4'}
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
          w={isNotSmallerScreen ? '50%' : '100%'}
          h={isNotSmallerScreen ? '' : '100vh'}
          marginInlineStart="0rem !important"
          mt={isNotSmallerScreen ? '' : '0px !important'}
          bgImage={isNotSmallerScreen ? mandarine : mandarineMobile}
          bgSize="cover"
          bgRepeat="no-repeat"
          bgPosition="top"
        >
          <Stack
            direction="column"
            w="100%"
            h="100%"
            align="center"
            justify="end"
            px="8"
            pb={isNotSmallerScreen ? '14' : '10'}
            spacing={isNotSmallerScreen ? '8' : '4'}
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
