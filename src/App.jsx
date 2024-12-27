import AddItem from "./components/AddItem";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import "./index.css";

const appStyle = {
    height: "100vh",
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "7rem 2rem 1fr 2rem",
};

const App = () => {
    return (
        <div style={appStyle}>
            <Header />
            <AddItem />
            <ItemList />
            <Footer />
        </div>
    );
};

export default App;
