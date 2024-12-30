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
    const [items, setItems] = useState({});

    function addItem(item) {
        setItems(function (items) {
            items[item.name] = item;

            return { ...items };
        });
    }

    function updateItem(nameKey, packed) {
        setItems(function (items) {
            items[nameKey].packed = packed;
            return { ...items };
        });
    }

    function deleteItem(nameKey) {
        setItems(function (items) {
            delete items[nameKey];
            return { ...items };
        });
    }

    // prop drilling
    // App -> ItemList -> Item
    return (
        <div style={appStyle}>
            <Header />
            <AddItem addItem={addItem} />
            <ItemList
                updateItem={updateItem}
                deleteItem={deleteItem}
                items={Object.values(items)}
            />
            <Filter />
            <Footer />
        </div>
    );
}
export default App;
