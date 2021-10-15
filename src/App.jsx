import { Button, LightMode, useColorMode } from '@chakra-ui/react'

function App() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
      <LightMode>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
      </LightMode>
    </>
  )
}

export default App
