import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  components: {
    Button: {
      variants: {
        solid: (props) => ({
          bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
          _hover: {
            bg: props.colorMode === 'dark' ? 'red.400' : 'red.600',
          },
        }),
      },
    },
  },
})

export default theme
