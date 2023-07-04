import { Container } from "react-bootstrap"
import { Header } from "./Components/Header/Header"
import { ItemsList } from "./Components/ItemsList/ItemsList"
import { NavBar } from "./Components/NavBar/NavBar"
import { Category } from "./Components/Category/Category"

function App() {

  return (
    <>
     <NavBar/>
     <Container>
        <Header/>
        <Category/>
        <ItemsList/>
     </Container>
    </>
  )
}

export default App
