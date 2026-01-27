const root = ReactDOM.createRoot(document.getElementById("root"));
const heading = <div id="outer">
    <div id="inner">
        <div id="container-01">
            <span>span 01</span>
            <span>span 02</span>
            <span>span 03</span>
        </div>
        <div id="container-02">
            <span>span 01</span>
            <span>span 02</span>
            <span>span 03</span>
        </div>
    </div>
</div>
// const heading = React.createElement("div", { id: "outer" },
//     React.createElement("div", { id: "inner" },
//         [React.createElement("div", { id: "container-01" },
//             [React.createElement("span", { id: "span-01" }, "span 01"),
//             React.createElement("span", { id: "span-02" }, "span 02"),
//             React.createElement("span", { id: "span-03" }, "span 03")
//             ]
//         ),
//         React.createElement("div", { id: "container-02" },
//             [React.createElement("span", { id: "span-01" }, "span 01"),
//             React.createElement("span", { id: "span-02" }, "span 02"),
//             React.createElement("span", { id: "span-03" }, "span 03")
//             ])
//         ]
//     )
// );
root.render(heading);