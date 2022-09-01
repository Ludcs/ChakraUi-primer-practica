import React from 'react';
import {Box, Heading, Image, Link, Stack, Text} from '@chakra-ui/react';
import emily from '../assets/images/users/image-emily.jpg';
import thomas from '../assets/images/users/image-thomas.jpg';
import jennie from '../assets/images/users/image-jennie.jpg';
import {useMediaQuery} from '@chakra-ui/react';

export const Testimonials = () => {
  const [isNotSmallerScreen] = useMediaQuery('(min-width: 600px)');

  return (
    <>
      <Stack
        w="100%"
        // h={isNotSmallerScreen ? '100vh' : ''}
        maxW="1440px"
        margin="auto"
        p={isNotSmallerScreen ? '36' : ''}
        px={isNotSmallerScreen ? '' : '5'}
        py={isNotSmallerScreen ? '' : '20'}
        // direction={isNotSmallerScreen ? 'row' : 'column'}
      >
        <Heading
          textTransform="uppercase"
          fontFamily="body.fraunces"
          color="neutral.grayishblue"
          letterSpacing="5px"
          fontSize={isNotSmallerScreen ? '24px' : '18px'}
          textAlign="center"
        >
          Client Testimonials
        </Heading>

        <Stack
          direction={isNotSmallerScreen ? 'row' : 'column'}
          w="100%"
          h={isNotSmallerScreen ? 'lg' : null}
          spacing={'24'}
          justify="center"
          align="center"
          py="10"
        >
          <Stack direction="column" justify="center" align="center">
            <Image
              src={emily}
              borderRadius="full"
              w="100px"
              h="100px"
              marginBottom="10"
            />
            <Text
              fontSize="18px"
              fontFamily="body.barlow"
              color="neutral.darkgrayishblue"
              textAlign="center"
              px={isNotSmallerScreen ? '' : '3'}
            >
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </Text>
            <Text
              fontFamily="body.fraunces"
              fontWeight="900"
              fontSize="18px"
              color="neutral.verydarkblue"
              textAlign="center"
              marginTop="40px !important"
            >
              Emily R.
            </Text>
            <Text
              fontFamily="body.barlow"
              fontSize="18px"
              color="neutral.grayishblue"
              textAlign="center"
            >
              Marketing Director
            </Text>
          </Stack>
          <Stack direction="column" justify="center" align="center">
            <Image
              src={thomas}
              borderRadius="full"
              w="100px"
              h="100px"
              marginBottom="10"
            />
            <Text
              fontSize="18px"
              fontFamily="body.barlow"
              color="neutral.darkgrayishblue"
              textAlign="center"
              px={isNotSmallerScreen ? '' : '3'}
            >
              Sunnyside's enthusiasm coupled with their keen interest in our
              brand's succes made it a satisfying and enjoyable experience.
            </Text>
            <Text
              fontFamily="body.fraunces"
              fontWeight="900"
              fontSize="18px"
              color="neutral.verydarkblue"
              textAlign="center"
              marginTop="40px !important"
            >
              Thomas S.
            </Text>
            <Text
              fontFamily="body.barlow"
              fontSize="18px"
              color="neutral.grayishblue"
              textAlign="center"
            >
              Chief Operating Officer
            </Text>
          </Stack>
          <Stack direction="column" justify="center" align="center">
            <Image
              src={jennie}
              borderRadius="full"
              w="100px"
              h="100px"
              marginBottom="10"
            />
            <Text
              fontSize="18px"
              fontFamily="body.barlow"
              color="neutral.darkgrayishblue"
              textAlign="center"
              px={isNotSmallerScreen ? '' : '3'}
            >
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </Text>
            <Text
              fontFamily="body.fraunces"
              fontWeight="900"
              fontSize="18px"
              color="neutral.verydarkblue"
              textAlign="center"
              marginTop="40px !important"
            >
              Jennie F.
            </Text>
            <Text
              fontFamily="body.barlow"
              fontSize="18px"
              color="neutral.grayishblue"
              textAlign="center"
            >
              Bussines Owner
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
