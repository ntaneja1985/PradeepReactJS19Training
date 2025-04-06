// import { useState } from 'react'
import './App.css'
import DiscountOffer from '../components/DiscountOffer'
import Databinding from './Databinding'
import ProductList from "../components/ProductList.tsx";
import Search from "../components/Search.tsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
   <div>
       <h4>This is my first app</h4>
       {/*<Databinding/>*/}
       {/*<DiscountOffer/>*/}
       <Search/>
   </div>
  )
}

export default App
