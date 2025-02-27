const div = React.createElement("div", {id: "parent"}, 
    [React.createElement("div", {id: "child1"},
        [
            React.createElement("h1",{id: "child1H1"}, "H1 of child1"),
            React.createElement("h2",{id: "child2H1"}, "H2 of child1"),
        ]
    ),
        React.createElement("div", {id: "child2"},
            [
                React.createElement("h1",{id: "child2H1"}, "H1 of child2"),
                React.createElement("h2",{id: "child2H1"}, "H2 of child2"),
            ]
    )   

    ]);


console.log(document.getElementById("root").innerText);
const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(div);