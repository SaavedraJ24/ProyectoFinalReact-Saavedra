import { ChakraProvider } from "@chakra-ui/react"
import { NavBar } from "./components"


const App = () => {
  return (
    <ChakraProvider>
      <NavBar />
    </ChakraProvider>
  )
}


export default App