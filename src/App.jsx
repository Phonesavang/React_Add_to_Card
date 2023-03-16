import AddItem from "./AddItem";
import Item from "./Item";
import { CartProvider } from "react-use-cart";
import "./App.css";
import Navbar from "./Navbar";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <CartProvider>
        <AddItem/>
        <Item/>
      </CartProvider>
    </div>
  );
}

export default App;
