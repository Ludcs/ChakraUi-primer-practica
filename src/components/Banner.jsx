import {Grid, Image, Stack} from '@chakra-ui/react';
import milk from '../assets/images/desktop/image-gallery-milkbottles.jpg';
import orange from '../assets/images/desktop/image-gallery-orange.jpg';
import cone from '../assets/images/desktop/image-gallery-cone.jpg';
import sugar from '../assets/images/desktop/image-gallery-sugarcubes.jpg';
import milkMobile from '../assets/images/mobile/image-gallery-milkbottles.jpg';
import orangeMobile from '../assets/images/mobile/image-gallery-orange.jpg';
import coneMobile from '../assets/images/mobile/image-gallery-cone.jpg';
import sugarMobile from '../assets/images/mobile/image-gallery-sugar-cubes.jpg';
import {useMediaQuery} from '@chakra-ui/react';

export const Banner = () => {
  const [isNotSmallerScreen] = useMediaQuery('(min-width: 600px)');

  return (
    <>
      {isNotSmallerScreen ? (
        <Stack
          direction="row"
          maxW="1440px"
          m="auto"
          justify="center"
          align="center"
        >
          <Image src={milk} objectFit="cover" boxSize="360px" />
          <Image
            src={orange}
            objectFit="cover"
            boxSize="360px"
            marginInlineStart="0px !important"
          />
          <Image
            src={cone}
            objectFit="cover"
            boxSize="360px"
            marginInlineStart="0px !important"
          />
          <Image
            src={sugar}
            objectFit="cover"
            boxSize="360px"
            marginInlineStart="0px !important"
          />
        </Stack>
      ) : (
        <Grid gridTemplateColumns={'repeat(2, 1fr)'} gap="0px">
          <Image src={milkMobile} boxSize="fit-content" />
          <Image src={orangeMobile} boxSize="fit-content" />
          <Image src={coneMobile} boxSize="fit-content" />
          <Image src={sugarMobile} boxSize="fit-content" />
        </Grid>
      )}
    </>
  );
};
