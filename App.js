import React from "react"
import ReactDOM from "react-dom/client"

const Title = () => <h1>Welcome to react component</h1>
const Heading = () => {
    return (
        <div id="container">
            <h1 style={{color: "blue"}}>Call title with JSX</h1>
            <Title />  
            <h1 style={{color: "red"}}>Call title as nornam JS function</h1>
            {Title()} 
            <h1>This is an example of Component Composition</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(<Heading />);