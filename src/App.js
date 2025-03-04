import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"

const root = ReactDOM.createRoot(document.getElementById("root"));

const Main = () => {
    return <div id="main" className="main">
        <Header />
        <Body />
        <Footer />
    </div>
}

root.render(<Main />);