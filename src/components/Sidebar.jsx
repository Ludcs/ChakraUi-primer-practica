import {Box, Button, Link, Stack} from '@chakra-ui/react';

export const Sidebar = ({visible}) => {
  return (
    <>
      {visible && (
        <Stack
          direction="column"
          w="90%"
          margin="auto"
          h="320px"
          bgColor="neutral.white"
          align="center"
          justify="center"
          zIndex="1"
          fontSize="18px"
          spacing={6}
          position="relative"
        >
          <Link
            fontFamily="body.barlow"
            color="neutral.darkgrayishblue"
            _hover={{
              textDecoration: 'none',
            }}
          >
            About
          </Link>
          <Link
            fontFamily="body.barlow"
            color="neutral.darkgrayishblue"
            _hover={{
              textDecoration: 'none',
            }}
          >
            Services
          </Link>
          <Link
            fontFamily="body.barlow"
            color="neutral.darkgrayishblue"
            _hover={{
              textDecoration: 'none',
            }}
          >
            Projects
          </Link>
          <Button
            color="black"
            borderRadius="3xl"
            bgColor="hsl(51, 100%, 49%)"
            fontFamily="body.fraunces"
            fontWeight="700"
            textTransform="uppercase"
            _hover={{
              color: 'neutral.white',
            }}
          >
            Contact
          </Button>
          <Box
            w="0"
            h="0"
            borderRight="15px solid white"
            borderTop="15px solid transparent"
            borderLeft="15px solid transparent"
            borderBottom="15px solid white"
            pos="absolute"
            top="-52px"
            right="0"
          ></Box>
        </Stack>
      )}
    </>
  );
};
