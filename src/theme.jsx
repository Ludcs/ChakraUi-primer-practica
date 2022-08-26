import {extendTheme} from '@chakra-ui/react';

export default extendTheme({
  colors: {
    primary: {
      softred: 'hsl(7, 99%, 70%)',
      yellow: 'hsl(51, 100%, 49%)',
      darkdesaturated: 'hsl(167, 40%, 24%)', //cyan (graphic design text)
      darkblue: 'hsl(198, 62%, 26%)', //(photography text)
      darkmoderate: 'hsl(168, 34%, 41%)', //cyan (footer)
    },
    neutral: {
      verydarkblue: 'hsl(212, 27%, 19%)',
      verydarkgrayishblue: 'hsl(213, 9%, 39%)',
      darkgrayishblue: 'hsl(232, 10%, 55%)',
      grayishblue: 'hsl(210, 4%, 67%)',
      white: 'hsl(0, 0%, 100%)',
    },
  },
  fonts: {
    body: {
      fraunces: "'Fraunces', serif;",
      barlow: "'Barlow', sans-serif;",
    },
  },
});
