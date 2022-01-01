import {
  extendTheme,
  theme as baseTheme,
  withDefaultProps,
} from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import colorshades from 'colorshades'

const BASE_COLOR = '#B10A32'

console.log(baseTheme.components.Button)

function getTheme({
  bodyColor = 'gray',
  borderRadius = 'md',
  colors,
  colorScheme = 'blue',
}) {
  const colorSchemeDark = colors[colorScheme]['700']
  const colorSchemeLight = colors[colorScheme]['100']
  const bodyDark = baseTheme.colors[bodyColor]['900']
  const bodyLight = baseTheme.colors[bodyColor]['50']

  return extendTheme(
    {
      colors,
      components: {
        Button: {
          baseStyle: {
            borderRadius,
          },
          variants: {
            solid: ({ colorMode }) => ({
              bg: colorMode === 'dark' ? colorSchemeLight : colorSchemeDark,
              color: colorMode === 'dark' ? colorSchemeDark : colorSchemeLight,
            }),
          },
        },
      },
      styles: {
        global: (props) => ({
          body: {
            bg: mode(bodyLight, bodyDark)(props),
            color: mode(bodyDark, bodyLight)(props),
          },
        }),
      },
    },
    withDefaultProps({
      defaultProps: {
        colorScheme,
        variant: 'solid',
      },
      components: Object.keys(baseTheme.components),
    })
  )
}

function getColorShadesByHex(hex) {
  const shades = colorshades(hex)
  const baseColors = shades.colors.reduce(
    (acc, { index, hex }) => ({
      ...acc,
      [index]: hex.toUpperCase(),
    }),
    {}
  )
  return baseColors
}

const theme = getTheme({
  bodyColor: 'blue',
  borderRadius: 'sm',
  colors: {
    blue: getColorShadesByHex('#142640'),
    red: getColorShadesByHex(BASE_COLOR),
  },
  colorScheme: 'red',
})

export default theme
