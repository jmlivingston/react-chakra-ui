import { Button, LightMode, useColorMode } from '@chakra-ui/react'
import theme from '@chakra-ui/theme'

function App() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <h1>{colorMode}</h1>
      <br />
      <Button onClick={toggleColorMode}>
        Toggle (toggles when clicked) {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </>
  )
}

export default App
