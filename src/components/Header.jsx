import {Nav} from './Nav';
import {Sidebar} from './Sidebar';
import {Flex, Image, Stack, Text} from '@chakra-ui/react';
import OrangeHeader from '../assets/images/desktop/image-header.jpg';
import logo from '../assets/logo/logo.svg';
import arrow from '../assets/icons/icon-arrow-down.svg';
import {useMediaQuery} from '@chakra-ui/react';
import {HamburgerIcon} from '@chakra-ui/icons';
import {useState} from 'react';

export const Header = () => {
  const [isNotSmallerScreen] = useMediaQuery('(min-width: 600px)');
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Flex
        as="main"
        direction="column"
        w="full"
        maxW="1440px"
        margin="auto"
        h={isNotSmallerScreen ? '800px' : '600px'}
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
          py={8}
          px={isNotSmallerScreen ? '10' : '4'}
        >
          <Image src={logo} w="154px" h="54px" objectFit={'contain'} />

          {isNotSmallerScreen ? (
            <Nav />
          ) : (
            <HamburgerIcon
              boxSize="10"
              color="neutral.white"
              onClick={() => setVisible(!visible)}
            />
          )}
        </Stack>
        {!isNotSmallerScreen && visible ? (
          <Sidebar visible={visible} setVisible={setVisible} />
        ) : null}

        <Stack
          display="flex"
          justify="center"
          align="center"
          w="full"
          mt={isNotSmallerScreen ? '100px' : '30px'}
        >
          <Text
            fontFamily="body.fraunces"
            fontWeight="900"
            fontSize={isNotSmallerScreen ? '5xl' : '4xl'}
            color="neutral.white"
            textTransform="uppercase"
            letterSpacing="12px"
            textAlign={isNotSmallerScreen ? '' : 'center'}
            zIndex={visible && '-1'}
          >
            we are creatives
          </Text>
          <Image
            src={arrow}
            h={isNotSmallerScreen ? '32' : '24'}
            pos="absolute"
            bottom={isNotSmallerScreen ? '80' : '56'}
          />
        </Stack>
      </Flex>
    </>
  );
};
