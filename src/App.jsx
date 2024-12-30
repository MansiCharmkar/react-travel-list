import Header from "./components/Header";
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import "./index.css";
import { useState } from "react";

const appStyle = {
    height: "100vh",
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "7rem 5rem 1fr 4rem auto",
};
function App() {
    const [items, setItems] = useState([]);
    return (
        <div style={appStyle}>
            <Header />
            <AddItem setItems={setItems} />
            <ItemList items={items} />
            <Filter />
            <Footer />
        </div>
    );
}
export default App;
