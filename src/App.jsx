import { Container } from "react-bootstrap"
import { Header } from "./Components/Header/Header"
import { ItemsList } from "./Components/ItemsList/ItemsList"
import { NavBar } from "./Components/NavBar/NavBar"
import { Category } from "./Components/Category/Category"
import { useState } from "react";
import {data} from './Data/Data';

function App() {
  // useState For Items Data
  const [items, setItems] = useState(data);

  // Filter All Categories
  const AllCategories = ["All",... new Set(data.map((item)=> item.category))];

  // Filter By Category
  const filterByCategory = (category)=>{
    if(category === "All"){
      setItems(data);
    }
    else{
      const filteredItems = data.filter((item)=>item.category === category);
      setItems(filteredItems);
    }
  }

  // Search By Word
  const searchByWord=(word)=>{
    if (word !== "") {
      const filteredItems = data.filter((item)=>item.title === word);
      setItems(filteredItems);
    }
  }



  return (
    <>
     <NavBar searchByWord={searchByWord}/>
     <Container>
        <Header/>
        <Category filterByCategory={filterByCategory} AllCategories={AllCategories}/>
        <ItemsList items={items}/>
     </Container>
    </>
  )
}

export default App
