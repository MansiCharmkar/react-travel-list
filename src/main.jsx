import ReactDom from "react-dom/client";
import App from "./App";

const rootE1 = document.querySelector("#root");
const root = ReactDom.createRoot(rootE1);

root.render(<App />);
